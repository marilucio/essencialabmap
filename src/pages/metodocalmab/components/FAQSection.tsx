import { useState } from 'react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "Posso usar junto com meu tratamento médico atual?",
      answer: "Sim! O Kit SOS Ansiedade foi desenvolvido para COMPLEMENTAR seu tratamento médico, nunca para substituí-lo. As técnicas são baseadas em terapia cognitivo-comportamental e podem ser usadas junto com medicação e psicoterapia. Sempre mantenha acompanhamento com seu médico."
    },
    {
      question: "Funciona para insônia crônica ou só para crises pontuais?",
      answer: "Funciona para ambos! O protocolo CALMA# é especialmente eficaz para crises noturnas (resultados em 5-10 minutos), mas o Checklist 21 Dias foi desenvolvido para reestruturar seus padrões de sono a longo prazo, tratando a insônia crônica na raiz."
    },
    {
      question: "E se eu não conseguir fazer as técnicas de respiração?",
      answer: "Por isso criamos as 'Trilhas Rápidas' com versões adaptadas! Temos técnicas de 30 segundos para quem tem dificuldade respiratória, versões discretas para locais públicos, e até ancoragem sensorial que não depende de respiração. Há sempre uma alternativa que funciona para você."
    },
    {
      question: "Quanto tempo leva para ver resultados reais?",
      answer: "Para crises agudas: 5-10 minutos com o protocolo CALMA#. Para mudanças duradouras no padrão de sono: 7-14 dias seguindo o Checklist. Para transformação completa dos hábitos: 21 dias (tempo científico para formação de novos padrões neurais)."
    },
    {
      question: "Funciona mesmo ou é só mais um produto digital?",
      answer: "Nosso kit é baseado em protocolos científicos validados: CBT-I (Terapia Cognitivo-Comportamental para Insônia), técnicas de respiração 4-7-8 modificadas, e mindfulness clínico. Mais de 1.800 pessoas já relataram melhorias significativas. Oferecemos garantia incondicional de 14 dias."
    },
    {
      question: "Como recebo o material após a compra?",
      answer: "Imediatamente! Assim que o pagamento é confirmado (até 2 minutos), você recebe por email: links para download de todos os materiais, acesso aos áudios guiados, fichas imprimíveis em PDF, e instruções de uso. Tudo fica disponível 24h por dia."
    },
    {
      question: "E se eu tiver dúvidas durante o uso?",
      answer: "Você terá suporte completo! Além dos materiais auto-explicativos, oferecemos suporte via WhatsApp para dúvidas sobre implementação das técnicas. Nossa equipe é treinada para ajudar você a adaptar as estratégias à sua situação específica."
    },
    {
      question: "Posso usar se tenho outras condições como depressão ou TAG?",
      answer: "As técnicas são seguras e complementares, mas sempre consulte seu médico primeiro. Muitos de nossos usuários têm comorbidades e relatam benefícios, mas cada caso é único. O material não substitui acompanhamento profissional para condições clínicas."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 px-5 bg-gradient-to-br from-blue-50 to-purple-50" id="faq">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
          ❓ Perguntas Frequentes
        </h2>
        
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Esclarecemos as principais dúvidas sobre o Kit SOS Ansiedade:
        </p>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
              >
                <span className="font-semibold text-gray-800 pr-4 text-lg">{faq.question}</span>
                <span className="text-2xl text-purple-500 flex-shrink-0 font-bold">
                  {openFAQ === index ? '−' : '+'}
                </span>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 py-5 bg-purple-50 border-t border-purple-100">
                  <p className="text-gray-700 leading-relaxed text-base">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-8 mt-12 text-center shadow-lg">
          <h3 className="text-2xl font-bold mb-4">
            💬 Ainda tem dúvidas?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Nossa equipe especializada está pronta para esclarecer qualquer questão sobre o Kit SOS Ansiedade.
          </p>
          <a 
            href="https://wa.me/5543991343807?text=Olá! Tenho dúvidas sobre o Kit SOS Ansiedade" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <span className="mr-2">📱</span>
            Falar no WhatsApp Agora
          </a>
          <p className="text-sm mt-4 opacity-75">
            Resposta em até 2 horas • Atendimento humanizado
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;