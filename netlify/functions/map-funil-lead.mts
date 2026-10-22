// Rota de servidor do funil /map/comecar (Netlify Functions v2).
// Endereço: /.netlify/functions/map-funil-lead
//
//   POST {acao:"cadastro"}  tela 21: grava o lead (e-mail, consentimento, respostas…);
//                           idempotente pelo eventID (reenvios das telas 22 a 24)
//   POST {acao:"nome"}      tela 22: grava o nome e envia o e-mail do plano (D5)
//   POST {acao:"card"}      tela 24: grava o card escolhido ao clicar no teste
//   GET/POST ?acao=sair     link de descadastro do e-mail (com token HMAC)
//
// Grava no Supabase da landing com a service role, que nunca vai ao navegador.
// Horas e eixo são recalculados aqui com a mesma lógica do funil.
// Variáveis (Netlify, sem prefixo VITE_): ver .env.example.
import { createHmac, randomUUID, timingSafeEqual } from "node:crypto";
import { z } from "zod";
import { TRIAL_URL_FUNIL } from "../../src/pages/map/funil/constants";
import { getContent } from "../../src/pages/map/funil/content";
import { AREAS, eixoVencedor, trabalhoMes, type Respostas } from "../../src/pages/map/funil/logic";
import { hojeEmSaoPaulo, montarEmailPlano } from "../lib/plan-email";

const TABELA = "map_funil_leads";
const LIMITE_CORPO = 8 * 1024;
const JANELA_EMAIL_MS = 24 * 60 * 60 * 1000;
const SITE = "https://essencialab.site";

const env = (k: string) => process.env[k]?.trim() || "";

/* ---------- validação ---------- */

const idx = (max: number) => z.number().int().min(0).max(max);
const escala = z.number().int().min(1).max(5);
const texto = (max: number) => z.string().trim().max(max);
const opcional = (max: number) => texto(max).nullish();

const RespostasSchema = z
  .object({
    area: z.enum(AREAS as unknown as [string, ...string[]]),
    pacientes: idx(4),
    primeira: idx(3),
    depois: idx(3),
    exames: idx(3),
    escala1: escala,
    retorno: idx(3),
    sumiu: idx(3),
    escala2: escala,
    agenda: idx(3),
    prioridade: idx(3),
  })
  .strict();

const CadastroSchema = z.object({
  acao: z.literal("cadastro"),
  email: z.string().trim().toLowerCase().max(254).regex(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/),
  consentimento: z.literal(true),
  consentimentoTexto: texto(500).min(10),
  idioma: z.enum(["pt", "es", "en"]),
  respostas: RespostasSchema,
  eventId: z.string().uuid(),
  isca: z.string().max(200).optional(),
  publico: z.enum(["doterra", "aroma"]).nullish(),
  referrer: opcional(500),
  utm_source: opcional(200),
  utm_medium: opcional(200),
  utm_campaign: opcional(200),
  utm_content: opcional(200),
  utm_term: opcional(200),
});

const NomeSchema = z.object({
  acao: z.literal("nome"),
  id: z.string().uuid(),
  eventId: z.string().uuid(),
  nome: texto(40).min(1),
});

const CardSchema = z.object({
  acao: z.literal("card"),
  id: z.string().uuid(),
  eventId: z.string().uuid(),
  card: z.enum(["anual", "mensal"]),
});

/* ---------- respostas HTTP ---------- */

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" },
  });

function origemPermitida(req: Request): boolean {
  const origem = req.headers.get("origin");
  if (!origem) return false;
  const lista = [SITE, "https://www.essencialab.site", env("URL"), env("DEPLOY_PRIME_URL"), env("DEPLOY_URL")]
    .concat(env("MAPF_ALLOWED_ORIGINS").split(","))
    .map((s) => s.trim())
    .filter(Boolean);
  return lista.includes(origem);
}

/* ---------- Supabase (PostgREST) ---------- */

type Lead = {
  id: string;
  email: string;
  idioma: "pt" | "es" | "en";
  respostas: Respostas;
  descadastrado_em: string | null;
};

async function rest(caminho: string, init: RequestInit & { prefer?: string } = {}) {
  const url = env("MAPF_SUPABASE_URL");
  const chave = env("MAPF_SUPABASE_SERVICE_ROLE_KEY");
  const headers: Record<string, string> = { apikey: chave, "Content-Type": "application/json" };
  // Chave antiga (JWT service_role) também vai no Authorization; a nova (sb_secret_…) só no apikey.
  if (chave.startsWith("eyJ")) headers.Authorization = `Bearer ${chave}`;
  if (init.prefer) headers.Prefer = init.prefer;
  const r = await fetch(`${url}/rest/v1/${caminho}`, { ...init, headers });
  if (!r.ok) throw new Error(`supabase ${r.status}: ${(await r.text()).slice(0, 300)}`);
  return r.status === 204 ? null : r.json();
}

const agora = () => new Date().toISOString();

/* ---------- descadastro ---------- */

function token(id: string): string {
  return createHmac("sha256", env("MAPF_UNSUB_SECRET")).update(id).digest("hex").slice(0, 32);
}

function tokenValido(id: string, t: string): boolean {
  const esperado = Buffer.from(token(id));
  const recebido = Buffer.from(t);
  return esperado.length === recebido.length && timingSafeEqual(esperado, recebido);
}

function paginaSair(idioma: string): Response {
  const c = getContent(idioma).emailPlano.sairPagina;
  const html = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>${c.titulo}</title></head><body style="margin:0;font-family:Helvetica,Arial,sans-serif;background:#e9f9ef;color:#0f172a"><main style="max-width:420px;margin:15vh auto;padding:24px;background:#fff;border-radius:20px"><h1 style="font-size:22px;margin:0 0 8px">${c.titulo}</h1><p style="margin:0;line-height:1.5">${c.texto}</p></main></body></html>`;
  return new Response(html, { status: 200, headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" } });
}

async function sair(url: URL): Promise<Response> {
  const id = url.searchParams.get("id") ?? "";
  const t = url.searchParams.get("t") ?? "";
  if (!z.string().uuid().safeParse(id).success || !tokenValido(id, t)) return json(400, { erro: "link inválido" });
  const linhas = (await rest(`${TABELA}?id=eq.${id}&select=email,idioma`)) as { email: string; idioma: string }[];
  if (!linhas[0]) return json(404, { erro: "não encontrado" });
  // Marca todas as linhas do mesmo e-mail (cada passagem pelo funil é uma linha).
  await rest(`${TABELA}?email=eq.${encodeURIComponent(linhas[0].email)}&descadastrado_em=is.null`, {
    method: "PATCH",
    body: JSON.stringify({ descadastrado_em: agora(), updated_at: agora() }),
    prefer: "return=minimal",
  });
  return paginaSair(linhas[0].idioma);
}

/* ---------- ações ---------- */

async function cadastro(dados: z.infer<typeof CadastroSchema>): Promise<Response> {
  // Campo-isca preenchido: robô. Responde como sucesso e não grava nada.
  if (dados.isca) return json(200, { id: randomUUID() });
  const r = dados.respostas as Respostas;
  const t = trabalhoMes(r.pacientes!, r.depois!);
  const linha = {
    email: dados.email,
    consentimento: true,
    consentimento_texto: dados.consentimentoTexto,
    idioma: dados.idioma,
    area: r.area,
    respostas: r,
    eixo: eixoVencedor(r),
    horas_mes: Math.round((t.minutosMes / 60) * 10) / 10,
    meta_event_id: dados.eventId,
    publico: dados.publico ?? null,
    referrer: dados.referrer ?? null,
    utm_source: dados.utm_source ?? null,
    utm_medium: dados.utm_medium ?? null,
    utm_campaign: dados.utm_campaign ?? null,
    utm_content: dados.utm_content ?? null,
    utm_term: dados.utm_term ?? null,
    updated_at: agora(),
  };
  // Upsert pelo eventID: o navegador reenvia o mesmo cadastro se a primeira tentativa
  // falhou (ou se a pessoa corrigiu o e-mail); a linha é uma só.
  const [criado] = (await rest(`${TABELA}?on_conflict=meta_event_id`, {
    method: "POST",
    body: JSON.stringify(linha),
    prefer: "resolution=merge-duplicates,return=representation",
  })) as { id: string }[];
  return json(201, { id: criado.id });
}

async function podeEnviar(email: string): Promise<boolean> {
  const desde = new Date(Date.now() - JANELA_EMAIL_MS).toISOString();
  const e = encodeURIComponent(email);
  const [recente, saiu] = (await Promise.all([
    rest(`${TABELA}?email=eq.${e}&email_plano_enviado_em=gt.${desde}&select=id&limit=1`),
    rest(`${TABELA}?email=eq.${e}&descadastrado_em=not.is.null&select=id&limit=1`),
  ])) as [unknown[], unknown[]];
  return recente.length === 0 && saiu.length === 0;
}

function linkTesteEmail(): string {
  const url = new URL(env("MAPF_TRIAL_URL") || TRIAL_URL_FUNIL);
  url.searchParams.set("plano", "anual");
  url.searchParams.set("utm_source", "map_funil");
  url.searchParams.set("utm_medium", "email");
  url.searchParams.set("utm_campaign", "plano_7_dias");
  return url.toString();
}

async function nome(dados: z.infer<typeof NomeSchema>): Promise<Response> {
  const primeiro = dados.nome.split(/\s+/)[0];
  const [lead] = (await rest(`${TABELA}?id=eq.${dados.id}&meta_event_id=eq.${dados.eventId}&select=id,email,idioma,respostas,descadastrado_em`, {
    method: "PATCH",
    body: JSON.stringify({ nome: primeiro, updated_at: agora() }),
    prefer: "return=representation",
  })) as Lead[];
  if (!lead) return json(404, { erro: "não encontrado" });
  if (lead.descadastrado_em || !(await podeEnviar(lead.email))) return json(200, { ok: true, enviado: false });

  const c = getContent(lead.idioma);
  const sairUrl = new URL("/.netlify/functions/map-funil-lead", env("URL") || SITE);
  sairUrl.searchParams.set("acao", "sair");
  sairUrl.searchParams.set("id", lead.id);
  sairUrl.searchParams.set("t", token(lead.id));
  const email = montarEmailPlano({
    c,
    respostas: lead.respostas,
    nome: primeiro,
    hoje: hojeEmSaoPaulo(),
    linkTeste: linkTesteEmail(),
    linkSair: sairUrl.toString(),
  });

  const envio = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${env("RESEND_API_KEY")}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: env("MAPF_EMAIL_FROM"),
      to: [lead.email],
      subject: email.assunto,
      html: email.html,
      text: email.texto,
      headers: {
        "List-Unsubscribe": `<${sairUrl.toString()}>`,
        "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
      },
      tags: [{ name: "origem", value: "map_funil" }],
    }),
  });
  if (!envio.ok) {
    console.error("[map-funil] Resend", envio.status, (await envio.text()).slice(0, 300));
    return json(200, { ok: true, enviado: false });
  }
  const { id: emailId } = (await envio.json()) as { id: string };
  await rest(`${TABELA}?id=eq.${lead.id}`, {
    method: "PATCH",
    body: JSON.stringify({ email_plano_id: emailId, email_plano_enviado_em: agora(), updated_at: agora() }),
    prefer: "return=minimal",
  });
  return json(200, { ok: true, enviado: true });
}

async function card(dados: z.infer<typeof CardSchema>): Promise<Response> {
  await rest(`${TABELA}?id=eq.${dados.id}&meta_event_id=eq.${dados.eventId}`, {
    method: "PATCH",
    body: JSON.stringify({ card: dados.card, clicou_teste_em: agora(), updated_at: agora() }),
    prefer: "return=minimal",
  });
  return new Response(null, { status: 204 });
}

/* ---------- entrada ---------- */

const CONFIG = ["MAPF_SUPABASE_URL", "MAPF_SUPABASE_SERVICE_ROLE_KEY", "RESEND_API_KEY", "MAPF_EMAIL_FROM", "MAPF_UNSUB_SECRET"];

export default async (req: Request): Promise<Response> => {
  const faltando = CONFIG.filter((k) => !env(k));
  if (faltando.length) {
    console.error("[map-funil] variáveis ausentes:", faltando.join(", "));
    return json(503, { erro: "configuração ausente" });
  }

  const url = new URL(req.url);
  try {
    // Descadastro: GET pelo link do e-mail ou POST one-click (List-Unsubscribe-Post).
    if (url.searchParams.get("acao") === "sair" && (req.method === "GET" || req.method === "POST")) return await sair(url);
    if (req.method !== "POST") return json(405, { erro: "método não permitido" });
    if (!origemPermitida(req)) return json(403, { erro: "origem não permitida" });

    const bruto = await req.text();
    if (bruto.length > LIMITE_CORPO) return json(413, { erro: "corpo grande demais" });
    let corpo: unknown;
    try {
      corpo = JSON.parse(bruto);
    } catch {
      return json(400, { erro: "JSON inválido" });
    }

    const acao = (corpo as { acao?: unknown } | null)?.acao;
    const schema = acao === "cadastro" ? CadastroSchema : acao === "nome" ? NomeSchema : acao === "card" ? CardSchema : null;
    if (!schema) return json(400, { erro: "ação inválida" });
    const validado = schema.safeParse(corpo);
    if (!validado.success) return json(422, { erro: "dados inválidos" });

    if (validado.data.acao === "cadastro") return await cadastro(validado.data);
    if (validado.data.acao === "nome") return await nome(validado.data);
    return await card(validado.data);
  } catch (erro) {
    console.error("[map-funil]", erro instanceof Error ? erro.message : erro);
    return json(500, { erro: "falha interna" });
  }
};
