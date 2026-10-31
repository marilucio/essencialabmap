// Páginas públicas da raiz que saem pré-renderizadas no build (scripts/prerender-map.mjs).
// Cada uma vira um HTML próprio em dist/ com título, descrição e canonical da rota,
// servido por uma regra de rewrite em public/_redirects.
//
// index: false → a página sai com <meta name="robots" content="noindex"> e fica fora
// do sitemap. Usado em /funcionalidades e /precos porque o conteúdo está desatualizado
// (preços antigos, números sem fonte, recursos já removidos) até ser revisado.

export const SITE = "https://essencialab.site";

export const ROUTES = [
  {
    url: "/",
    out: "home.html",
    index: true,
    title: "Análise facial para consultores de óleos essenciais | EssenciaLab",
    description:
      "A ferramenta que transforma a câmera do celular em porta de entrada para novos clientes. Análise facial gera mapas de bem-estar personalizados e abre conversas naturais. Teste grátis 7 dias.",
  },
  {
    url: "/funcionalidades",
    out: "funcionalidades.html",
    index: false,
    title: "Funcionalidades | EssenciaLab",
    description:
      "Conheça as funcionalidades do EssenciaLab: análise facial pelo celular, questionários de avaliação e o Sistema MAP para acompanhar clientes.",
  },
  {
    url: "/precos",
    out: "precos.html",
    index: false,
    title: "Planos e preços | EssenciaLab",
    description: "Planos do EssenciaLab para consultores e profissionais de saúde.",
  },
  {
    url: "/central-de-ajuda",
    out: "central-de-ajuda.html",
    index: true,
    title: "Central de Ajuda | EssenciaLab",
    description:
      "Respostas sobre conta, assinatura, análise facial e Sistema MAP do EssenciaLab, com os canais de suporte por e-mail e WhatsApp.",
  },
  {
    url: "/contato",
    out: "contato.html",
    index: true,
    title: "Contato | EssenciaLab",
    description: "Fale com a equipe do EssenciaLab por e-mail, WhatsApp ou pelo formulário de contato.",
  },
  {
    url: "/termos-de-uso",
    out: "termos-de-uso.html",
    index: true,
    title: "Termos de Uso | EssenciaLab",
    description: "Termos de uso do aplicativo e da plataforma EssenciaLab.",
  },
  {
    url: "/politica-de-privacidade",
    out: "politica-de-privacidade.html",
    index: true,
    title: "Política de Privacidade | EssenciaLab",
    description: "Como o EssenciaLab coleta, usa e protege dados pessoais e de saúde.",
  },
  {
    url: "/lgpd",
    out: "lgpd.html",
    index: true,
    title: "LGPD | EssenciaLab",
    description: "Como o EssenciaLab cumpre a Lei Geral de Proteção de Dados (Lei 13.709/2018) e como exercer seus direitos.",
  },
];

// Entram no sitemap além das ROUTES indexáveis (têm HTML próprio, fora deste script).
export const EXTRA_SITEMAP_URLS = ["/map"];

const founder = {
  "@type": "Person",
  name: "Marilúcio Rocha",
  jobTitle: "Naturopata ortomolecular",
};

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "EssenciaLab",
  url: `${SITE}/`,
  logo: `${SITE}/images/map/brand/favicon-192.png`,
  email: "contato@essencialab.app",
  founder,
};

export const homeAppLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "EssenciaLab",
  url: `${SITE}/`,
  applicationCategory: "HealthApplication",
  operatingSystem: "iOS, Android",
  inLanguage: ["pt-BR", "en", "es"],
  description:
    "Análise facial pelo celular que gera mapas de bem-estar e recomendações de óleos essenciais para consultores e aromaterapeutas.",
  author: founder,
  offers: [
    { "@type": "Offer", name: "Plano Análise Facial (mensal)", price: "29.90", priceCurrency: "BRL" },
    { "@type": "Offer", name: "Plano Profissional + Sistema MAP (mensal)", price: "67.00", priceCurrency: "BRL" },
  ],
};

export const mapAppLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "EssenciaLab MAP",
  url: `${SITE}/map`,
  applicationCategory: "HealthApplication",
  operatingSystem: "Web, iOS, Android",
  inLanguage: "pt-BR",
  description:
    "Sistema para nutricionistas, naturopatas e terapeutas integrativos reunirem relatos, sintomas, exames e histórico do paciente e acompanharem os retornos.",
  author: founder,
  offers: { "@type": "Offer", name: "Plano Profissional (mensal)", price: "67.00", priceCurrency: "BRL" },
};

export function faqLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}
