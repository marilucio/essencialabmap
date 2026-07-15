// Captura de lead via WhatsApp (Tarefa 5 da auditoria de conversão).
//
// Número que recebe os leads: (43) 99194-8185 → formato internacional wa.me.
// Pode ser sobrescrito por VITE_WHATSAPP_NUMBER no .env (só dígitos, com DDI).
const DEFAULT_WHATSAPP_NUMBER = "5543991948185";

export const WHATSAPP_NUMBER: string =
  (import.meta.env.VITE_WHATSAPP_NUMBER as string) || DEFAULT_WHATSAPP_NUMBER;

export const WHATSAPP_DEMO_MESSAGE =
  "Olá! Vi o EssenciaLab e quero ver a demonstração da análise facial.";

/** Monta o link wa.me com a mensagem pré-preenchida. */
export function buildWhatsappLink(
  message: string = WHATSAPP_DEMO_MESSAGE,
  number: string = WHATSAPP_NUMBER,
): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/**
 * Dispara um evento no Pixel do Meta se ele estiver instalado na página.
 * Guarda contra ausência do fbq — hoje o Pixel só é inicializado em /renal,
 * então na landing os eventos só disparam quando o Pixel for habilitado aqui.
 */
export function trackPixel(
  event: string,
  params?: Record<string, unknown>,
): void {
  if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
    (window as any).fbq("track", event, params);
  }
}
