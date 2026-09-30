// Evento de conversão exclusivo da landing /map.
// O PageView é disparado no head de map.html; aqui só o início do teste.
// Nome próprio (StartTrial) para não misturar com os eventos da raiz (consultores).
// StartTrial mede o clique para iniciar o teste (intenção), não o trial criado no app.
// Também é disparado pelos CTAs da variante aroma da raiz (source: "home").
import { getStoredPublico, type Publico } from "@/lib/audience";

type Fbq = (...args: unknown[]) => void;

function getFbq(): Fbq | null {
  if (typeof window === "undefined") return null;
  const fbq = (window as unknown as { fbq?: Fbq }).fbq;
  return typeof fbq === "function" ? fbq : null;
}

export function trackStartTrial(
  placement: string,
  source: "map" | "home" = "map",
  publico: Publico | null = getStoredPublico(),
) {
  const fbq = getFbq();
  if (!fbq) return;
  fbq("trackCustom", "StartTrial", { source, placement, ...(publico ? { publico } : {}) });
}

export function trackWhatsAppContact() {
  const fbq = getFbq();
  if (!fbq) return;
  fbq("trackCustom", "MapWhatsAppContact", { source: "map" });
}
