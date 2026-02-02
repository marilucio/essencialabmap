import { motion } from "framer-motion";
import { TrendingUp, Eye, Cpu } from "lucide-react";

const WhatChangedSection = () => {
  const changes = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Medicina baseada em dados",
      description:
        "O acesso a informações sobre o próprio corpo deixou de ser exclusividade de hospitais. Hoje, sensores e câmeras conseguem captar padrões que antes passavam despercebidos.",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Visão computacional avançada",
      description:
        "Algoritmos treinados com milhões de imagens conseguem identificar padrões sutis na pele, nos olhos e nas expressões faciais — informações que o olho humano não capta.",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Inteligência artificial acessível",
      description:
        "O que antes exigia equipamentos caros e especialistas agora pode ser explorado com um smartphone. A tecnologia democratizou o acesso à observação detalhada.",
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
            O que mudou
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Nos últimos anos, algo mudou silenciosamente.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A tecnologia evoluiu de forma que antes parecia ficção científica.
            E com ela, nossa capacidade de observar o corpo também.
          </p>
        </motion.div>

        <div className="space-y-6">
          {changes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex gap-5"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="text-gray-700 text-lg">
            Essa convergência criou uma nova possibilidade:{" "}
            <strong className="text-gray-900">observar sinais do corpo que antes eram invisíveis</strong> —
            não para substituir profissionais, mas para ganhar consciência.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatChangedSection;
export { WhatChangedSection };
