// Evento de conversão exclusivo da landing /map.
// O PageView é disparado no head de map.html; aqui só o início do teste.
// Nome próprio (StartTrial) para não misturar com os eventos da raiz (consultores).

type Fbq = (...args: unknown[]) => void;

function getFbq(): Fbq | null {
  if (typeof window === "undefined") return null;
  const fbq = (window as unknown as { fbq?: Fbq }).fbq;
  return typeof fbq === "function" ? fbq : null;
}

export function trackStartTrial(placement: string) {
  const fbq = getFbq();
  if (!fbq) return;
  fbq("trackCustom", "StartTrial", { source: "map", placement });
}

export function trackWhatsAppContact() {
  const fbq = getFbq();
  if (!fbq) return;
  fbq("trackCustom", "MapWhatsAppContact", { source: "map" });
}
