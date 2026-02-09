import { motion } from "framer-motion";
import { Camera, BarChart3, Lightbulb, Leaf } from "lucide-react";

const HowItFitsSection = () => {
  const steps = [
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Observação visual",
      description:
        "Através da câmera do celular, o app captura uma imagem do seu rosto em condições controladas de luz.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Análise de padrões",
      description:
        "Algoritmos identificam possíveis padrões na pele, olhos e expressão — informações que podem refletir estados internos do corpo.",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Consciência e insights",
      description:
        "Você recebe observações sobre possíveis áreas de atenção, sempre com linguagem educativa e não alarmista.",
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Sugestões de bem-estar",
      description:
        "Com base nos padrões observados, o app oferece sugestões gerais e educativas de práticas naturais, como aromaterapia. São ideias de apoio ao equilíbrio — não tratamentos, prescrições ou intervenções.",
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
          <span className="inline-block px-4 py-1 bg-teal-50 text-teal-700 rounded-full text-sm font-medium mb-6">
            A ferramenta
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Como o EssenciaLab se encaixa nisso?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            O EssenciaLab é uma ferramenta de leitura e consciência corporal.
            Ele usa tecnologia para tornar visível o que normalmente passa despercebido.
          </p>
        </motion.div>

        {/* Processo */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600">
                  {step.icon}
                </div>
                <span className="text-sm text-gray-400 font-medium">Passo {index + 1}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Nota importante */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-teal-100"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center">
              <span className="text-2xl">🌿</span>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Uma lente, não uma resposta definitiva
              </h4>
              <p className="text-gray-600 leading-relaxed">
                O EssenciaLab não diz o que você tem ou o que deve fazer.
                Ele oferece uma <strong>perspectiva adicional</strong> — uma forma de observar
                padrões que você talvez não percebesse sozinho. O que você faz com essa
                informação é uma escolha sua.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItFitsSection;
export { HowItFitsSection };
