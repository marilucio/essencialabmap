// Constantes do funil /map/comecar. Módulo puro (sem import.meta.env), também
// usado pela função de servidor que envia o e-mail do plano.

/** Dias do teste grátis: preenche {dias} em todo o funil. */
export const DIAS = 7;

/** Dias extras por indicação: preenche {bonus}. */
export const BONUS = 21;

/** Textos da indicação ficam escondidos até o app entregar o recurso. */
export const INDICACAO_ATIVA = false;

/** Curva única do funil: a mesma de --mapf-ease em funil.css. */
export const EASE = [0.22, 1, 0.36, 1] as const;

/** Durações em ms. */
export const DUR = {
  tela: 320,
  cascata: 40,
  check: 200,
  contagem: 600,
  avanco: 520,
  frase: 1500,
  abertura: 4000,
  montagemEtapa: 2000,
  deltaGiro: 3600,
  resumoBloco: 520,
} as const;

export const TRIAL_URL_FUNIL = "https://essencialab.app/?src=map_funil";

/** Endpoint da função Netlify (netlify/functions/map-funil-lead.mts). */
export const API_LEAD = "/.netlify/functions/map-funil-lead";
