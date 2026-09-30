// Atribuição das campanhas (Fase 6 da auditoria de conversão).
//
// Na primeira visita da sessão guarda utm_*, publico e idioma em
// sessionStorage. Os valores seguem no TRIAL_URL (ver lib/audience) para o app
// poder gravá-los no cadastro. Só dados de campanha: nada de nome, e-mail,
// respostas ou dados de saúde.
const ATTRIBUTION_KEY = "essencialab_attribution";
const LANGUAGE_KEY = "essencialab_idioma";

export const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

type UtmKey = (typeof UTM_KEYS)[number];

export type Attribution = Partial<Record<UtmKey, string>> & {
  publico?: string;
  idioma?: string;
};

function readJson(key: string): Attribution | null {
  try {
    const raw = window.sessionStorage.getItem(key);
    return raw ? (JSON.parse(raw) as Attribution) : null;
  } catch {
    return null;
  }
}

function writeJson(key: string, value: Attribution): void {
  try {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* sessionStorage indisponível: segue sem atribuição */
  }
}

/** Grava a atribuição da primeira visita da sessão (visitas seguintes não sobrescrevem). */
export function captureAttribution(publico: string | null): void {
  if (typeof window === "undefined" || readJson(ATTRIBUTION_KEY)) return;

  const params = new URLSearchParams(window.location.search);
  const attribution: Attribution = {};
  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) attribution[key] = value.slice(0, 200);
  }
  if (publico) attribution.publico = publico;
  const idioma = getTrackingLanguage();
  if (idioma) attribution.idioma = idioma;

  writeJson(ATTRIBUTION_KEY, attribution);
}

export function getAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  return readJson(ATTRIBUTION_KEY) ?? {};
}

/** Idioma atual da página; também completa a atribuição se ela ainda não tiver idioma. */
export function setTrackingLanguage(idioma: string): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(LANGUAGE_KEY, idioma);
  } catch {
    return;
  }
  const attribution = readJson(ATTRIBUTION_KEY);
  if (attribution && !attribution.idioma) writeJson(ATTRIBUTION_KEY, { ...attribution, idioma });
}

export function getTrackingLanguage(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.sessionStorage.getItem(LANGUAGE_KEY);
  } catch {
    return null;
  }
}
