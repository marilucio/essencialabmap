import React from 'react';
import { Button } from './ui/button';

const HeroSection = () => {
  const handlePurchaseClick = () => {
    window.open('https://pay.kiwify.com.br/KDSJr1d', '_blank');
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-300 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-400 rounded-full blur-lg"></div>
      </div>

      <div className="relative z-10 container mx-auto px-3 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center py-8">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Imagem/Visual - Primeiro no mobile */}
          <div className="relative order-first lg:order-last">
            <div className="relative bg-gradient-to-br from-gray-800 to-blue-900 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/images/hero-3am-anxiety-BFHPhjDW.jpg" 
                alt="Pessoa acordada às 3h da madrugada com pensamentos acelerados" 
                className="w-full h-40 sm:h-48 md:h-64 lg:h-80 xl:h-96 object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
              
              {/* Overlay com texto */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-6 right-3 sm:right-6 text-white">
                <p className="text-sm sm:text-base lg:text-lg font-semibold mb-1 text-red-300">
                  3h da Madrugada...
                </p>
                <p className="text-xs sm:text-sm opacity-90">
                  Mente acelerada, sem conseguir dormir
                </p>
              </div>
            </div>

            {/* Elementos decorativos flutuantes */}
            <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 bg-white rounded-full p-2 sm:p-3 shadow-xl border border-gray-100">
              <span className="text-xl sm:text-2xl">🌙</span>
            </div>
            <div className="absolute -bottom-2 sm:-bottom-3 -left-2 sm:-left-3 bg-white rounded-full p-2 sm:p-3 shadow-xl border border-gray-100">
              <span className="text-xl sm:text-2xl">💤</span>
            </div>
          </div>

          {/* Conteúdo principal */}
          <div className="text-center lg:text-left space-y-3 sm:space-y-4 lg:space-y-6 px-2 sm:px-0">
            {/* Badge de descoberta */}
            <div className="inline-flex items-center px-2 sm:px-3 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-blue-800 border border-white/30">
              ✨ Descoberta Acidental
            </div>

            {/* Título principal */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 leading-tight px-1">
              <span className="block">Descoberta Acidental:</span>
              <span className="block text-blue-700">Como Parar</span>
            </h1>

            {/* Subtítulo */}
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 leading-relaxed px-1">
              <span className="block">Pensamentos Acelerados</span>
              <span className="block text-blue-600">em 3 Minutos</span>
            </h2>

            {/* Texto adicional */}
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 px-1">
              (Mesmo às 3h da Madrugada)
            </p>

            {/* Estatísticas de prova social */}
            <div className="bg-white/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-white/40 shadow-lg mx-1 sm:mx-0">
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 mb-1 sm:mb-2 leading-relaxed">
                Método testado com{' '}
                <span className="font-bold text-blue-700">alguns pacientes</span>
                {' '}- <span className="text-green-600 font-semibold">resultados rápidos</span>
              </p>
              <p className="text-xs sm:text-sm lg:text-base text-green-600 font-semibold">
                na primeira aplicação
              </p>
            </div>

            {/* CTA Principal */}
            <div className="space-y-3 sm:space-y-4 px-1 sm:px-0">
              <Button 
                onClick={handlePurchaseClick}
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-800 font-bold py-4 sm:py-5 px-2 sm:px-4 rounded-xl text-xs sm:text-sm lg:text-base transition-all duration-300 transform hover:scale-105 shadow-lg leading-tight"
              >
                <span className="block sm:inline">🛏️ Quero Minha Primeira Noite Tranquila</span>
                <span className="block sm:inline sm:ml-1 font-extrabold">por R$ 19,90</span>
              </Button>
              
              {/* Garantias */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 text-xs text-gray-600">
                <div className="flex items-center gap-1">
                  <span className="text-green-500">✅</span>
                  <span>Acesso Imediato</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-green-500">✅</span>
                  <span>Garantia de 14 dias</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-green-500">✅</span>
                  <span>Método Brasileiro</span>
                </div>
              </div>
            </div>

            {/* Aviso de escassez */}
            <div className="bg-orange-50 border-l-4 border-orange-400 p-3 sm:p-4 rounded-r-lg mx-1 sm:mx-0">
              <div className="flex flex-col gap-1 sm:gap-2">
                <span className="text-orange-600 font-bold text-xs sm:text-sm">⚠️ ATENÇÃO:</span>
                <div className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  <div className="font-semibold mb-1">Apenas 247 cópias restantes</div>
                  <div className="text-xs">
                    neste mês com todos os bônus disponíveis. Depois apenas o método será entregue.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
export { HeroSection };