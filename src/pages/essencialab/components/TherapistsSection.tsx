import { motion } from "framer-motion";
import { Leaf, ScanFace, ClipboardList, TrendingUp, ArrowRight } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { trackPixel } from "../../../lib/whatsapp";

type Item = { title: string; description: string };

const icons = [ScanFace, ClipboardList, TrendingUp];

/**
 * Bloco dedicado a profissionais integrativos (terapeutas, naturopatas,
 * iridólogos). A LP principal fala com o consultor de óleos essenciais;
 * este bloco captura o segundo público sem diluir o hero, e encaminha
 * para a página do Sistema MAP.
 */
const TherapistsSection = () => {
  const { t } = useLanguage();
  const items = t("therapists.items") as Item[];

  const handleClick = () => {
    trackPixel("ViewContent", { source: "therapists_block" });
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-gradient-to-br from-teal-700 via-emerald-700 to-green-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden"
      >
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Leaf className="w-5 h-5" />
            <span className="font-semibold">{t("therapists.badge")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            {t("therapists.title")}
          </h2>

          <p className="text-lg text-white/90 max-w-3xl mb-10 leading-relaxed">
            {t("therapists.description")}
          </p>

          <div className="grid gap-6 md:grid-cols-3 mb-10">
            {items.map((item, i) => {
              const Icon = icons[i] ?? Leaf;
              return (
                <div
                  key={item.title}
                  className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-5"
                >
                  <Icon className="w-7 h-7 mb-3 text-emerald-200" />
                  <h3 className="font-semibold text-lg mb-1.5">{item.title}</h3>
                  <p className="text-sm text-white/85 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/10 border border-white/15 rounded-2xl px-6 py-5">
            <p className="font-semibold text-center sm:text-left">
              {t("therapists.priceLine")}
            </p>
            <a
              href="/map"
              onClick={handleClick}
              className="inline-flex items-center gap-2 bg-white text-emerald-800 font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-emerald-50 hover:scale-105 active:scale-95 transition-all duration-300 whitespace-nowrap"
            >
              {t("therapists.button")}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <p className="text-xs text-white/70 mt-6">{t("therapists.disclaimer")}</p>
        </div>
      </motion.div>
    </section>
  );
};

export default TherapistsSection;
export { TherapistsSection };
