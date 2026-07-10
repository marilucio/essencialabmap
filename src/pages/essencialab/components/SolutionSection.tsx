import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Camera, TrendingUp, Heart, ChevronLeft, ChevronRight, Shield } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const screenshots = [
  { src: "/images/print1.png", alt: "Tela de escaneamento facial" },
  { src: "/images/print2.png", alt: "Mapa de bem-estar gerado" },
  { src: "/images/print3.png", alt: "Sugestões de óleos essenciais" },
  { src: "/images/print4.png", alt: "Protocolo personalizado" },
  { src: "/images/print5.png", alt: "Histórico de análises" },
  { src: "/images/print6.png", alt: "Recomendações detalhadas" },
  { src: "/images/print7.png", alt: "Acompanhamento do cliente" },
];

const SolutionSection = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const features = [
    {
      icon: <Camera className="w-6 h-6" />,
      text: t('solution.feature1')
    },
    {
      icon: <Heart className="w-6 h-6" />,
      text: t('solution.feature2')
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      text: t('solution.feature3')
    }
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
            <span className="font-semibold">{t('solution.badge')}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('solution.title')}
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {t('solution.description')}
          </p>
        </motion.div>

        {/* Conteúdo Principal */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Imagem/Visual - Carrossel de Prints Reais */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-green-100 to-emerald-200 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={screenshots[currentIndex].src}
                alt={screenshots[currentIndex].alt}
                className="w-full h-80 md:h-96 object-contain bg-white p-2"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"%3E%3Crect fill="%2310b981" width="600" height="400"/%3E%3Ctext x="50%25" y="50%25" font-size="24" text-anchor="middle" fill="white"%3EEssenciaLab%3C/text%3E%3C/svg%3E';
                }}
              />
              
              {/* Navegação do Carrossel */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>

              {/* Indicadores */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {screenshots.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentIndex ? 'bg-green-600 w-4' : 'bg-white/60 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
              
              {/* Badge flutuante */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <span className="text-sm font-bold text-green-700">{t('solution.iaBadge')}</span>
              </div>
            </div>

            {/* Elementos decorativos */}
            <div className="absolute -bottom-4 -left-4 bg-orange-500 rounded-2xl p-4 shadow-xl">
              <span className="text-2xl">📱</span>
            </div>
          </motion.div>

          {/* Texto Explicativo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Features rápidas */}
            <div className="space-y-3 mt-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-green-50 rounded-lg p-4"
                >
                  <div className="text-green-600 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <span className="text-gray-800 font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bloco de Transparência — Como a Tecnologia Funciona */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-white border-2 border-emerald-100 rounded-3xl p-8 md:p-10 shadow-lg">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-6 text-sm font-semibold">
              <Shield className="w-4 h-4" />
              {t('solution.techTransparency.badge')}
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              {t('solution.techTransparency.title')}
            </h3>

            <ul className="space-y-4 mb-6">
              {(t('solution.techTransparency.items') as string[]).map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                  <span className="text-emerald-500 mt-1 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
              <p className="text-sm text-amber-800 font-medium">
                💡 {t('solution.techTransparency.note')}
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SolutionSection;
export { SolutionSection };
