import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import IdentificationSection from "./components/IdentificationSection";
import UnderstandingSection from "./components/UnderstandingSection";
import QuemSouSection from "./components/QuemSouSection";
import SolutionSection from "./components/SolutionSection";
import BonusSection from "./components/BonusSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";
import FAQSection from "./components/FAQSection";

const Index = () => {
  useEffect(() => {
    
    // SEO Meta tags
    document.title =
      "Kit SOS Ansiedade – recupere noites tranquilas e uma mente em paz";

    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Transforme noites de medo em tranquilidade. Kit completo com protocolo CALMA#, guia nutricional e ferramentas científicas para ansiedade, pânico e insônia."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Transforme noites de medo em tranquilidade. Kit completo com protocolo CALMA#, guia nutricional e ferramentas científicas para ansiedade, pânico e insônia.";
      document.head.appendChild(meta);
    }

    // Meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute(
        "content",
        "ansiedade, pânico, insônia, sono, protocolo CALMA, kit SOS ansiedade, saúde mental, técnicas respiração"
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "keywords";
      meta.content =
        "ansiedade, pânico, insônia, sono, protocolo CALMA, kit SOS ansiedade, saúde mental, técnicas respiração";
      document.head.appendChild(meta);
    }

    // Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute(
        "content",
        "Kit SOS Ansiedade – recupere noites tranquilas e uma mente em paz"
      );
    } else {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:title");
      meta.content =
        "Kit SOS Ansiedade – recupere noites tranquilas e uma mente em paz";
      document.head.appendChild(meta);
    }

    const ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );
    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        "Transforme noites de medo em tranquilidade com técnicas científicas comprovadas."
      );
    } else {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:description");
      meta.content =
        "Transforme noites de medo em tranquilidade com técnicas científicas comprovadas.";
      document.head.appendChild(meta);
    }

    // Cleanup function
    return () => {
      document.title = "Landing Page MAP";
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section com Countdown */}
      <HeroSection />

      {/* Seção de Identificação - Pain Points */}
      <IdentificationSection />

      {/* Seção de Empatia */}
      <UnderstandingSection />

      {/* Seção Quem Sou */}
      <QuemSouSection />

      {/* Seção da Solução - 3 Produtos */}
      <SolutionSection />

      {/* Seção de Bônus */}
      <BonusSection />

      {/* Depoimentos WhatsApp */}
      <TestimonialsSection />

      {/* CTA com Preços */}
      <CTASection />

      {/* FAQ */}
      <FAQSection />

      {/* Footer */}
      <footer className="bg-teal-800 text-white py-12 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">
            Pronto para transformar a sua vida?
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Não deixe que mais uma noite de desespero passe sem agir. Clique no
            botão abaixo e dê o primeiro passo para recuperar sua tranquilidade.
          </p>

          <button
            onClick={() => {
              if (
                typeof window !== "undefined" &&
                typeof (window as any).fbq !== "undefined"
              ) {
                (window as any).fbq("track", "InitiateCheckout", {
                  content_name: "Kit SOS",
                  value: 44.0,
                  currency: "BRL",
                });
              }
              if (typeof window !== "undefined") {
                setTimeout(() => {
                  window.location.href = "https://pay.kiwify.com.br/KDSJr1d";
                }, 500);
              }
            }}
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-bold text-xl px-12 py-6 rounded-full transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105"
          >
            🚀 SIM, QUERO MEU KIT SOS ANSIEDADE
          </button>

          <div className="border-t border-teal-700 pt-8 mt-8">
            <p className="text-lg font-semibold mb-2">
              © 2025 Protocolo SOS Ansiedade Natural. Todos os direitos
              reservados.
            </p>
            <div className="text-sm opacity-70 leading-relaxed space-y-2">
              <p>
                <strong>⚠️ Aviso Importante:</strong> Este protocolo natural não
                substitui acompanhamento médico profissional. Se você tem
                sintomas graves de ansiedade, depressão ou pensamentos suicidas,
                procure ajuda médica imediatamente.
              </p>
              <p>
                <strong>📋 Sobre os Resultados:</strong> Os depoimentos
                apresentados são experiências individuais reais. Resultados
                podem variar de pessoa para pessoa. Este método é um complemento
                ao tratamento médico, não uma substituição.
              </p>
              <p>
                <strong>🔬 Base Científica:</strong> As técnicas apresentadas
                são baseadas em estudos de CBT-I, mindfulness e técnicas de
                respiração. Desenvolvido por naturopata com experiência em saúde
                integrativa.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm">
              <a
                href="/termos-de-uso"
                className="hover:text-yellow-300 transition-colors"
              >
                Termos de Uso
              </a>
              <a
                href="/politica-de-privacidade"
                className="hover:text-yellow-300 transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="/contato"
                className="hover:text-yellow-300 transition-colors"
              >
                Contato
              </a>
              <a
                href="/lgpd"
                className="hover:text-yellow-300 transition-colors"
              >
                LGPD
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
