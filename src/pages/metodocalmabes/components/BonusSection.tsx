const BonusSection = () => {
  const bonuses = [
    {
      icon: "🎧",
      title: "Kit de Audios Neuroacústicos",
      subtitle: "BONIFICACIÓN PRINCIPAL - VALOR: $47 USD",
      description: "5 audios poderosos que combinan frecuencias específicas con mensajes subliminales a -45db que hablan directamente a tu subconsciente, generando creencias positivas y transformando tu vida en cuestión de pocos días",
      features: [
        "🌙 Inducción de Sueño Profundo",
        "😰 Alivio para Crisis de Ansiedad",
        "🧘 Meditación Nocturna Guiada",
        "🎯 Foco Mental y Concentración",
        "⚡ Energía y Vitalidad Renovada"
      ],
      highlight: true
    },
    {
      icon: "📝",
      title: "Hojas de Trabajo para Pensamientos Intrusivos",
      subtitle: "BONIFICACIÓN #2 - VALOR: $19 USD",
      description: "Fichas imprimibles con técnicas específicas para manejar pensamientos que no te dejan dormir",
      features: [
        "Ventana de preocupación estructurada",
        "Técnica de etiquetado de pensamientos",
        "Protocolo 5-4-3-2-1 para grounding",
        "Ejercicios de reestructuración cognitiva"
      ]
    },
    {
      icon: "🔄",
      title: "Guía Visual del Ciclo del Pánico",
      subtitle: "BONIFICACIÓN #3 - VALOR: $15 USD",
      description: "Explicación ilustrada de qué sucede en tu cuerpo durante una crisis de pánico para desarmar el 'miedo al miedo'",
      features: [
        "Diagrama del sistema nervioso",
        "Línea de tiempo de una crisis",
        "Ejercicios interoceptivos",
        "Técnicas de desactivación"
      ]
    },
    {
      icon: "⚡",
      title: "Técnicas Rápidas de Alivio",
      subtitle: "BONIFICACIÓN #4 - VALOR: $12 USD",
      description: "Protocolos de emergencia para usar en cualquier lugar y momento cuando sientes que la ansiedad está llegando",
      features: [
        "Técnica de 30 segundos",
        "Protocolo discreto para el trabajo",
        "Respiración de emergencia",
        "Anclajes sensoriales rápidos"
      ]
    }
  ];

  const totalValue = 47 + 19 + 15 + 12; // $93 USD

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Cabeçalho */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">
              Bonificaciones{" "}
              <span className="text-orange-600">Exclusivas</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Además del Kit SOS Ansiedad, recibirás estas bonificaciones especiales 
              que potenciarán tus resultados y acelerarán tu recuperación.
            </p>
          </div>

          {/* Valor total */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 text-white text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Valor Total de las Bonificaciones
            </h3>
            <div className="text-4xl lg:text-6xl font-bold mb-4">
              ${totalValue} USD
            </div>
            <p className="text-lg opacity-90">
              Pero hoy las recibes completamente GRATIS con tu Kit SOS Ansiedad
            </p>
          </div>

          {/* Lista de bônus */}
          <div className="space-y-8">
            {bonuses.map((bonus, index) => (
              <div
                key={index}
                className={`rounded-3xl p-8 lg:p-12 shadow-xl border-2 transition-all duration-300 hover:shadow-2xl ${
                  bonus.highlight
                    ? "bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-300"
                    : "bg-white border-gray-200"
                }`}
              >
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                  {/* Ícone e título */}
                  <div className="flex-shrink-0 text-center lg:text-left">
                    <div className="text-6xl lg:text-7xl mb-4">{bonus.icon}</div>
                    {bonus.highlight && (
                      <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                        ¡MÁS POPULAR!
                      </div>
                    )}
                  </div>

                  {/* Conteúdo */}
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                      {bonus.title}
                    </h3>
                    <div className="text-lg font-semibold text-orange-600 mb-4">
                      {bonus.subtitle}
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      {bonus.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {bonus.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center justify-center lg:justify-start">
                          <span className="text-green-500 mr-3">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Destaque especial para os áudios */}
          <div className="mt-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 lg:p-12 text-white text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6">
              Los Audios Neuroacústicos Son El Diferencial
            </h3>
            <p className="text-lg lg:text-xl leading-relaxed mb-8 opacity-90">
              Utilizan frecuencias específicas (ondas theta y delta) combinadas con mensajes 
              subliminales que trabajan directamente con tu subconsciente mientras duermes. 
              Es como tener un terapeuta trabajando contigo toda la noche.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl mb-3">🧠</div>
                <div className="font-semibold">Ondas Cerebrales</div>
                <div className="text-sm opacity-80">Theta y Delta para sueño profundo</div>
              </div>
              <div>
                <div className="text-3xl mb-3">🔊</div>
                <div className="font-semibold">Mensajes Subliminales</div>
                <div className="text-sm opacity-80">A -45db, indetectables conscientemente</div>
              </div>
              <div>
                <div className="text-3xl mb-3">⏰</div>
                <div className="font-semibold">Resultados Rápidos</div>
                <div className="text-sm opacity-80">Cambios desde la primera escucha</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Todas estas bonificaciones están incluidas sin costo adicional cuando 
              adquieres tu Kit SOS Ansiedad hoy.
            </p>
            <a href="https://pay.hotmart.com/B102258373B" target="_blank" rel="noopener noreferrer" className="block">
              <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-lg px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
                🔥 QUIERO TODOS LOS BONOS AHORA
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;