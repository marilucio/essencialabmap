import { motion } from "framer-motion";
import { Check } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Consciência do seu estado atual",
      description:
        "Observar padrões visuais que refletem como seu corpo está neste momento — sem adivinhar, sem ignorar.",
    },
    {
      title: "Histórico de observações",
      description:
        "Acompanhe como os padrões mudam ao longo do tempo. Perceba tendências que você não notaria no dia a dia.",
    },
    {
      title: "Sugestões personalizadas de bem-estar",
      description:
        "Receba ideias de práticas naturais (como aromaterapia) alinhadas aos padrões observados.",
    },
    {
      title: "Linguagem acessível e educativa",
      description:
        "Informações apresentadas de forma clara, sem jargões médicos ou termos alarmistas.",
    },
    {
      title: "Autonomia sobre suas escolhas",
      description:
        "O app não manda você fazer nada. Ele oferece perspectivas. Você decide o que faz sentido para sua vida.",
    },
    {
      title: "Privacidade respeitada",
      description:
        "Suas imagens e dados ficam no seu dispositivo. Não vendemos nem compartilhamos informações pessoais.",
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
          <span className="inline-block px-4 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium mb-6">
            Benefícios práticos
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            O que você ganha com o monitoramento preventivo?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Não são promessas vazias. São funcionalidades reais que ajudam você a
            entender melhor seu corpo — no seu ritmo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white rounded-xl p-5 shadow-sm border border-gray-100"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-emerald-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-gray-500 text-sm">
            O objetivo não é criar dependência do app. É ajudar você a desenvolver
            uma relação mais consciente com seu próprio corpo.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default BenefitsSection;
export { BenefitsSection };
