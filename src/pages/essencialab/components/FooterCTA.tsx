import React from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle } from "lucide-react";
import { AppStoreBadge } from "../../../components/badges/AppStoreBadge";
import { GooglePlayBadge } from "../../../components/badges/GooglePlayBadge";
import { useLanguage } from "../LanguageContext";

const FooterCTA = () => {
  const { t } = useLanguage();
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

  const finalBenefits = [
    t('footer.benefit1'),
    t('footer.benefit2'),
    t('footer.benefit3'),
    t('footer.benefit4'),
  ];

  return (
    <>
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
              <span className="font-semibold">
                {t('footer.badge')}
              </span>
            </motion.div>

            {/* Título Principal */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              {t('footer.title')}
            </motion.h2>

            {/* Subtítulo */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
            >
              {t('footer.subtitle')}
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
                <AppStoreBadge onClick={handleAppStoreClick} />
                <GooglePlayBadge onClick={handleGooglePlayClick} />
              </div>

              {/* Badge de 7 Dias Grátis */}
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 shadow-2xl inline-block">
                <p className="text-white font-bold text-2xl mb-1">
                  {t('footer.freeTrialBadge')}
                </p>
                <p className="text-white/90 text-sm">
                  {t('footer.freeTrialSubtitle')}
                </p>
              </div>

              {/* Garantias Finais */}
              <div className="flex flex-wrap justify-center gap-4 text-white/90 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-white text-lg">✅</span>
                  <span>{t('footer.guarantee1')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white text-lg">✅</span>
                  <span>{t('footer.guarantee2')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white text-lg">✅</span>
                  <span>{t('footer.guarantee3')}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer Legal */}
        <div className="relative z-10 border-t border-white/20 py-8">
          <div className="container mx-auto px-4 text-center text-white/70 text-sm">
            <p>
              {t('footer.copyright')}
            </p>
            <p className="mt-2">{t('footer.rights')}</p>
          </div>
        </div>
      </section>

      {/* Disclaimer Legal */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-0">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-gray-700">
            <strong>{t('footer.disclaimerTitle')}</strong> {t('footer.disclaimerText')}
          </p>
        </div>
      </div>

      {/* Seção de Credenciais */}
      <section className="bg-gray-50 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-lg font-semibold mb-4">
            {t('footer.proTitle')}
          </h3>
          <div className="text-sm text-gray-700 space-y-2">
            <p>
              <strong>{t('footer.proName')}</strong>
            </p>
            <p>{t('footer.proReg')}</p>
            <p>CNPJ: 38.494.267/0001-55</p>
            <p>
              {t('footer.proContact')}
            </p>
            <p>Londrina, Paraná, Brasil</p>
          </div>
        </div>
      </section>

      {/* Footer com Links Obrigatórios */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
            <a
              href="/politica-de-privacidade"
              className="text-gray-300 hover:text-white transition-colors underline"
            >
              {t('footer.privacy')}
            </a>
            <a
              href="/termos-de-uso"
              className="text-gray-300 hover:text-white transition-colors underline"
            >
              {t('footer.terms')}
            </a>
            <a
              href="/contato"
              className="text-gray-300 hover:text-white transition-colors underline"
            >
              {t('footer.contact')}
            </a>
            <a
              href="/lgpd"
              className="text-gray-300 hover:text-white transition-colors underline"
            >
              {t('footer.lgpd')}
            </a>
          </div>
          <p className="text-center text-xs text-gray-500">
            {t('footer.copyright')}
          </p>
        </div>
      </footer>
    </>
  );
};

export default FooterCTA;
export { FooterCTA };
