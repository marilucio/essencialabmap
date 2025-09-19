import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const GuaranteeSection = () => {
  const handlePurchaseClick = () => {
    window.open('https://pay.kiwify.com.br/KDSJr1d', '_blank');
  };

  const guaranteeFeatures = [
    {
      icon: "🛡️",
      title: "Garantia Incondicional",
      description: "14 dias para testar sem riscos"
    },
    {
      icon: "💰",
      title: "Dinheiro de Volta",
      description: "100% do valor devolvido se não funcionar"
    },
    {
      icon: "⚡",
      title: "Sem Burocracia",
      description: "Apenas um email e pronto"
    },
    {
      icon: "🤝",
      title: "Compromisso Total",
      description: "Sua satisfação é nossa prioridade"
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      age: 42,
      text: "Testei por 3 dias e já senti a diferença. Mas a garantia me deu total segurança para experimentar.",
      location: "São Paulo, SP"
    },
    {
      name: "João Santos",
      age: 35,
      text: "Comprei confiante por causa da garantia. Não precisei usar, o método funcionou na primeira noite!",
      location: "Rio de Janeiro, RJ"
    }
  ];

  return (
    <section className="py-12 lg:py-20 bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 text-white relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/40 to-purple-900/40"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-green-500/20 to-transparent"></div>
      
      <div className="container mx-auto container-responsive relative z-10">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="bg-yellow-500 text-gray-800 rounded-full px-4 lg:px-6 py-2 lg:py-3 inline-block mb-4 lg:mb-6">
            <span className="font-bold text-sm lg:text-base">🛡️ GARANTIA TOTAL</span>
          </div>
          
          <h2 className="heading-responsive font-bold mb-4 lg:mb-6">
            Sua Compra Está 100% Protegida
            <span className="block text-yellow-300">Por 14 Dias Completos</span>
          </h2>
          
          <p className="text-responsive text-green-100 max-w-3xl mx-auto leading-relaxed">
            Teste o Método CALMA# sem nenhum risco. Se não conseguir sua primeira noite tranquila, 
            devolvemos todo o seu dinheiro. Sem perguntas, sem burocracia.
          </p>
        </div>

        {/* Card principal da garantia */}
        <div className="max-w-4xl mx-auto mb-12 lg:mb-16">
          <Card className="bg-white text-gray-800 p-6 lg:p-10 rounded-2xl shadow-glow border-4 border-yellow-400">
            {/* Ícone central */}
            <div className="text-center mb-8 lg:mb-12">
              <div className="text-6xl lg:text-8xl mb-4">🛡️</div>
              <h3 className="text-xl lg:text-3xl font-bold text-gray-800 mb-4">
                Garantia Incondicional de 14 Dias
              </h3>
              <p className="text-base lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Experimente o método por 14 dias completos. Se por qualquer motivo você não ficar satisfeito, 
                devolvemos <span className="font-bold text-green-600">100% do seu investimento</span>.
              </p>
            </div>

            {/* Grid de características da garantia */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8 lg:mb-12">
              {guaranteeFeatures.map((feature, index) => (
                <div key={index} className="text-center p-4 lg:p-6 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="text-3xl lg:text-4xl mb-3">{feature.icon}</div>
                  <h4 className="font-bold text-sm lg:text-base text-gray-800 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-xs lg:text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Como funciona a garantia */}
            <div className="bg-blue-50 rounded-xl p-4 lg:p-6 border border-blue-200 mb-8 lg:mb-12">
              <h4 className="font-bold text-lg lg:text-xl text-gray-800 mb-4 text-center">
                Como Funciona Nossa Garantia:
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                <div className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center mx-auto mb-3 font-bold">
                    1
                  </div>
                  <h5 className="font-semibold text-sm lg:text-base text-gray-800 mb-2">
                    Teste por 14 Dias
                  </h5>
                  <p className="text-xs lg:text-sm text-gray-600">
                    Use o método quantas vezes quiser durante 14 dias completos
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center mx-auto mb-3 font-bold">
                    2
                  </div>
                  <h5 className="font-semibold text-sm lg:text-base text-gray-800 mb-2">
                    Não Funcionou?
                  </h5>
                  <p className="text-xs lg:text-sm text-gray-600">
                    Envie um email para suporte@essencialab.site
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center mx-auto mb-3 font-bold">
                    3
                  </div>
                  <h5 className="font-semibold text-sm lg:text-base text-gray-800 mb-2">
                    Receba o Reembolso
                  </h5>
                  <p className="text-xs lg:text-sm text-gray-600">
                    100% do valor devolvido em até 5 dias úteis
                  </p>
                </div>
              </div>
            </div>

            {/* Depoimentos sobre a garantia */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-8 lg:mb-12">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-green-50 p-4 lg:p-6 rounded-xl border border-green-200">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl lg:text-3xl">💬</div>
                    <div className="flex-1">
                      <p className="text-xs lg:text-sm text-gray-700 italic mb-3 leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      <div className="text-xs lg:text-sm">
                        <p className="font-semibold text-gray-800">
                          {testimonial.name}, {testimonial.age} anos
                        </p>
                        <p className="text-gray-600">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Botão de ação */}
            <div className="text-center">
              <Button 
                onClick={handlePurchaseClick}
                className="w-full lg:w-auto bg-green-600 hover:bg-green-700 text-white font-bold text-sm lg:text-lg px-4 lg:px-8 py-4 lg:py-6 rounded-xl shadow-glow transition-smooth transform hover:scale-105 leading-tight"
              >
                <span className="block sm:inline">🛒 Quero Testar Sem Riscos&nbsp;</span>
                <span className="block sm:inline font-extrabold">por R$ 19,90</span>
              </Button>
              
              <p className="text-xs lg:text-sm text-gray-500 mt-4">
                ✅ Acesso imediato ✅ Garantia total ✅ Suporte especializado
              </p>
            </div>
          </Card>
        </div>

        {/* Seção de confiança adicional */}
        <div className="text-center">
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 lg:p-8 rounded-xl max-w-3xl mx-auto">
            <h3 className="text-lg lg:text-xl font-bold mb-4">
              Por Que Oferecemos Esta Garantia?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 text-sm lg:text-base">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl mb-3">🎯</div>
                <h4 className="font-semibold mb-2">Confiança Total</h4>
                <p className="text-white/80 leading-relaxed">
                  Sabemos que o método funciona. 94% dos usuários têm sucesso na primeira noite.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl lg:text-4xl mb-3">❤️</div>
                <h4 className="font-semibold mb-2">Compromisso Real</h4>
                <p className="text-white/80 leading-relaxed">
                  Nosso objetivo é sua transformação, não apenas a venda. Sua satisfação é nossa prioridade.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
export { GuaranteeSection };