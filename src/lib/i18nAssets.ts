// Resolução de assets por idioma com fallback para pt (Tarefa 1).
//
// Convenção de arquivos em /public: o sufixo -{lang} é inserido antes da
// extensão. Ex.: /demo-analise-facial.mp4 + "en" -> /demo-analise-facial-en.mp4
//
// IMPORTANTE: como é SPA (sem servidor para testar a existência do arquivo),
// usamos este manifesto estático. ATUALIZE AVAILABLE_ASSET_LANGS sempre que
// publicar os assets de um novo idioma em /public. Idiomas fora da lista
// caem no fallback -pt (que é publicado primeiro).
export const AVAILABLE_ASSET_LANGS = ["pt"];

/**
 * Monta o caminho do asset para o idioma ativo, com fallback para pt.
 * @param basePath caminho base com extensão, ex.: "/demo-poster.jpg"
 * @param lang idioma ativo ("pt" | "en" | "es")
 */
export function localizedAsset(basePath: string, lang: string): string {
  const resolvedLang = AVAILABLE_ASSET_LANGS.includes(lang) ? lang : "pt";
  const dotIndex = basePath.lastIndexOf(".");
  if (dotIndex === -1) {
    return `${basePath}-${resolvedLang}`;
  }
  return `${basePath.slice(0, dotIndex)}-${resolvedLang}${basePath.slice(dotIndex)}`;
}
