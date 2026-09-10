// Constantes da landing /map. Alterar aqui reflete em todos os CTAs da página.

// [CONFIRMAR] URL real do fluxo de cadastro do teste de 7 dias no app.
// O parâmetro ?src=map serve para atribuição. Pode ser sobrescrito por VITE_MAP_TRIAL_URL.
export const TRIAL_URL =
  import.meta.env.VITE_MAP_TRIAL_URL || "https://essencialab.app/?src=map";

export const WHATSAPP_NUMBER = "5543991343807";
export const WHATSAPP_MESSAGE =
  "Olá, Marilúcio. Vi a página do MAP e quero tirar uma dúvida antes de começar o teste.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

// Vídeo de apresentação atual. Trocar pelo vídeo de caso conduzido quando existir.
export const VIDEO_YOUTUBE_ID = "lzwZuZK_5Ao";
export const VIDEO_POSTER = "/images/map/video-poster.webp";
export const VIDEO_POSTER_SMALL = "/images/map/video-poster-640.webp";

export const PRICE_MONTHLY = "R$ 127/mês";
export const PRICE_YEARLY = "R$ 1.270/ano";
export const TRIAL_GUARANTEE =
  "Sem cartão. Cancele quando quiser. R$ 127/mês depois do teste.";
