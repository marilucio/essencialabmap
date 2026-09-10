// Copy da landing /map (somente português). Fonte: prompt-reescrita-pagina-map.md.
// Itens marcados com [CONFIRMAR] nos comentários dependem de validação do Marilúcio.

export type Screenshot = {
  src: string;
  alt: string;
  width: number;
  height: number;
  srcSet?: string;
};

export const hero = {
  eyebrow:
    "Para nutricionistas, naturopatas e terapeutas integrativos que acompanham pacientes",
  title:
    "Ela responde antes da consulta. Você chega sabendo o que já existe e o que ainda falta.",
  subtitle:
    "O EssenciaLab MAP organiza relatos, exames e hipóteses de cada caso e registra a sua decisão, para que no retorno você compare, em vez de recomeçar.",
  ctaPrimary: "Começar o teste de 7 dias",
  ctaSecondary: "Ver um caso conduzido no MAP",
  videoTitle: "Apresentação do EssenciaLab MAP",
};

export const secondConsult = {
  title: "Você já sabe o que fazer. O que trava é o que vem antes e em volta.",
  intro:
    "A primeira consulta costuma correr bem. O problema aparece no retorno, quando ela diz “melhorei um pouco” e você olha para o plano sem saber qual parte funcionou.",
  doubts: [
    {
      question: "Ela relata muita coisa ao mesmo tempo. Por onde começo?",
      screen: "Resumo e Teia Funcional",
      answer:
        "As respostas agrupadas em 12 sistemas, com cobertura de cada um e a origem de cada valor.",
      image: {
        src: "/images/map/teia-funcional.webp",
        srcSet: "/images/map/teia-funcional-640.webp 640w, /images/map/teia-funcional.webp 1229w",
        alt: "Aba Teia Funcional do MAP: doze sistemas dispostos em círculo com a pontuação de cada um, e ao lado a interpretação do sistema endócrino com perguntas investigativas sugeridas",
        width: 1229,
        height: 693,
      } as Screenshot,
    },
    {
      question:
        "Ela trouxe três laudos de datas diferentes. O que dá para calcular e o que não dá?",
      screen: "Exames",
      answer:
        "Extração por documento, cálculos com estado explícito (calculado, dados faltantes, não elegível) e contexto conferido antes de calcular.",
      image: {
        src: "/images/map/exames.webp",
        alt: "Aba Exames do MAP: área de upload de laudos em PDF ou imagem e painel de análise integrativa com função renal, perfil lipídico, glicemia e função hepática",
        width: 510,
        height: 410,
      } as Screenshot,
    },
    {
      question:
        "Duas hipóteses se sustentam igual. Como registro sem escolher no chute?",
      screen: "Raciocínio",
      answer:
        "Para cada linha, o que sustenta, o que não se encaixa, o que falta, e a sua decisão registrada.",
      image: {
        src: "/images/map/raciocinio.webp",
        alt: "Aba Raciocínio do MAP: resumo do raciocínio do caso, focos principais listados e bloco de próximos passos",
        width: 390,
        height: 435,
      } as Screenshot,
    },
    {
      question: "Trinta dias depois, “um pouco melhor”. O que mudou de fato?",
      screen: "Delta MAP e Relatório de Evolução",
      answer:
        "T0 e retorno lado a lado, com o que não tem comparação marcado como ausente, não como zero.",
      image: {
        src: "/images/map/delta-comparacao.webp",
        alt: "Comparação de análises no MAP: avaliação anterior e avaliação atual lado a lado, com sinais vitais e emoção dominante de cada uma",
        width: 405,
        height: 390,
      } as Screenshot,
    },
  ],
  closing:
    "Nenhuma dessas respostas vem do sistema. Vêm de você, com as fontes organizadas na frente.",
};

export const flow = {
  title: "Como funciona em um atendimento",
  strip: ["Preparar", "Avaliar", "Investigar", "Decidir", "Orientar", "Acompanhar"],
  steps: [
    {
      moment: "Antes da consulta",
      text: "A paciente responde a avaliação por link, no próprio celular, com consentimento para dados de saúde.",
    },
    {
      moment: "Na consulta",
      text: "Resumo, Respostas e Teia mostram o que foi relatado e o que precisa de confirmação.",
    },
    {
      moment: "Com os exames dela",
      text: "Upload do laudo, conferência dos valores extraídos, cálculos disponíveis e o que ficou pendente.",
    },
    {
      moment: "Na decisão",
      text: "Na aba Raciocínio, você registra sua posição sobre cada hipótese: priorizar, deixar em segundo plano, aguardar dado, encerrar.",
    },
    {
      moment: "Entre consultas",
      text: "No Perfil Hormonal, quando pertinente, o diário de 30 dias registra o que foi combinado.",
    },
    {
      moment: "No retorno",
      text: "Nova avaliação vinculada ao mesmo caso; o Delta mostra o que se moveu.",
    },
  ],
};

export const notDo = {
  title: "O que o MAP não faz, e por que isso importa",
  items: [
    {
      lead: "Não diagnostica.",
      text: "Um valor alto na Teia é contribuição de respostas, não medida de órgão.",
    },
    {
      lead: "Não decide por você.",
      text: "Toda hipótese tem um selo automático de força de evidência e, separado dele, a sua decisão registrada. A sua prevalece.",
    },
    {
      lead: "Não transforma ausência em normalidade.",
      text: "Sistema sem resposta aparece como não avaliado. Exame não enviado aparece como lacuna.",
    },
    {
      lead: "Não amplia o seu escopo.",
      text: "O que você pode solicitar, interpretar e orientar depende da sua habilitação e do seu conselho. O MAP trabalha com o que a paciente já trouxe.",
    },
  ],
  closing:
    "Isso é o que permite usar o registro do MAP numa conversa com o médico dela: você afirma o que as fontes sustentam, e nada além.",
};

export const hormonal = {
  title: "Para quem acompanha mulheres entre 40 e 55 anos",
  text: "O Perfil Hormonal tem instrumento próprio de 45 itens em cinco blocos, apurado pelo profissional, com síntese escrita por você (o sistema não preenche a hipótese), seis sentinelas de segurança para revisar antes de orientar, diário de 30 dias configurável e comparação entre aplicações.",
  notice:
    "Os pontos de corte do instrumento são convenção operacional declarada, sem validação psicométrica. Ele orienta hipótese; não confirma nem estabelece diagnóstico.",
  image: {
    src: "/images/map/perfil-hormonal.webp",
    alt: "Aba Perfil Hormonal do MAP: resumo do perfil com os eixos tireoidiano, adrenal, sexual e metabolismo, cada um com o seu estado, e o aviso de que o relatório não substitui avaliação clínica individual",
    width: 460,
    height: 340,
  } as Screenshot,
};

export const author = {
  title: "Feito por quem atende",
  name: "Marilúcio Rocha",
  role: "Naturopata ortomolecular · CRT 50859",
  // [CONFIRMAR] frase final ("O MAP nasceu da minha própria dificuldade...") antes de publicar.
  text: "Sou Marilúcio Rocha, naturopata ortomolecular (CRT 50859), quinze anos de consultório, com predominância de mulheres em transição menopausal. Tenho formação em leitura de exames, e minhas pacientes sempre chegam com laudos. O MAP nasceu da minha própria dificuldade de manter relato, exame e decisão no mesmo lugar ao longo de noventa dias.",
  photo: {
    src: "/images/map/marilucio-rocha.webp",
    alt: "Marilúcio Rocha, de jaleco branco e braços cruzados, em pé no consultório",
    width: 720,
    height: 960,
  } as Screenshot,
};

export const dataSecurity = {
  title: "Dados de saúde, tratados como dados de saúde",
  // [CONFIRMAR] cada item contra o código do MAP antes de publicar.
  items: [
    "Consentimento explícito da paciente antes do envio das respostas.",
    "Acesso por token com validade nos links de avaliação.",
    "Dados criptografados em trânsito (TLS) e isolamento por conta com políticas de acesso no banco (RLS).",
    "Imagens da análise facial não são armazenadas; apenas os resultados.",
    "Adequação à LGPD, com política de privacidade e termos linkados no rodapé.",
  ],
};

export const fit = {
  forTitle: "É para você se",
  forItems: [
    "atende e acompanha pacientes;",
    "quer as fontes do caso organizadas antes de decidir;",
    "atende mulheres em transição menopausal ou quer estruturar esse atendimento;",
    "precisa registrar decisão e comparar retornos.",
  ],
  notTitle: "Não é para você se",
  notItems: [
    "procura um software que decida ou prescreva;",
    "espera diagnóstico automático;",
    "não atende pacientes (o plano pessoal serve melhor);",
    "espera instrumento psicometricamente validado.",
  ],
};

export const pricing = {
  title: "Um plano, sem surpresa",
  plan: "Profissional",
  trial: "7 dias grátis, sem cartão. Cancele quando quiser.",
  // [CONFIRMAR] limites reais de uso, inclusive cota de análises, antes de manter "ilimitados".
  included: [
    "Avaliações e retornos ilimitados",
    "Teia Funcional de 12 sistemas",
    "Exames com extração e cálculos",
    "Raciocínio com decisão registrada",
    "Perfil Hormonal",
    "Delta e relatórios em PDF",
    "Treinamento em vídeo na área de membros",
    "Suporte por e-mail e WhatsApp",
  ],
};

export const faq = {
  title: "Perguntas frequentes",
  items: [
    {
      q: "Preciso solicitar exames para usar o MAP?",
      a: "Não. O MAP trabalha com os laudos que a paciente traz. Quem tem habilitação para solicitar continua solicitando; quem não tem, orienta a paciente a conversar com o médico dela. O sistema não cria pedidos de exame.",
    },
    {
      q: "O MAP usa inteligência artificial?",
      a: "Há uma etapa de redação automática na aba Raciocínio, sobre uma estrutura determinística de regras. Ela não pode inventar evidência nem aumentar a força de uma hipótese, e toda saída passa por revisão sua antes de virar decisão.",
    },
    {
      q: "Funciona na minha especialidade?",
      a: "Foi desenhado para profissionais não médicos que acompanham pacientes: nutrição, naturopatia, terapias integrativas, biomedicina. Não amplia o escopo de nenhuma categoria.",
    },
    {
      q: "E se eu não gostar?",
      a: "O teste de 7 dias não pede cartão. Depois, é assinatura mensal ou anual, cancelável a qualquer momento.",
    },
    {
      // [CONFIRMAR] resposta sobre o banco e o acesso por conta.
      q: "Meus dados e os da paciente ficam onde?",
      a: "Em banco de dados gerenciado, com acesso separado por conta profissional e políticas de acesso aplicadas no próprio banco. A paciente consente antes de enviar as respostas, e a política de privacidade e os termos estão linkados no rodapé.",
    },
    {
      // [Atualizar quando o curso em módulos for gravado.]
      q: "Tem treinamento?",
      a: "Sim, na área de membros: percurso em vídeo do primeiro atendimento ao retorno.",
    },
  ],
};

export const finalCta = {
  title:
    "Na próxima paciente que chegar com tudo ao mesmo tempo, você vai ter as fontes na frente.",
  cta: "Começar o teste de 7 dias",
  whatsapp: "Tirar uma dúvida no WhatsApp antes de começar",
};

export const legalNotice =
  "O EssenciaLab MAP organiza dados e raciocínio; não diagnostica, não prescreve e não decide pelo profissional. Nenhum resultado clínico é prometido.";
