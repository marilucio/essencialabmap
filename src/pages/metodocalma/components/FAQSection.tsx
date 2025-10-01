import React, { useState } from 'react';
import { Card } from './ui/card';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "O Método CALMA# realmente funciona em apenas 3 minutos?",
      answer: "Sim! O Método CALMA# foi desenvolvido com base em método cientificamente testado e aplicado com milhares de pacientes na minha prática clínica com resultados muito rápidos. As técnicas são projetadas para ativar o sistema nervoso parassimpático rapidamente, proporcionando alívio imediato da ansiedade e preparando a mente para o sono reparador."
    },
    {
      question: "É seguro? Tem algum efeito colateral?",
      answer: "Completamente seguro! O método é 100% natural, sem uso de medicamentos ou substâncias químicas. Utiliza apenas técnicas de respiração, relaxamento muscular e mindfulness validadas cientificamente. Não há efeitos colaterais, apenas benefícios para sua saúde mental e física."
    },
    {
      question: "Funciona para pessoas com ansiedade severa ou transtornos do sono?",
      answer: "Sim! O método foi testado com pessoas que sofrem de diferentes níveis de ansiedade, incluindo casos severos, insônia crônica e transtornos do sono. 94% dos usuários relataram melhora significativa já na primeira noite. Para casos mais complexos, recomendamos também acompanhamento médico."
    },
    {
      question: "Como recebo o acesso após a compra?",
      answer: "O acesso é imediato! Após a confirmação do pagamento, você recebe por email o link para acessar todo o conteúdo: vídeos explicativos, áudios guiados, e-books e todos os bônus. Pode começar a usar hoje mesmo, em qualquer dispositivo."
    },
    {
      question: "A garantia de 14 dias é real? Como funciona?",
      answer: "Sim, é uma garantia incondicional! Se por qualquer motivo você não conseguir sua primeira noite tranquila ou não ficar satisfeito, devolvemos 100% do seu dinheiro em até 14 dias. Basta enviar um email para nossa equipe. Sem perguntas, sem burocracia."
    },
    {
      question: "O que está incluído nos bônus?",
      answer: "Você recebe: Acesso Premium ao EssenciaLab (app de análise facial e cardíaca + Card de Saúde Preditiva por 30 dias - valor R$ 283), Curso Resolva seu TDAH (protocolo completo para foco e concentração - valor R$ 197), Protocolo das 3h da Madrugada (técnica específica para voltar a dormir - valor R$ 97), e Suporte VIP por WhatsApp por 30 dias (valor R$ 147)."
    },
    {
      question: "Preciso de equipamentos especiais ou aplicativos?",
      answer: "Não! Você só precisa de um celular, tablet ou computador para acessar o conteúdo. As técnicas podem ser praticadas em qualquer lugar: na cama, no sofá, ou onde você se sentir confortável. Não requer equipamentos, aplicativos pagos ou instalações especiais."
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "A maioria das pessoas sente alívio já na primeira aplicação do método. 94% dos usuários relataram dormir melhor na primeira noite. Para resultados duradouros e transformação completa do padrão de sono, recomendamos praticar por pelo menos 7 dias consecutivos."
    },
    {
      question: "Funciona para todas as idades?",
      answer: "Sim! O método é seguro e eficaz para adolescentes, adultos e idosos. As técnicas são adaptáveis para diferentes idades e condições físicas. Temos relatos de sucesso desde jovens de 16 anos até pessoas com mais de 80 anos."
    },
    {
      question: "E se eu não conseguir fazer as técnicas corretamente?",
      answer: "Não se preocupe! O método é muito simples de ser aplicado e contem explicações detalhadas. Além disso, você tem acesso ao suporte VIP por WhatsApp por 30 dias, onde nossa equipe especializada tira todas as suas dúvidas e te ajuda a aplicar as técnicas corretamente."
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
        {/* Cabeçalho da seção */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="bg-blue-600 text-white rounded-full px-4 lg:px-6 py-2 lg:py-3 inline-block mb-4 lg:mb-6">
            <span className="font-bold text-sm lg:text-base">❓ DÚVIDAS FREQUENTES</span>
          </div>
          
          <h2 className="heading-responsive font-bold text-gray-800 mb-4 lg:mb-6">
            Tire Todas as Suas Dúvidas
            <span className="block text-blue-600">Sobre o Método CALMA#</span>
          </h2>
          
          <p className="text-responsive text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Respondemos as perguntas mais comuns de quem quer transformar suas noites 
            e ter o sono tranquilo que merece
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

        {/* Seção de contato adicional */}
        <div className="text-center mt-12 lg:mt-16">
          <Card className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-6 lg:p-8 rounded-xl shadow-glow max-w-2xl mx-auto">
            <div className="text-3xl lg:text-4xl mb-4">💬</div>
            <h3 className="text-lg lg:text-xl font-bold mb-3">
              Ainda tem dúvidas?
            </h3>
            <p className="text-sm lg:text-base text-blue-100 mb-4 leading-relaxed">
              Nossa equipe especializada está pronta para te ajudar! 
              Com a compra, você ganha acesso ao suporte VIP por WhatsApp por 30 dias.
            </p>
            <div className="bg-white/20 rounded-lg p-3 lg:p-4">
              <p className="text-xs lg:text-sm font-medium">
                ✅ Suporte especializado ✅ Resposta em até 2h ✅ Acompanhamento personalizado
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