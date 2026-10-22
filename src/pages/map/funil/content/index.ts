import { pt } from "./pt";
import type { FunilContent, Lang } from "./types";

// es.ts e en.ts entram aqui quando existirem. Até lá, todo idioma cai no pt.
const CONTEUDO: Partial<Record<Lang, FunilContent>> = { pt };

export function getContent(lang: string | null | undefined): FunilContent {
  return CONTEUDO[lang as Lang] ?? pt;
}

export type { FunilContent, Lang, Area, Eixo, Vocab } from "./types";
