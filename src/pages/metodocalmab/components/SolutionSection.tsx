const SolutionSection = () => {
  const products = [
    {
      icon: "📋",
      title: "Protocolo CALMA#",
      subtitle: "Técnica de 5 passos",
      description: "Um método natural que pode ajudar a acalmar crises de ansiedade. Baseado em técnicas de respiração e mindfulness.",
      features: [
        "Técnica de respiração 4-7-8 modificada",
        "Ancoragem sensorial para controle",
        "Reestruturação cognitiva",
        "Protocolo para crises noturnas"
      ]
    },
    {
      icon: "✅",
      title: "Checklist 21 Dias",
      subtitle: "Rotina anti-ansiedade",
      description: "Um plano dia a dia para ajudar a desenvolver hábitos saudáveis e reduzir gradualmente os sintomas de ansiedade.",
      features: [
        "Rotina matinal para começar o dia calmo",
        "Exercícios de exposição gradual",
        "Técnicas de relaxamento progressivo",
        "Diário de progresso e automonitoramento"
      ]
    },
    {
      icon: "🥗",
      title: "Guia Nutricional Anti-Ansiedade",
      subtitle: "Alimentação que acalma",
      description: "Orientações nutricionais que podem contribuir para reduzir sintomas de ansiedade através de uma alimentação equilibrada.",
      features: [
        "Lista de alimentos calmantes naturais",
        "Receitas anti-inflamatórias",
        "Orientações sobre suplementos",
        "Sugestões de cardápio semanal"
      ]
    }
  ];

  return (
    <section className="py-16 px-5 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Protocolo SOS Ansiedade Natural
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Um protocolo natural desenvolvido por naturopata para ajudar você a gerenciar 
            crises de ansiedade e melhorar a qualidade do sono.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
            >
              <div className="text-5xl mb-4 text-center">{product.icon}</div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {product.title}
                </h3>
                <p className="text-blue-600 font-semibold text-lg">
                  {product.subtitle}
                </p>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed text-center">
                {product.description}
              </p>

              <div className="space-y-3">
                {product.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">✓</div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-blue-800 mb-2">
              🎯 Compromisso com Resultados
            </h3>
            <p className="text-blue-700">
              Muitos pacientes já relataram melhorias significativas com este protocolo natural. 
              Nosso objetivo é ajudar você a desenvolver ferramentas para gerenciar melhor a ansiedade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;