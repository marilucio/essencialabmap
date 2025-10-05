import { useState } from 'react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Realmente funciona el Método CALMA# para todos los tipos de ansiedad?",
      answer: "Sí, el Método CALMA# ha sido probado con más de 15.000 personas con diferentes tipos de ansiedad: trastorno de ansiedad generalizada, ataques de pánico, ansiedad social, fobias específicas y ansiedad nocturna. Las técnicas son adaptables a cada situación y los audios neuroacústicos trabajan a nivel subconsciente, independientemente del tipo específico de ansiedad que tengas."
    },
    {
      question: "¿Cuánto tiempo necesito para ver los primeros resultados?",
      answer: "La mayoría de nuestros usuarios reportan mejoras significativas en los primeros 7-10 días. Algunos sienten alivio desde la primera noche usando los audios neuroacústicos. Sin embargo, para una transformación completa y duradera, recomendamos seguir el método durante 30 días. Recuerda que tienes garantía total de 30 días para probar sin riesgo."
    },
    {
      question: "¿Los audios neuroacústicos son seguros? ¿Tienen efectos secundarios?",
      answer: "Los audios neuroacústicos son completamente seguros y naturales. Utilizan frecuencias específicas (ondas theta y delta) que tu cerebro produce naturalmente durante el sueño profundo. Los mensajes subliminales están a -45db, por debajo del umbral consciente. No tienen efectos secundarios y pueden ser usados por personas de cualquier edad. Miles de usuarios los han usado sin reportar ningún problema."
    },
    {
      question: "¿Necesito experiencia previa en meditación o técnicas de relajación?",
      answer: "No necesitas ninguna experiencia previa. El Método CALMA# está diseñado para principiantes absolutos. Cada técnica viene explicada paso a paso, con ejemplos prácticos y ejercicios guiados. Los audios neuroacústicos funcionan automáticamente mientras duermes, sin que tengas que hacer nada especial. Es tan simple como presionar play y relajarte."
    },
    {
      question: "¿Puedo usar el método si estoy tomando medicamentos para la ansiedad?",
      answer: "Sí, el Método CALMA# es completamente natural y complementario. No interfiere con medicamentos ni tratamientos médicos. De hecho, muchos de nuestros usuarios han logrado reducir gradualmente su dependencia de medicamentos (siempre bajo supervisión médica). Sin embargo, siempre recomendamos consultar con tu médico antes de hacer cambios en tu medicación."
    },
    {
      question: "¿Funciona para ansiedad severa o solo para casos leves?",
      answer: "El método ha demostrado efectividad tanto en casos leves como severos de ansiedad. Tenemos testimonios de personas que sufrían múltiples ataques de pánico diarios y ahora viven sin ansiedad. Las técnicas están diseñadas para ser escalables: puedes usarlas tanto para prevenir la ansiedad como para manejar crisis agudas. Cuanto más severa sea tu ansiedad, más importante es que tengas estas herramientas."
    },
    {
      question: "¿Qué diferencia este método de la terapia tradicional o otros cursos online?",
      answer: "La principal diferencia son los audios neuroacústicos con mensajes subliminales, que trabajan mientras duermes reprogramando tu subconsciente. Además, el método combina neurociencia moderna con técnicas milenarias probadas. No es solo teoría: son herramientas prácticas que puedes usar inmediatamente. Y tienes acceso de por vida, no sesiones limitadas como en terapia tradicional."
    },
    {
      question: "¿Cómo accedo al contenido después de la compra?",
      answer: "Inmediatamente después de confirmar tu pago, recibirás un email con tus datos de acceso a la plataforma exclusiva. Podrás descargar todos los materiales (PDFs, audios, videos) y acceder desde cualquier dispositivo: computadora, tablet o celular. El acceso es de por vida, así que podrás repasar el contenido cuando lo necesites."
    },
    {
      question: "¿La garantía de 30 días es real? ¿Cómo funciona?",
      answer: "Sí, es una garantía real y sin complicaciones. Si en 30 días no sientes una mejora significativa en tu ansiedad, simplemente envías un email solicitando el reembolso y te devolvemos el 100% de tu dinero. No hacemos preguntas incómodas ni ponemos obstáculos. Confiamos tanto en nuestro método que asumimos todo el riesgo."
    },
    {
      question: "¿Puedo compartir el contenido con familiares que también sufren ansiedad?",
      answer: "El contenido está licenciado para uso personal. Sin embargo, entendemos que la ansiedad afecta a familias enteras. Si tienes familiares que también necesitan ayuda, contáctanos y te haremos un descuento especial para licencias adicionales. Queremos ayudar a todas las personas posibles, pero también necesitamos proteger nuestro trabajo intelectual."
    },
    {
      question: "¿Hay soporte en español si tengo dudas durante el proceso?",
      answer: "Sí, todo nuestro soporte está disponible en español. Puedes contactarnos por email, WhatsApp o a través de la plataforma. Nuestro equipo está capacitado para ayudarte con cualquier duda sobre las técnicas, el uso de los audios o cualquier aspecto del método. Generalmente respondemos en menos de 24 horas."
    },
    {
      question: "¿El método funciona para adolescentes o solo para adultos?",
      answer: "El método es efectivo para adolescentes desde los 14 años y adultos de cualquier edad. Para adolescentes menores de 18 años, recomendamos que un padre o tutor supervise el proceso inicialmente. Los audios neuroacústicos son especialmente efectivos en cerebros jóvenes, que tienen mayor neuroplasticidad. Tenemos muchos casos exitosos con estudiantes que superaron ansiedad de exámenes y social."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Cabeçalho */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">
              Preguntas{" "}
              <span className="text-blue-600">Frecuentes</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Resolvemos las dudas más comunes sobre el Método CALMA# 
              para que puedas tomar la mejor decisión para tu bienestar.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 lg:px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 transform transition-transform duration-200 ${
                    openFAQ === index ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 lg:px-8 pb-6">
                    <div className="border-t border-gray-100 pt-6">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Seção adicional de confiança */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 lg:p-12 text-white text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6">
              ¿Aún tienes dudas?
            </h3>
            <p className="text-lg lg:text-xl mb-8 opacity-90">
              Nuestro equipo de soporte está disponible para ayudarte. 
              Contáctanos y resolveremos todas tus preguntas personalmente.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-2xl p-6">
                <div className="text-3xl mb-3">📧</div>
                <div className="font-semibold">Email</div>
                <div className="text-sm opacity-80">Respuesta en 24h</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-6">
                <div className="text-3xl mb-3">💬</div>
                <div className="font-semibold">WhatsApp</div>
                <div className="text-sm opacity-80">Soporte inmediato</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-6">
                <div className="text-3xl mb-3">🎯</div>
                <div className="font-semibold">Plataforma</div>
                <div className="text-sm opacity-80">Chat integrado</div>
              </div>
            </div>

            <button className="bg-white text-blue-600 font-bold text-lg px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-300">
              💬 CONTACTAR SOPORTE AHORA
            </button>
          </div>

          {/* CTA final */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              ¿Listo para transformar tu ansiedad en calma y confianza?
            </p>
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold text-xl px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
              🚀 SÍ, QUIERO EMPEZAR MI TRANSFORMACIÓN
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;