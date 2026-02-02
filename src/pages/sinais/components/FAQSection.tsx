import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "O EssenciaLab é um dispositivo médico?",
      answer:
        "Não. O EssenciaLab é uma ferramenta de consciência corporal e bem-estar. Ele não realiza diagnósticos, não emite laudos e não é regulamentado como dispositivo médico. As observações são educativas e não substituem avaliação profissional.",
    },
    {
      question: "O que acontece com minhas fotos e dados?",
      answer:
        "Suas imagens são processadas localmente no seu dispositivo e não são enviadas para servidores externos. Não vendemos, compartilhamos ou usamos seus dados para fins comerciais. Você tem controle total sobre suas informações.",
    },
    {
      question: "As observações do app são confiáveis?",
      answer:
        "O app usa algoritmos treinados para identificar padrões visuais baseados em princípios de fisiologia e reflexologia. No entanto, as observações são indicativas e educativas — não são verdades absolutas. Use-as como uma perspectiva adicional, não como diagnóstico.",
    },
    {
      question: "Posso usar o app se tenho uma condição de saúde?",
      answer:
        "O EssenciaLab não é projetado para monitorar, acompanhar ou gerenciar condições de saúde. Se você tem sintomas ou preocupações médicas, consulte um profissional. O app é uma ferramenta de prevenção e consciência, não de tratamento.",
    },
    {
      question: "Preciso usar o app todos os dias?",
      answer:
        "Não há obrigação. O app é uma ferramenta que você usa quando quiser. Algumas pessoas gostam de observar padrões semanalmente, outras mensalmente. O ritmo é seu — sem pressão ou gamificação forçada.",
    },
    {
      question: "O app funciona para qualquer pessoa?",
      answer:
        "Os algoritmos foram treinados com diversidade em mente, mas como toda tecnologia, podem ter limitações em casos específicos. Se as observações não parecem fazer sentido para você, confie na sua percepção e use o app como uma referência complementar.",
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
          <span className="inline-block px-4 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium mb-6">
            Perguntas frequentes
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Dúvidas comuns
          </h2>
          <p className="text-lg text-gray-600">
            Respostas diretas sobre segurança, privacidade e propósito do app.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl border border-gray-100 shadow-sm px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-gray-500 text-sm">
            Tem outra dúvida? Entre em contato pelo{" "}
            <a href="/contato" className="text-emerald-600 hover:underline">
              nosso formulário
            </a>
            .
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQSection;
export { FAQSection };
