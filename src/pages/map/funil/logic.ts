// Regras do funil (seção "Lógica e o plano dos primeiros dias" do documento).
// Módulo puro: roda no navegador e na função de servidor, que recalcula horas
// e eixo em vez de confiar no que o navegador manda.
import { BONUS, DIAS, INDICACAO_ATIVA } from "./constants";
import type { Area, Eixo, FunilContent } from "./content/types";
import { fill, type TextoCtx } from "./text";

export const AREAS: readonly Area[] = ["nutricionista", "naturopata", "terapeuta", "estetica", "outra"];
export const EIXOS: readonly Eixo[] = ["antes", "decisao", "retorno"];

/** Tela 3: faixa → valor central. */
export const PACIENTES_MES = [6, 18, 38, 75, 120] as const;
/** Tela 6: resposta → minutos depois de cada consulta. */
export const MINUTOS_DEPOIS = [5, 20, 45, 75] as const;

/** Respostas como índices das opções (escalas: 1 a 5). */
export type Respostas = {
  area?: Area;
  pacientes?: number;
  primeira?: number;
  depois?: number;
  exames?: number;
  escala1?: number;
  retorno?: number;
  sumiu?: number;
  escala2?: number;
  agenda?: number;
  prioridade?: number;
};

export type RespostasCompletas = Required<Respostas>;

const EXAMES_RARAMENTE = 3;
const AGENDA_AINDA_NAO = 3;
const DEPOIS_QUASE_NADA = 0;

export const examesRaramente = (r: Respostas) => r.exames === EXAMES_RARAMENTE;
export const depoisQuaseNada = (r: Respostas) => r.depois === DEPOIS_QUASE_NADA;

export function trabalhoMes(faixaPacientes: number, faixaDepois: number) {
  const n = PACIENTES_MES[faixaPacientes] ?? PACIENTES_MES[2];
  const minutos = MINUTOS_DEPOIS[faixaDepois] ?? MINUTOS_DEPOIS[2];
  const minutosMes = n * minutos;
  return {
    n,
    minutos,
    minutosMes,
    horas: Math.round(minutosMes / 60),
    /** Abaixo de 2 horas, o funil mostra minutos. */
    emMinutos: minutosMes / 60 < 2,
  };
}

/** Teto comum das barras da tela 19: Na decisão e No retorno somam até 5 pontos (Antes da consulta, 4). */
export const PONTOS_MAXIMOS = 5;

/** Medidor da tela 19: cada resposta soma pontos; empate segue Antes → Decisão → Retorno. */
export function pontuarEixos(r: Respostas): Record<Eixo, number> {
  const s: Record<Eixo, number> = { antes: 0, decisao: 0, retorno: 0 };
  if (r.primeira === 0 || r.primeira === 3) s.antes += 1;
  if (r.primeira === 1 || r.primeira === 2) s.decisao += 1;
  if (r.depois !== undefined && r.depois >= 2) s.antes += 1;
  if (r.exames !== undefined && r.exames !== EXAMES_RARAMENTE) s.decisao += 1;
  if (r.escala1 !== undefined && r.escala1 >= 4) s.decisao += 1;
  if (r.retorno !== undefined && r.retorno >= 1) s.retorno += 1;
  if (r.sumiu !== undefined && r.sumiu >= 2) s.retorno += 1;
  if (r.escala2 !== undefined && r.escala2 >= 4) s.retorno += 1;
  if (r.prioridade === 0 || r.prioridade === 1) s.antes += 2;
  if (r.prioridade === 2) s.decisao += 2;
  if (r.prioridade === 3) s.retorno += 2;
  return s;
}

export function eixoVencedor(r: Respostas): Eixo {
  const s = pontuarEixos(r);
  return EIXOS.reduce((melhor, e) => (s[e] > s[melhor] ? e : melhor), EIXOS[0]);
}

/** Contexto dos marcadores de texto a partir das respostas. */
export function contexto(c: FunilContent, r: Respostas, nome?: string): TextoCtx {
  const area = r.area ?? "nutricionista";
  const v = c.vocab[area];
  const t = trabalhoMes(r.pacientes ?? 2, r.depois ?? 2);
  return {
    ...v,
    dias: DIAS,
    bonus: BONUS,
    n: t.n,
    minutos: t.minutos,
    minutosMes: t.minutosMes,
    horas: t.horas,
    nome,
    área: c.area.opcoes[area],
    faixa: r.pacientes !== undefined ? c.pacientes.faixas[r.pacientes] : undefined,
    prioridade: r.prioridade !== undefined ? fill(c.prioridade.opcoes[r.prioridade], v) : undefined,
  };
}

export type EtapaPlano = {
  /** Dia inicial e final (1 a 7). */
  de: number;
  ate: number;
  textos: string[];
  destaque: boolean;
};

/** Tela 23: as cinco etapas, já preenchidas. */
export function etapasPlano(c: FunilContent, r: Respostas, ctx: TextoCtx): EtapaPlano[] {
  const eixo = eixoVencedor(r);
  const t = trabalhoMes(r.pacientes ?? 2, r.depois ?? 2);
  const p = c.plano;
  return [
    { de: 1, ate: 1, textos: [r.agenda === AGENDA_AINDA_NAO ? p.dia1SemAgenda : p.dia1], destaque: false },
    { de: 2, ate: 2, textos: [p.dia2], destaque: eixo === "antes" },
    { de: 3, ate: 3, textos: [examesRaramente(r) ? p.dia3Raramente : p.dia3], destaque: eixo === "decisao" },
    { de: 4, ate: 6, textos: [p.dias4a6, t.emMinutos ? p.dias4a6Minutos : p.dias4a6Horas], destaque: false },
    { de: DIAS, ate: DIAS, textos: [INDICACAO_ATIVA ? p.dia7Indicacao : p.dia7], destaque: eixo === "retorno" },
  ].map((e) => ({ ...e, textos: e.textos.map((s) => fill(s, ctx)) }));
}

/** Data do dia N do plano, contando hoje como dia 1. */
export function dataDoDia(hoje: Date, dia: number): Date {
  const d = new Date(hoje.getTime());
  d.setDate(d.getDate() + dia - 1);
  return d;
}

function partesData(d: Date, locale: string, timeZone?: string) {
  const partes = new Intl.DateTimeFormat(locale, { day: "numeric", month: "short", timeZone }).formatToParts(d);
  const dia = partes.find((p) => p.type === "day")?.value ?? "";
  const mes = (partes.find((p) => p.type === "month")?.value ?? "").replace(".", "");
  return { dia, mes };
}

/** "21 out": dia e mês abreviado, sem "de" nem ponto. */
export function formatarData(d: Date, locale: string, timeZone?: string): string {
  const { dia, mes } = partesData(d, locale, timeZone);
  return `${dia} ${mes}`;
}

/** "24–26 out" no mesmo mês; "30 out–1 nov" quando vira o mês. */
export function formatarIntervalo(de: Date, ate: Date, locale: string, timeZone?: string): string {
  const a = partesData(de, locale, timeZone);
  const b = partesData(ate, locale, timeZone);
  return a.mes === b.mes ? `${a.dia}–${b.dia} ${b.mes}` : `${a.dia} ${a.mes}–${b.dia} ${b.mes}`;
}

export function respostasCompletas(r: Respostas): r is RespostasCompletas {
  return (
    r.area !== undefined &&
    [r.pacientes, r.primeira, r.depois, r.exames, r.escala1, r.retorno, r.sumiu, r.escala2, r.agenda, r.prioridade].every(
      (x) => typeof x === "number",
    )
  );
}
