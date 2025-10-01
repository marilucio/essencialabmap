const BonusSection = () => {
  const bonuses = [
    {
      icon: "📝",
      title: "Fichas para Pensamentos Intrusivos",
      description: "Ferramentas práticas para identificar e neutralizar pensamentos negativos automáticos",
      value: "R$ 37,00",
      features: [
        "Técnica da janela de preocupação",
        "Rotulagem de pensamentos",
        "Roteiro 5-4-3-2-1 para crises",
        "Fichas imprimíveis para usar na hora"
      ]
    },
    {
      icon: "🔄",
      title: "Guia Visual do Ciclo do Pânico",
      description: "Entenda como funciona o ciclo do pânico e como quebrá-lo definitivamente",
      value: "R$ 27,00",
      features: [
        "Explicação visual completa",
        "Como desarmar o 'medo do medo'",
        "Estratégias de interrupção",
        "Protocolo de prevenção"
      ]
    },
    {
      icon: "⚡",
      title: "Trilhas Rápidas de Alívio",
      description: "Técnicas de 30 segundos, 2 minutos e 5 minutos para qualquer situação",
      value: "R$ 29,90",
      features: [
        "Versão discreta para locais públicos",
        "Técnica de respiração 4-7-8 modificada",
        "Ancoragem sensorial rápida",
        "Áudios guiados para download"
      ]
    },
    {
      icon: "📊",
      title: "Escalas de Monitoramento",
      description: "Acompanhe seu progresso com escalas científicas validadas",
      value: "R$ 47,00",
      features: [
        "Escala GAD-7 para ansiedade",
        "Índice de Severidade da Insônia (ISI)",
        "Cartões de gatilhos 'se... então'",
        "Diário de progresso semanal"
      ]
    }
  ];

  // Bônus especial em destaque
  const specialBonus = {
    icon: "🎧",
    title: "Kit de Áudios Neuroacústicos",
    description: "5 áudios poderosos que combinam frequências específicas com mensagens subliminares em -45db que falam diretamente ao seu subconsciente, gerando crenças positivas e transformando sua vida em questão de poucos dias",
    value: "R$ 97,00",
    originalPrice: "R$ 97,00",
    features: [
      "🌙 Indução de Sono Profundo",
      "😰 Alívio para Crises de Ansiedade",
      "🧘 Meditação Noturna Guiada",
      "🎯 Foco Mental e Concentração",
      "⚡ Energia e Vitalidade Renovada"
    ],
    isSpecial: true
  };

  const totalValue = bonuses.reduce((sum, bonus) => {
    return sum + parseFloat(bonus.value.replace('R$ ', '').replace(',', '.'));
  }, 0) + parseFloat(specialBonus.value.replace('R$ ', '').replace(',', '.'));

  // Valor apenas do protocolo SOS Ansiedade
  const protocolValue = 97.00;
  
  // Valor total com todos os bônus
  const totalWithBonuses = totalValue;

  return (
    <section className="py-16 px-5 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            🎁 Bônus Exclusivos (Acabando...)
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Além do Kit SOS Ansiedade Completo, você também vai receber estes 5 bônus 
            especiais que vão acelerar ainda mais seus resultados.
          </p>
        </div>

        {/* Bônus Especial em Destaque */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 p-1 rounded-3xl shadow-2xl">
            <div className="bg-white p-8 rounded-3xl">
              <div className="text-center mb-6">
                <div className="inline-block bg-red-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
                  🔥 BÔNUS ESPECIAL - GRÁTIS ATÉ 15/10/2025
                </div>
                <div className="text-6xl mb-4">{specialBonus.icon}</div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  {specialBonus.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {specialBonus.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-3">
                  {specialBonus.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="text-green-500 mr-3 text-xl">✓</div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl p-6">
                    <div className="text-sm opacity-90 mb-2">Valor Normal:</div>
                    <div className="text-3xl font-bold line-through opacity-75 mb-2">
                      {specialBonus.originalPrice}
                    </div>
                    <div className="text-4xl font-bold mb-2">GRÁTIS</div>
                    <div className="text-sm bg-white/20 rounded-lg p-2">
                      Apenas até 15/10/2025
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
                <p className="text-yellow-800 font-medium">
                  ⚠️ <strong>Atenção:</strong> Este kit de áudios neuroacústicos é um brinde perfeito e muito poderoso que combina frequências com mensagens subliminares que falam ao subconsciente, transformando sua vida em questão de poucos dias!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {bonuses.map((bonus, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-purple-100 hover:border-purple-200"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="text-4xl">{bonus.icon}</div>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Valor: {bonus.value}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {bonus.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {bonus.description}
              </p>

              <div className="space-y-2">
                {bonus.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <div className="text-purple-500 mr-3 mt-1">✓</div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">
              🔥 Resumo da Oferta Completa
            </h3>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-bold text-lg mb-3">📖 Protocolo SOS Ansiedade:</h4>
                  <div className="text-2xl font-bold line-through opacity-75">
                    R$ {protocolValue.toFixed(2).replace('.', ',')}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3">🎁 Valor Total com Bônus:</h4>
                  <div className="text-2xl font-bold line-through opacity-75">
                    R$ {totalWithBonuses.toFixed(2).replace('.', ',')}
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mb-6">
              <div className="text-sm opacity-90 mb-2">Mas hoje você leva TUDO por apenas:</div>
              <div className="text-5xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                R$ 44,00
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <p className="text-sm">
                ⚠️ <strong>Atenção:</strong> O valor de R$ 97,00 é apenas do "Protocolo SOS Ansiedade". 
                O valor de R$ {totalWithBonuses.toFixed(2).replace('.', ',')} é com todos os bônus inclusos, 
                mas hoje você leva tudo por apenas R$ 44,00!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;