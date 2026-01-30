import React from 'react';
import { motion } from 'framer-motion';
import { Apple, Smartphone, Sparkles, CheckCircle } from 'lucide-react';

const FooterCTA = () => {
  const handleAppStoreClick = () => {
    // Link para App Store
    window.open('#', '_blank');
  };

  const handleGooglePlayClick = () => {
    // Link para Google Play
    window.open('https://play.google.com/store/apps/details?id=com.essencialab.app', '_blank');
  };

  const finalBenefits = [
    "Análise Facial por IA",
    "Protocolos Completos",
    "Relatórios Profissionais",
    "Suporte Especializado"
  ];

  return (
    <section className="relative bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">Última Chance de Começar Hoje</span>
          </motion.div>

          {/* Título Principal */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Baixe Agora e Tenha Acesso Total Ilimitado por 7 Dias
          </motion.h2>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
          >
            Seus clientes vão ficar impressionados na sua próxima classe.
          </motion.p>

          {/* Benefícios Finais */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
          >
            {finalBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
              >
                <CheckCircle className="w-6 h-6 text-white mb-2 mx-auto" />
                <p className="text-white text-sm font-medium">{benefit}</p>
              </div>
            ))}
          </motion.div>

          {/* CTAs Principais */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAppStoreClick}
                className="flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-gray-900 font-bold py-6 px-10 rounded-xl text-lg transition-all duration-300 shadow-2xl"
              >
                <Apple className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-xs opacity-70">Baixar na</div>
                  <div className="text-xl leading-tight">App Store</div>
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGooglePlayClick}
                className="flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-gray-900 font-bold py-6 px-10 rounded-xl text-lg transition-all duration-300 shadow-2xl"
              >
                <Smartphone className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-xs opacity-70">Disponível no</div>
                  <div className="text-xl leading-tight">Google Play</div>
                </div>
              </motion.button>
            </div>

            {/* Badge de 7 Dias Grátis */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 shadow-2xl inline-block">
              <p className="text-white font-bold text-2xl mb-1">🎁 7 DIAS GRÁTIS</p>
              <p className="text-white/90 text-sm">Todas as funções liberadas + Suporte completo</p>
            </div>

            {/* Garantias Finais */}
            <div className="flex flex-wrap justify-center gap-4 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-white text-lg">✅</span>
                <span>Download Imediato</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white text-lg">✅</span>
                <span>Sem Cartão de Crédito</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white text-lg">✅</span>
                <span>Cancele Quando Quiser</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Footer Legal */}
      <div className="relative z-10 border-t border-white/20 py-8">
        <div className="container mx-auto px-4 text-center text-white/70 text-sm">
          <p>© 2026 EssenciaLab - Tecnologia de Análise Facial para Consultores doTERRA</p>
          <p className="mt-2">Todos os direitos reservados.</p>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
export { FooterCTA };
