import { motion } from "framer-motion";
import { Sparkles, CheckCircle } from "lucide-react";
import { useLanguage } from "../LanguageContext";

const PricingSection = () => {
  const { t } = useLanguage();

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 bg-gradient-to-r from-green-50 to-emerald-50">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white text-green-700 px-4 py-2 rounded-full border border-green-200 shadow-sm mb-6">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">{t("pricing.badge")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t("pricing.title")}
          </h2>

          <p className="text-lg text-gray-600 mb-8">
            {t("pricing.description")}
          </p>

          <div className="bg-white rounded-2xl p-8 border-2 border-green-300 shadow-lg inline-block">
            <p className="text-4xl md:text-5xl font-bold text-green-700">
              {t("pricing.price")}
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mt-6">
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
