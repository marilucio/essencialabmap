import { motion } from "framer-motion";
import { Sparkles, CheckCircle } from "lucide-react";
import { useLanguage } from "../LanguageContext";

const PricingSection = () => {
  const { t } = useLanguage();

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 bg-gradient-to-r from-green-50 to-emerald-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-white text-green-700 px-4 py-2 rounded-full border border-green-200 shadow-sm mb-6">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">{t("pricing.badge")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t("pricing.title")}
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("pricing.description")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-3 gap-4 mb-8"
        >
          <div className="bg-white rounded-2xl p-6 border border-green-100 shadow-md text-center">
            <p className="text-sm font-bold text-green-700 uppercase tracking-wide mb-2">
              {t("pricing.monthly").split("—")[0].trim()}
            </p>
            <p className="text-2xl font-bold text-gray-900">
              {t("pricing.monthly").split("—")[1]?.trim() || t("pricing.monthly")}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border-2 border-green-400 shadow-lg text-center relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
              Popular
            </div>
            <p className="text-sm font-bold text-green-700 uppercase tracking-wide mb-2">
              {t("pricing.yearly").split("—")[0].trim()}
            </p>
            <p className="text-2xl font-bold text-gray-900">
              {t("pricing.yearly").split("—")[1]?.trim() || t("pricing.yearly")}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-green-100 shadow-md text-center">
            <p className="text-sm font-bold text-green-700 uppercase tracking-wide mb-2">
              {t("pricing.professional").split("—")[0].trim()}
            </p>
            <p className="text-2xl font-bold text-gray-900">
              {t("pricing.professional").split("—")[1]?.trim() || t("pricing.professional")}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
            <CheckCircle className="w-4 h-4 text-green-500" />
            {t("pricing.cta")}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
export { PricingSection };
