// Conteúdo do funil em português. Fonte: funil-map-pt.md (21/10/2026), com as
// decisões D1–D9 de 21/10. Textos marcados com "protótipo" vêm de
// prototipo-funil-map.html (D2). Os 12 sistemas são os da Teia Funcional v3 do
// app (src/domain/teia/taxonomy.ts no essencialabnew).
import type { FunilContent } from "./types";

export const pt: FunilContent = {
  lang: "pt",
  htmlLang: "pt-BR",
  locale: "pt-BR",
  marca: "SISTEMA MAP",
  blocos: ["Antes da consulta", "No retorno", "Seu plano"],
  ui: { voltar: "Voltar", continuar: "Continuar", fechar: "Fechar", progresso: "Progresso" },
  vocab: {
    nutricionista: { paciente: "paciente", pacientes: "pacientes", consulta: "consulta", conduta: "plano alimentar" },
    naturopata: { paciente: "paciente", pacientes: "pacientes", consulta: "consulta", conduta: "plano terapêutico" },
    terapeuta: { paciente: "cliente", pacientes: "clientes", consulta: "sessão", conduta: "plano terapêutico" },
    estetica: { paciente: "cliente", pacientes: "clientes", consulta: "sessão", conduta: "protocolo" },
    // D1: "plano de cuidado" no lugar de "conduta" (evita "o conduta").
    outra: { paciente: "paciente", pacientes: "pacientes", consulta: "consulta", conduta: "plano de cuidado" },
  },

  abertura: {
    rotulo: "SISTEMA MAP · ESSENCIALAB",
    titulo: "Um plano para usar o MAP nos seus atendimentos desta semana",
    barra: "Preparando as perguntas…",
    selos: ["Em uso em consultório há 12 meses", "Português, espanhol e inglês"],
  },
  area: {
    titulo: "Qual é a sua área?",
    sub: "Responda algumas perguntas e montamos o seu plano de {dias} dias com o MAP.",
    opcoes: {
      nutricionista: "Nutricionista",
      naturopata: "Naturopata",
      terapeuta: "Terapeuta integrativo",
      estetica: "Estética integrativa",
      outra: "Outra área da saúde",
    },
  },
  pacientes: {
    titulo: "Quantos {pacientes} você atende por mês?",
    sub: "Usamos esse número para dimensionar o seu plano.",
    faixas: ["1–10", "11–25", "26–50", "51–100", "Mais de 100"],
  },
  primeira: {
    titulo:
      "Quando o {paciente} chega com várias queixas e muita história para contar, o que mais acontece com você?",
    opcoes: [
      "A {consulta} passa do horário",
      "Saio sem saber por onde começar",
      "Fico com a sensação de que algo passou batido",
      "Dou conta, mas termino cansado",
    ],
    frase: "Ter as informações não basta. O que pesa é organizar tudo a tempo de decidir.",
  },
  antes: {
    rotulo: "ANTES DA CONSULTA · TEIA FUNCIONAL",
    titulo: "Você entra na {consulta} sabendo por onde começar.",
    texto:
      "O {paciente} responde pelo link. Antes de ele chegar, o MAP organiza as respostas em 12 sistemas, destaca o que se repete e sugere as perguntas que ainda faltam.",
    sistemas: [
      "Gastrointestinal",
      "Imunológico",
      "Endócrino",
      "Neurológico",
      "Cardiovascular",
      "Hepático (detoxificação)",
      "Renal",
      "Respiratório",
      "Tegumentar (pele)",
      "Musculoesquelético",
      "Reprodutivo",
      "Psicológico/emocional",
    ],
    // protótipo (D2)
    pontos: [
      "Cansaço, queda de cabelo e unhas fracas aparecem juntos",
      "Pergunta que falta: há quanto tempo o sono piorou?",
    ],
    nota: "Exemplo ilustrativo.",
  },
  depois: {
    titulo: "Depois que o {paciente} sai, quanto do atendimento ainda falta terminar?",
    sub: "Organizar a anamnese, montar o {conduta}, registrar a evolução.",
    opcoes: ["Quase nada", "Até 30 minutos", "De 30 minutos a 1 hora", "Mais de 1 hora"],
  },
  invisivel: {
    titulo: "Esse é o trabalho que o {paciente} não vê.",
    tituloQuaseNada: "Você já resolve quase tudo na {consulta}.",
    unidadeHoras: "horas por mês",
    unidadeMinutos: "minutos por mês",
    conta: "{n} {pacientes} × {minutos} minutos depois de cada {consulta}",
    texto:
      "O MAP parte do que já foi registrado: a síntese do caso, o {conduta} em rascunho editável e o PDF para o {paciente}. Você revisa e ajusta, em vez de começar do zero.",
    textoQuaseNada:
      "Então o que pesa é o retorno. O MAP guarda a síntese de cada {consulta} para você ver o que mudou quando o {paciente} voltar.",
  },
  exames: {
    titulo: "Quando o {paciente} traz vários exames, o que dá mais trabalho?",
    opcoes: [
      "Achar o que importa no meio de tudo",
      "Relacionar com as queixas",
      "Decidir o que muda na sua conduta",
      "Meus {pacientes} raramente trazem exames",
    ],
  },
  extracao: {
    rotulo: "EXAMES · EXTRAÇÃO",
    titulo: "Envie o PDF. Os valores entram sozinhos.",
    texto:
      "O MAP separa valores, unidades e referências, liga o que encontrou às queixas e mostra quais exames estão faltando. A leitura e a decisão continuam suas.",
    textoRaramente:
      "E quando o {paciente} não traz exames, você começa pelas respostas dele. Os exames entram quando chegarem.",
    // protótipo (D2)
    arquivo: "laudo_laboratorio.pdf · 3 páginas",
    colunas: ["Exame", "Valor", "Ref."],
    linhas: [
      { exame: "Ferritina", valor: "18", unidade: "ng/mL", ref: "30–400", estado: "fora" },
      { exame: "Vitamina D", valor: "22", unidade: "ng/mL", ref: "30–100", estado: "fora" },
      { exame: "TSH", valor: "—", unidade: "", ref: "não enviado", estado: "falta" },
      { exame: "Glicemia", valor: "92", unidade: "mg/dL", ref: "70–99", estado: "normal" },
    ],
    nota: "Exemplo ilustrativo.",
  },
  escala1: {
    citacao: "«Já terminei uma {consulta} com a sensação de que deixei algum detalhe passar batido.»",
    pergunta: "Quanto isso parece com você?",
    extremos: ["Nada", "Totalmente"],
  },
  retorno: {
    titulo:
      "Quando o {paciente} volta dizendo que está igual, você consegue ver rapidamente o que mudou desde a última {consulta}?",
    opcoes: [
      "Sim, está tudo registrado",
      "Mais ou menos, procuro nas anotações",
      "Não, dependo da memória",
      "Muitos nem chegam a voltar",
    ],
  },
  resumo: {
    rotulo: "RESUMO DO RETORNO",
    titulo: "No retorno, a {consulta} começa daqui.",
    texto:
      "Antes de o {paciente} sentar, você já sabe o que melhorou, o que piorou, o que não mudou e qual pergunta destrava a próxima decisão.",
    queixaRotulo: "Queixa principal",
    queixa: "Melhorou das dores, mas ainda sente uma dor no ombro persistente",
    desde: "desde a consulta de 26/08/2026",
    colunas: [
      { rotulo: "Melhorou", itens: "Energia, Imunológico, Endócrino" },
      { rotulo: "Piorou", itens: "Reprodutivo" },
      { rotulo: "Sem mudança", itens: "Sono, Estresse, Digestão" },
    ],
    mudancasRotulo: "Principais mudanças",
    mudancas: [
      { sistema: "Energia", antes: 6, depois: 8 },
      { sistema: "Imunidade", antes: 7, depois: 8 },
      { sistema: "Estresse", antes: 8, depois: 7 },
      { sistema: "Digestão", antes: 8, depois: 8 },
    ],
    atencaoRotulo: "O que merece atenção agora",
    atencao: "Dor persistente no ombro direito",
    esclarecerRotulo: "O que ainda precisa ser esclarecido",
    esclarecer: "Já dosou TSH ou T4 livre no último ano?",
    destravaRotulo: "Decisão que destrava:",
    destrava: "registrar TSH antes de atribuir os sintomas a outra causa",
    printAlt:
      "Aba Resumo do MAP de 20/10/2026, com queixa principal, sistemas que melhoraram, pioraram ou não mudaram, principais mudanças, o que merece atenção e perguntas a esclarecer. O nome da paciente e a nota profissional estão borrados.",
    legendaPrint: "Tela real do MAP, de 20/10/2026, com o nome da paciente ocultado. Toque para ampliar.",
  },
  sumiu: {
    titulo:
      "Quando um {paciente} some depois da primeira ou segunda {consulta}, você sabe em que ponto ele se perdeu?",
    opcoes: ["Quase sempre", "Às vezes", "Raramente", "Nunca tinha pensado nisso"],
    frase: "É difícil corrigir o que não se vê. Por isso o retorno precisa mostrar alguma coisa.",
  },
  delta: {
    rotulo: "DELTA MAP · COMPARAÇÃO ENTRE CONSULTAS",
    titulo: "O {paciente} volta quando enxerga o que mudou.",
    texto:
      "O MAP compara a avaliação inicial com a do retorno, sistema por sistema, inclusive o que piorou. O {paciente} passa a ver o que está sendo acompanhado, além do {conduta}.",
    nota: "Três relatórios reais de pacientes do consultório, usados com autorização.",
    pdf: "Relatório em PDF entregue ao {paciente}",
    casos: [
      {
        nome: "Genilda",
        periodo: "23/03 → 10/06/2026",
        resumo: "5 melhoraram · 3 pioraram · 4 estáveis",
        barras: [
          { sistema: "Digestão", antes: 2, depois: 6 },
          { sistema: "Energia", antes: 4, depois: 6 },
          { sistema: "Sono", antes: 5, depois: 6 },
          { sistema: "Imunidade", antes: 4, depois: 5 },
        ],
      },
      {
        nome: "Marcelo",
        periodo: "18/06 → 23/07/2026",
        resumo: "6 melhoraram · 1 piorou · 5 estáveis",
        barras: [
          { sistema: "Digestão", antes: 7, depois: 8 },
          { sistema: "Energia", antes: 7, depois: 8 },
          { sistema: "Sono", antes: 8, depois: 9 },
          { sistema: "Imunidade", antes: 8, depois: 9 },
        ],
      },
      {
        nome: "Maikon",
        periodo: "30/03 → 03/07/2026",
        resumo: "5 melhoraram · 2 pioraram · 5 estáveis",
        barras: [
          { sistema: "Digestão", antes: 6, depois: 9 },
          { sistema: "Energia", antes: 7, depois: 8 },
          { sistema: "Sono", antes: 6, depois: 10 },
          { sistema: "Imunidade", antes: 6, depois: 8 },
        ],
      },
    ],
  },
  escala2: {
    citacao:
      "«Quando o {paciente} pergunta por que precisa voltar, nem sempre consigo mostrar o que está sendo acompanhado.»",
    pergunta: "Quanto isso parece com você?",
    extremos: ["Nada", "Totalmente"],
  },
  decisao: {
    titulo: "Quem decide continua sendo você.",
    linhas: [
      "O MAP organiza, compara e aponta o que revisar.",
      "Você confirma, edita ou descarta cada ponto.",
      "O {paciente} recebe o seu {conduta}, com o seu nome.",
    ],
    autor: {
      texto:
        "Uso o MAP no meu consultório há 12 meses. Construí para chegar à consulta sabendo onde investigar, sem abrir mão de nenhuma decisão.",
      assinatura: "Marilúcio Rocha · Naturopata · CRT 50859",
      fotoAlt: "Marilúcio Rocha",
    },
  },
  agenda: {
    titulo: "Você tem {pacientes} agendados para os próximos 7 dias?",
    opcoes: ["Sim, mais de um", "Sim, um", "Só retornos", "Ainda não"],
  },
  prioridade: {
    titulo: "O que você quer resolver primeiro?",
    opcoes: [
      "Chegar à {consulta} sabendo por onde começar",
      "Terminar o atendimento sem horas de trabalho depois",
      "Não deixar nada passar batido",
      "Ver o que mudou no retorno e fazer o {paciente} voltar",
    ],
  },
  perfil: {
    titulo: "O seu perfil",
    medidor: "Onde o MAP pesa mais no seu caso:",
    eixos: { antes: "Antes da consulta", decisao: "Na decisão", retorno: "No retorno" },
    linhas: {
      area: "Área · {área}",
      pacientes: "{Pacientes} por mês · {faixa}",
      trabalho: "Trabalho depois da {consulta} · {horas} h por mês",
      trabalhoMinutos: "Trabalho depois da {consulta} · {minutosMes} min por mês",
      prioridade: "Prioridade · {prioridade}",
    },
    caixa: "O mesmo sistema que uso no consultório há 12 meses.",
    assinatura: "Marilúcio Rocha",
  },
  montando: {
    titulo: "Montando o seu plano de {dias} dias",
    etapas: [
      "Lendo suas respostas…",
      "Escolhendo por onde começar…",
      "Organizando a sequência de uso…",
      "Preparando o seu primeiro atendimento com o MAP…",
    ],
  },
  email: {
    titulo: "O seu plano de {dias} dias está pronto. Para onde enviamos?",
    placeholder: "Seu e-mail",
    consentimento:
      "Aceito receber meu plano e conteúdos sobre o Sistema MAP por e-mail. Posso sair quando quiser.",
    botao: "Ver meu plano",
    erroEmail: "Confira o e-mail digitado.",
  },
  nome: {
    titulo: "Como podemos te chamar?",
    sub: "",
    placeholder: "Seu primeiro nome",
    botao: "Ver meu plano",
  },
  plano: {
    titulo: "{nome}, este é o seu plano de {dias} dias com o MAP",
    diaUm: "Dia {a}",
    diaVarios: "Dias {a} a {b}",
    dia1: "Crie sua conta e envie o questionário para um {paciente}. Leva 5 minutos.",
    dia1SemAgenda: "Crie sua conta e envie o questionário para um {paciente} que vai voltar em breve. Leva 5 minutos.",
    dia2: "Ele responde pelo link. Abra a teia e os pontos de atenção antes da {consulta}.",
    dia3: "Envie os exames que ele trouxe e veja o que está faltando.",
    dia3Raramente: "Registre a queixa principal e veja quais exames o MAP sugere investigar.",
    dias4a6: "Atenda com o MAP aberto. No fim, revise o {conduta} sugerido e gere o PDF.",
    dias4a6Horas: "É nessa etapa que ficam hoje as suas {horas} horas por mês de trabalho depois da {consulta}.",
    dias4a6Minutos: "É nessa etapa que ficam hoje os seus {minutosMes} minutos por mês de trabalho depois da {consulta}.",
    dia7Indicacao:
      "Indique um colega. Quando ele se cadastrar pelo seu link, você ganha mais {bonus} dias, a tempo de abrir o Resumo do retorno do seu primeiro {paciente}.",
    dia7: "Repita com mais dois {pacientes}. Quando o primeiro voltar, abra o Resumo do retorno dele.",
    rodape:
      "Com {n} {pacientes} por mês, são cerca de {horas} horas de trabalho depois da {consulta} que passam a começar organizadas.",
    rodapeMinutos:
      "Com {n} {pacientes} por mês, são cerca de {minutosMes} minutos de trabalho depois da {consulta} que passam a começar organizados.",
    botao: "Ver como começar",
  },
  precos: {
    titulo: "Comece hoje o seu plano de {dias} dias",
    sub: "Grátis por {dias} dias, sem cartão. Depois, escolha como continuar.",
    cards: {
      anual: {
        nome: "Profissional anual",
        porDia: "R$ 1,84",
        porDiaRotulo: "por dia",
        linha: "R$ 670 por ano · equivale a R$ 55,83 por mês",
        selo: "2 meses grátis",
      },
      mensal: {
        nome: "Profissional mensal",
        porDia: "R$ 2,23",
        porDiaRotulo: "por dia",
        linha: "R$ 67 por mês",
      },
    },
    linha: "{dias} dias grátis · sem cartão · cancele quando quiser",
    botao: "Começar meus {dias} dias grátis",
    indicacao: {
      destaque: "+{bonus} dias por indicação.",
      texto:
        "Indique um colega pelo seu link. Quando ele se cadastrar, você ganha mais {bonus} dias grátis, mesmo que o seu teste esteja no fim.",
    },
    tudoTitulo: "Tudo o que vem no MAP",
    hoje: "Hoje",
    diaN: "Dia {dias}",
    tudo: [
      "questionário por link",
      "extração de exames",
      "teia de 12 sistemas",
      "pontos de atenção e perguntas investigativas",
      "protocolos editáveis",
      "resumo do retorno",
      "PDF",
      "Delta MAP",
      "treinamento em vídeo",
      "suporte por e-mail e WhatsApp",
    ],
    quemTitulo: "Quem fez",
    faqTitulo: "Perguntas frequentes",
    // Respostas da landing /map (src/pages/map/content.ts), sem a palavra IA (D4).
    faq: [
      {
        q: "Preciso de exames para começar?",
        a: "Não. Você pode começar pelas respostas do paciente e incluir os laudos disponíveis quando fizer sentido. Exames ausentes permanecem como lacunas; os dados extraídos precisam ser conferidos. Solicitar ou interpretar exames depende da habilitação de quem atende.",
      },
      {
        q: "O que muda no retorno?",
        a: "Com uma nova avaliação respondida, você consulta o histórico e compara relatos, indicadores e exames compatíveis. O paciente também informa como percebe a evolução e se conseguiu seguir o plano anterior. Sem uma avaliação anterior comparável, não há comparação de evolução.",
      },
      {
        q: "Os protocolos vão prontos para o paciente?",
        a: "Ele é um rascunho editável, com propostas de alimentação, rotina e recursos integrativos para sua avaliação. Você revisa, ajusta e define o que é adequado compartilhar. Usar o sistema não autoriza uma atuação além da sua habilitação.",
      },
      {
        q: "Para quais profissionais é?",
        a: "Principalmente para nutricionistas, naturopatas e terapeutas integrativos que acompanham pacientes em consultório. O benefício está em reunir informações e revisar o acompanhamento. Cada profissional utiliza os recursos compatíveis com sua formação e atuação.",
      },
      {
        q: "Como funciona o teste?",
        a: "Você conhece o MAP sem informar cartão. Depois do teste, pode escolher o plano mensal ou anual apresentado nesta página. A assinatura é cancelável.",
      },
      {
        q: "Onde ficam os dados dos pacientes?",
        a: "Em banco de dados gerenciado, com políticas de acesso por conta profissional. O paciente consente antes de enviar as respostas. Consulte a política de privacidade e os termos no rodapé para conhecer as condições de uso e tratamento de dados.",
      },
    ],
    barra: "{dias} dias grátis · sem cartão",
    barraBotao: "Começar",
  },
  // Aviso legal da landing sem a palavra IA (D4). A landing segue com o original.
  avisoLegal:
    "O EssenciaLab MAP apoia a organização de informações e o acompanhamento. Sugestões e protocolos são rascunhos sujeitos à revisão profissional e não substituem avaliação, diagnóstico ou conduta de um profissional habilitado. Nenhum resultado clínico é prometido.",
  emailPlano: {
    preheader: "As etapas dos seus primeiros {dias} dias com o MAP, com as datas.",
    botao: "Começar meus {dias} dias grátis",
    sair: "Não quero mais receber estes e-mails",
    rodape: "Você recebeu este e-mail porque montou seu plano em essencialab.site/map/comecar.",
    sairPagina: {
      titulo: "Pronto",
      texto: "Você não vai mais receber e-mails do Sistema MAP neste endereço.",
    },
  },
};
