import { HeroSection } from "./components/HeroSection";
import { ProblemSection } from "./components/ProblemSection";
import { SolutionSection } from "./components/SolutionSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { ProofSection } from "./components/ProofSection";
import { FooterCTA } from "./components/FooterCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50 overflow-x-hidden">
      {/* Layout sem distrações - Funil Linear */}
      <div className="flex flex-col w-full">
        {/* Hero Section - Parar o Scroll */}
        <section className="w-full">
          <HeroSection />
        </section>

        {/* Seções de Conteúdo */}
        <div className="flex flex-col">
          {/* Problema - Agitação */}
          <section className="w-full py-12 md:py-16 lg:py-20">
            <ProblemSection />
          </section>

          {/* Solução - Nova Oportunidade */}
          <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-r from-emerald-50 to-green-50">
            <SolutionSection />
          </section>

          {/* Benefícios - Bullets com Curiosidade */}
          <section className="w-full py-12 md:py-16 lg:py-20">
            <BenefitsSection />
          </section>

          {/* Prova Social - Quebrar Objeções */}
          <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-r from-green-50 to-emerald-50">
            <ProofSection />
          </section>
        </div>

        {/* Footer CTA - Ação Final */}
        <section className="w-full">
          <FooterCTA />
        </section>
      </div>

      {/* Elementos Decorativos */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-green-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-100 rounded-full opacity-10 blur-3xl"></div>
      </div>
    </div>
  );
};

export default Index;
