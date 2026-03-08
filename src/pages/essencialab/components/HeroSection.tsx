import React from "react";
import { motion } from "framer-motion";
import { AppStoreBadge } from "../../../components/badges/AppStoreBadge";
import { GooglePlayBadge } from "../../../components/badges/GooglePlayBadge";
import { useLanguage } from "../LanguageContext";
import { MessageSquare, TrendingUp } from "lucide-react";

const HeroSection = () => {
  const { t } = useLanguage();
  
  const scrollToProof = () => {
    const proofSection = document.getElementById('whatsapp-proof');
    if (proofSection) {
      proofSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAppStoreClick = () => {
    // Link para App Store
    window.open("https://apps.apple.com/app/id6756675158", "_blank");
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
        <div className="max-w-4xl mx-auto">
          {/* Conteúdo principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <div className="space-y-6">
              {/* Badge de Nova Oportunidade */}
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold text-green-700 border border-green-200 shadow-md">
                {t("hero.badge")}
              </div>

              {/* Headline Principal - Fórmula de Copywriting #6 */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                {t("hero.title")}
              </h1>

              {/* Sub-headline */}
              <h2 className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mt-4">
                {t("hero.subtitle")}
              </h2>
            </div>

            {/* Destaque 844 PV - Novo componente de prova rápida */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white/80 backdrop-blur-md border-2 border-green-200 rounded-3xl p-6 shadow-xl max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-6 cursor-pointer"
              onClick={scrollToProof}
            >
              <div className="bg-green-100 p-4 rounded-2xl">
                <TrendingUp className="w-10 h-10 text-green-600" />
              </div>
              <div className="text-left flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-green-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                    {t("hero.whatsappProof.badge")}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                  {t("hero.whatsappProof.title")}
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  {t("hero.whatsappProof.description")}
                </p>
              </div>
              <div className="flex items-center gap-2 text-green-600 font-bold text-sm bg-green-50 px-4 py-2 rounded-xl">
                <MessageSquare className="w-4 h-4" />
                {t("hero.whatsappProof.button")}
              </div>
            </motion.div>

            {/* Badge de Teste Grátis */}
            <div className="bg-gradient-to-r from-orange-100 to-yellow-100 border-2 border-orange-300 rounded-2xl p-6 shadow-lg max-w-lg mx-auto">
              <p className="text-orange-800 font-bold text-xl mb-2">
                {t("hero.freeTrialBadge")}
              </p>
              <p className="text-orange-700 text-sm">
                {t("hero.freeTrialSubtitle")}
              </p>
            </div>

            {/* Prova Social Rápida */}
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-green-100 shadow-lg mt-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("hero.socialProof")}
              </p>
            </div>

            {/* Video do YouTube - MOVIDO PARA CÁ */}
            <div className="pt-12">
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {t("hero.videoTitle")}
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {t("hero.videoSubtitle")}
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative bg-gradient-to-br from-green-100 to-emerald-200 rounded-3xl overflow-hidden shadow-2xl p-4 md:p-8"
              >
                <div className="relative bg-black rounded-2xl shadow-xl overflow-hidden aspect-video">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/aBbHcW7_zb8?rel=0&modestbranding=1"
                    title="EssenciaLab - Análise Facial"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Elementos decorativos */}
                <div className="absolute -top-3 -right-3 bg-white rounded-full p-3 shadow-xl border border-green-100">
                  <span className="text-3xl">🌿</span>
                </div>
                <div className="absolute -bottom-3 -left-3 bg-white rounded-full p-3 shadow-xl border border-green-100">
                  <span className="text-3xl">✨</span>
                </div>
              </motion.div>
            </div>

            {/* CTAs Principais - App Store e Google Play */}
            <div className="space-y-6 pt-12 border-t border-green-100">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <AppStoreBadge onClick={handleAppStoreClick} />
                <GooglePlayBadge onClick={handleGooglePlayClick} />
              </div>

              <div className="text-center space-y-2">
                <p className="text-sm text-gray-700 font-bold">
                  {t("hero.ctaNoTech")}
                </p>
                <p className="text-sm text-gray-600 font-semibold">
                  {t("hero.ctaStartTrial")}
                </p>
                <p className="text-xs text-gray-500">{t("hero.ctaDetails")}</p>
              </div>
            </div>

            {/* Garantias */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✅</span>
                <span>{t("hero.guarantee1")}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✅</span>
                <span>{t("hero.guarantee2")}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✅</span>
                <span>{t("hero.guarantee3")}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
export { HeroSection };
