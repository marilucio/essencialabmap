import { motion } from "framer-motion";

const CommonMistakeSection = () => {
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
          <span className="inline-block px-4 py-1 bg-amber-50 text-amber-700 rounded-full text-sm font-medium mb-6">
            O erro comum
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            A maioria das pessoas só presta atenção
            <br />
            <span className="text-amber-600">quando algo dói.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="prose prose-lg max-w-none"
        >
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Fomos educados a associar saúde com ausência de dor. Se não dói, está tudo bem.
              Se não incomoda, não precisa de atenção. E assim vivemos — reagindo, nunca antecipando.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Mas pense por um momento: quantas vezes você sentiu que <em>algo não estava bem</em>,
              mesmo sem conseguir explicar exatamente o quê? Um cansaço persistente. Uma irritação
              sem motivo aparente. Uma sensação de desequilíbrio que parece "normal" — até que
              deixa de ser.
            </p>

            <div className="bg-amber-50 rounded-xl p-5 border-l-4 border-amber-400">
              <p className="text-amber-900 font-medium">
                O corpo não mente. Ele apenas fala em uma linguagem que esquecemos de ouvir.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Não é sua culpa. Ninguém nos ensinou a prestar atenção nas mudanças graduais.
              Fomos treinados para esperar o problema aparecer — e depois correr atrás de soluções.
            </p>

            <p className="text-gray-600 text-base">
              Mas e se existisse outra forma?
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CommonMistakeSection;
export { CommonMistakeSection };
