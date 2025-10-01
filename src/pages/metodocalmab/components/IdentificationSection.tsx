const IdentificationSection = () => {
  const painPoints = [
    {
      icon: "😰",
      title: "Acordar de Madrugada em Pânico",
      description: (
        <>
          <em>"Acordei de madrugada com queimação no peito, coração disparado... sensação que ia morrer. Não sei o que aconteceu."</em>
        </>
      )
    },
    {
      icon: "🧠",
      title: "Mente que Não Desliga",
      description: (
        <>
          <em>"Quando não tenho nada para fazer além de fechar os olhos, os pensamentos ruins tomam conta. Fico preocupada com coisas que nunca aconteceram."</em>
        </>
      )
    },
    {
      icon: "😔",
      title: "Noites em Claro",
      description: (
        <>
          <em>"Durmo 22h, demoro 40min pra pegar no sono, acordo às 2h da manhã e fico acordado até 4h30 sem conseguir dormir de novo..."</em>
        </>
      )
    },
    {
      icon: "💔",
      title: "Medo de Enlouquecer",
      description: (
        <>
          <em>"A sensação de que vou enlouquecer transitava livremente nos meus pensamentos... a impotência era predominante e congelante."</em>
        </>
      )
    },
    {
      icon: "🏥",
      title: "Idas ao Pronto-Socorro",
      description: (
        <>
          <em>"Foram necessárias quatro idas ao pronto socorro sem conclusão nos exames, para entender que não era físico, era mental."</em>
        </>
      )
    },
    {
      icon: "😓",
      title: "Exaustão Permanente",
      description: (
        <>
          <em>"A ansiedade dói-me o corpo, a cabeça, a alma. Cansa-me de uma forma inimaginável... É sentir tudo ao mesmo tempo."</em>
        </>
      )
    }
  ];

  return (
    <section className="py-16 px-5 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Se Você Já Passou Por Isso, Você Não Está Sozinho...
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Se você chegou até aqui, provavelmente está vivenciando alguns desses desafios. 
            Saiba que você não está sozinho e que existe uma solução.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-400"
            >
              <div className="text-4xl mb-4">{point.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {point.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 font-medium">
            Se você se identificou com pelo menos 3 dessas situações, 
            <span className="text-red-600 font-bold"> este kit foi feito especialmente para você.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default IdentificationSection;