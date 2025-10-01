import React from 'react';
import { Card } from './ui/card';

const ProofSection = () => {
  const stats = [
    {
      number: "Baseado em",
      label: "Técnicas Cientificamente Comprovadas",
      description: "Métodos validados pela ciência"
    },
    {
      number: "Testado na",
      label: "Prática Clínica",
      description: "Resultados reais com pacientes"
    },
    {
      number: "Minutos de",
      label: "Aplicação",
      description: "Método rápido e prático"
    },
    {
      number: "100%",
      label: "Natural",
      description: "Sem medicamentos ou dependência"
    }
  ];

  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto container-responsive">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="heading-responsive font-bold text-gray-800 mb-4 lg:mb-6">
            Pacientes da Minha Prática
            <span className="block text-success">Já Transformaram Suas Noites</span>
          </h2>
          <p className="text-responsive text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Veja os resultados reais de pessoas que estavam na mesma situação que você e descobriram a paz mental que tanto procuravam.
          </p>
        </div>

        {/* Estatísticas principais */}
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

        {/* Seção de credibilidade */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 lg:p-10 border border-blue-200">
          <div className="text-center">
            <h3 className="subheading-responsive font-bold text-gray-800 mb-6 lg:mb-8">
              Por Que Tantas Pessoas Confiam no Método?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl mb-3">🔬</div>
                <p className="font-semibold text-gray-800 mb-2">Método Cientificamente Testado</p>
                <p className="text-sm text-gray-600">Baseado em técnicas validadas</p>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl mb-3">🇧🇷</div>
                <p className="font-semibold text-gray-800 mb-2">Feito para Brasileiros</p>
                <p className="text-sm text-gray-600">Adaptado à nossa realidade</p>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl mb-3">⚡</div>
                <p className="font-semibold text-gray-800 mb-2">Pode Ajudar Rapidamente</p>
                <p className="text-sm text-gray-600">Pode acalmar em minutos</p>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl mb-3">🌿</div>
                <p className="font-semibold text-gray-800 mb-2">100% Natural</p>
                <p className="text-sm text-gray-600">Sem medicamentos ou dependência</p>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-blue-300">
              <p className="text-responsive text-gray-700 font-medium">
                <span className="text-success font-bold">Alta taxa de satisfação relatada</span> porque o método ataca a causa raiz do problema, não apenas os sintomas.
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