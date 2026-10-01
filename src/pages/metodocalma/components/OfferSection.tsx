import React from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { CountdownTimer } from "./CountdownTimer";
import peacefulImageSrc from "/images/peaceful-sleep-VdZartzL.jpg";

export const OfferSection = () => {
  const handleCTAClick = () => {
  if (typeof window !== 'undefined' && typeof (window as any).fbq !== 'undefined') {
    (window as any).fbq('track', 'InitiateCheckout', {
      content_name: 'Kit SOS',
      value: 44.00,  // Confirme que está 44, não 97
      currency: 'BRL'
    });
  }
  
  setTimeout(() => {
    window.location.href = 'https://pay.kiwify.com.br/KDSJr1d';
  }, 500);
};

  const bonuses = [
    {
      title: "Protocolo SOS Ansiedade",
      description:
        "Método completo para controlar ansiedade em situações críticas",
      value: "R$ 97,00",
      isMain: true,
    },
    {
      title: "BÔNUS 1: Kit de Áudios Neuroacústicos",
      description:
        "5 áudios especializados: Indução do Sono, Crise de Ansiedade, Meditação Noturna, Foco Mental e Energia/Vitalidade com mensagens subliminares",
      value: "R$ 97,00",
      isMain: false,
      isSpecial: true,
    },
    {
      title: "BÔNUS 2: Fichas para Pensamentos Intrusivos",
      description:
        "Ferramentas práticas para identificar e neutralizar pensamentos negativos automáticos",
      value: "R$ 37,00",
      isMain: false,
    },
    {
      title: "BÔNUS 3: Trilhas Rápidas de Alívio",
      description:
        "Técnicas de 2-5 minutos para alívio imediato em momentos de crise",
      value: "R$ 29,90",
      isMain: false,
    },
    {
      title: "BÔNUS 4: Guia Visual do Ciclo do Pânico",
      description:
        "Infográfico explicativo sobre as fases do pânico e como interrompê-las",
      value: "R$ 27,00",
      isMain: false,
    },
    {
      title: "BÔNUS 5: Escalas de Monitoramento",
      description:
        "Ferramentas de acompanhamento para medir progresso e identificar gatilhos",
      value: "R$ 47,00",
      isMain: false,
    },
  ];

  // Cálculo automático baseado nos valores dos bônus
  const protocolValue = 97.0;
  const totalValue = bonuses.reduce((sum, bonus) => {
    const value = parseFloat(bonus.value.replace("R$ ", "").replace(",", "."));
    return sum + value;
  }, 0);
  const totalWithBonuses = totalValue;
  const currentPrice = 44.0;
  const savings = totalValue - currentPrice;

  return (
    <section
      id="offer-section"
      className="py-8 md:py-16 lg:py-20 px-4 bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white relative overflow-hidden"
    >
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/30 to-transparent"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/10 to-transparent"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-8 md:mb-12">
          <div className="bg-red-600 text-white rounded-full px-3 md:px-6 py-2 md:py-3 inline-block mb-4 md:mb-6">
            <span className="font-bold text-xs md:text-base">
              🔥 OFERTA LIMITADA
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            🎯 Transforme Sua Vida
            <span className="block text-yellow-300">Por Apenas R$ 44,00</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-green-100 max-w-3xl mx-auto leading-relaxed">
            Tudo que você precisa para ter sua primeira noite tranquila hoje
            mesmo + bônus exclusivos
          </p>
        </div>

        {/* Card da oferta principal */}
        <Card className="p-4 md:p-6 lg:p-8 bg-white text-gray-800 rounded-xl shadow-glow border-2 border-yellow-400 mb-6 md:mb-8">
          <div className="grid lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center mb-6 md:mb-8">
            <div className="order-2 lg:order-1">
              <img
                src={peacefulImageSrc}
                alt="Pessoa dormindo tranquilamente"
                className="rounded-xl w-full h-auto max-h-[250px] md:max-h-[300px] object-cover"
              />
            </div>

            <div className="space-y-3 md:space-y-4 order-1 lg:order-2">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-center lg:text-left">
                Protocolo SOS Ansiedade Completo
              </h3>

              {/* Lista de produtos e bônus */}
              <div className="space-y-3 md:space-y-4">
                {bonuses.map((bonus, index) => (
                  <div
                    key={index}
                    className={`p-3 md:p-4 rounded-lg border ${
                      bonus.isMain
                        ? "bg-blue-50 border-blue-200"
                        : bonus.isSpecial
                        ? "bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-400 shadow-lg"
                        : "bg-green-50 border-green-200"
                    }`}
                  >
                    <div className="flex items-start gap-2 md:gap-3">
                      <span
                        className={`text-base md:text-lg flex-shrink-0 ${
                          bonus.isMain
                            ? "text-blue-600"
                            : bonus.isSpecial
                            ? "text-yellow-600"
                            : "text-green-600"
                        }`}
                      >
                        {bonus.isMain ? "✅" : bonus.isSpecial ? "🎵" : "🎁"}
                      </span>
                      <div className="flex-1">
                        <h4
                          className={`font-semibold text-xs md:text-sm mb-1 ${
                            bonus.isMain
                              ? "text-blue-800"
                              : bonus.isSpecial
                              ? "text-yellow-800"
                              : "text-green-800"
                          }`}
                        >
                          {bonus.title}
                          {bonus.isSpecial && (
                            <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                              GRÁTIS ATÉ 15/10
                            </span>
                          )}
                        </h4>
                        <p className="text-xs text-gray-600 leading-relaxed mb-1">
                          {bonus.description}
                        </p>
                        <p className="text-xs font-bold text-green-600">
                          {bonus.isMain
                            ? `Valor: ${bonus.value}`
                            : `Valor: ${bonus.value} - GRÁTIS`}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Resumo de valores */}
          <div className="bg-gray-100 rounded-lg p-3 md:p-4 mb-6 md:mb-8">
            <div className="space-y-2 md:space-y-3">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
                <span className="text-sm md:text-base text-gray-600">
                  Protocolo SOS Ansiedade:
                </span>
                <span className="text-base md:text-lg text-gray-800 font-semibold">
                  R$ {protocolValue.toFixed(2).replace(".", ",")}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
                <span className="text-sm md:text-base text-gray-600">
                  Todos os Bônus Inclusos:
                </span>
                <span className="text-base md:text-lg text-green-600 font-semibold">
                  GRÁTIS até 15/10/2025
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0 border-t border-gray-300 pt-2 md:pt-3">
                <span className="text-base md:text-lg font-bold text-gray-800">
                  🎯 Investimento de Lançamento:
                </span>
                <span className="text-xl md:text-2xl lg:text-3xl font-bold text-green-600">
                  R$ {currentPrice.toFixed(2).replace(".", ",")}
                </span>
              </div>

              <div className="text-center bg-blue-50 rounded-lg p-2 md:p-3">
                <p className="text-xs md:text-sm text-blue-700 font-medium">
                  (Preço especial por tempo limitado. Depois volta para R$
                  97,00)
                </p>
              </div>
            </div>
          </div>

          {/* Garantia */}
          <div className="bg-blue-50 rounded-lg p-3 md:p-4 border border-blue-200 text-center">
            <div className="text-2xl md:text-3xl mb-2">🛡️</div>
            <h4 className="font-bold text-sm md:text-base text-gray-800 mb-1">
              Garantia Incondicional de 14 Dias
            </h4>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              Se por qualquer motivo você não conseguir sua primeira noite
              tranquila, devolvemos{" "}
              <span className="font-bold text-green-600">
                100% do seu dinheiro
              </span>
              . Sem perguntas, sem burocracia.
            </p>
          </div>
        </Card>

        {/* Seção de CTA */}
        <div className="text-center space-y-4 md:space-y-6">
          <Button
            onClick={handleCTAClick}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-sm md:text-lg lg:text-xl px-4 md:px-8 py-3 md:py-4 lg:py-6 rounded-xl shadow-glow transition-all duration-300 transform hover:scale-105"
          >
            🛒 QUERO MEU KIT COMPLETO - R$ 44,00
          </Button>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-sm">
            <span className="flex items-center justify-center gap-1 md:gap-2 text-green-100">
              ✅ Acesso Imediato
            </span>
            <span className="flex items-center justify-center gap-1 md:gap-2 text-green-100">
              ✅ Garantia Total de 14 Dias
            </span>
            <span className="flex items-center justify-center gap-1 md:gap-2 text-green-100">
              ✅ Suporte Especializado
            </span>
          </div>

          <Card className="p-3 md:p-4 bg-yellow-400 text-gray-800 rounded-lg inline-block max-w-full">
            <p className="text-xs md:text-sm font-semibold">
              ⏰ <span className="text-red-600">APENAS</span> até dia 15/10/2025
              com todos os bônus disponíveis - depois volta ao valor normal sem
              o kit de áudios neuroacústicos!
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
