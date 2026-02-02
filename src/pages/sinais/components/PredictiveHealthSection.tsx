import { motion } from "framer-motion";

const PredictiveHealthSection = () => {
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
          <span className="inline-block px-4 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium mb-6">
            Um novo paradigma
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            O que é saúde preventiva — de verdade?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-8"
        >
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Não é sobre prever o futuro. Não é sobre alarmes ou diagnósticos.
              É sobre uma ideia simples, mas poderosa:
            </p>

            <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100 mb-6">
              <p className="text-emerald-900 text-xl font-medium text-center">
                "E se você pudesse perceber um desequilíbrio{" "}
                <span className="underline decoration-emerald-300">antes</span> dele virar um problema?"
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              A saúde preventiva parte de um princípio fisiológico básico: o corpo não "quebra"
              de repente. Ele se desgasta gradualmente. E durante esse processo,{" "}
              <strong>emite sinais</strong> — na pele, no olhar, na postura, na energia.
            </p>
          </div>

          {/* Comparativo visual */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 rounded-xl p-6 border border-gray-200"
            >
              <div className="text-gray-400 text-sm font-medium mb-3">Abordagem reativa</div>
              <h4 className="text-lg font-semibold text-gray-700 mb-3">Esperar o sintoma</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">→</span>
                  <span>Ignorar tendências corporais</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">→</span>
                  <span>Agir quando dói</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">→</span>
                  <span>Remediar o problema</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-emerald-50 rounded-xl p-6 border border-emerald-200"
            >
              <div className="text-emerald-600 text-sm font-medium mb-3">Abordagem preventiva</div>
              <h4 className="text-lg font-semibold text-emerald-800 mb-3">Observar os sinais</h4>
              <ul className="space-y-2 text-emerald-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">→</span>
                  <span>Perceber padrões discretos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">→</span>
                  <span>Ganhar consciência</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">→</span>
                  <span>Fazer escolhas informadas</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center pt-4"
          >
            <p className="text-gray-600">
              A diferença entre reagir e antecipar pode parecer pequena.
              Mas no longo prazo, ela muda tudo.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PredictiveHealthSection;
export { PredictiveHealthSection };
