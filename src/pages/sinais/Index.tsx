import { HeroSection } from "./components/HeroSection";
import { CommonMistakeSection } from "./components/CommonMistakeSection";
import { WhatChangedSection } from "./components/WhatChangedSection";
import { PredictiveHealthSection } from "./components/PredictiveHealthSection";
import { HowItFitsSection } from "./components/HowItFitsSection";
import { WhatItIsNotSection } from "./components/WhatItIsNotSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { ForWhoSection } from "./components/ForWhoSection";
import { FAQSection } from "./components/FAQSection";
import { CTASection } from "./components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-x-hidden">
      {/* Layout focado em leitura - sem distrações */}
      <div className="flex flex-col w-full">
        {/* Hero Section - Parar o Scroll */}
        <section className="w-full">
          <HeroSection />
        </section>

        {/* Seções de Conteúdo */}
        <div className="flex flex-col">
          {/* O erro comum sobre saúde */}
          <section className="w-full py-16 md:py-20 lg:py-24">
            <CommonMistakeSection />
          </section>

          {/* O que mudou nos últimos anos */}
          <section className="w-full py-16 md:py-20 lg:py-24 bg-gradient-to-r from-slate-50 to-gray-50">
            <WhatChangedSection />
          </section>

          {/* O que é saúde preditiva/preventiva */}
          <section className="w-full py-16 md:py-20 lg:py-24">
            <PredictiveHealthSection />
          </section>

          {/* Como o EssenciaLab se encaixa */}
          <section className="w-full py-16 md:py-20 lg:py-24 bg-gradient-to-r from-emerald-50 to-teal-50">
            <HowItFitsSection />
          </section>

          {/* O que o EssenciaLab NÃO é */}
          <section className="w-full py-16 md:py-20 lg:py-24">
            <WhatItIsNotSection />
          </section>

          {/* Benefícios práticos */}
          <section className="w-full py-16 md:py-20 lg:py-24 bg-gradient-to-r from-slate-50 to-gray-50">
            <BenefitsSection />
          </section>

          {/* Para quem é / Para quem não é */}
          <section className="w-full py-16 md:py-20 lg:py-24">
            <ForWhoSection />
          </section>

          {/* FAQ */}
          <section className="w-full py-16 md:py-20 lg:py-24 bg-gradient-to-r from-slate-50 to-gray-50">
            <FAQSection />
          </section>
        </div>

        {/* CTA Final - Convite calmo */}
        <section className="w-full">
          <CTASection />
        </section>
      </div>

      {/* Elementos Decorativos Sutis */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-100 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-teal-100 rounded-full opacity-10 blur-3xl"></div>
      </div>
    </div>
  );
};

export default Index;
