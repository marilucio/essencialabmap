// Copy da landing /map (somente português), revisada em 12/10/2026.
// História de uso fornecida pelo criador: cerca de 12 meses de uso exclusivo
// nos próprios atendimentos. Essa experiência não é validação clínica ou comercial.

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
    "Chegue à consulta com o caso organizado. No retorno, enxergue o que mudou.",
  subtitle:
    "Reúna relatos, sintomas, exames e histórico no EssenciaLab MAP. Prepare o atendimento, esclareça o que precisa ser investigado e acompanhe cada paciente com as informações do caso no mesmo lugar.",
  proof:
    "Criado por Marilúcio Rocha e usado há cerca de 12 meses, de forma exclusiva, nos seus próprios atendimentos.",
  ctaPrimary: "Começar o teste de 14 dias",
  ctaSecondary: "Conhecer o fluxo de um atendimento",
  videoTitle: "Apresentação do EssenciaLab MAP",
};

export const secondConsult = {
  title: "O paciente muda entre as consultas. Você precisa conseguir acompanhar.",
  intro:
    "Relatos no WhatsApp, exames em arquivos separados e anotações do atendimento anterior. Quando o paciente volta, reunir tudo de novo ocupa o tempo que você queria dedicar à conversa. O MAP organiza essas informações para você preparar, conduzir e revisar o acompanhamento.",
  doubts: [
    {
      question: "Como conhecer a queixa antes de começar a consulta?",
      screen: "Respostas",
      answer:
        "Você envia o questionário por link. O paciente registra sintomas, hábitos, medicamentos e contexto, e você consulta as respostas antes do encontro.",
    },
    {
      question: "Como consultar os exames junto com o que o paciente relata?",
      screen: "Exames e Teia Funcional",
      answer:
        "Reúna os laudos disponíveis e confira valores, unidades e referências. A Teia organiza os relatos em 12 sistemas para ajudar na leitura do caso.",
    },
    {
      question: "O que ainda preciso esclarecer durante o atendimento?",
      screen: "Pontos de atenção e perguntas investigativas",
      answer:
        "O MAP destaca informações do caso e sugere perguntas. Você confere as fontes, conversa com o paciente e registra suas observações nas anotações.",
    },
    {
      question: "Como sair do “melhorei um pouco” para uma conversa mais concreta?",
      screen: "Resumo, Evolução e relatório em PDF",
      answer:
        "Compare avaliações respondidas, mudanças nos relatos e exames compatíveis. Veja também o que o paciente informou sobre o plano anterior e suas dificuldades para segui-lo.",
    },
  ],
  closing:
    "Informações organizadas para uma conversa mais focada, do primeiro atendimento ao retorno.",
};

// Seção "Um caso conduzido no MAP": a demonstração visual principal da página.
// Caso ilustrativo existente. Algumas imagens representam interfaces anteriores;
// o texto descreve etapas de uso, sem prometer os controles dessas versões.
// Cada etapa aceita `image?: Screenshot` (sem imagem, o componente mostra um placeholder 16:10).
// Prints em public/images/map/caso/: 0N-<slug>.webp (1400×875) e 0N-<slug>-700.webp (700×438),
// gerados a partir das capturas fornecidas em 2026-09-15 (caso fictício L. M., 47 anos).
export const caseStudy = {
  eyebrow: "Caso ilustrativo",
  title: "Antes, durante e depois: acompanhe o fluxo de um caso",
  subtitle:
    "Este exemplo ilustra as etapas de um atendimento. Os dados foram alterados para preservar a privacidade. Algumas telas mostram versões anteriores da interface; no teste você conhece a organização atual do MAP.",
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
      title: "O paciente responde antes da consulta",
      text: "Você compartilha o link do questionário. Com consentimento para os dados de saúde, o paciente registra sua queixa, os sintomas e o contexto. As respostas ficam disponíveis para você preparar o encontro.",
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
      title: "Você confere os exames disponíveis",
      text: "Anexe os laudos que o paciente já tem e confira a extração. Valores, unidades e referências podem ser consultados junto com as demais informações do atendimento.",
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
      title: "Você conecta as informações à queixa principal",
      text: "A Teia agrupa os relatos, e a leitura do caso reúne pontos de atenção para revisão. Você cruza essas informações com os exames e com o que esclarece na conversa.",
      screen: "Leitura ilustrativa",
      image: {
        src: "/images/map/caso/03-organizar-o-caso.webp",
        srcSet: "/images/map/caso/03-organizar-o-caso-700.webp 700w, /images/map/caso/03-organizar-o-caso.webp 1400w",
        alt: "Interface ilustrativa anterior: aba Raciocínio do mesmo caso: assinatura do caso em texto, com os principais pontos identificados e o objetivo terapêutico principal, e ao lado a visão integrada dos sistemas, com oito sistemas analisados a partir de questionários, exames, análise facial e histórico",
        width: 1400,
        height: 875,
      } as Screenshot,
    },
    {
      slug: "sustenta-e-falta",
      moment: "Na investigação",
      title: "Você esclarece o que ainda falta saber",
      text: "Perguntas investigativas ajudam a direcionar a conversa. Uma informação ausente continua sendo uma lacuna: você decide o que precisa confirmar e quais próximos passos cabem ao atendimento.",
      screen: "Leitura ilustrativa",
      image: {
        src: "/images/map/caso/04-sustenta-e-falta.webp",
        srcSet: "/images/map/caso/04-sustenta-e-falta-700.webp 700w, /images/map/caso/04-sustenta-e-falta.webp 1400w",
        alt: "Interface ilustrativa anterior: hipótese em análise na aba Raciocínio, com selo automático de força moderada e três colunas: o que sustenta (quatro itens do relato), o que não se encaixa (sem dados conflitantes até o momento) e ainda falta saber (função renal, marcadores inflamatórios, exames de fezes e progesterona, não informados nesta avaliação)",
        width: 1400,
        height: 875,
      } as Screenshot,
    },
    {
      slug: "decisao-registrada",
      moment: "Na decisão",
      title: "Você define e revisa o plano",
      text: "Suas observações ficam nas anotações. O protocolo é um rascunho editável: você confere as propostas, ajusta o conteúdo e define o que faz sentido compartilhar com o paciente.",
      screen: "Leitura ilustrativa",
      image: {
        src: "/images/map/caso/05-decisao-registrada.webp",
        srcSet: "/images/map/caso/05-decisao-registrada-700.webp 700w, /images/map/caso/05-decisao-registrada.webp 1400w",
        alt: "Interface ilustrativa anterior: lista de seis hipóteses de trabalho ordenadas por força automática e, à direita, a primeira hipótese aberta com o campo Decisão do profissional marcado como Aguardar dado, a indicação de que a hipótese permanece aberta e ainda não orienta o protocolo, e a confirmação de decisão registrada nesta consulta",
        width: 1400,
        height: 875,
      } as Screenshot,
    },
    {
      slug: "comparar-no-retorno",
      moment: "No retorno",
      title: "No retorno, você compara o que foi registrado",
      text: "Uma nova avaliação permite revisar a evolução dos relatos e os exames comparáveis. O histórico ajuda a conversar sobre mudanças e dificuldades, sem atribuir automaticamente um resultado ao plano.",
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
    "O MAP organiza as informações. Você conduz o atendimento.",
    "Ausência de dado aparece como lacuna, nunca como normalidade.",
    "Sugestões e rascunhos precisam da sua revisão antes de orientar o paciente.",
  ],
  closing: "Veja como esse fluxo se encaixa na sua própria rotina.",
  cta: "Testar no meu próximo atendimento",
};

export const flow = {
  title: "Um fluxo que acompanha a rotina do consultório",
  intro:
    "Antes, você prepara. Durante, confere e esclarece. No retorno, compara e ajusta. O MAP reúne as informações que apoiam cada um desses momentos.",
  strip: ["Preparar a consulta", "Conduzir o atendimento", "Acompanhar os retornos"],
};

export const notDo = {
  title: "A tecnologia apoia. A responsabilidade profissional continua com você.",
  items: [
    {
      lead: "A Teia organiza relatos.",
      text: "Os 12 sistemas ajudam a visualizar o que o paciente informou. Um valor alto não confirma doença nem mede a função de um órgão.",
    },
    {
      lead: "A IA sugere; você revisa.",
      text: "Pontos de atenção, perguntas e propostas de protocolo são apoio ao atendimento. Você confere, edita e decide o que é adequado ao caso.",
    },
    {
      lead: "O que falta continua visível.",
      text: "Ausência de resposta ou exame não significa normalidade. Dados extraídos de laudos precisam ser conferidos antes da interpretação.",
    },
    {
      lead: "Sua habilitação define sua atuação.",
      text: "Solicitação de exames, interpretação e orientação dependem da formação e do escopo de cada profissional. O uso do MAP não amplia essas atribuições.",
    },
  ],
  closing:
    "Você mantém o julgamento profissional e usa o sistema para organizar o que precisa considerar.",
};

export const author = {
  title: "Feito por quem atende. Usado no próprio consultório.",
  name: "Marilúcio Rocha",
  role: "Naturopata ortomolecular · CRT 50859 · Criador do EssenciaLab MAP",
  paragraphs: [
    "Eu criei o MAP porque precisava de uma ferramenta melhor para os meus atendimentos. Já utilizava recursos digitais, mas queria manter relatos, sintomas, exames e histórico conectados ao longo do acompanhamento.",
    "Queria preparar a consulta com as informações reunidas e chegar aos retornos enxergando o que havia mudado e o que ainda precisava ser investigado.",
    "Nos primeiros três meses de desenvolvimento, continuei utilizando minha ferramenta anterior. Depois, passei a trabalhar exclusivamente com o MAP. Hoje, são cerca de 12 meses usando a plataforma na minha própria rotina, com pacientes reais.",
    "Essa experiência orientou a construção do sistema: preparar o atendimento, consultar as fontes, registrar observações, revisar o plano e acompanhar os retornos.",
    "Agora quero disponibilizar o MAP para outros profissionais que também buscam uma forma mais organizada de avaliar e acompanhar seus pacientes. O teste é o convite para você conhecer o fluxo e avaliar como ele se encaixa no seu consultório.",
  ],
  photo: {
    src: "/images/map/marilucio-rocha.webp",
    alt: "Marilúcio Rocha, naturopata e criador do EssenciaLab MAP, no consultório",
    width: 720,
    height: 960,
  } as Screenshot,
};

export const dataSecurity = {
  title: "Informações do paciente com acesso controlado",
  items: [
    "Consentimento para registro e compartilhamento dos dados de saúde antes do envio das respostas.",
    "Links de avaliação com token e prazo de validade.",
    "Políticas de acesso no banco de dados para separar as informações por conta profissional.",
    "Compartilhamento de relatórios e protocolos a partir das ações do profissional.",
    "Política de privacidade e termos disponíveis no rodapé para consulta.",
  ],
};

export const fit = {
  forTitle: "O MAP pode fazer sentido para você se",
  forItems: [
    "atende pacientes e realiza retornos programados;",
    "trabalha com alimentação, hábitos, sono, energia, digestão ou cuidado integrativo;",
    "quer consultar relatos, exames e histórico no mesmo contexto;",
    "busca uma devolutiva mais organizada e um plano que possa revisar;",
    "quer comparar avaliações e conversar sobre a evolução do acompanhamento.",
  ],
  notTitle: "Antes de começar, considere",
  notItems: [
    "o MAP precisa da sua leitura e revisão profissional;",
    "as pontuações dos questionários organizam relatos, sem confirmar diagnóstico;",
    "as propostas de protocolo devem respeitar sua habilitação e o contexto do paciente;",
    "o valor do acompanhamento cresce quando há novas avaliações para comparar.",
  ],
};

export const pricing = {
  title: "Conheça o MAP na sua rotina antes de escolher o plano",
  plan: "Profissional",
  trial: "14 dias grátis, sem cartão. Cancele quando quiser.",
  included: [
    "Avaliações iniciais, reavaliações e acompanhamento",
    "Teia Funcional de 12 sistemas",
    "Exames com extração e cálculos condicionados aos dados",
    "Pontos de atenção e perguntas investigativas",
    "Protocolos editáveis para revisão profissional",
    "Comparação de avaliações e relatórios em PDF",
    "Jornadas Guiadas Personalizadas (em piloto, conforme liberação)",
    "Treinamento em vídeo na área de membros",
    "Suporte por e-mail e WhatsApp",
  ],
  note: "O uso de recursos de IA segue os limites e a disponibilidade do plano.",
};

export const faq = {
  title: "Perguntas frequentes",
  items: [
    {
      q: "Como o MAP ajuda na preparação da consulta?",
      a: "Você envia um link para o paciente preencher o questionário pelo navegador. As respostas ficam disponíveis para consultar a queixa, os hábitos, os sintomas e o contexto antes do atendimento.",
    },
    {
      q: "Preciso ter exames para começar?",
      a: "Não. Você pode começar pelas respostas do paciente e incluir os laudos disponíveis quando fizer sentido. Exames ausentes permanecem como lacunas; os dados extraídos precisam ser conferidos. Solicitar ou interpretar exames depende da habilitação de quem atende.",
    },
    {
      q: "O que muda quando o paciente retorna?",
      a: "Com uma nova avaliação respondida, você consulta o histórico e compara relatos, indicadores e exames compatíveis. O paciente também informa como percebe a evolução e se conseguiu seguir o plano anterior. Sem uma avaliação anterior comparável, não há comparação de evolução.",
    },
    {
      q: "Qual é o papel da inteligência artificial?",
      a: "A IA ajuda a organizar a leitura do caso, sugerir perguntas e elaborar rascunhos de protocolo. Essas saídas podem conter erros e precisam da sua conferência. O MAP não confirma diagnóstico nem substitui seu julgamento profissional.",
    },
    {
      q: "O protocolo fica pronto para entregar ao paciente?",
      a: "Ele é um rascunho editável, com propostas de alimentação, rotina e recursos integrativos para sua avaliação. Você revisa, ajusta e define o que é adequado compartilhar. Usar o sistema não autoriza uma atuação além da sua habilitação.",
    },
    {
      q: "Para quais profissionais ele foi pensado?",
      a: "Principalmente para nutricionistas, naturopatas e terapeutas integrativos que acompanham pacientes em consultório. O benefício está em reunir informações e revisar o acompanhamento. Cada profissional utiliza os recursos compatíveis com sua formação e atuação.",
    },
    {
      q: "O MAP já é usado em atendimentos?",
      a: "Sim. Marilúcio Rocha, criador da plataforma, utiliza o MAP há cerca de 12 meses de forma exclusiva nos próprios atendimentos com pacientes reais. Essa experiência orientou a construção do fluxo, da preparação da consulta ao acompanhamento dos retornos. O teste permite avaliar como ele se encaixa na sua rotina.",
    },
    {
      q: "Como funciona o teste de 14 dias?",
      a: "Você conhece o MAP sem informar cartão. Depois do teste, pode escolher a assinatura mensal apresentada nesta página. O uso de IA segue os limites do plano, e a assinatura é cancelável.",
    },
    {
      q: "Meus dados e os do paciente ficam onde?",
      a: "Em banco de dados gerenciado, com políticas de acesso por conta profissional. O paciente consente antes de enviar as respostas. Consulte a política de privacidade e os termos no rodapé para conhecer as condições de uso e tratamento de dados.",
    },
    {
      q: "Tem treinamento?",
      a: "Sim. A área de membros reúne treinamento em vídeo, e você pode tirar dúvidas pelos canais de suporte para começar a usar o fluxo no seu atendimento.",
    },
    {
      q: "As Jornadas Guiadas estão disponíveis para todos?",
      a: "O recurso está em piloto controlado, conforme liberação. Quando disponível, você define o foco, revisa a formulação e a narrativa e aprova a entrega. O paciente precisa consentir para receber o áudio no aplicativo. Ele não substitui consulta ou tratamento.",
    },
  ],
};

export const finalCta = {
  title: "Experimente o MAP no próximo atendimento. Compare o fluxo com a sua rotina.",
  cta: "Começar o teste de 14 dias",
  whatsapp: "Conversar com Marilúcio sobre o uso no consultório",
};

export const legalNotice =
  "O EssenciaLab MAP apoia a organização de informações e o acompanhamento. Sugestões de IA e protocolos são rascunhos sujeitos à revisão profissional e não substituem avaliação, diagnóstico ou conduta de um profissional habilitado. Nenhum resultado clínico é prometido.";

// Bloco Jornadas Guiadas Personalizadas. Fonte: essencialab_guided_sessions_landing_map.md.
// Recurso em piloto controlado: sem alegação de eficácia clínica (seção 22 do documento).
export const guided = {
  eyebrow: "Jornadas Guiadas Personalizadas",
  status: "Novo no MAP · em piloto controlado",
  title: "O atendimento termina. O acompanhamento não precisa terminar junto.",
  lead:
    "Quando o recurso estiver disponível no piloto, você pode transformar um foco do acompanhamento em uma jornada de áudio personalizada. Você revisa e aprova o conteúdo antes da entrega, e o paciente consente para recebê-lo no aplicativo.",
  contrastTitle: "Um áudio preparado a partir de um foco definido por você.",
  contrastGeneric: "Você escolhe o objetivo e o contexto que podem entrar na jornada.",
  contrastPersonal:
    "Por exemplo: organizar uma fala curta em uma reunião e ensaiar esse momento. A jornada usa o contexto autorizado, sem inventar uma história ou a origem da dificuldade.",
  stepsTitle: "Como uma jornada nasce",
  steps: [
    {
      title: "Você define o foco",
      text: "Objetivo, contexto, sua hipótese de trabalho, a direção desejada e os temas que não podem aparecer.",
    },
    {
      title: "O sistema prepara um rascunho",
      text: "A partir do contexto autorizado, com fatos, hipóteses, direção e limites separados para sua revisão.",
    },
    {
      title: "Você revisa e aprova",
      text: "Edita, regenera ou aprova. Só uma formulação aprovada vira narrativa.",
    },
    {
      title: "A narrativa vira áudio",
      text: "Sete momentos, da chegada ao encerramento, com uma metáfora central e ensaio mental. Voz natural em português, calma, sem tom de locutora.",
    },
    {
      title: "O paciente ouve no aplicativo",
      text: "Com ou sem ambiente sonoro, pausa, retoma de onde parou e pode ouvir de novo quando quiser.",
    },
    {
      title: "Você consulta os registros de escuta",
      text: "Você consulta o início, a conclusão, novas escutas e o tempo registrado para conversar com o paciente sobre a experiência no próximo encontro.",
    },
  ],
  controlTitle: "Você continua no comando",
  controlText:
    "Você revisa a formulação e a narrativa e aprova a entrega. O sistema aplica verificações de linguagem e segurança; sua conferência continua necessária antes de disponibilizar o conteúdo ao paciente.",
  privacyItems: [
    "Consentimento explícito da paciente, revogável a qualquer momento.",
    "Áudio em armazenamento privado, com acesso controlado para o destinatário.",
    "As reflexões dela ficam com ela. Nada é compartilhado com você automaticamente.",
  ],
  relief: {
    title: "Sem roteiro, sem gravar, sem editar",
    text: "Você não escreve o texto do zero, não grava a própria voz, não monta trilha nem hospeda arquivo. Você cuida do raciocínio. O sistema cuida da produção.",
  },
  patientCard: {
    caption: "O que ela vê no aplicativo (ilustração)",
    label: "Sua Jornada",
    name: "O ponto certo da voz",
    by: "Preparada pelo seu profissional",
    duration: "10 min",
    button: "Ouvir minha jornada",
    time: "03:42 / 09:57",
    ambiences: ["Sem fundo", "Ambiente suave", "Relaxamento profundo", "Foco tranquilo"],
    ambienceNote: "Ambiente sonoro opcional. Batimentos binaurais são técnica experimental; melhor com fones estéreo.",
  },
  closing: "Uma possibilidade adicional de apoio entre encontros, conforme o foco e a revisão profissional.",
  note: "Recurso em piloto controlado, conforme liberação. Não substitui consulta, psicoterapia ou tratamento médico, e nenhum resultado clínico é prometido.",
  cta: "Começar o teste de 14 dias",
};
