// Variante de CTA por origem de tráfego (Tarefa 3).
//
// Campanhas Click-to-WhatsApp chegam com ?src=wa e invertem a hierarquia de
// CTA (WhatsApp vira primário). O parâmetro é persistido em sessionStorage
// para que a inversão se mantenha ao navegar por âncoras ou recarregar.
const STORAGE_KEY = "essencialab_src";

/** Lê o parâmetro `src` da URL (ou do sessionStorage) e o persiste na sessão. */
export function getTrafficSource(): string | null {
  if (typeof window === "undefined") return null;

  const fromUrl = new URLSearchParams(window.location.search).get("src");
  if (fromUrl) {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, fromUrl);
    } catch {
      /* sessionStorage indisponível — segue só com o valor da URL */
    }
    return fromUrl;
  }

  try {
    return window.sessionStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

/** true quando a origem é a variante de Click-to-WhatsApp (?src=wa). */
export function isWhatsappVariant(): boolean {
  return getTrafficSource() === "wa";
}
