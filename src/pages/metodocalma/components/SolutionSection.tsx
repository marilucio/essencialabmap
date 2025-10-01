import React from 'react';
import { Card } from './ui/card';

const SolutionSection = () => {
  const benefits = [
    {
      icon: "⚡",
      title: "Resultados em 3 Minutos",
      description: "Técnica simples que acalma a mente instantaneamente"
    },
    {
      icon: "🌿",
      title: "100% Natural",
      description: "Sem medicamentos, sem dependência, sem efeitos colaterais"
    },
    {
              icon: "🧠",
              title: "Baseado em Método Cientificamente Testado",
              description: "Técnicas cientificamente comprovadas para reduzir ansiedade"
            },
    {
      icon: "📱",
      title: "Funciona Anywhere",
      description: "Na cama, no trabalho, no trânsito - em qualquer lugar"
    },
    {
      icon: "🎯",
      title: "Foco na Causa Raiz",
      description: "Ataca o problema na origem, não apenas os sintomas"
    },
    {
      icon: "🔄",
      title: "Quebra o Ciclo Vicioso",
      description: "Interrompe o padrão de pensamentos acelerados"
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Identifique o Gatilho",
      description: "Reconheça quando sua mente começar a acelerar"
    },
    {
      number: "2", 
      title: "Aplique a Técnica",
      description: "Use o método específico por apenas 3 minutos"
    },
    {
      number: "3",
      title: "Sinta o Alívio",
      description: "Experimente a calma imediata e o sono reparador"
    }
  ];

  return (
    <section className="py-12 lg:py-20 bg-gradient-calm">
      <div className="container mx-auto container-responsive">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="heading-responsive font-bold text-gray-800 mb-4 lg:mb-6">
            A Descoberta que Mudou
            <span className="block text-blue-700">Tudo</span>
          </h2>
          <p className="text-responsive text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Após muito pesquisar e testar com milhares de pacientes com resultados muito rápidos, descobrimos uma técnica simples que interrompe o ciclo de pensamentos acelerados em apenas 3 minutos.
          </p>
          
          {/* Destaque da descoberta */}
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/50 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-xl lg:text-2xl font-bold text-blue-800 mb-4">
              🔬 O Método Calma Mental
            </h3>
            <p className="text-responsive text-gray-700 leading-relaxed">
              Uma técnica revolucionária que combina respiração consciente, pontos de toque calmantes e treino mental para desacelerar a mente em tempo recorde.
            </p>
          </div>
        </div>

        {/* Como funciona */}
        <div className="mb-12 lg:mb-16">
          <h3 className="subheading-responsive font-bold text-center text-gray-800 mb-8 lg:mb-12">
            Como Funciona em 3 Passos Simples
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
                
                {/* Seta conectora */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-blue-600 text-2xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Benefícios */}
        <div className="mb-12 lg:mb-16">
          <h3 className="subheading-responsive font-bold text-center text-gray-800 mb-8 lg:mb-12">
            Por Que Este Método é Diferente
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

        {/* Seção de prova científica */}
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 lg:p-10 border border-white/60 shadow-lg">
          <div className="text-center">
            <h3 className="subheading-responsive font-bold text-gray-800 mb-6 lg:mb-8">
              Comprovação Científica
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl text-success mb-3">94%</div>
                <p className="font-semibold text-gray-800 mb-2">Taxa de Sucesso</p>
                <p className="text-sm text-gray-600">Dormem na primeira noite</p>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl text-blue-600 mb-3">3min</div>
                <p className="font-semibold text-gray-800 mb-2">Tempo Médio</p>
                <p className="text-sm text-gray-600">Para sentir o efeito</p>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl text-success mb-3">1.847</div>
                <p className="font-semibold text-gray-800 mb-2">Pacientes Testados</p>
                <p className="text-sm text-gray-600">Na minha prática clínica</p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-4 lg:p-6 border border-blue-200">
              <p className="text-responsive text-gray-700 font-medium">
                <span className="text-blue-600 font-bold">Resultado:</span> Uma técnica simples, natural e eficaz que funciona mesmo quando você já tentou de tudo.
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