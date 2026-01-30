import React from "react";
import { motion } from "framer-motion";
import { Apple, Smartphone } from "lucide-react";

const HeroSection = () => {
  const handleAppStoreClick = () => {
    // Link para App Store
    window.open("#", "_blank");
  };

  const handleGooglePlayClick = () => {
    // Link para Google Play
    window.open(
      "https://play.google.com/store/apps/details?id=com.essencialab.app",
      "_blank",
    );
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden">
      {/* Background decorativo com tema natureza */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-300 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-200 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-teal-400 rounded-full blur-lg"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Imagem/Visual - Primeiro no mobile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-first lg:order-last"
          >
            <div className="relative bg-gradient-to-br from-green-100 to-emerald-200 rounded-3xl overflow-hidden shadow-2xl p-8">
              {/* Mockup de telefone com análise facial */}
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                <img
                  src="/images/scanface.webp"
                  alt="Análise Facial no EssenciaLab"
                  className="w-full h-64 md:h-80 lg:h-96 object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="600" viewBox="0 0 400 600"%3E%3Crect fill="%2310b981" width="400" height="600"/%3E%3Ctext x="50%25" y="50%25" font-size="20" text-anchor="middle" fill="white"%3EAnálise Facial%3C/text%3E%3C/svg%3E';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent"></div>
              </div>

              {/* Elementos decorativos */}
              <div className="absolute -top-3 -right-3 bg-white rounded-full p-3 shadow-xl border border-green-100">
                <span className="text-3xl">🌿</span>
              </div>
              <div className="absolute -bottom-3 -left-3 bg-white rounded-full p-3 shadow-xl border border-green-100">
                <span className="text-3xl">✨</span>
              </div>
            </div>
          </motion.div>

          {/* Conteúdo principal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-6"
          >
            {/* Badge de Nova Oportunidade */}
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold text-green-700 border border-green-200 shadow-md">
              ✨ Tecnologia Exclusiva para Consultores doTERRA
            </div>

            {/* Headline Principal - Fórmula de Copywriting #6 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              Como Consultores doTERRA Estão Fechando Até 3x Mais Vendas Usando
              Apenas a Câmera do Celular... Sem Precisar Decorar Manuais
              Complexos ou Ser 'Vendedor Chato'.
            </h1>

            {/* Sub-headline */}
            <h2 className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 mt-4">
              A tecnologia de Análise Facial que desperta a curiosidade imediata
              do seu cliente e revela exatamente quais óleos ele precisa
              emocionalmente e fisicamente.
            </h2>

            {/* Badge de Teste Grátis */}
            <div className="bg-gradient-to-r from-orange-100 to-yellow-100 border-2 border-orange-300 rounded-2xl p-6 shadow-lg">
              <p className="text-orange-800 font-bold text-xl mb-2">
                🎁 7 DIAS DE TESTE GRÁTIS
              </p>
              <p className="text-orange-700 text-sm">
                Todas as funções liberadas + Download Gratuito
              </p>
            </div>

            {/* CTAs Principais - App Store e Google Play */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleAppStoreClick}
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-5 px-8 rounded-xl text-base transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  <Apple className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-xs opacity-90">Baixar na</div>
                    <div className="text-lg leading-tight">App Store</div>
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleGooglePlayClick}
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-5 px-8 rounded-xl text-base transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  <Smartphone className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-xs opacity-90">Disponível no</div>
                    <div className="text-lg leading-tight">Google Play</div>
                  </div>
                </motion.button>
              </div>

              <div className="text-center lg:text-left space-y-2">
                <p className="text-sm text-gray-700 font-bold">
                  🚀 Não requer conhecimentos técnicos. Aponte, escaneie e
                  venda.
                </p>
                <p className="text-sm text-gray-600 font-semibold">
                  Comece seu Teste Grátis de 7 Dias
                </p>
                <p className="text-xs text-gray-500">
                  Sem Cartão de Crédito • Cancelamento Fácil • Download Gratuito
                </p>
              </div>
            </div>

            {/* Garantias */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✅</span>
                <span>Download Gratuito</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✅</span>
                <span>7 Dias Grátis</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✅</span>
                <span>Sem Cartão de Crédito</span>
              </div>
            </div>

            {/* Prova Social Rápida */}
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-green-100 shadow-lg mt-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                <span className="font-bold text-green-700">
                  Mais de 500 consultores
                </span>{" "}
                já estão usando o EssenciaLab para
                <span className="font-semibold">
                  {" "}
                  impressionar seus clientes e triplicar suas vendas
                </span>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
export { HeroSection };
