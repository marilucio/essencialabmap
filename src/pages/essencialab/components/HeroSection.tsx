import React, { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { AppStoreBadge } from "../../../components/badges/AppStoreBadge";
import { GooglePlayBadge } from "../../../components/badges/GooglePlayBadge";
import { useLanguage } from "../LanguageContext";
import { MessageCircle, Play } from "lucide-react";
import { buildWhatsappLink, trackPixel } from "../../../lib/whatsapp";

/**
 * Vídeo demo vertical (9:16) dentro de um mockup de smartphone.
 * - autoplay muted loop playsinline preload=metadata
 * - carrega o <source> só quando a seção se aproxima do viewport (IntersectionObserver)
 * - respeita prefers-reduced-motion: sem autoplay, exibe poster + botão de play
 */
const DemoVideo = () => {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);
  const [playing, setPlaying] = useState(false);

  // Lazy load: só marca inView quando a seção se aproxima
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Autoplay quando em view, exceto reduced-motion
  useEffect(() => {
    if (inView && !shouldReduceMotion && videoRef.current) {
      videoRef.current.play().catch(() => {
        /* autoplay bloqueado — poster + botão de play permanecem */
      });
    }
  }, [inView, shouldReduceMotion]);

  const handleManualPlay = () => {
    videoRef.current?.play().catch(() => {});
  };

  return (
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
        className="flex flex-col items-center"
        ref={containerRef}
      >
        {/* Mockup de smartphone (moldura CSS, sem lib externa) */}
        <div className="relative mx-auto w-[240px] sm:w-[280px]">
          <div className="relative rounded-[2.75rem] border-[12px] border-gray-900 bg-gray-900 shadow-2xl overflow-hidden aspect-[9/19]">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-gray-900 rounded-b-2xl z-20"></div>

            <video
              ref={videoRef}
              className="w-full h-full object-cover bg-gray-100"
              poster="/demo-poster.jpg"
              muted
              loop
              playsInline
              preload="metadata"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              aria-label={t("hero.videoTitle")}
            >
              {inView && <source src="/demo-analise-facial.mp4" type="video/mp4" />}
            </video>

            {/* Overlay de play — visível quando não está tocando
                (reduced-motion ou autoplay bloqueado) */}
            {!playing && (
              <button
                type="button"
                onClick={handleManualPlay}
                className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
                aria-label="Reproduzir vídeo"
              >
                <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white/90 shadow-lg">
                  <Play className="w-7 h-7 text-green-700 fill-current ml-1" />
                </span>
              </button>
            )}
          </div>

          {/* Elementos decorativos, coerentes com o design system */}
          <div className="absolute -top-3 -right-3 bg-white rounded-full p-3 shadow-xl border border-green-100">
            <span className="text-2xl">🌿</span>
          </div>
          <div className="absolute -bottom-3 -left-3 bg-white rounded-full p-3 shadow-xl border border-green-100">
            <span className="text-2xl">✨</span>
          </div>
        </div>

        {/* Link discreto para a demonstração completa com narração (YouTube) */}
        <a
          href="https://www.youtube.com/watch?v=aBbHcW7_zb8"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 text-sm text-green-700 font-semibold underline decoration-green-300 underline-offset-4 hover:text-green-800 transition-colors"
        >
          <Play className="w-4 h-4" />
          {t("hero.videoFullLink")}
        </a>
      </motion.div>
    </div>
  );
};

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToDownload = () => {
    document
      .getElementById("download")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleAppStoreClick = () => {
    trackPixel("InitiateCheckout", { platform: "appstore" });
    window.open("https://apps.apple.com/app/id6756675158", "_blank");
  };

  const handleGooglePlayClick = () => {
    trackPixel("InitiateCheckout", { platform: "googleplay" });
    window.open(
      "https://play.google.com/store/apps/details?id=com.essencialab.app",
      "_blank",
    );
  };

  const handleWhatsappClick = () => {
    trackPixel("Lead", { source: "whatsapp_hero" });
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

              {/* Headline Principal */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                {t("hero.title")}
              </h1>

              {/* Sub-headline */}
              <h2 className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mt-4">
                {t("hero.subtitle")}
              </h2>
            </div>

            {/* Barra de prova social — "Mais de 500 consultores" */}
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-green-100 shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("hero.socialProof")}
              </p>
            </div>

            {/* CTA primário único da dobra + alternativa WhatsApp */}
            <div className="space-y-3">
              <button
                type="button"
                onClick={scrollToDownload}
                className="inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold text-lg sm:text-xl px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
              >
                {t("hero.primaryCta")}
              </button>

              <div className="text-sm text-gray-600">
                <p className="mb-1">{t("hero.whatsappCtaHint")}</p>
                <a
                  href={buildWhatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsappClick}
                  className="inline-flex items-center gap-2 text-green-700 font-semibold underline decoration-green-300 underline-offset-4 hover:text-green-800 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  {t("hero.whatsappCta")}
                </a>
              </div>
            </div>

            {/* Vídeo demo em mockup de smartphone */}
            <DemoVideo />

            {/* Área de download — CTA primário de loja (alvo do scroll) */}
            <div
              id="download"
              className="scroll-mt-24 space-y-6 pt-12 border-t border-green-100"
            >
              {/* Badge de Teste Grátis */}
              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 border-2 border-orange-300 rounded-2xl p-6 shadow-lg max-w-lg mx-auto">
                <p className="text-orange-800 font-bold text-xl mb-2">
                  {t("hero.freeTrialBadge")}
                </p>
                <p className="text-orange-700 text-sm">
                  {t("hero.freeTrialSubtitle")}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <AppStoreBadge onClick={handleAppStoreClick} />
                <GooglePlayBadge onClick={handleGooglePlayClick} />
              </div>

              {/* Alternativa WhatsApp abaixo da loja */}
              <div className="text-center text-sm text-gray-600">
                <p className="mb-1">{t("hero.whatsappCtaHint")}</p>
                <a
                  href={buildWhatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsappClick}
                  className="inline-flex items-center gap-2 text-green-700 font-semibold underline decoration-green-300 underline-offset-4 hover:text-green-800 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  {t("hero.whatsappCta")}
                </a>
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
