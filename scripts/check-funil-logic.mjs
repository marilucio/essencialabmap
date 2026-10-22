// Confere a lógica do funil /map/comecar (horas, eixo, plano) com os casos do
// documento. Uso: node scripts/check-funil-logic.mjs
import assert from "node:assert/strict";
import { createServer } from "vite";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const vite = await createServer({ root, server: { middlewareMode: true }, appType: "custom", logLevel: "error" });

try {
  const logic = await vite.ssrLoadModule("/src/pages/map/funil/logic.ts");
  const { pt } = await vite.ssrLoadModule("/src/pages/map/funil/content/pt.ts");
  const { fill } = await vite.ssrLoadModule("/src/pages/map/funil/text.ts");
  const state = await vite.ssrLoadModule("/src/pages/map/funil/state.ts");
  const { TELAS } = await vite.ssrLoadModule("/src/pages/map/funil/screens.ts");

  // Horas: 38 pacientes × 45 min = 1710 min → 29 h (exemplo do documento).
  assert.deepEqual(logic.trabalhoMes(2, 2), { n: 38, minutos: 45, minutosMes: 1710, horas: 29, emMinutos: false });
  // Abaixo de 2 horas, minutos: 6 × 5 = 30 min; 18 × 5 = 90 min.
  assert.equal(logic.trabalhoMes(0, 0).emMinutos, true);
  assert.equal(logic.trabalhoMes(1, 0).minutosMes, 90);
  assert.equal(logic.trabalhoMes(4, 3).horas, 150);

  const base = {
    area: "nutricionista", pacientes: 2, primeira: 1, depois: 0, exames: 3,
    escala1: 1, retorno: 0, sumiu: 0, escala2: 1, agenda: 0, prioridade: 2,
  };
  // Só a prioridade "Não deixar nada passar" (vale 2) + primeira "por onde começar": decisão.
  assert.equal(logic.eixoVencedor(base), "decisao");
  // Prioridade "Ver o que mudou no retorno" (2) + retorno + sumiu + escala 2 = 5 no retorno.
  assert.equal(logic.eixoVencedor({ ...base, prioridade: 3, retorno: 2, sumiu: 3, escala2: 5 }), "retorno");
  // Empate 2 × 2 × 2 segue Antes → Decisão → Retorno.
  const empate = { ...base, primeira: 0, depois: 2, exames: 3, escala1: 4, retorno: 1, sumiu: 2, escala2: 1, prioridade: 0 };
  const s = logic.pontuarEixos({ ...empate, prioridade: undefined });
  assert.deepEqual(s, { antes: 2, decisao: 1, retorno: 2 });
  assert.equal(logic.eixoVencedor({ ...empate, prioridade: undefined, escala1: 5, exames: 0 }), "antes");

  // Vocabulário e D1.
  assert.equal(fill("montar o {conduta}", pt.vocab.outra), "montar o plano de cuidado");
  assert.equal(fill("{Pacientes} por mês", pt.vocab.terapeuta), "Clientes por mês");

  // Plano: variantes do Dia 1, Dia 3, Dias 4 a 6 em minutos e Dia 7 sem indicação.
  const r = { ...base, agenda: 3, exames: 3, pacientes: 0, depois: 0, area: "terapeuta" };
  const ctx = logic.contexto(pt, r, "Ana");
  const etapas = logic.etapasPlano(pt, r, ctx);
  assert.equal(etapas.length, 5);
  assert.match(etapas[0].textos[0], /cliente que vai voltar em breve/);
  assert.match(etapas[2].textos[0], /Registre a queixa principal/);
  assert.match(etapas[3].textos[1], /os seus 30 minutos por mês de trabalho depois da sessão/);
  assert.match(etapas[4].textos[0], /^Repita com mais dois clientes\./);
  assert.equal(etapas.filter((e) => e.destaque).length, 1);
  assert.equal(etapas[2].destaque, true);

  // Datas do plano: "21 out" e "24–26 out" (dia 1 = hoje).
  const hoje = new Date(Date.UTC(2026, 9, 21, 12));
  assert.equal(logic.formatarData(logic.dataDoDia(hoje, 1), "pt-BR", "UTC"), "21 out");
  assert.equal(logic.formatarIntervalo(logic.dataDoDia(hoje, 4), logic.dataDoDia(hoje, 6), "pt-BR", "UTC"), "24–26 out");
  assert.equal(logic.formatarIntervalo(logic.dataDoDia(hoje, 10), logic.dataDoDia(hoje, 12), "pt-BR", "UTC"), "30 out–1 nov");

  // Nenhum texto do funil traz a palavra IA (D4) nem marcador sem valor conhecido.
  const tudo = JSON.stringify(pt);
  assert.doesNotMatch(tudo, /\bIA\b|inteligência artificial/i);
  const marcadores = new Set([...tudo.matchAll(/\{([^{}"]+)\}/g)].map((m) => m[1].replace(/^./, (c) => c.toLowerCase())));
  const conhecidos = new Set(["paciente", "pacientes", "consulta", "conduta", "dias", "bonus", "horas", "n", "minutos", "minutosMes", "nome", "área", "faixa", "prioridade", "a", "b"]);
  for (const m of marcadores) assert.ok(conhecidos.has(m), `marcador desconhecido: {${m}}`);

  // Cadastro que não bloqueia: com o cadastro feito na tela 21 (eventId), o nome e o plano
  // abrem mesmo sem a confirmação do servidor; o reenvio usa o mesmo eventId.
  const iNome = TELAS.findIndex((t) => t.slug === "nome");
  const iPlano = TELAS.findIndex((t) => t.slug === "plano");
  const iEmail = TELAS.findIndex((t) => t.slug === "email");
  const completo = { ...state.ESTADO_INICIAL, respostas: { ...base } };
  assert.equal(state.telaPendente(completo, iNome), iEmail);
  const pendente = { email: "a@b.co", consentimentoTexto: "x".repeat(20), idioma: "pt", respostas: base, eventId: "e1", isca: "" };
  let st = state.reducer(completo, { tipo: "cadastro", pendente });
  assert.equal(st.eventId, "e1");
  assert.equal(state.telaPendente(st, iNome), null);
  assert.equal(state.telaPendente(st, iPlano), iNome);
  st = state.reducer(st, { tipo: "nome", nome: "Ana" });
  assert.equal(state.telaPendente(st, iPlano), null);
  st = state.reducer(st, { tipo: "lead", leadId: "id1" });
  assert.equal(st.pendente, undefined);
  assert.equal(st.eventId, "e1");
  st = state.reducer(st, { tipo: "nomeEnviado" });
  assert.equal(state.reducer(st, { tipo: "nome", nome: "Ana" }).nomeEnviado, true);
  assert.equal(state.reducer(st, { tipo: "nome", nome: "Bia" }).nomeEnviado, false);
  // Corrigir o e-mail depois de confirmado reenvia com o mesmo eventId (mesma linha no servidor).
  const corrigido = state.reducer(st, { tipo: "cadastro", pendente: { ...pendente, email: "c@d.co" } });
  assert.equal(corrigido.eventId, "e1");
  assert.equal(corrigido.leadId, undefined);

  // Medidor da tela 19: pontos de cada eixo cabem no teto comum.
  for (const r of [base, { ...base, prioridade: 3, retorno: 2, sumiu: 3, escala2: 5 }, { ...base, primeira: 0, depois: 3, prioridade: 0 }]) {
    const p = logic.pontuarEixos(r);
    for (const v of Object.values(p)) assert.ok(v >= 0 && v <= logic.PONTOS_MAXIMOS);
  }

  console.log("check-funil-logic: ok");
} finally {
  await vite.close();
}
