import React from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { CountdownTimer } from "./CountdownTimer";

export const FooterCTA = () => {
  const handleCTAClick = () => {
    // Dispara evento antes de redirecionar
    if (typeof window.fbq !== "undefined") {
      window.fbq("track", "InitiateCheckout", {
        content_name: "Kit SOS Ansiedade",
        value: 97.0,
        currency: "BRL",
      });
    }

    // Depois redireciona para checkout
    window.location.href = "https://pay.kiwify.com.br/KDSJr1d";
  };

  // Benefícios finais
  const finalBenefits = [
    {
      icon: "⏰",
      title: "Acesso Imediato",
      description: "Receba o material agora e use ainda hoje",
    },
    {
      icon: "🛡️",
      title: "Garantia Total",
      description: "14 dias para testar sem risco",
    },
    {
      icon: "📱",
      title: "Suporte VIP",
      description: "Ajuda especializada quando precisar",
    },
    {
      icon: "🎁",
      title: "Bônus Inclusos",
      description: "Material extra sem custo adicional",
    },
  ];

  // Elementos de urgência
  const urgencyElements = [
    "✅ Download Imediato",
    "✅ Garantia 14 Dias",
    "✅ Suporte Incluído",
    "✅ Método Brasileiro",
  ];

  return (
    <section className="py-12 lg:py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent"></div>

      <div className="container mx-auto container-responsive relative z-10">
        {/* Card principal */}
        <div className="max-w-5xl mx-auto">
          <Card className="bg-gradient-to-br from-white to-blue-50 text-gray-800 p-6 lg:p-12 rounded-3xl shadow-glow border-4 border-yellow-400 relative overflow-hidden">
            {/* Elementos decorativos */}
            <div className="absolute top-0 right-0 w-32 h-32 lg:w-48 lg:h-48 bg-gradient-to-br from-yellow-200/30 to-orange-200/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 lg:w-36 lg:h-36 bg-gradient-to-tr from-blue-200/30 to-green-200/30 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              {/* Cabeçalho */}
              <div className="text-center mb-8 lg:mb-12">
                <div className="text-6xl lg:text-8xl mb-4">🌙</div>
                <h2 className="heading-responsive font-bold text-gray-800 mb-4 lg:mb-6">
                  Sua Primeira Noite Tranquila
                  <span className="block text-blue-600">Te Espera Agora</span>
                </h2>

                <p className="text-responsive text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6 lg:mb-8">
                  Não deixe mais uma noite passar acordado às 3h da madrugada.
                  <span className="font-bold text-blue-600">
                    {" "}
                    O Método CALMA# pode mudar sua vida hoje mesmo.
                  </span>
                </p>
              </div>

              {/* Grid de benefícios */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8 lg:mb-12">
                {finalBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="text-center p-4 lg:p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50"
                  >
                    <div className="text-3xl lg:text-4xl mb-2 lg:mb-3">
                      {benefit.icon}
                    </div>
                    <h3 className="font-bold text-sm lg:text-base text-gray-800 mb-1 lg:mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-xs lg:text-sm text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Seção de preço e CTA */}
              <div className="text-center space-y-6 lg:space-y-8">
                {/* Preço */}
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl p-6 lg:p-8 inline-block">
                  <div className="text-sm lg:text-base opacity-90 mb-2">
                    Investimento único de
                  </div>
                  <div className="text-3xl lg:text-5xl font-bold mb-2">
                    R$ 44,00
                  </div>
                  <div className="text-sm lg:text-base opacity-90">
                    Sem mensalidades • Acesso vitalício
                  </div>
                </div>

                {/* Botão principal */}
                <Button
                  onClick={handleCTAClick}
                  size="xl"
                  className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-800 font-bold text-base lg:text-xl py-6 lg:py-8 px-8 lg:px-16 rounded-2xl shadow-glow transition-smooth transform hover:scale-105"
                >
                  🛌 SIM! QUERO DORMIR TRANQUILO HOJE MESMO
                </Button>

                {/* Elementos de confiança */}
                <div className="flex flex-wrap justify-center gap-3 lg:gap-6 text-sm lg:text-base">
                  {urgencyElements.map((element, index) => (
                    <span key={index} className="text-green-600 font-medium">
                      {element}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card de urgência */}
              <div className="mt-8 lg:mt-12">
                <Card className="p-4 lg:p-6 bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 text-center">
                  <p className="text-sm lg:text-base font-semibold text-red-600 mb-2">
                    ⚠️ OFERTA LIMITADA
                  </p>
                  <p className="text-xs lg:text-sm text-red-500">
                    Apenas até dia 15/10/2025 com todos os bônus - depois volta
                    ao valor normal sem o kit de áudios neuroacústicos!
                  </p>
                </Card>
              </div>
            </div>
          </Card>
        </div>

        {/* Footer legal */}
        <div className="text-center mt-8 lg:mt-12 text-white/80">
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-xs lg:text-sm">
              © 2024 EssenciaLab - Naturopatia Ortomolecular |
              <a href="#" className="hover:text-white transition-colors ml-1">
                Política de Privacidade
              </a>{" "}
              |
              <a href="#" className="hover:text-white transition-colors ml-1">
                Termos de Uso
              </a>
            </p>
            <p className="text-xs lg:text-sm opacity-70">
              Este produto não substitui acompanhamento médico profissional.
              Consulte sempre um profissional de saúde qualificado.
            </p>
            <p className="text-xs opacity-60">
              Resultados podem variar de pessoa para pessoa. Método desenvolvido
              com base em técnicas de relaxamento e higiene do sono
              cientificamente comprovadas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
