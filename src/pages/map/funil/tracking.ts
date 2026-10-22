// Rastreamento do funil /map/comecar.
// Pixel: o da /map (map-comecar.html faz o init e o PageView). Aqui saem
// ViewContent (uma vez por sessão), Lead com eventID (o mesmo gravado em
// map_funil_leads.meta_event_id, para deduplicar com a Conversions API quando
// existir) e StartTrial. Clarity: um evento por tela e os marcos do funil.
// Nada de e-mail, nome ou respostas nos parâmetros.
import { buildTrialUrl, getStoredPublico } from "@/lib/audience";
import { trackEvent } from "@/lib/tracking";
import { trackStartTrial } from "../tracking";
import { TRIAL_URL_FUNIL } from "./constants";
import type { Eixo } from "./content/types";
import type { Card } from "./state";

type Fn = (...args: unknown[]) => void;

function obter(name: "fbq" | "clarity"): Fn | null {
  if (typeof window === "undefined") return null;
  const fn = (window as unknown as Record<string, unknown>)[name];
  return typeof fn === "function" ? (fn as Fn) : null;
}

function seguro(chamada: () => void) {
  try {
    chamada();
  } catch {
    /* falha de rastreamento não pode travar o funil */
  }
}

export function clarityEvento(nome: string) {
  seguro(() => obter("clarity")?.("event", nome));
}

const CHAVE_VIEW = "essencialab_mapf_viewcontent";

export function trackViewContent() {
  try {
    if (window.sessionStorage.getItem(CHAVE_VIEW)) return;
    window.sessionStorage.setItem(CHAVE_VIEW, "1");
  } catch {
    /* sem sessionStorage: dispara mesmo assim */
  }
  seguro(() => obter("fbq")?.("track", "ViewContent", { content_name: "map_funil" }));
}

export function trackLead(eventId: string) {
  seguro(() => obter("fbq")?.("track", "Lead", { content_name: "map_funil" }, { eventID: eventId }));
  clarityEvento("mapf_cadastro");
}

export function trackPlano(eixo: Eixo) {
  clarityEvento(`mapf_plano_${eixo}`);
}

export function trackInicioTeste(placement: string, card: Card) {
  trackEvent("click_cta", { posicao: placement });
  trackStartTrial(placement, "map_funil", getStoredPublico(), card);
  clarityEvento(`mapf_card_${card}`);
}

/** Link do teste: ?src=map_funil&plano=…, UTMs da primeira visita e idioma. Nenhum dado pessoal. */
export function linkTeste(card: Card): string {
  const base = import.meta.env.VITE_MAP_FUNIL_TRIAL_URL || TRIAL_URL_FUNIL;
  const url = new URL(buildTrialUrl("map_funil", getStoredPublico(), base));
  url.searchParams.set("plano", card);
  return url.toString();
}
