import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Frown, BookOpen, MessageSquare } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      icon: <Frown className="w-8 h-8" />,
      title: "Sensação de 'Empurrar' Produtos",
      description: "Você ama os óleos, mas odeia parecer insistente com seus clientes."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Centenas de Protocolos para Decorar",
      description: "É impossível lembrar qual óleo serve para cada situação específica."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Cliente Sempre Diz: 'Vou Pensar'",
      description: "Sem curiosidade instantânea, o cliente perde o interesse rapidamente."
    }
  ];

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Título da Seção */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full mb-6">
            <AlertCircle className="w-5 h-5" />
            <span className="font-semibold">O Problema</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            A Maneira Antiga de Vender Óleos Está Te Cansando?
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Você ama os óleos, mas odeia a sensação de ter que 'empurrar' produtos? É frustrante tentar adivinhar o que o cliente precisa, decorar centenas de protocolos e ainda ouvir 'vou pensar'. O problema não é você, é que vender baseando-se apenas em argumentos lógicos é difícil.
          </p>
        </motion.div>

        {/* Cards de Problemas */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="text-red-500 mb-4">
                {problem.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProblemSection;
export { ProblemSection };
