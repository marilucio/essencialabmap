import { motion } from "framer-motion";
import { Sparkles, CheckCircle, Lock, ArrowRight } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { trackPixel } from "../../../lib/whatsapp";

type Plan = {
  badge: string;
  name: string;
  price: string;
  period: string;
  annual: string;
  annualEquiv: string;
  features: string[];
  lock?: string;
  button: string;
};

const scrollToDownload = () => {
  document.getElementById("download")?.scrollIntoView({ behavior: "smooth" });
};

const PricingSection = () => {
  const { t } = useLanguage();

  const facial = t("pricing.facial") as Plan;
  // O plano profissional é opcional por idioma (ex.: EN ainda não tem preço em USD).
  const proRaw = t("pricing.pro");
  const pro: Plan | null = typeof proRaw === "object" ? (proRaw as Plan) : null;

  const handleFacialClick = () => {
    trackPixel("InitiateCheckout", { plan: "facial_monthly" });
    scrollToDownload();
  };

  const handleProClick = () => {
    trackPixel("ViewContent", { plan: "professional_map" });
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 bg-gradient-to-r from-green-50 to-emerald-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white text-orange-700 px-4 py-2 rounded-full border border-orange-200 shadow-sm mb-6">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">{t("pricing.badge")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t("pricing.title")}
          </h2>

          {/* Ancoragem de ROI + prova */}
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            {t("pricing.description")}
          </p>
        </motion.div>

        <div
          className={`grid gap-6 items-stretch ${
            pro ? "md:grid-cols-2 max-w-4xl mx-auto" : "max-w-md mx-auto"
          }`}
        >
          {/* Plano Análise Facial (destaque) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative bg-white rounded-2xl p-8 border-2 border-green-500 shadow-xl flex flex-col text-left"
          >
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              {facial.badge}
            </span>

            <h3 className="text-lg font-semibold text-gray-800 mt-2">
              {facial.name}
            </h3>

            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-4xl md:text-5xl font-bold text-green-700">
                {facial.price}
              </span>
              <span className="text-gray-500 font-medium">{facial.period}</span>
            </div>

            <p className="text-sm text-gray-700 font-medium mt-2">
              {facial.annual}{" "}
              <span className="text-green-700">{facial.annualEquiv}</span>
            </p>

            <ul className="mt-6 space-y-2.5 flex-1">
              {facial.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-gray-700 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            {facial.lock && (
              <div className="mt-6 flex items-start gap-2 bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-xs text-green-800">
                <Lock className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{facial.lock}</span>
              </div>
            )}

            <button
              type="button"
              onClick={handleFacialClick}
              className="mt-6 w-full inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {facial.button}
            </button>
            <p className="text-xs text-gray-500 text-center mt-3">
              {t("pricing.trialLine")}
            </p>
          </motion.div>

          {/* Plano Profissional + Sistema MAP */}
          {pro && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative bg-white/80 rounded-2xl p-8 border border-green-200 shadow-md flex flex-col text-left"
            >
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-green-700 border border-green-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                {pro.badge}
              </span>

              <h3 className="text-lg font-semibold text-gray-800 mt-2">
                {pro.name}
              </h3>

              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl md:text-5xl font-bold text-gray-900">
                  {pro.price}
                </span>
                <span className="text-gray-500 font-medium">{pro.period}</span>
              </div>

              <p className="text-sm text-gray-700 font-medium mt-2">
                {pro.annual}{" "}
                <span className="text-green-700">({pro.annualEquiv})</span>
              </p>

              <ul className="mt-6 space-y-2.5 flex-1">
                {pro.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-gray-700 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/map"
                onClick={handleProClick}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-green-50 text-green-700 font-bold px-6 py-3.5 rounded-xl border-2 border-green-600 transition-all duration-300"
              >
                {pro.button}
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-xs text-gray-500 text-center mt-3">
                {t("pricing.cta")}
              </p>
            </motion.div>
          )}
        </div>

        <p className="text-xs text-gray-500 text-center mt-8 max-w-2xl mx-auto">
          {t("pricing.disclaimer")}
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
export { PricingSection };
