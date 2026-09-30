// Eventos personalizados das campanhas (Fase 6 da auditoria de conversão).
//
// Vão para o Meta Pixel como trackCustom e para o GA4 quando o gtag existir
// (hoje não está instalado na landing). Sempre levam publico e idioma. Os
// parâmetros aceitos são uma lista fechada, para não vazar nome, e-mail,
// respostas de questionário ou dados de saúde (item 6.5).
// Os eventos já existentes (Lead, InitiateCheckout, StartTrial) continuam
// sendo disparados onde estavam.
import { getTrackingLanguage } from "@/lib/attribution";
import { getStoredPublico, type Publico } from "@/lib/audience";

export type CampaignEvent =
  | "view_pricing"
  | "click_cta"
  | "click_store"
  | "click_whatsapp"
  | "view_map_page";

type EventParams = {
  posicao?: string;
  loja?: "app_store" | "google_play";
};

// Lista fechada de parâmetros que podem sair para Meta/GA4. Também usada
// pelos eventos do renal (src/pages/renal/lib.ts).
const ALLOWED_PARAMS = ["posicao", "loja", "publico", "idioma"] as const;

export function sanitizeEventParams(params: Record<string, unknown> = {}): Record<string, string> {
  const safe: Record<string, string> = {};
  for (const key of ALLOWED_PARAMS) {
    const value = params[key];
    if (typeof value === "string" && value) safe[key] = value.slice(0, 50);
  }
  return safe;
}

type Tracker = (...args: unknown[]) => void;

function getTracker(name: "fbq" | "gtag"): Tracker | null {
  if (typeof window === "undefined") return null;
  const fn = (window as unknown as Record<string, unknown>)[name];
  return typeof fn === "function" ? (fn as Tracker) : null;
}

/**
 * Dispara o evento. publico: na raiz, a variante em uso (sempre conhecida);
 * no /map, o valor da sessão ou "nao_informado" para quem chegou direto.
 */
export function trackEvent(
  name: CampaignEvent,
  params: EventParams = {},
  publico: Publico | null = getStoredPublico(),
): void {
  const payload: Record<string, string> = {
    publico: publico ?? "nao_informado",
    idioma: getTrackingLanguage() ?? "pt",
  };
  if (params.posicao) payload.posicao = params.posicao;
  if (params.loja) payload.loja = params.loja;

  try {
    getTracker("fbq")?.("trackCustom", name, payload);
  } catch {
    /* falha no pixel não pode bloquear o clique */
  }
  try {
    getTracker("gtag")?.("event", name, payload);
  } catch {
    /* idem para o GA4 */
  }
}
