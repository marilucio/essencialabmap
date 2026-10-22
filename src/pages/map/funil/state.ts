// Estado do funil: respostas e o que a pessoa já enviou, guardados em
// sessionStorage para sobreviver a recarregar a página e ao voltar do celular.
// O cadastro (com o e-mail) fica em `pendente` só até o servidor confirmar;
// depois disso ficam só o id do lead e o eventID.
import type { Respostas } from "./logic";
import { TELAS } from "./screens";

export type Card = "anual" | "mensal";

/** O que a tela 21 manda para o servidor; reenviado nas telas 22 a 24 se falhar. */
export type CadastroPendente = {
  email: string;
  consentimentoTexto: string;
  idioma: string;
  respostas: Respostas;
  eventId: string;
  isca: string;
};

export type Estado = {
  v: 1;
  respostas: Respostas;
  nome?: string;
  /** Mesmo eventID em todas as tentativas: o servidor grava uma linha só e o Lead não duplica. */
  eventId?: string;
  /** Preenchido quando o servidor confirma o cadastro. */
  leadId?: string;
  pendente?: CadastroPendente;
  leadDisparado?: boolean;
  nomeEnviado?: boolean;
  card: Card;
};

export const ESTADO_INICIAL: Estado = { v: 1, respostas: {}, card: "anual" };

const CHAVE = "essencialab_mapf_v1";

export function lerEstado(): Estado {
  if (typeof window === "undefined") return ESTADO_INICIAL;
  try {
    const bruto = window.sessionStorage.getItem(CHAVE);
    const salvo = bruto ? (JSON.parse(bruto) as Estado) : null;
    return salvo && salvo.v === 1 ? { ...ESTADO_INICIAL, ...salvo } : ESTADO_INICIAL;
  } catch {
    return ESTADO_INICIAL;
  }
}

export function gravarEstado(estado: Estado): void {
  try {
    window.sessionStorage.setItem(CHAVE, JSON.stringify(estado));
  } catch {
    /* sessionStorage indisponível: o funil segue só em memória */
  }
}

export type Acao =
  | { tipo: "carregar"; estado: Estado }
  | { tipo: "responder"; chave: keyof Respostas; valor: Respostas[keyof Respostas] }
  | { tipo: "cadastro"; pendente: CadastroPendente }
  | { tipo: "lead"; leadId: string }
  | { tipo: "leadDisparado" }
  | { tipo: "nome"; nome: string }
  | { tipo: "nomeEnviado" }
  | { tipo: "card"; card: Card };

export function reducer(estado: Estado, acao: Acao): Estado {
  switch (acao.tipo) {
    case "carregar":
      return acao.estado;
    case "responder":
      return { ...estado, respostas: { ...estado.respostas, [acao.chave]: acao.valor } };
    case "cadastro":
      // Novo e-mail depois de confirmado: o servidor atualiza a mesma linha (mesmo eventID).
      return { ...estado, eventId: acao.pendente.eventId, pendente: acao.pendente, leadId: undefined, nomeEnviado: false };
    case "lead":
      return { ...estado, leadId: acao.leadId, pendente: undefined };
    case "leadDisparado":
      return { ...estado, leadDisparado: true };
    case "nome":
      return { ...estado, nome: acao.nome, nomeEnviado: acao.nome === estado.nome ? estado.nomeEnviado : false };
    case "nomeEnviado":
      return { ...estado, nomeEnviado: true };
    case "card":
      return { ...estado, card: acao.card };
  }
}

/**
 * Primeira tela que falta para chegar a `indice`: uma pergunta sem resposta,
 * o cadastro (para nome) ou o nome (para plano e preço). null = pode seguir.
 */
export function telaPendente(estado: Estado, indice: number): number | null {
  for (let i = 0; i < indice; i += 1) {
    const chave = TELAS[i].resposta;
    if (chave && estado.respostas[chave] === undefined) return i;
  }
  const iEmail = TELAS.findIndex((t) => t.slug === "email");
  const iNome = TELAS.findIndex((t) => t.slug === "nome");
  // Basta o cadastro feito na tela 21, mesmo que o servidor ainda não tenha confirmado.
  if (indice > iEmail && !estado.eventId) return iEmail;
  if (indice > iNome && !estado.nome) return iNome;
  return null;
}
