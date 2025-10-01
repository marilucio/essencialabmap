import { useEffect } from 'react';
import { HeroSection } from "./components/HeroSection";
import { ProblemSection } from "./components/ProblemSection";
import { SolutionSection } from "./components/SolutionSection";
import { ProofSection } from "./components/ProofSection";
import { OfferSection } from "./components/OfferSection";
import { GuaranteeSection } from "./components/GuaranteeSection";
import { FAQSection } from "./components/FAQSection";
import { FooterCTA } from "./components/FooterCTA";
import TestimonialsSection from "./components/TestimonialsSection";

const Index = () => {
  useEffect(() => {
    // Meta Pixel Code
    (function(f: any, b: Document, e: string, v: string, n: any, t: HTMLScriptElement, s: HTMLScriptElement) {
      if (f.fbq) return;
      n = f.fbq = function(...args: any[]) {
        n.callMethod ? n.callMethod.apply(n, args) : n.queue.push(args);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e) as HTMLScriptElement;
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0] as HTMLScriptElement;
      s.parentNode?.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js', null, null as any, null as any);
    
    if (typeof window.fbq !== 'undefined') {
      window.fbq('init', '1289139885831063');
      window.fbq('track', 'PageView');
    }

    // SEO Meta tags
    document.title = "Kit SOS Ansiedade – recupere noites tranquilas e uma mente em paz";
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Transforme noites de medo em tranquilidade. Kit completo com protocolo CALMA#, guia nutricional e ferramentas científicas para ansiedade, pânico e insônia.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Transforme noites de medo em tranquilidade. Kit completo com protocolo CALMA#, guia nutricional e ferramentas científicas para ansiedade, pânico e insônia.';
      document.head.appendChild(meta);
    }

    // Meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'ansiedade, pânico, insônia, sono, protocolo CALMA, kit SOS ansiedade, saúde mental, técnicas respiração');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'ansiedade, pânico, insônia, sono, protocolo CALMA, kit SOS ansiedade, saúde mental, técnicas respiração';
      document.head.appendChild(meta);
    }

    // Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Kit SOS Ansiedade – recupere noites tranquilas e uma mente em paz');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      meta.content = 'Kit SOS Ansiedade – recupere noites tranquilas e uma mente em paz';
      document.head.appendChild(meta);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Transforme noites de medo em tranquilidade. Kit completo com protocolo CALMA#, guia nutricional e ferramentas científicas para ansiedade, pânico e insônia.');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:description');
      meta.content = 'Transforme noites de medo em tranquilidade. Kit completo com protocolo CALMA#, guia nutricional e ferramentas científicas para ansiedade, pânico e insônia.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 overflow-x-hidden">
      {/* Layout flexível inteligente com espaçamento responsivo */}
      <div className="flex flex-col w-full">
        {/* Hero Section - Primeira impressão */}
        <section className="w-full">
          <HeroSection />
        </section>

        {/* Seções de conteúdo com espaçamento inteligente */}
        <div className="flex flex-col space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20">
          {/* Problema - Identificação */}
          <section className="w-full">
            <ProblemSection />
          </section>

          {/* Solução - Apresentação */}
          <section className="w-full">
            <SolutionSection />
          </section>

          {/* Prova Social - Credibilidade */}
          <section className="w-full bg-gradient-to-r from-blue-50 to-indigo-50">
            <ProofSection />
          </section>

          {/* Oferta - Conversão */}
          <section className="w-full bg-gradient-to-r from-green-50 to-emerald-50">
            <OfferSection />
          </section>

          {/* Garantia - Segurança */}
          <section className="w-full">
            <GuaranteeSection />
          </section>

          {/* Depoimentos - Prova Social */}
          <section className="w-full">
            <TestimonialsSection />
          </section>

          {/* FAQ - Objeções */}
          <section className="w-full bg-gradient-to-r from-gray-50 to-slate-50">
            <FAQSection />
          </section>
        </div>

        {/* Footer CTA - Última oportunidade */}
        <section className="w-full mt-8 sm:mt-12 md:mt-16">
          <FooterCTA />
        </section>
      </div>

      {/* Elementos decorativos responsivos */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        {/* Círculos decorativos que se adaptam ao tamanho da tela */}
        <div className="absolute top-10 left-4 sm:top-20 sm:left-10 w-32 h-32 sm:w-64 sm:h-64 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-10 right-4 sm:bottom-20 sm:right-10 w-40 h-40 sm:w-80 sm:h-80 bg-indigo-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-green-100 rounded-full opacity-10 blur-3xl"></div>
      </div>
    </div>
  );
};

export default Index;