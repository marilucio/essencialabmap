import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShoppingCart, Zap, BookOpen, Check } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const BenefitsSection = () => {
  const { t } = useLanguage();
  const benefits = [
    {
      icon: <Award className="w-10 h-10" />,
      title: t('benefits.card1.title'),
      description: t('benefits.card1.description')
    },
    {
      icon: <ShoppingCart className="w-10 h-10" />,
      title: t('benefits.card2.title'),
      description: t('benefits.card2.description')
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: t('benefits.card3.title'),
      description: t('benefits.card3.description')
    },
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: t('benefits.card4.title'),
      description: t('benefits.card4.description')
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
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-6">
            <Check className="w-5 h-5" />
            <span className="font-semibold">{t('benefits.badge')}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('benefits.title')}
          </h2>
        </motion.div>

        {/* Cards de Benefícios */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-green-200 transition-all duration-300"
            >
              {/* Ícone com gradiente */}
              <div className="mb-6">
                <div className="inline-flex p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
              </div>

              {/* Título */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span>{benefit.title}</span>
                </div>
              </h3>

              {/* Descrição */}
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                {benefit.description}
              </p>


              {/* Decoração de hover */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BenefitsSection;
export { BenefitsSection };
