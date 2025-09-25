import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const GuaranteeSection = () => {
  const handlePurchaseClick = () => {
    window.open('https://pay.hotmart.com/Q102041319H', '_blank');
  };

  const guaranteeFeatures = [
    {
      icon: "🛡️",
      title: "Garantía Incondicional",
      description: "14 días para probar sin riesgos"
    },
    {
      icon: "💰",
      title: "Dinero de Vuelta",
      description: "100% del valor devuelto si no funciona"
    },
    {
      icon: "⚡",
      title: "Sin Burocracia",
      description: "Solo un email y listo"
    },
    {
      icon: "🤝",
      title: "Compromiso Total",
      description: "Tu satisfacción es nuestra prioridad"
    }
  ];



  return (
    <section className="py-12 lg:py-20 bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 text-white relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/40 to-purple-900/40"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-green-500/20 to-transparent"></div>
      
      <div className="container mx-auto container-responsive relative z-10">
        {/* Cabecera de la sección */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="bg-yellow-500 text-gray-800 rounded-full px-4 lg:px-6 py-2 lg:py-3 inline-block mb-4 lg:mb-6">
            <span className="font-bold text-sm lg:text-base">🛡️ GARANTÍA TOTAL</span>
          </div>
          
          <h2 className="heading-responsive font-bold mb-4 lg:mb-6">
            Tu Compra Está 100% Protegida
            <span className="block text-yellow-300">Por 14 Días Completos</span>
          </h2>
          
          <p className="text-responsive text-green-100 max-w-3xl mx-auto leading-relaxed">
            Prueba el Método CALMA sin ningún riesgo. Si no consigues tu primera noche tranquila, 
            devolvemos todo tu dinero. Sin preguntas, sin burocracia.
          </p>
        </div>

        {/* Card principal de la garantía */}
        <div className="max-w-4xl mx-auto mb-12 lg:mb-16">
          <Card className="bg-white text-gray-800 p-6 lg:p-10 rounded-2xl shadow-glow border-4 border-yellow-400">
            {/* Ícono central */}
            <div className="text-center mb-8 lg:mb-12">
              <div className="text-6xl lg:text-8xl mb-4">🛡️</div>
              <h3 className="text-xl lg:text-3xl font-bold text-gray-800 mb-4">
                Garantía Incondicional de 14 Días
              </h3>
              <p className="text-base lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Experimenta el método por 14 días completos. Si por cualquier motivo no quedas satisfecho, 
                devolvemos <span className="font-bold text-green-600">100% de tu inversión</span>.
              </p>
            </div>

            {/* Grid de características de la garantía */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8 lg:mb-12">
              {guaranteeFeatures.map((feature, index) => (
                <div key={index} className="text-center p-4 lg:p-6 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="text-3xl lg:text-4xl mb-3">{feature.icon}</div>
                  <h4 className="font-bold text-sm lg:text-base text-gray-800 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-xs lg:text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Cómo funciona la garantía */}
            <div className="bg-blue-50 rounded-xl p-4 lg:p-6 border border-blue-200 mb-8 lg:mb-12">
              <h4 className="font-bold text-lg lg:text-xl text-gray-800 mb-4 text-center">
                Cómo Funciona Nuestra Garantía:
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                <div className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center mx-auto mb-3 font-bold">
                    1
                  </div>
                  <h5 className="font-semibold text-sm lg:text-base text-gray-800 mb-2">
                    Prueba por 14 Días
                  </h5>
                  <p className="text-xs lg:text-sm text-gray-600">
                    Usa el método cuantas veces quieras durante 14 días completos
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center mx-auto mb-3 font-bold">
                    2
                  </div>
                  <h5 className="font-semibold text-sm lg:text-base text-gray-800 mb-2">
                    ¿No Funcionó?
                  </h5>
                  <p className="text-xs lg:text-sm text-gray-600">
                    Envía un email a suporte@essencialab.site
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center mx-auto mb-3 font-bold">
                    3
                  </div>
                  <h5 className="font-semibold text-sm lg:text-base text-gray-800 mb-2">
                    Recibe el Reembolso
                  </h5>
                  <p className="text-xs lg:text-sm text-gray-600">
                    100% del valor devuelto en hasta 5 días hábiles
                  </p>
                </div>
              </div>
            </div>



            {/* Botón de acción */}
            <div className="text-center">
              <Button 
                onClick={handlePurchaseClick}
                className="w-full lg:w-auto bg-green-600 hover:bg-green-700 text-white font-bold text-sm lg:text-lg px-4 lg:px-8 py-4 lg:py-6 rounded-xl shadow-glow transition-smooth transform hover:scale-105 leading-tight"
              >
                <span className="block sm:inline">🛒 Quiero Probar Sin Riesgos&nbsp;</span>
                <span className="block sm:inline font-extrabold">por <span data-price-localize data-base-brl="19.90">$19.90</span></span>
              </Button>
              
              <p className="text-xs lg:text-sm text-gray-500 mt-4">
                ✅ Acceso inmediato ✅ Garantía total ✅ Soporte especializado
              </p>
            </div>
          </Card>
        </div>

        {/* Sección de confianza adicional */}
        <div className="text-center">
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 lg:p-8 rounded-xl max-w-3xl mx-auto">
            <h3 className="text-lg lg:text-xl font-bold mb-4">
              ¿Por Qué Ofrecemos Esta Garantía?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 text-sm lg:text-base">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl mb-3">🎯</div>
                <h4 className="font-semibold mb-2">Confianza Total</h4>
                <p className="text-white/80 leading-relaxed">
                  Sabemos que el método funciona. 94% de los usuarios tienen éxito en la primera noche.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl lg:text-4xl mb-3">❤️</div>
                <h4 className="font-semibold mb-2">Compromiso Real</h4>
                <p className="text-white/80 leading-relaxed">
                  Nuestro objetivo es tu transformación, no solo la venta. Tu satisfacción es nuestra prioridad.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
export { GuaranteeSection };