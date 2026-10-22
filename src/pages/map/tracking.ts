// Evento de conversão exclusivo da landing /map.
// O PageView é disparado no head de map.html; aqui só o início do teste.
// Nome próprio (StartTrial) para não misturar com os eventos da raiz (consultores).
// StartTrial mede o clique para iniciar o teste (intenção), não o trial criado no app.
// Também é disparado pelos CTAs da variante aroma da raiz (source: "home") e pela
// página de preço do funil /map/comecar (source: "map_funil", com o plano escolhido).
import { getStoredPublico, type Publico } from "@/lib/audience";
import { trackEvent } from "@/lib/tracking";

type Fbq = (...args: unknown[]) => void;

function getFbq(): Fbq | null {
  if (typeof window === "undefined") return null;
  const fbq = (window as unknown as { fbq?: Fbq }).fbq;
  return typeof fbq === "function" ? fbq : null;
}

export function trackStartTrial(
  placement: string,
  source: "map" | "home" | "map_funil" = "map",
  publico: Publico | null = getStoredPublico(),
  plano?: "anual" | "mensal",
) {
  const fbq = getFbq();
  if (!fbq) return;
  fbq("trackCustom", "StartTrial", {
    source,
    placement,
    ...(publico ? { publico } : {}),
    ...(plano ? { plano } : {}),
  });
}

export function trackWhatsAppContact() {
  trackEvent("click_whatsapp", { posicao: "final" });
  const fbq = getFbq();
  if (!fbq) return;
  fbq("trackCustom", "MapWhatsAppContact", { source: "map" });
}
