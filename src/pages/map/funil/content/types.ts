// Formato do conteúdo do funil. Cada idioma (pt.ts, es.ts, en.ts) implementa
// FunilContent inteiro: se faltar um campo, o arquivo não compila.
//
// Marcadores aceitos nos textos (ver text.ts): {paciente} {pacientes} {consulta}
// {conduta} {dias} {bonus} {horas} {n} {minutos} {minutosMes} {nome} {área}
// {faixa} {prioridade}. Com a primeira letra maiúscula ({Pacientes}), o valor
// sai capitalizado.

export type Lang = "pt" | "es" | "en";
export type Area = "nutricionista" | "naturopata" | "terapeuta" | "estetica" | "outra";
export type Eixo = "antes" | "decisao" | "retorno";

export type Vocab = {
  paciente: string;
  pacientes: string;
  consulta: string;
  conduta: string;
};

type Quatro = readonly [string, string, string, string];
type Cinco = readonly [string, string, string, string, string];

export type LinhaExame = {
  exame: string;
  valor: string;
  unidade: string;
  ref: string;
  estado: "normal" | "fora" | "falta";
};

export type DeltaCaso = {
  nome: string;
  periodo: string;
  resumo: string;
  barras: readonly { sistema: string; antes: number; depois: number }[];
};

export type Faq = { q: string; a: string };

export type FunilContent = {
  lang: Lang;
  htmlLang: string;
  locale: string;
  marca: string;
  blocos: readonly [string, string, string];
  ui: { voltar: string; continuar: string; fechar: string; progresso: string };
  vocab: Record<Area, Vocab>;

  abertura: { rotulo: string; titulo: string; barra: string; selos: readonly [string, string] };
  area: { titulo: string; sub: string; opcoes: Record<Area, string> };
  pacientes: { titulo: string; sub: string; faixas: Cinco };
  primeira: { titulo: string; opcoes: Quatro; frase: string };
  antes: {
    rotulo: string;
    titulo: string;
    texto: string;
    sistemas: readonly string[];
    pontos: readonly [string, string];
    nota: string;
  };
  depois: { titulo: string; sub: string; opcoes: Quatro };
  invisivel: {
    titulo: string;
    tituloQuaseNada: string;
    unidadeHoras: string;
    unidadeMinutos: string;
    conta: string;
    texto: string;
    textoQuaseNada: string;
  };
  exames: { titulo: string; opcoes: Quatro };
  extracao: {
    rotulo: string;
    titulo: string;
    texto: string;
    textoRaramente: string;
    arquivo: string;
    colunas: readonly [string, string, string];
    linhas: readonly LinhaExame[];
    nota: string;
  };
  escala1: { citacao: string; pergunta: string; extremos: readonly [string, string] };
  retorno: { titulo: string; opcoes: Quatro };
  resumo: {
    rotulo: string;
    titulo: string;
    texto: string;
    queixaRotulo: string;
    queixa: string;
    desde: string;
    colunas: readonly { rotulo: string; itens: string }[];
    mudancasRotulo: string;
    mudancas: readonly { sistema: string; antes: number; depois: number }[];
    atencaoRotulo: string;
    atencao: string;
    esclarecerRotulo: string;
    esclarecer: string;
    destravaRotulo: string;
    destrava: string;
    printAlt: string;
    legendaPrint: string;
  };
  sumiu: { titulo: string; opcoes: Quatro; frase: string };
  delta: {
    rotulo: string;
    titulo: string;
    texto: string;
    nota: string;
    pdf: string;
    casos: readonly DeltaCaso[];
  };
  escala2: { citacao: string; pergunta: string; extremos: readonly [string, string] };
  decisao: {
    titulo: string;
    linhas: readonly [string, string, string];
    autor: { texto: string; assinatura: string; fotoAlt: string };
  };
  agenda: { titulo: string; opcoes: Quatro };
  prioridade: { titulo: string; opcoes: Quatro };
  perfil: {
    titulo: string;
    medidor: string;
    eixos: Record<Eixo, string>;
    linhas: { area: string; pacientes: string; trabalho: string; trabalhoMinutos: string; prioridade: string };
    caixa: string;
    assinatura: string;
  };
  montando: { titulo: string; etapas: Quatro };
  email: {
    titulo: string;
    placeholder: string;
    consentimento: string;
    botao: string;
    erroEmail: string;
  };
  nome: { titulo: string; sub: string; placeholder: string; botao: string };
  plano: {
    titulo: string;
    diaUm: string;
    diaVarios: string;
    dia1: string;
    dia1SemAgenda: string;
    dia2: string;
    dia3: string;
    dia3Raramente: string;
    dias4a6: string;
    dias4a6Horas: string;
    dias4a6Minutos: string;
    dia7Indicacao: string;
    dia7: string;
    rodape: string;
    rodapeMinutos: string;
    botao: string;
  };
  precos: {
    titulo: string;
    sub: string;
    cards: {
      anual: { nome: string; porDia: string; porDiaRotulo: string; linha: string; selo: string };
      mensal: { nome: string; porDia: string; porDiaRotulo: string; linha: string };
    };
    linha: string;
    botao: string;
    indicacao: { destaque: string; texto: string };
    tudoTitulo: string;
    hoje: string;
    diaN: string;
    tudo: readonly string[];
    quemTitulo: string;
    faqTitulo: string;
    faq: readonly Faq[];
    barra: string;
    barraBotao: string;
  };
  avisoLegal: string;
  emailPlano: {
    preheader: string;
    botao: string;
    sair: string;
    rodape: string;
    sairPagina: { titulo: string; texto: string };
  };
};
