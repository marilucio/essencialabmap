import React from 'react';
import { Card } from './ui/card';

const ProblemSection = () => {
  const problems = [
    {
      icon: "🧠",
      title: "Mente Acelerada",
      description: "Pensamentos que não param, mesmo quando você está exausto"
    },
    {
      icon: "⏰",
      title: "Madrugadas em Claro",
      description: "Acordar às 3h da manhã e não conseguir voltar a dormir"
    },
    {
      icon: "😰",
      title: "Ansiedade Noturna",
      description: "Preocupações que surgem justamente na hora de dormir"
    },
    {
      icon: "💊",
      title: "Dependência de Remédios",
      description: "Precisar de medicamentos para conseguir uma noite de sono"
    },
    {
      icon: "😴",
      title: "Cansaço Constante",
      description: "Acordar mais cansado do que quando foi dormir"
    },
    {
      icon: "🔄",
      title: "Ciclo Vicioso",
      description: "Quanto mais se preocupa com o sono, pior fica"
    }
  ];

  return (
    <section className="py-12 lg:py-20 bg-gray-50">
      <div className="container mx-auto container-responsive">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="heading-responsive font-bold text-gray-800 mb-4 lg:mb-6">
            Você Reconhece Estes
            <span className="block text-red-600">Problemas?</span>
          </h2>
          <p className="text-responsive text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Se você está aqui, provavelmente já passou por algumas (ou todas) dessas situações frustrantes que roubam seu sono e sua paz de espírito.
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

        {/* Seção de impacto */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 lg:p-10 border border-red-100">
          <div className="text-center">
            <h3 className="subheading-responsive font-bold text-red-700 mb-4 lg:mb-6">
              O Impacto Real na Sua Vida
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl mb-2">📉</div>
                <p className="font-semibold text-gray-800 mb-1">Produtividade</p>
                <p className="text-sm text-gray-600">Reduzida em até 40%</p>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl mb-2">💔</div>
                <p className="font-semibold text-gray-800 mb-1">Relacionamentos</p>
                <p className="text-sm text-gray-600">Irritabilidade e estresse</p>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl mb-2">🏥</div>
                <p className="font-semibold text-gray-800 mb-1">Saúde</p>
                <p className="text-sm text-gray-600">Sistema imune enfraquecido</p>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl mb-2">😞</div>
                <p className="font-semibold text-gray-800 mb-1">Bem-estar</p>
                <p className="text-sm text-gray-600">Humor e autoestima baixos</p>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-red-200">
              <p className="text-responsive text-gray-700 font-medium">
                <span className="text-red-600 font-bold">A boa notícia:</span> Existe uma solução simples e natural que pode ajudar a acalmar em minutos, sem medicamentos ou técnicas complicadas.
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