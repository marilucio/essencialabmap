import React from 'react';
import { motion } from 'framer-motion';
import { Star, Shield, TrendingUp } from 'lucide-react';

const ProofSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Consultora doTERRA há 2 anos",
      photo: "👩‍💼",
      rating: 5,
      text: "Dobrei minhas vendas usando o scanner facial! Os clientes ficam impressionados com a tecnologia e querem comprar na hora. Não é mais 'vou pensar', agora é 'qual o melhor kit para começar?'",
      highlight: "Dobrou as vendas"
    },
    {
      name: "Ana Costa",
      role: "Consultora doTERRA há 6 meses",
      photo: "👩",
      rating: 5,
      text: "Comecei há pouco tempo e estava insegura. O EssenciaLab me deu a confiança que eu precisava! Agora pareço uma especialista e meus clientes me respeitam muito mais. Resultado: 3x mais vendas!",
      highlight: "3x mais vendas em 6 meses"
    },
    {
      name: "Carla Mendes",
      role: "Consultora doTERRA há 5 anos",
      photo: "👱‍♀️",
      rating: 5,
      text: "Trabalho com óleos há anos, mas nunca vi algo tão poderoso. O relatório da análise facial cria uma curiosidade instantânea. Meus clientes compartilham a experiência e isso gera vendas em cascata!",
      highlight: "Vendas em cascata"
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
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
            <Star className="w-5 h-5" />
            <span className="font-semibold">Prova Social</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Veja o Que Outros Consultores
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mt-2">
              Estão Conquistando
            </span>
          </h2>

          <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-3xl p-8 md:p-10 mb-12 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] pointer-events-none"></div>
            <p className="text-xl md:text-2xl text-white leading-relaxed font-medium relative z-10 italic">
              "Imagine chegar na sua próxima classe, apontar o celular e ver o rosto da sua cliente brilhar quando o app 'adivinha' exatamente o que ela está sentindo emocionalmente. O relatório sai na hora, a venda acontece naturalmente e você se torna a autoridade máxima no ambiente. É esse o poder que o EssenciaLab coloca na sua mão."
            </p>
          </div>

          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Resultados reais de consultores que decidiram <span className="font-bold text-gray-900">parar de vender do jeito antigo</span>
          </p>
        </motion.div>

        {/* Cards de Depoimentos */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all"
            >
              {/* Header do card */}
              <div className="flex items-start gap-4 mb-4">
                <div className="text-5xl">{testimonial.photo}</div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  {/* Rating */}
                  <div className="flex gap-1 mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Texto do depoimento */}
              <p className="text-gray-700 leading-relaxed mb-4 italic">
                "{testimonial.text}"
              </p>

              {/* Highlight */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 border-l-4 border-green-500">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-bold text-green-700">{testimonial.highlight}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Estatísticas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 text-center border border-green-200">
            <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">500+</div>
            <p className="text-gray-700 font-medium">Consultores Ativos</p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 text-center border border-orange-200">
            <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">3x</div>
            <p className="text-gray-700 font-medium">Aumento Médio em Vendas</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 text-center border border-blue-200">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">98%</div>
            <p className="text-gray-700 font-medium">Taxa de Satisfação</p>
          </div>
        </motion.div>

        {/* Seção de Risco Zero */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Shield className="w-10 h-10" />
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Teste 100% Gratuito e Sem Riscos.
            </h3>
            
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed mb-6">
              Baixe o app agora e tenha <span className="font-bold underline">acesso total ilimitado por 7 dias</span>. 
              Todas as funções liberadas. Sem cartão de crédito. Sem compromisso.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-base">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-3 rounded-full">
                <span>✅ Sem Cartão de Crédito</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-3 rounded-full">
                <span>✅ Download Gratuito</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-3 rounded-full">
                <span>✅ Cancelamento Instantâneo</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProofSection;
export { ProofSection };
