import React from "react";
import { motion } from "framer-motion";
import { Star, Shield, TrendingUp, MessageCircle } from "lucide-react";
import { useLanguage } from "../LanguageContext";

const ProofSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="whatsapp-proof"
      className="container mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Título da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
            <Star className="w-5 h-5" />
            <span className="font-semibold">{t("proof.badge")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("proof.title")}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mt-2">
              {t("proof.titleGradient")}
            </span>
          </h2>

          <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-3xl p-8 md:p-10 mb-12 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] pointer-events-none"></div>
            <p className="text-xl md:text-2xl text-white leading-relaxed font-medium relative z-10 italic">
              "{t("proof.mainQuote")}"
            </p>
          </div>

          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-16">
            {t("proof.subtitle")}
          </p>
        </motion.div>

        {/* Print do WhatsApp Real - Novo Destaque */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center bg-emerald-50 rounded-[2.5rem] p-8 md:p-12 border-2 border-emerald-100">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-green-200 text-green-800 px-4 py-1 rounded-full text-sm font-bold">
                <MessageCircle className="w-4 h-4" />
                {t("proof.whatsappSection.title")}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                {t("proof.whatsappSection.subtitle")}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed italic border-l-4 border-green-500 pl-6">
                {t("proof.whatsappSection.caption")}
              </p>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-green-400 to-emerald-400 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-white p-2 rounded-3xl shadow-2xl overflow-hidden border border-white">
                <img
                  src="/images/wellington-proof.jpg"
                  alt="Testemunho Wellington Dias 844 PV"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Tradução da conversa (apenas para EN e ES) */}
          {t("proof.whatsappSection.chatTranslation") &&
            Array.isArray(t("proof.whatsappSection.chatTranslation")) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 max-w-2xl mx-auto bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-emerald-100 shadow-inner"
              >
                <h4 className="text-sm font-bold text-emerald-800 uppercase tracking-wider mb-4 text-center">
                  {t("proof.whatsappSection.title")} (Translation)
                </h4>
                <div className="space-y-3">
                  {t("proof.whatsappSection.chatTranslation").map(
                    (chat: any, i: number) => (
                      <div key={i} className="text-sm">
                        <span className="font-bold text-gray-900">
                          {chat.author}:{" "}
                        </span>
                        <span className="text-gray-700 italic">
                          "{chat.text}"
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </motion.div>
            )}
        </motion.div>

        {/* Estatísticas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 text-center border border-green-200">
            <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
              500+
            </div>
            <p className="text-gray-700 font-medium">{t("proof.stats1")}</p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 text-center border border-orange-200">
            <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
              3x
            </div>
            <p className="text-gray-700 font-medium">{t("proof.stats2")}</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 text-center border border-blue-200">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
              98%
            </div>
            <p className="text-gray-700 font-medium">{t("proof.stats3")}</p>
          </div>
        </motion.div>

        {/* Seção de Risco Zero */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Shield className="w-10 h-10" />
            </div>

            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              {t("proof.zeroRiskTitle")}
            </h3>

            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed mb-6">
              {t("proof.zeroRiskDesc")}
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-base">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-3 rounded-full">
                <span>✅ {t("proof.zeroRiskCheck1")}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-3 rounded-full">
                <span>✅ {t("proof.zeroRiskCheck2")}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-3 rounded-full">
                <span>✅ {t("proof.zeroRiskCheck3")}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProofSection;
export { ProofSection };
