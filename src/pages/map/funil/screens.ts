// Ordem das 24 telas. slug = caminho em /map/comecar/<slug> e nome do evento
// do Clarity (mapf_<slug>). bloco: segmento da barra (0 Antes da consulta,
// 1 No retorno, 2 Seu plano; null = sem barra).
import type { Respostas } from "./logic";

export type Slug =
  | "comecar"
  | "area"
  | "pacientes"
  | "primeira"
  | "antes"
  | "depois"
  | "invisivel"
  | "exames"
  | "extracao"
  | "escala-1"
  | "retorno"
  | "resumo-retorno"
  | "sumiu"
  | "delta"
  | "escala-2"
  | "decisao"
  | "agenda"
  | "prioridade"
  | "perfil"
  | "montando"
  | "email"
  | "nome"
  | "plano"
  | "precos";

export type Tela = {
  slug: Slug;
  bloco: 0 | 1 | 2 | null;
  escura?: boolean;
  /** Avança sozinha; sai do histórico (voltar pula a tela). */
  automatica?: boolean;
  /** Telas que rolam; as demais cabem em 375×812. */
  rola?: boolean;
  /** Resposta que a tela grava. */
  resposta?: keyof Respostas;
};

export const TELAS: readonly Tela[] = [
  { slug: "comecar", bloco: null, escura: true, automatica: true },
  { slug: "area", bloco: 0, resposta: "area" },
  { slug: "pacientes", bloco: 0, resposta: "pacientes" },
  { slug: "primeira", bloco: 0, resposta: "primeira" },
  { slug: "antes", bloco: 0 },
  { slug: "depois", bloco: 0, resposta: "depois" },
  { slug: "invisivel", bloco: 0 },
  { slug: "exames", bloco: 0, resposta: "exames" },
  { slug: "extracao", bloco: 0 },
  { slug: "escala-1", bloco: 1, resposta: "escala1" },
  { slug: "retorno", bloco: 1, resposta: "retorno" },
  { slug: "resumo-retorno", bloco: 1, escura: true, rola: true },
  { slug: "sumiu", bloco: 1, resposta: "sumiu" },
  { slug: "delta", bloco: 1 },
  { slug: "escala-2", bloco: 1, resposta: "escala2" },
  { slug: "decisao", bloco: 1 },
  { slug: "agenda", bloco: 2, resposta: "agenda" },
  { slug: "prioridade", bloco: 2, resposta: "prioridade" },
  { slug: "perfil", bloco: 2 },
  { slug: "montando", bloco: 2, escura: true, automatica: true },
  { slug: "email", bloco: 2 },
  { slug: "nome", bloco: 2 },
  { slug: "plano", bloco: 2, rola: true },
  { slug: "precos", bloco: 2, rola: true },
];

export const indiceDe = (slug: string | undefined) => {
  const i = TELAS.findIndex((t) => t.slug === (slug || "comecar"));
  return i < 0 ? 0 : i;
};

export const caminhoDe = (slug: Slug) => (slug === "comecar" ? "/map/comecar" : `/map/comecar/${slug}`);
