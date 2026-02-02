import { motion } from "framer-motion";
import { UserCheck, UserX } from "lucide-react";

const ForWhoSection = () => {
  const forWho = [
    "Você sente cansaço, estresse ou desequilíbrio com frequência — e quer entender melhor o porquê",
    "Você valoriza prevenção e prefere agir antes de precisar remediar",
    "Você busca autonomia sobre sua saúde, sem depender exclusivamente de terceiros",
    "Você gosta de tecnologia e está aberto a novas formas de autoconhecimento",
    "Você entende que nenhum app substitui um profissional — e não espera milagres",
  ];

  const notForWho = [
    "Você está procurando diagnósticos ou confirmação de condições de saúde",
    "Você espera resultados garantidos ou soluções mágicas",
    "Você prefere ignorar informações sobre seu corpo até que algo doa",
    "Você não tem paciência para explorar uma ferramenta de consciência — quer respostas imediatas",
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
          <span className="inline-block px-4 py-1 bg-violet-50 text-violet-700 rounded-full text-sm font-medium mb-6">
            Perfil do usuário
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Isso é para você?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Queremos ser honestos. O EssenciaLab não é para todo mundo — e tudo bem.
            Veja se faz sentido para o seu momento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Para quem é */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <UserCheck className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-emerald-900">
                O EssenciaLab é para você se...
              </h3>
            </div>
            <ul className="space-y-4">
              {forWho.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1 flex-shrink-0">✓</span>
                  <span className="text-emerald-800 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Para quem não é */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <UserX className="w-5 h-5 text-gray-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-700">
                Talvez não seja para você se...
              </h3>
            </div>
            <ul className="space-y-4">
              {notForWho.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 flex-shrink-0">—</span>
                  <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-gray-600">
            Se você se identificou com a coluna esquerda,{" "}
            <span className="text-gray-900 font-medium">continue lendo</span>.
            Temos algo que pode interessar você.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ForWhoSection;
export { ForWhoSection };
