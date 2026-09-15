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
  // As telas que respondem a cada dúvida aparecem na seção "Um caso conduzido no MAP" (caseStudy).
  doubts: [
    {
      question: "Ela relata muita coisa ao mesmo tempo. Por onde começo?",
      screen: "Resumo e Teia Funcional",
      answer:
        "As respostas agrupadas em 12 sistemas, com cobertura de cada um e a origem de cada valor.",
    },
    {
      question:
        "Ela trouxe três laudos de datas diferentes. O que dá para calcular e o que não dá?",
      screen: "Exames",
      answer:
        "Extração por documento, cálculos com estado explícito (calculado, dados faltantes, não elegível) e contexto conferido antes de calcular.",
    },
    {
      question:
        "Duas hipóteses se sustentam igual. Como registro sem escolher no chute?",
      screen: "Raciocínio",
      answer:
        "Para cada linha, o que sustenta, o que não se encaixa, o que falta, e a sua decisão registrada.",
    },
    {
      question: "Trinta dias depois, “um pouco melhor”. O que mudou de fato?",
      screen: "Delta MAP e Relatório de Evolução",
      answer:
        "T0 e retorno lado a lado, com o que não tem comparação marcado como ausente, não como zero.",
    },
  ],
  closing:
    "Nenhuma dessas respostas vem do sistema. Vêm de você, com as fontes organizadas na frente.",
};

// Seção "Um caso conduzido no MAP": a demonstração visual principal da página.
// Caso fictício provisório. Datas, exames, hipóteses, evidências e lacunas serão
// definidos depois da análise dos prints reais; por enquanto os textos são gerais.
// Cada etapa aceita `image?: Screenshot` (sem imagem, o componente mostra um placeholder 16:10).
// Prints em public/images/map/caso/: 0N-<slug>.webp (1400×875) e 0N-<slug>-700.webp (700×438),
// gerados a partir das capturas fornecidas em 2026-09-15 (caso fictício L. M., 47 anos).
export const caseStudy = {
  eyebrow: "Caso ilustrativo",
  title: "Do relato inicial ao retorno: um caso conduzido no MAP",
  subtitle:
    "Exemplo ilustrativo baseado em um fluxo real do EssenciaLab. Nome, idade, datas e valores foram alterados para preservar a privacidade. A lógica das telas é a do produto.",
  patient: {
    label: "Paciente",
    name: "L. M., 47 anos",
    complaints:
      "Cansaço ao acordar, sono fragmentado, ciclos irregulares e ganho de peso abdominal.",
  },
  steps: [
    {
      slug: "antes-da-consulta",
      moment: "Antes da consulta",
      title: "Ela responde no celular, antes de chegar",
      text: "Por link, com consentimento para dados de saúde. Sintomas, contexto e questionários entram no caso antes do primeiro encontro.",
      screen: "Respostas",
      image: {
        src: "/images/map/caso/01-antes-da-consulta.webp",
        srcSet: "/images/map/caso/01-antes-da-consulta-700.webp 700w, /images/map/caso/01-antes-da-consulta.webp 1400w",
        alt: "Aba Respostas da avaliação de L. M., respondida em 12/08/2026: dados pessoais, energia e bem-estar com nível de energia 4/10 e estresse 7/10, queixa principal com cansaço ao acordar, sono fragmentado, ciclos irregulares e ganho de peso abdominal, objetivo com o acompanhamento nas palavras dela, e blocos de sono e digestão",
        width: 1400,
        height: 875,
      } as Screenshot,
    },
    {
      slug: "reunir-o-que-existe",
      moment: "Na consulta",
      title: "Você reúne o que já existe",
      text: "Os laudos que ela já tem entram por upload. O MAP lista o que já existe no caso e o que ainda falta, antes de qualquer interpretação.",
      screen: "Exames",
      image: {
        src: "/images/map/caso/02-reunir-o-que-existe.webp",
        srcSet: "/images/map/caso/02-reunir-o-que-existe-700.webp 700w, /images/map/caso/02-reunir-o-que-existe.webp 1400w",
        alt: "Aba Exames do mesmo caso: área para enviar PDF ou imagem, dois laudos de datas diferentes já analisados, e a análise integrativa separando o que já existe no caso (hemograma, perfil lipídico, função hepática, glicemia e insulina, função tireoidiana, vitamina D) dos dados faltantes (função renal, marcadores inflamatórios, exames de fezes)",
        width: 1400,
        height: 875,
      } as Screenshot,
    },
    {
      slug: "organizar-o-caso",
      moment: "Na consulta",
      title: "O MAP organiza o caso",
      text: "Respostas e exames viram uma leitura só: os sistemas analisados, com a fonte de cada dado, e uma assinatura do caso com a queixa principal e os pontos identificados.",
      screen: "Raciocínio",
      image: {
        src: "/images/map/caso/03-organizar-o-caso.webp",
        srcSet: "/images/map/caso/03-organizar-o-caso-700.webp 700w, /images/map/caso/03-organizar-o-caso.webp 1400w",
        alt: "Aba Raciocínio do mesmo caso: assinatura do caso em texto, com os principais pontos identificados e o objetivo terapêutico principal, e ao lado a visão integrada dos sistemas, com oito sistemas analisados a partir de questionários, exames, análise facial, perfil hormonal e histórico",
        width: 1400,
        height: 875,
      } as Screenshot,
    },
    {
      slug: "sustenta-e-falta",
      moment: "Na investigação",
      title: "Você enxerga o que sustenta e o que falta",
      text: "Para cada hipótese: o que sustenta, o que não se encaixa e qual dado falta. Sistema sem resposta aparece como não avaliado, não como normal.",
      screen: "Raciocínio",
      image: {
        src: "/images/map/caso/04-sustenta-e-falta.webp",
        srcSet: "/images/map/caso/04-sustenta-e-falta-700.webp 700w, /images/map/caso/04-sustenta-e-falta.webp 1400w",
        alt: "Hipótese em análise na aba Raciocínio, com selo automático de força moderada e três colunas: o que sustenta (quatro itens do relato), o que não se encaixa (sem dados conflitantes até o momento) e ainda falta saber (função renal, marcadores inflamatórios, exames de fezes e progesterona, não informados nesta avaliação)",
        width: 1400,
        height: 875,
      } as Screenshot,
    },
    {
      slug: "decisao-registrada",
      moment: "Na decisão",
      title: "A decisão fica registrada, e é sua",
      text: "Você marca a sua posição sobre cada hipótese: priorizar, segundo plano, aguardar dado ou encerrar. O selo de força de evidência fica ao lado, separado da sua decisão.",
      screen: "Raciocínio",
      image: {
        src: "/images/map/caso/05-decisao-registrada.webp",
        srcSet: "/images/map/caso/05-decisao-registrada-700.webp 700w, /images/map/caso/05-decisao-registrada.webp 1400w",
        alt: "Lista de seis hipóteses de trabalho ordenadas por força automática e, à direita, a primeira hipótese aberta com o campo Decisão do profissional marcado como Aguardar dado, a indicação de que a hipótese permanece aberta e ainda não orienta o protocolo, e a confirmação de decisão registrada nesta consulta",
        width: 1400,
        height: 875,
      } as Screenshot,
    },
    {
      slug: "comparar-no-retorno",
      moment: "No retorno",
      title: "Trinta dias depois, você compara em vez de recomeçar",
      text: "Nova avaliação vinculada ao mesmo caso. O Delta mostra o que se moveu, o que precisa confirmar e o que não tem comparação.",
      screen: "Delta MAP",
      image: {
        src: "/images/map/caso/06-comparar-no-retorno.webp",
        srcSet: "/images/map/caso/06-comparar-no-retorno-700.webp 700w, /images/map/caso/06-comparar-no-retorno.webp 1400w",
        alt: "Delta MAP, comparação entre a consulta inicial de 12/08/2026 e o retorno de 11/09/2026: peso, sono, energia e qualidade de vida lado a lado com evolução favorável, ciclos sem mudança relevante marcados para manter acompanhamento e sintomas principais com melhora parcial",
        width: 1400,
        height: 875,
      } as Screenshot,
    },
  ],
  placeholderNote: "Tela em preparação",
  credibility: [
    "O MAP organiza o raciocínio. A decisão continua sendo sua.",
    "Ausência de dado aparece como lacuna, nunca como normalidade.",
    "O sistema apoia investigação e acompanhamento. Não substitui o julgamento profissional.",
  ],
  closing: "Agora pense no próximo paciente da sua agenda.",
  cta: "Analisar meu primeiro caso",
};

export const flow = {
  title: "Como funciona em um atendimento",
  intro:
    "Seis momentos, sempre na mesma ordem. A demonstração acima mostra cada um deles na tela.",
  strip: ["Preparar", "Avaliar", "Investigar", "Decidir", "Orientar", "Acompanhar"],
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
    srcSet: "/images/map/perfil-hormonal-700.webp 700w, /images/map/perfil-hormonal.webp 1400w",
    alt: "Aba Perfil Hormonal do MAP com o Instrumento dos Cinco Padrões apurado: dados da aplicação (datas de envio, resposta e apuração, período de referência de 30 dias, autoria e regra da apuração), os blocos A a E incluídos na apuração com botão de reapurar, e a tabela dos cinco subtotais com padrão, subtotal, âncora média e classificação da faixa",
    width: 1400,
    height: 989,
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
