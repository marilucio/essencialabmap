import { HeroSection } from "./components/HeroSection";
import { ProblemSection } from "./components/ProblemSection";
import { SolutionSection } from "./components/SolutionSection";
import { ProofSection } from "./components/ProofSection";
import { OfferSection } from "./components/OfferSection";
import { GuaranteeSection } from "./components/GuaranteeSection";
import { FAQSection } from "./components/FAQSection";
import { FooterCTA } from "./components/FooterCTA";

const Index = () => {
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