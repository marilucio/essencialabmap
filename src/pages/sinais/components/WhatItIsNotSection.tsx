import { motion } from "framer-motion";
import { XCircle, AlertTriangle } from "lucide-react";

const WhatItIsNotSection = () => {
  const notList = [
    {
      title: "Não é um dispositivo médico",
      description:
        "O EssenciaLab não realiza exames, não emite laudos e não substitui consultas com profissionais de saúde.",
    },
    {
      title: "Não faz diagnósticos",
      description:
        "As observações oferecidas são educativas. Elas não identificam, confirmam ou descartam condições de saúde.",
    },
    {
      title: "Não promete curas ou resultados",
      description:
        "Nenhuma ferramenta pode garantir resultados de saúde. O EssenciaLab oferece informação, não intervenção.",
    },
    {
      title: "Não substitui acompanhamento profissional",
      description:
        "Se você tem sintomas ou preocupações, procure um médico. O app é um complemento, nunca um substituto.",
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-6">
            Transparência
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            O que o EssenciaLab <span className="text-gray-500">não</span> é.
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Acreditamos que a clareza sobre limitações é tão importante
            quanto as funcionalidades. Aqui está o que você precisa saber:
          </p>
        </motion.div>

        <div className="space-y-4">
          {notList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex gap-4"
            >
              <div className="flex-shrink-0">
                <XCircle className="w-6 h-6 text-gray-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Aviso importante */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 bg-amber-50 rounded-xl p-6 border border-amber-200"
        >
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-amber-900 mb-2">Por que isso é importante?</h4>
              <p className="text-amber-800 text-sm leading-relaxed">
                Existem muitos apps e produtos que fazem promessas exageradas sobre saúde.
                Nós escolhemos ser diferentes. O EssenciaLab é uma ferramenta de{" "}
                <strong>consciência e educação</strong> — não um oráculo médico.
                Essa clareza protege você e nos permite construir algo genuinamente útil.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatItIsNotSection;
export { WhatItIsNotSection };
