import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { CountdownTimer } from './CountdownTimer';
import peacefulImageSrc from '/images/peaceful-sleep-VdZartzL.jpg';

export const OfferSection = () => {
  const handlePurchaseClick = () => {
    window.open('https://pay.kiwify.com.br/KDSJr1d', '_blank');
  };

  const bonuses = [
    {
      title: "Método CALMA Completo",
      description: "5 técnicas que paran pensamientos en 3 minutos",
      value: "R$ 79,90",
      baseBrl: "79.90",
      isMain: true
    },
    {
      title: "BONO 1: Kit Audios Neuroacústicos SOS",
      description: "5 audios especializados para diferentes momentos: Inducción del Sueño, Crisis de Ansiedad, Relajación Matinal, Enfoque Mental y Meditación Nocturna",
      value: "R$ 194,00",
      baseBrl: "194.00",
      isMain: false
    },
    {
      title: "BONO 2: Checklist 21 Días Higiene del Sueño",
      description: "Guía diaria imprimible con protocolo completo para crear rutina de sueño perfecta y acabar con el insomnio",
      value: "R$ 94,00",
      baseBrl: "94.00",
      isMain: false
    },
    {
      title: "BONO 3: Protocolo SOS Crisis de Pánico",
      description: "Método específico para interrumpir ataques de pánico en 60 segundos, técnicas para usar en cualquier lugar",
      value: "R$ 134,00",
      baseBrl: "134.00",
      isMain: false
    },
    {
      title: "BONO 4: Guía Nutricional Anti-Ansiedad",
      description: "Alimentos que calman, recetas relajantes y suplementos naturales para potencializar los resultados",
      value: "R$ 114,00",
      baseBrl: "114.00",
      isMain: false
    }
  ];

  // Cálculo automático basado en los valores de los bonos
  const totalValue = bonuses.reduce((sum, bonus) => {
    const value = parseFloat(bonus.baseBrl);
    return sum + value;
  }, 0);
  const currentPrice = 19.90;
  const savings = totalValue - currentPrice;

  return (
    <section id="offer-section" className="py-8 md:py-16 lg:py-20 px-4 bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/30 to-transparent"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/10 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Cabecera de la sección */}
        <div className="text-center mb-8 md:mb-12">
          <div className="bg-red-600 text-white rounded-full px-3 md:px-6 py-2 md:py-3 inline-block mb-4 md:mb-6">
            <span className="font-bold text-xs md:text-base">🔥 OFERTA LIMITADA</span>
          </div>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            🎯 Transforma Tu Vida
            <span className="block text-yellow-300">Por Solo <span data-price-localize data-base-brl="19.90">$19.90</span></span>
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-green-100 max-w-3xl mx-auto leading-relaxed">
            Todo lo que necesitas para tener tu primera noche tranquila hoy mismo + bonos exclusivos
          </p>
        </div>

        {/* Card de la oferta principal */}
        <Card className="p-4 md:p-6 lg:p-8 bg-white text-gray-800 rounded-xl shadow-glow border-2 border-yellow-400 mb-6 md:mb-8">
          <div className="grid lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center mb-6 md:mb-8">
            <div className="order-2 lg:order-1">
              <img 
                src={peacefulImageSrc} 
                alt="Persona durmiendo tranquilamente"
                className="rounded-xl w-full h-auto max-h-[250px] md:max-h-[300px] object-cover"
              />
            </div>
            
            <div className="space-y-3 md:space-y-4 order-1 lg:order-2">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-center lg:text-left">Protocolo SOS Ansiedad Completo</h3>
              
              {/* Lista de productos y bonos */}
              <div className="space-y-3 md:space-y-4">
                {bonuses.map((bonus, index) => (
                  <div key={index} className={`p-3 md:p-4 rounded-lg border ${
                    bonus.isMain 
                      ? 'bg-blue-50 border-blue-200' 
                      : 'bg-green-50 border-green-200'
                  }`}>
                    <div className="flex items-start gap-2 md:gap-3">
                      <span className={`text-base md:text-lg flex-shrink-0 ${
                        bonus.isMain ? 'text-blue-600' : 'text-green-600'
                      }`}>
                        {bonus.isMain ? '✅' : '🎁'}
                      </span>
                      <div className="flex-1">
                        <h4 className={`font-semibold text-xs md:text-sm mb-1 ${
                          bonus.isMain ? 'text-blue-800' : 'text-green-800'
                        }`}>
                          {bonus.title}
                        </h4>
                        <p className="text-xs text-gray-600 leading-relaxed mb-1">
                          {bonus.description}
                        </p>
                        <p className="text-xs font-bold text-green-600">
                          {bonus.isMain ? (
                            <>Valor: <span data-price-localize data-base-brl={bonus.baseBrl}>{bonus.value}</span></>
                          ) : (
                            <>Valor: <span data-price-localize data-base-brl={bonus.baseBrl}>{bonus.value}</span> - GRATIS</>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Resumen de valores */}
          <div className="bg-gray-100 rounded-lg p-3 md:p-4 mb-6 md:mb-8">
            <div className="space-y-2 md:space-y-3">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
                <span className="text-sm md:text-base text-gray-600">
                  Valor total si se compra por separado:
                </span>
                <span className="text-base md:text-lg text-gray-500 line-through">
                  <span data-price-localize data-base-brl={totalValue.toFixed(2)}>R$ {totalValue.toFixed(2).replace('.', ',')}</span>
                </span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0 border-t border-gray-300 pt-2 md:pt-3">
                <span className="text-base md:text-lg font-bold text-gray-800">
                  Tu inversión hoy:
                </span>
                <span className="text-xl md:text-2xl lg:text-3xl font-bold text-green-600">
                  <span data-price-localize data-base-brl="19.90">R$ 19,90</span>
                </span>
              </div>
              
              <div className="text-center bg-green-50 rounded-lg p-2 md:p-3">
                <p className="text-xs md:text-sm text-green-700 font-medium">
                  💰 Ahorras <span className="font-bold">
                    <span data-price-localize data-base-brl={savings.toFixed(2)}>R$ {savings.toFixed(2).replace('.', ',')}</span>
                  </span> (93% de descuento)
                </p>
              </div>
            </div>
          </div>

          {/* Garantía */}
          <div className="bg-blue-50 rounded-lg p-3 md:p-4 border border-blue-200 text-center">
            <div className="text-2xl md:text-3xl mb-2">🛡️</div>
            <h4 className="font-bold text-sm md:text-base text-gray-800 mb-1">
              Garantía Incondicional de 14 Días
            </h4>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              Si por cualquier motivo no consigues tu primera noche tranquila, 
              devolvemos <span className="font-bold text-green-600">100% de tu dinero</span>. 
              Sin preguntas, sin burocracia.
            </p>
          </div>
        </Card>

        {/* Sección de CTA */}
        <div className="text-center space-y-4 md:space-y-6">
          <Button 
            onClick={handlePurchaseClick}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-sm md:text-lg lg:text-xl px-4 md:px-8 py-3 md:py-4 lg:py-6 rounded-xl shadow-glow transition-all duration-300 transform hover:scale-105"
          >
            🛒 QUIERO MI PRIMERA NOCHE TRANQUILA - <span data-price-localize data-base-brl="19.90">$19.90</span>
          </Button>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-sm">
            <span className="flex items-center justify-center gap-1 md:gap-2 text-green-100">
              ✅ Acceso Inmediato
            </span>
            <span className="flex items-center justify-center gap-1 md:gap-2 text-green-100">
              ✅ Garantía Total de 14 Días
            </span>
            <span className="flex items-center justify-center gap-1 md:gap-2 text-green-100">
              ✅ Soporte Especializado
            </span>
          </div>

          <Card className="p-3 md:p-4 bg-yellow-400 text-gray-800 rounded-lg inline-block max-w-full">
            <p className="text-xs md:text-sm font-semibold">
              ⏰ <span className="text-red-600">ÚLTIMAS 247 COPIAS</span> con todos los bonos disponibles - <CountdownTimer />!
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};