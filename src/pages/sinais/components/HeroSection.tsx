import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-slate-50 via-white to-emerald-50 overflow-hidden">
      {/* Background decorativo sutil */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-teal-200 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-[80vh] flex flex-col justify-center py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge introdutório */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-emerald-50 rounded-full text-sm font-medium text-emerald-700 border border-emerald-100 mb-8"
          >
            Consciência corporal através da tecnologia
          </motion.div>

          {/* Headline Principal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
          >
            Seu corpo fala antes de gritar.
            <br />
            <span className="text-emerald-700">Você está ouvindo?</span>
          </motion.h1>

          {/* Subheadline explicativa */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8"
          >
            Muito antes de um sintoma aparecer, podem existir padrões discretos que passam despercebidos.
            Micro alterações na pele, no olhar, na expressão. Possíveis respostas silenciosas do corpo
            — que a maioria das pessoas pode não perceber no dia a dia.
          </motion.p>

          {/* Introdução curta e envolvente */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm max-w-2xl mx-auto"
          >
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              Existe uma forma de <strong className="text-gray-900">observar essas mudanças</strong> com
              mais clareza. Não para adivinhar o futuro, mas para{" "}
              <strong className="text-gray-900">perceber o presente</strong> — e fazer escolhas mais
              conscientes sobre seu bem-estar.
            </p>
            <p className="text-gray-700 mt-4 text-sm md:text-base font-medium">
              Se você é alguém que prefere observar a ignorar, este conteúdo é para você.
            </p>
          </motion.div>

          {/* Indicador de scroll */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12"
          >
            <div className="flex flex-col items-center text-gray-400">
              <span className="text-sm mb-2">Role para descobrir</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
export { HeroSection };
