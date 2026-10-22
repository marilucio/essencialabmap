// E-mail do plano de 7 dias (D5: enviado quando a pessoa confirma o nome na
// tela 22; assunto = título da tela 23). Monta HTML e texto a partir do mesmo
// conteúdo e da mesma lógica do funil, com as datas no fuso de São Paulo.
// Sem a frase final da tela 23 ("Com {n} {pacientes} por mês…"): no e-mail ela
// repetiria a linha das horas dos Dias 4 a 6.
import type { FunilContent } from "../../src/pages/map/funil/content/types";
import {
  contexto,
  dataDoDia,
  etapasPlano,
  formatarData,
  formatarIntervalo,
  type Respostas,
} from "../../src/pages/map/funil/logic";
import { fill } from "../../src/pages/map/funil/text";

const COR = {
  verde: "#08c16a",
  profundo: "#064e3b",
  menta: "#a7f3d0",
  suave: "#e9f9ef",
  neutro: "#0f172a",
  texto2: "#475569",
};

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

/** Hoje em São Paulo, como data UTC ao meio-dia (as contas de dia não mudam de fuso). */
export function hojeEmSaoPaulo(agora = new Date()): Date {
  const [a, m, d] = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Sao_Paulo" }).format(agora).split("-").map(Number);
  return new Date(Date.UTC(a, m - 1, d, 12));
}

type Entrada = {
  c: FunilContent;
  respostas: Respostas;
  nome: string;
  hoje: Date;
  linkTeste: string;
  linkSair: string;
};

export function montarEmailPlano({ c, respostas, nome, hoje, linkTeste, linkSair }: Entrada) {
  const ctx = contexto(c, respostas, nome);
  const etapas = etapasPlano(c, respostas, ctx);
  const assunto = fill(c.plano.titulo, ctx).replace(/[\r\n]+/g, " ");
  const preheader = fill(c.emailPlano.preheader, ctx);
  const botao = fill(c.emailPlano.botao, ctx);

  const rotuloDia = (de: number, ate: number) => {
    const dias = de === ate ? c.plano.diaUm.replace("{a}", String(de)) : c.plano.diaVarios.replace("{a}", String(de)).replace("{b}", String(ate));
    const datas =
      de === ate
        ? formatarData(dataDoDia(hoje, de), c.locale, "UTC")
        : formatarIntervalo(dataDoDia(hoje, de), dataDoDia(hoje, ate), c.locale, "UTC");
    return `${dias} · ${datas}`;
  };

  const linhas = etapas
    .map((e) => {
      const fundo = e.destaque ? COR.suave : "#ffffff";
      const [principal, ...extras] = e.textos;
      return `
      <tr><td style="padding:0 0 10px">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${fundo};border-radius:12px;border:1px solid ${e.destaque ? COR.menta : "#e2e8f0"}">
          <tr><td style="padding:12px 14px">
            <p style="margin:0;font:600 11px/1.4 Helvetica,Arial,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:${COR.profundo}">${esc(rotuloDia(e.de, e.ate))}</p>
            <p style="margin:4px 0 0;font:${e.destaque ? 600 : 400} 15px/1.5 Helvetica,Arial,sans-serif;color:${COR.neutro}">${esc(principal)}</p>
            ${extras.map((x) => `<p style="margin:4px 0 0;font:400 13px/1.5 Helvetica,Arial,sans-serif;color:${COR.texto2}">${esc(x)}</p>`).join("")}
          </td></tr>
        </table>
      </td></tr>`;
    })
    .join("");

  const html = `<!doctype html>
<html lang="${c.htmlLang}">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(assunto)}</title></head>
<body style="margin:0;padding:0;background:${COR.suave}">
<div style="display:none;max-height:0;overflow:hidden;opacity:0">${esc(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${COR.suave}">
  <tr><td align="center" style="padding:28px 16px">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:20px">
      <tr><td style="padding:28px 24px 8px">
        <p style="margin:0;font:600 11px/1 Helvetica,Arial,sans-serif;letter-spacing:.22em;color:${COR.profundo}">${esc(c.marca)}</p>
        <h1 style="margin:14px 0 18px;font:600 22px/1.3 Helvetica,Arial,sans-serif;color:${COR.neutro}">${esc(assunto)}</h1>
      </td></tr>
      <tr><td style="padding:0 24px">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${linhas}</table>
      </td></tr>
      <tr><td style="padding:14px 24px 28px">
        <a href="${esc(linkTeste)}" style="display:block;text-align:center;background:${COR.profundo};color:#ffffff;text-decoration:none;font:600 16px/1 Helvetica,Arial,sans-serif;padding:16px 20px;border-radius:14px">${esc(botao)}</a>
        <p style="margin:12px 0 0;text-align:center;font:400 12px/1.5 Helvetica,Arial,sans-serif;color:${COR.texto2}">${esc(fill(c.precos.linha, ctx))}</p>
      </td></tr>
    </table>
    <p style="max-width:560px;margin:16px auto 0;font:400 11px/1.6 Helvetica,Arial,sans-serif;color:${COR.texto2}">
      ${esc(c.emailPlano.rodape)}<br><a href="${esc(linkSair)}" style="color:${COR.profundo}">${esc(c.emailPlano.sair)}</a>
    </p>
  </td></tr>
</table>
</body>
</html>`;

  const texto = [
    assunto,
    "",
    ...etapas.flatMap((e) => [rotuloDia(e.de, e.ate), ...e.textos, ""]),
    `${botao}: ${linkTeste}`,
    fill(c.precos.linha, ctx),
    "",
    c.emailPlano.rodape,
    `${c.emailPlano.sair}: ${linkSair}`,
  ].join("\n");

  return { assunto, html, texto };
}
