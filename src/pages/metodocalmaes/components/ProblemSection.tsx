import React from 'react';
import { Card } from './ui/card';

const ProblemSection = () => {
  const problems = [
    {
      icon: "🧠",
      title: "Mente Acelerada",
      description: "Pensamientos que no paran, incluso cuando estás agotado"
    },
    {
      icon: "⏰",
      title: "Madrugadas en Vela",
      description: "Despertar a las 3 de la mañana y no poder volver a dormir"
    },
    {
      icon: "😰",
      title: "Ansiedad Nocturna",
      description: "Preocupaciones que surgen justo a la hora de dormir"
    },
    {
      icon: "💊",
      title: "Dependencia de Medicamentos",
      description: "Necesitar medicamentos para conseguir una noche de sueño"
    },
    {
      icon: "😴",
      title: "Cansancio Constante",
      description: "Despertar más cansado de lo que estabas al acostarte"
    },
    {
      icon: "🔄",
      title: "Ciclo Vicioso",
      description: "Cuanto más te preocupas por el sueño, peor se vuelve"
    }
  ];

  return (
    <section className="py-12 lg:py-20 bg-gray-50">
      <div className="container mx-auto container-responsive">
        {/* Cabecera de la sección */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="heading-responsive font-bold text-gray-800 mb-4 lg:mb-6">
            ¿Reconoces Estos
            <span className="block text-red-600">Problemas?</span>
          </h2>
          <p className="text-responsive text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Si estás aquí, probablemente ya has pasado por algunas (o todas) de estas situaciones frustrantes que roban tu sueño y tu paz mental.
          </p>
        </div>

        {/* Grid de problemas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {problems.map((problem, index) => (
            <Card 
              key={index} 
              className="p-6 lg:p-8 text-center hover:shadow-lg transition-smooth border-l-4 border-red-400 bg-white"
            >
              <div className="text-4xl lg:text-5xl mb-4">{problem.icon}</div>
              <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-3">
                {problem.title}
              </h3>
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Sección de impacto */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 lg:p-10 border border-red-100">
          <div className="text-center">
            <h3 className="subheading-responsive font-bold text-red-700 mb-4 lg:mb-6">
              El Impacto Real en Tu Vida
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl mb-2">📉</div>
                <p className="font-semibold text-gray-800 mb-1">Productividad</p>
                <p className="text-sm text-gray-600">Reducida hasta un 40%</p>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl mb-2">💔</div>
                <p className="font-semibold text-gray-800 mb-1">Relaciones</p>
                <p className="text-sm text-gray-600">Irritabilidad y estrés</p>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl mb-2">🏥</div>
                <p className="font-semibold text-gray-800 mb-1">Salud</p>
                <p className="text-sm text-gray-600">Sistema inmune debilitado</p>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl mb-2">😞</div>
                <p className="font-semibold text-gray-800 mb-1">Bienestar</p>
                <p className="text-sm text-gray-600">Humor y autoestima bajos</p>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-red-200">
              <p className="text-responsive text-gray-700 font-medium">
                <span className="text-red-600 font-bold">La buena noticia:</span> Existe una solución simple y natural que puede cambiar todo esto en solo 3 minutos, sin medicamentos o técnicas complicadas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
export { ProblemSection };