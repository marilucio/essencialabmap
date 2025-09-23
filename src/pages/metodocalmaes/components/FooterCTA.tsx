import React from 'react';
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { CountdownTimer } from "./CountdownTimer";

export const FooterCTA = () => {
  const handlePurchaseClick = () => {
    window.open('https://pay.kiwify.com.br/KDSJr1d', '_blank');
  };

  // Beneficios finales
  const finalBenefits = [
    { icon: "⏰", title: "Acceso Inmediato", description: "Recibe el material ahora y úsalo hoy mismo" },
    { icon: "🛡️", title: "Garantía Total", description: "14 días para probar sin riesgo" },
    { icon: "📱", title: "Soporte VIP", description: "Ayuda especializada cuando la necesites" },
    { icon: "🎁", title: "Bonos Incluidos", description: "Material extra sin costo adicional" }
  ];

  // Elementos de urgencia
  const urgencyElements = [
    "✅ Descarga Inmediata",
    "✅ Garantía 14 Días", 
    "✅ Soporte Incluido",
    "✅ Método Latinoamericano"
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
              {/* Cabecera */}
              <div className="text-center mb-8 lg:mb-12">
                <div className="text-6xl lg:text-8xl mb-4">🌙</div>
                <h2 className="heading-responsive font-bold text-gray-800 mb-4 lg:mb-6">
                  Tu Primera Noche Tranquila
                  <span className="block text-blue-600">Te Espera Ahora</span>
                </h2>
                
                <p className="text-responsive text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6 lg:mb-8">
                  No dejes pasar otra noche despierto a las 3 de la madrugada. 
                  <span className="font-bold text-blue-600"> El Método CALMA puede cambiar tu vida hoy mismo.</span>
                </p>
              </div>

              {/* Grid de beneficios */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8 lg:mb-12">
                {finalBenefits.map((benefit, index) => (
                  <div key={index} className="text-center p-4 lg:p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50">
                    <div className="text-3xl lg:text-4xl mb-2 lg:mb-3">{benefit.icon}</div>
                    <h3 className="font-bold text-sm lg:text-base text-gray-800 mb-1 lg:mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-xs lg:text-sm text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Sección de precio y CTA */}
              <div className="text-center space-y-6 lg:space-y-8">
                {/* Precio */}
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl p-6 lg:p-8 inline-block">
                  <div className="text-sm lg:text-base opacity-90 mb-2">Inversión única de</div>
                  <div className="text-3xl lg:text-5xl font-bold mb-2"><span data-price-localize data-base-brl="19.90">$19.90</span></div>
                  <div className="text-sm lg:text-base opacity-90">Sin mensualidades • Acceso de por vida</div>
                </div>
                
                {/* Botón principal */}
                <Button 
                  onClick={handlePurchaseClick}
                  size="xl" 
                  className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-800 font-bold text-base lg:text-xl py-6 lg:py-8 px-8 lg:px-16 rounded-2xl shadow-glow transition-smooth transform hover:scale-105"
                >
                  🛌 ¡SÍ! QUIERO DORMIR TRANQUILO HOY MISMO
                </Button>

                {/* Elementos de confianza */}
                <div className="flex flex-wrap justify-center gap-3 lg:gap-6 text-sm lg:text-base">
                  {urgencyElements.map((element, index) => (
                    <span key={index} className="text-green-600 font-medium">
                      {element}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card de urgencia */}
              <div className="mt-8 lg:mt-12">
                <Card className="p-4 lg:p-6 bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 text-center">
                  <p className="text-sm lg:text-base font-semibold text-red-600 mb-2">
                    ⚠️ OFERTA LIMITADA
                  </p>
                  <p className="text-xs lg:text-sm text-red-500">
                    Solo 247 copias restantes este mes con todos los bonos - ¡<CountdownTimer />!
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
              © 2024 EssenciaLab - Naturopatía Ortomolecular | 
              <a href="#" className="hover:text-white transition-colors ml-1">Política de Privacidad</a> | 
              <a href="#" className="hover:text-white transition-colors ml-1">Términos de Uso</a>
            </p>
            <p className="text-xs lg:text-sm opacity-70">
              Este producto no sustituye el seguimiento médico profesional. 
              Consulta siempre a un profesional de salud calificado.
            </p>
            <p className="text-xs opacity-60">
              Los resultados pueden variar de persona a persona. Método desarrollado con base en técnicas 
              de relajación e higiene del sueño científicamente comprobadas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};