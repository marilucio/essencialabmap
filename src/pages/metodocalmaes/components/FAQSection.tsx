import React, { useState } from 'react';
import { Card } from './ui/card';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿El Método CALMA realmente funciona en solo 3 minutos?",
      answer: "¡Sí! El Método CALMA fue desarrollado con base en métodos científicamente probados y aplicado con algunos pacientes en mi práctica clínica con resultados muy rápidos. Las técnicas están diseñadas para activar el sistema nervioso parasimpático rápidamente, proporcionando alivio inmediato de la ansiedad y preparando la mente para el sueño reparador."
    },
    {
      question: "¿Es seguro? ¿Tiene algún efecto secundario?",
      answer: "¡Completamente seguro! El método es 100% natural, sin uso de medicamentos o sustancias químicas. Utiliza solo técnicas de respiración, relajación muscular y mindfulness validadas científicamente. No hay efectos secundarios, solo beneficios para tu salud mental y física."
    },
    {
      question: "¿Funciona para personas con ansiedad severa o trastornos del sueño?",
      answer: "¡Sí! El método fue probado con personas que sufren de diferentes niveles de ansiedad, incluyendo casos severos, insomnio crónico y trastornos del sueño. 94% de los usuarios reportaron mejora significativa ya en la primera noche. Para casos más complejos, recomendamos también seguimiento médico."
    },
    {
      question: "¿Cómo recibo el acceso después de la compra?",
      answer: "¡El acceso es inmediato! Después de la confirmación del pago, recibes por email el enlace para acceder a todo el contenido: videos explicativos, audios guiados, e-books y todos los bonos. Puedes empezar a usar hoy mismo, en cualquier dispositivo."
    },
    {
      question: "¿La garantía de 14 días es real? ¿Cómo funciona?",
      answer: "¡Sí, es una garantía incondicional! Si por cualquier motivo no consigues tu primera noche tranquila o no quedas satisfecho, devolvemos 100% de tu dinero en hasta 14 días. Solo envía un email a nuestro equipo. Sin preguntas, sin burocracia."
    },
    {
      question: "¿Qué está incluido en los bonos?",
      answer: "Recibes: Acceso Premium a EssenciaLab (app de análisis facial y cardíaco + Card de Salud Predictiva por 30 días - valor $283), Curso Resuelve tu TDAH (protocolo completo para foco y concentración - valor $197), Protocolo de las 3 de la Madrugada (técnica específica para volver a dormir - valor $97), y Soporte VIP por WhatsApp por 30 días (valor $147)."
    },
    {
      question: "¿Necesito equipos especiales o aplicaciones?",
      answer: "¡No! Solo necesitas un celular, tablet o computadora para acceder al contenido. Las técnicas pueden ser practicadas en cualquier lugar: en la cama, en el sofá, o donde te sientas cómodo. No requiere equipos, aplicaciones pagas o instalaciones especiales."
    },
    {
      question: "¿Cuánto tiempo toma ver resultados?",
      answer: "La mayoría de las personas siente alivio ya en la primera aplicación del método. 94% de los usuarios reportaron dormir mejor en la primera noche. Para resultados duraderos y transformación completa del patrón de sueño, recomendamos practicar por al menos 7 días consecutivos."
    },
    {
      question: "¿Funciona para todas las edades?",
      answer: "¡Sí! El método es seguro y eficaz para adolescentes, adultos y ancianos. Las técnicas son adaptables para diferentes edades y condiciones físicas. Tenemos reportes de éxito desde jóvenes de 16 años hasta personas con más de 80 años."
    },
    {
      question: "¿Y si no logro hacer las técnicas correctamente?",
      answer: "¡No te preocupes! El método es muy simple de aplicar y contiene explicaciones detalladas. Además, tienes acceso al soporte VIP por WhatsApp por 30 días, donde nuestro equipo especializado resuelve todas tus dudas y te ayuda a aplicar las técnicas correctamente."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 lg:py-20 bg-gradient-to-br from-blue-50 to-green-50 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-green-100/30"></div>
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-200/20 to-transparent"></div>
      
      <div className="container mx-auto container-responsive relative z-10">
        {/* Cabecera de la sección */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="bg-blue-600 text-white rounded-full px-4 lg:px-6 py-2 lg:py-3 inline-block mb-4 lg:mb-6">
            <span className="font-bold text-sm lg:text-base">❓ DUDAS FRECUENTES</span>
          </div>
          
          <h2 className="heading-responsive font-bold text-gray-800 mb-4 lg:mb-6">
            Resuelve Todas Tus Dudas
            <span className="block text-blue-600">Sobre el Método CALMA</span>
          </h2>
          
          <p className="text-responsive text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Respondemos las preguntas más comunes de quien quiere transformar sus noches 
            y tener el sueño tranquilo que merece
          </p>
        </div>

        {/* Lista de FAQs */}
        <div className="max-w-4xl mx-auto space-y-4 lg:space-y-6">
          {faqs.map((faq, index) => (
            <Card 
              key={index} 
              className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-4 lg:p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm lg:text-lg font-semibold text-gray-800 pr-4 leading-relaxed">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-blue-100 flex items-center justify-center transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 bg-blue-600' : ''
                  }`}>
                    <svg 
                      className={`w-3 h-3 lg:w-4 lg:h-4 transition-colors duration-300 ${
                        openIndex === index ? 'text-white' : 'text-blue-600'
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${
                openIndex === index 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="px-4 lg:px-6 pb-4 lg:pb-6">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Sección de contacto adicional */}
        <div className="text-center mt-12 lg:mt-16">
          <Card className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-6 lg:p-8 rounded-xl shadow-glow max-w-2xl mx-auto">
            <div className="text-3xl lg:text-4xl mb-4">💬</div>
            <h3 className="text-lg lg:text-xl font-bold mb-3">
              ¿Aún tienes dudas?
            </h3>
            <p className="text-sm lg:text-base text-blue-100 mb-4 leading-relaxed">
              ¡Nuestro equipo especializado está listo para ayudarte! 
              Con la compra, ganas acceso al soporte VIP por WhatsApp por 30 días.
            </p>
            <div className="bg-white/20 rounded-lg p-3 lg:p-4">
              <p className="text-xs lg:text-sm font-medium">
                ✅ Soporte especializado ✅ Respuesta en hasta 2h ✅ Seguimiento personalizado
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
export { FAQSection };