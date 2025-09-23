import React from 'react';
import { Card } from './ui/card';

const SolutionSection = () => {
  const benefits = [
    {
      icon: "⚡",
      title: "Resultados en 3 Minutos",
      description: "Técnica simple que calma la mente instantáneamente"
    },
    {
      icon: "🌿",
      title: "100% Natural",
      description: "Sin medicamentos, sin dependencia, sin efectos secundarios"
    },
    {
              icon: "🧠",
              title: "Basado en Método Científicamente Probado",
              description: "Técnicas científicamente comprobadas para reducir la ansiedad"
            },
    {
      icon: "📱",
      title: "Funciona en Cualquier Lugar",
      description: "En la cama, en el trabajo, en el tráfico - en cualquier lugar"
    },
    {
      icon: "🎯",
      title: "Enfoque en la Causa Raíz",
      description: "Ataca el problema en el origen, no solo los síntomas"
    },
    {
      icon: "🔄",
      title: "Rompe el Ciclo Vicioso",
      description: "Interrumpe el patrón de pensamientos acelerados"
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Identifica el Disparador",
      description: "Reconoce cuando tu mente comience a acelerarse"
    },
    {
      number: "2", 
      title: "Aplica la Técnica",
      description: "Usa el método específico por solo 3 minutos"
    },
    {
      number: "3",
      title: "Siente el Alivio",
      description: "Experimenta la calma inmediata y el sueño reparador"
    }
  ];

  return (
    <section className="py-12 lg:py-20 bg-gradient-calm">
      <div className="container mx-auto container-responsive">
        {/* Cabecera de la sección */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="heading-responsive font-bold text-gray-800 mb-4 lg:mb-6">
            El Descubrimiento que Cambió
            <span className="block text-blue-700">Todo</span>
          </h2>
          <p className="text-responsive text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Después de mucho investigar y probar con algunos pacientes con resultados muy rápidos, descubrimos una técnica simple que interrumpe el ciclo de pensamientos acelerados en solo 3 minutos.
            </p>
          
          {/* Destaque del descubrimiento */}
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/50 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-xl lg:text-2xl font-bold text-blue-800 mb-4">
              🔬 El Método CALMA Mental
            </h3>
            <p className="text-responsive text-gray-700 leading-relaxed">
              Una técnica revolucionaria que combina respiración consciente, puntos de toque calmantes y entrenamiento mental para desacelerar la mente en tiempo récord.
            </p>
          </div>
        </div>

        {/* Cómo funciona */}
        <div className="mb-12 lg:mb-16">
          <h3 className="subheading-responsive font-bold text-center text-gray-800 mb-8 lg:mb-12">
            Cómo Funciona en 3 Pasos Simples
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="p-6 lg:p-8 text-center bg-white/60 backdrop-blur-sm border border-white/50 hover:shadow-lg transition-smooth">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl lg:text-3xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h4 className="text-lg lg:text-xl font-bold text-gray-800 mb-3">
                    {step.title}
                  </h4>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </Card>
                
                {/* Flecha conectora */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-blue-600 text-2xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Beneficios */}
        <div className="mb-12 lg:mb-16">
          <h3 className="subheading-responsive font-bold text-center text-gray-800 mb-8 lg:mb-12">
            Por Qué Este Método es Diferente
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="p-6 lg:p-8 text-center bg-white/60 backdrop-blur-sm border border-white/50 hover:shadow-lg transition-smooth"
              >
                <div className="text-4xl lg:text-5xl mb-4">{benefit.icon}</div>
                <h4 className="text-lg lg:text-xl font-bold text-gray-800 mb-3">
                  {benefit.title}
                </h4>
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Sección de prueba científica */}
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 lg:p-10 border border-white/60 shadow-lg">
          <div className="text-center">
            <h3 className="subheading-responsive font-bold text-gray-800 mb-6 lg:mb-8">
              Comprobación Científica
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl text-success mb-3">94%</div>
                <p className="font-semibold text-gray-800 mb-2">Tasa de Éxito</p>
                <p className="text-sm text-gray-600">Duermen la primera noche</p>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl text-blue-600 mb-3">3min</div>
                <p className="font-semibold text-gray-800 mb-2">Tiempo Promedio</p>
                <p className="text-sm text-gray-600">Para sentir el efecto</p>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl text-success mb-3">Algunos</div>
                <p className="font-semibold text-gray-800 mb-2">Pacientes Probados</p>
                <p className="text-sm text-gray-600">En mi práctica clínica</p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-4 lg:p-6 border border-blue-200">
              <p className="text-responsive text-gray-700 font-medium">
                <span className="text-blue-600 font-bold">Resultado:</span> Una técnica simple, natural y eficaz que funciona incluso cuando ya has intentado todo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
export { SolutionSection };