// Chamadas à função de servidor (netlify/functions/map-funil-lead.mts).
// Nunca há chave do Supabase no navegador: a função grava com a service role.
//
// O cadastro não bloqueia o funil: se a função falhar (erro, 503, sem rede),
// a pessoa segue para o nome e o plano, e `sincronizar` reenvia em segundo
// plano nas telas 22 e 23 e no clique da 24. Todas as tentativas levam o mesmo
// eventID, e o servidor grava por upsert nele: uma linha só, um Lead só.
import type { Dispatch } from "react";
import { getAttribution, UTM_KEYS } from "@/lib/attribution";
import { getStoredPublico } from "@/lib/audience";
import { API_LEAD } from "./constants";
import type { Acao, CadastroPendente, Card, Estado } from "./state";

/** Na tela 21 a pessoa espera no máximo isto antes de seguir sem a confirmação. */
export const ESPERA_CADASTRO_MS = 5000;

export async function enviarCadastro(dados: CadastroPendente, esperaMs = ESPERA_CADASTRO_MS): Promise<{ id: string }> {
  const atribuicao = getAttribution();
  const utm = Object.fromEntries(UTM_KEYS.map((k) => [k, atribuicao[k] ?? null]));
  const controle = new AbortController();
  const timer = window.setTimeout(() => controle.abort(), esperaMs);
  try {
    const resposta = await fetch(API_LEAD, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        acao: "cadastro",
        ...dados,
        consentimento: true,
        publico: getStoredPublico(),
        referrer: document.referrer || null,
        ...utm,
      }),
      signal: controle.signal,
      keepalive: true,
    });
    if (!resposta.ok) throw new Error(`cadastro ${resposta.status}`);
    return (await resposta.json()) as { id: string };
  } finally {
    window.clearTimeout(timer);
  }
}

/** Grava o nome e dispara o e-mail do plano (D5). true quando o servidor confirmou. */
export async function enviarNome(id: string, eventId: string, nome: string): Promise<boolean> {
  try {
    const resposta = await fetch(API_LEAD, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ acao: "nome", id, eventId, nome }),
      keepalive: true,
    });
    return resposta.ok;
  } catch {
    return false;
  }
}

/** Card escolhido ao clicar no teste (sendBeacon sobrevive à troca de página). */
export function enviarCard(id: string, eventId: string, card: Card): void {
  const corpo = JSON.stringify({ acao: "card", id, eventId, card });
  try {
    if (navigator.sendBeacon?.(API_LEAD, new Blob([corpo], { type: "application/json" }))) return;
  } catch {
    /* cai no fetch */
  }
  void fetch(API_LEAD, { method: "POST", headers: { "Content-Type": "application/json" }, body: corpo, keepalive: true }).catch(
    () => undefined,
  );
}

// Uma tentativa por vez: chamadas seguidas (tela 23 abrindo e clique na 24) entram na fila.
let fila: Promise<void> = Promise.resolve();

/**
 * Reenvia o que ainda não chegou ao servidor: o cadastro pendente, depois o nome
 * (que dispara o e-mail do plano) e, no clique da tela 24, o card escolhido.
 * `obter` devolve o estado mais recente (lido a cada passo, não uma cópia antiga).
 */
export function sincronizar(obter: () => Estado, dispatch: Dispatch<Acao>, card?: Card): Promise<void> {
  fila = fila.then(() => passo(obter, dispatch, card)).catch(() => undefined);
  return fila;
}

async function passo(obter: () => Estado, dispatch: Dispatch<Acao>, card?: Card): Promise<void> {
  const estado = obter();
  let leadId = estado.leadId;
  if (!leadId && estado.pendente) {
    try {
      leadId = (await enviarCadastro(estado.pendente)).id;
      dispatch({ tipo: "lead", leadId });
    } catch {
      return; // tenta de novo na próxima tela ou no próximo clique
    }
  }
  if (!leadId || !estado.eventId) return;
  if (estado.nome && !estado.nomeEnviado && (await enviarNome(leadId, estado.eventId, estado.nome))) {
    dispatch({ tipo: "nomeEnviado" });
  }
  if (card) enviarCard(leadId, estado.eventId, card);
}

export function novoEventId(): string {
  const cr = globalThis.crypto;
  if (typeof cr.randomUUID === "function") return cr.randomUUID();
  // Navegadores antigos: UUID v4 a partir de getRandomValues.
  const b = cr.getRandomValues(new Uint8Array(16));
  b[6] = (b[6] & 0x0f) | 0x40;
  b[8] = (b[8] & 0x3f) | 0x80;
  const h = Array.from(b, (x) => x.toString(16).padStart(2, "0")).join("");
  return `${h.slice(0, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}-${h.slice(16, 20)}-${h.slice(20)}`;
}
