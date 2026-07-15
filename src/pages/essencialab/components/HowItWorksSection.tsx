import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { localizedAsset } from "../../../lib/i18nAssets";

const HowItWorksSection = () => {
  const { t, language } = useLanguage();

  // Screenshots resolvidas por idioma (com fallback -pt). Convenção em /public:
  // step-1-pt.jpg, step-2-en.jpg, step-3-es.jpg, ...
  const steps = [
    {
      number: "1",
      title: t("howItWorks.step1.title"),
      description: t("howItWorks.step1.description"),
      image: localizedAsset("/step-1.jpg", language),
    },
    {
      number: "2",
      title: t("howItWorks.step2.title"),
      description: t("howItWorks.step2.description"),
      image: localizedAsset("/step-2.jpg", language),
    },
    {
      number: "3",
      title: t("howItWorks.step3.title"),
      description: t("howItWorks.step3.description"),
      image: localizedAsset("/step-3.jpg", language),
    },
  ];

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Título da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">{t("howItWorks.badge")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("howItWorks.title")}
          </h2>
        </motion.div>

        {/* Cards dos 3 passos */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-green-200 transition-all duration-300"
            >
              {/* Número grande estilizado */}
              <div className="mb-6 flex items-center gap-4">
                <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-emerald-600 leading-none">
                  {step.number}
                </span>
              </div>

              {/* Espaço para screenshot real do app */}
              <div className="mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-green-50 to-emerald-100 aspect-[4/3] flex items-center justify-center">
                <img
                  src={step.image}
                  alt={step.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Placeholder enquanto a screenshot real não é fornecida
                    e.currentTarget.style.display = "none";
                    const parent = e.currentTarget.parentElement;
                    if (parent && !parent.querySelector(".step-placeholder")) {
                      const span = document.createElement("span");
                      span.className =
                        "step-placeholder text-4xl opacity-60";
                      span.textContent = "📱";
                      parent.appendChild(span);
                    }
                  }}
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
export { HowItWorksSection };
