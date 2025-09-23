import React from 'react';
import { Card } from './ui/card';

const ProofSection = () => {
  const stats = [
    {
      number: "Algunos",
      label: "Pacientes Probaron",
      description: "En mi práctica clínica"
    },
    {
      number: "Rápidos",
      label: "Resultados",
      description: "En la primera aplicación"
    },
    {
      number: "3min",
      label: "Tiempo Promedio",
      description: "Para sentir el efecto"
    },
    {
      number: "100%",
      label: "Natural",
      description: "Sin medicamentos"
    }
  ];

  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto container-responsive">
        {/* Cabecera de la sección */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="heading-responsive font-bold text-gray-800 mb-4 lg:mb-6">
            Pacientes de Mi Práctica
            <span className="block text-success">Ya Transformaron Sus Noches</span>
          </h2>
          <p className="text-responsive text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ve los resultados reales de personas que estaban en la misma situación que tú y descubrieron la paz mental que tanto buscaban.
          </p>
        </div>

        {/* Estadísticas principales */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-12 lg:mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-4 lg:p-6 text-center bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 hover:shadow-lg transition-smooth">
              <div className="text-2xl lg:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <p className="font-semibold text-gray-800 text-sm lg:text-base mb-1">
                {stat.label}
              </p>
              <p className="text-xs lg:text-sm text-gray-600">
                {stat.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Sección de credibilidad */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 lg:p-10 border border-blue-200">
          <div className="text-center">
            <h3 className="subheading-responsive font-bold text-gray-800 mb-6 lg:mb-8">
              ¿Por Qué Tantas Personas Confían en el Método?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl mb-3">🔬</div>
                <p className="font-semibold text-gray-800 mb-2">Método Científicamente Probado</p>
                <p className="text-sm text-gray-600">Basado en técnicas validadas</p>
              </div>
              <div className="text-center">
                  <div className="text-3xl lg:text-4xl mb-3">🌎</div>
                  <p className="font-semibold text-gray-800 mb-2">Hecho para Latinoamericanos</p>
                  <p className="text-sm text-gray-600">Adaptado a nuestra realidad</p>
                </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl mb-3">⚡</div>
                <p className="font-semibold text-gray-800 mb-2">Resultados Rápidos</p>
                <p className="text-sm text-gray-600">Funciona en solo 3 minutos</p>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl mb-3">🌿</div>
                <p className="font-semibold text-gray-800 mb-2">100% Natural</p>
                <p className="text-sm text-gray-600">Sin medicamentos o dependencia</p>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-blue-300">
              <p className="text-responsive text-gray-700 font-medium">
                <span className="text-success font-bold">Más del 94% de éxito</span> porque el método ataca la causa raíz del problema, no solo los síntomas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
export { ProofSection };