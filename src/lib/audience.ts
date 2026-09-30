// Variante de público da landing (Fase 5 da auditoria de conversão).
//
// Os anúncios mandam dois públicos para a mesma página: ?publico=doterra
// (consultores, variante padrão) ou ?publico=aroma (aromaterapeutas fora do
// MLM). O valor da URL é persistido em sessionStorage para a variante se
// manter ao navegar, e repassado nos links para o /map e no TRIAL_URL.
import { TRIAL_URL } from "@/pages/map/constants";
import { UTM_KEYS, getAttribution, getTrackingLanguage } from "@/lib/attribution";

export type Publico = "doterra" | "aroma";

const STORAGE_KEY = "essencialab_publico";

function parsePublico(value: string | null): Publico | null {
  return value === "doterra" || value === "aroma" ? value : null;
}

/**
 * Público informado explicitamente (URL ou sessão), ou null. Não aplica o
 * padrão: no /map, quem chega direto não deve herdar "doterra".
 */
export function getStoredPublico(): Publico | null {
  if (typeof window === "undefined") return null;

  const fromUrl = parsePublico(new URLSearchParams(window.location.search).get("publico"));
  if (fromUrl) {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, fromUrl);
    } catch {
      /* sessionStorage indisponível — segue só com o valor da URL */
    }
    return fromUrl;
  }

  try {
    return parsePublico(window.sessionStorage.getItem(STORAGE_KEY));
  } catch {
    return null;
  }
}

/** Variante da raiz: sem parâmetro, doterra (público atual da página). */
export function getPublico(): Publico {
  return getStoredPublico() ?? "doterra";
}

/** Acrescenta ?publico= a um link interno (ex.: "/map"). */
export function withPublico(path: string, publico: Publico | null): string {
  if (!publico) return path;
  const sep = path.includes("?") ? "&" : "?";
  return `${path}${sep}publico=${publico}`;
}

/**
 * Link do teste no app (mesmo destino do TrialButton do /map), com a origem:
 * publico (quando conhecido), pagina (home ou map), as UTMs da primeira
 * visita e o idioma.
 */
export function buildTrialUrl(pagina: "home" | "map", publico: Publico | null): string {
  const url = new URL(TRIAL_URL);
  if (publico) url.searchParams.set("publico", publico);
  url.searchParams.set("pagina", pagina);
  const attribution = getAttribution();
  for (const key of UTM_KEYS) {
    const value = attribution[key];
    if (value) url.searchParams.set(key, value);
  }
  const idioma = getTrackingLanguage();
  if (idioma) url.searchParams.set("idioma", idioma);
  return url.toString();
}

/**
 * Atualiza o href do link de teste no clique, com a atribuição já gravada
 * (a renderização pode acontecer antes de UTMs e idioma estarem na sessão).
 */
export function refreshTrialHref(
  link: HTMLAnchorElement,
  pagina: "home" | "map",
  publico: Publico | null,
): void {
  link.href = buildTrialUrl(pagina, publico);
}
