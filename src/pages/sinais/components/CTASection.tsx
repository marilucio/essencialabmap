import { motion } from "framer-motion";
import { Apple, Smartphone } from "lucide-react";

const CTASection = () => {
  const handleAppStoreClick = () => {
    window.open("https://apps.apple.com/app/id6756675158", "_blank");
  };

  const handleGooglePlayClick = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.essencialab.app",
      "_blank"
    );
  };

  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-slate-50 py-20 md:py-28 overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-emerald-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-teal-200 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-4xl mb-6">🌿</span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Se você chegou até aqui,
              <br />
              talvez esteja pronto para observar diferente.
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Não prometemos transformações milagrosas. Oferecemos uma ferramenta
              para quem quer <strong className="text-gray-700">perceber</strong> o que o corpo já está comunicando,{" "}
              <strong className="text-gray-700">acompanhar</strong> padrões ao longo do tempo
              e <strong className="text-gray-700">observar</strong> com mais consciência.
            </p>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm mb-8">
              <p className="text-gray-700 mb-2 font-medium">
                Comece a observar gratuitamente por 7 dias.
              </p>
              <p className="text-gray-500 text-sm mb-6">
                Sem cartão de crédito. Sem compromisso. Cancele quando quiser.
              </p>

              {/* CTAs - App Store e Google Play */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAppStoreClick}
                  className="flex items-center justify-center gap-3 bg-gray-900 hover:bg-gray-800 text-white font-medium py-4 px-6 rounded-xl transition-colors"
                >
                  <Apple className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-xs opacity-80">Disponível na</div>
                    <div className="text-base leading-tight">App Store</div>
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleGooglePlayClick}
                  className="flex items-center justify-center gap-3 bg-emerald-700 hover:bg-emerald-800 text-white font-medium py-4 px-6 rounded-xl transition-colors"
                >
                  <Smartphone className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-xs opacity-80">Disponível no</div>
                    <div className="text-base leading-tight">Google Play</div>
                  </div>
                </motion.button>
              </div>
            </div>

            <p className="text-gray-500 text-sm">
              Ou, se preferir, continue observando. Volte quando fizer sentido para você.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Footer simples */}
      <div className="relative z-10 mt-16 pt-8 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="text-lg">🌿</span>
              <span className="font-medium text-gray-700">EssenciaLab</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a href="/termos-de-uso" className="hover:text-gray-700 transition-colors">
                Termos de Uso
              </a>
              <a href="/politica-de-privacidade" className="hover:text-gray-700 transition-colors">
                Privacidade
              </a>
              <a href="/contato" className="hover:text-gray-700 transition-colors">
                Contato
              </a>
            </div>
            <div>
              © {new Date().getFullYear()} EssenciaLab
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
export { CTASection };
