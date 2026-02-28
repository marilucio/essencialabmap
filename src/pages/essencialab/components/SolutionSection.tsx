import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Camera, TrendingUp, Heart } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const SolutionSection = () => {
  const { t } = useLanguage();
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
          {/* Imagem/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-green-100 to-emerald-200 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/images/iascaning.webp" 
                alt="Tecnologia de Análise Facial" 
                className="w-full h-80 md:h-96 object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"%3E%3Crect fill="%2310b981" width="600" height="400"/%3E%3Ctext x="50%25" y="50%25" font-size="24" text-anchor="middle" fill="white"%3ETecnologia IA%3C/text%3E%3C/svg%3E';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent"></div>
              
              {/* Badge flutuante */}
              <div className="absolute top-4 right-4 bg-white rounded-full px-4 py-2 shadow-lg">
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

      </div>
    </section>
  );
};

export default SolutionSection;
export { SolutionSection };
