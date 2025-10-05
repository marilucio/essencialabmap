const SolutionSection = () => {
  const products = [
    {
      icon: "🌙",
      title: "Protocolo CALMA#",
      description: "Secuencia guiada para crisis nocturnas: respiración adaptada 3-7-8, anclaje táctil, liberación muscular y enfoque neutro con afirmaciones positivas. Versiones de 30 segundos, 2 y 5 minutos para cualquier situación, incluso modo discreto para lugares públicos.",
      features: ["Técnica 3-7-8 adaptada", "Anclaje sensorial", "Modo discreto", "Resultados en 30 segundos"]
    },
    {
      icon: "✅",
      title: "Checklist 21 Días de Higiene del Sueño",
      description: "Basado en CBT-I, el checklist entrega los cinco esenciales del sueño, la regla de los 30 minutos, detox digital, ritual relajante, cognitive shuffle, ventana de sueño y tarjetas de bolsillo. Incluye adaptaciones para turnos, jet-lag, calor y cuidadores.",
      features: ["Basado en CBT-I", "Regla de 30 minutos", "Detox digital", "Adaptaciones especiales"]
    },
    {
      icon: "🥗",
      title: "Guía Nutricional Anti-Ansiedad",
      description: "Dieta equilibrada con enfoque en estabilidad glucémica, reducción de cafeína, omega-3, magnesio y L-teanina. Plan de 7 días, evaluación diaria y 'SOS crisis' con snacks rápidos y respiración 2-4-6 para crisis hipoglucémicas.",
      features: ["Plan de 7 días", "Estabilidad glucémica", "Suplementos naturales", "SOS crisis"]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Cabeçalho */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">
              Presentamos el{" "}
              <span className="text-purple-600">Kit SOS Ansiedad</span>
              <br />
              <span className="text-blue-600">+ 4 Bonificaciones</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Después de analizar cientos de testimonios y estudiar las mejores prácticas 
              en ciencia del sueño, nutrición y psicología, desarrollamos un kit completo 
              para romper este ciclo.
            </p>
          </div>

          {/* Explicação do acrônimo CALMA# */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl mb-12 border border-purple-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                ¿Qué significa CALMA#?
              </h3>
              <p className="text-lg text-gray-600">
                Cada letra representa una técnica específica del protocolo:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">C</div>
                <div className="font-bold text-gray-800 mb-2">Control de la Respiración</div>
                <div className="text-gray-600 text-sm">Técnica 3-7-8 adaptada para crisis nocturnas</div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
                <div className="text-3xl font-bold text-green-600 mb-2">A</div>
                <div className="font-bold text-gray-800 mb-2">Anclaje Sensorial</div>
                <div className="text-gray-600 text-sm">Conexión táctil para traerte al presente</div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                <div className="text-3xl font-bold text-purple-600 mb-2">L</div>
                <div className="font-bold text-gray-800 mb-2">Liberación de Pensamientos</div>
                <div className="text-gray-600 text-sm">Técnicas para soltar pensamientos intrusivos</div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200">
                <div className="text-3xl font-bold text-orange-600 mb-2">M</div>
                <div className="font-bold text-gray-800 mb-2">Mindfulness Nocturno</div>
                <div className="text-gray-600 text-sm">Atención plena adaptada para la noche</div>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 border border-red-200">
                <div className="text-3xl font-bold text-red-600 mb-2">A</div>
                <div className="font-bold text-gray-800 mb-2">Acción Inmediata</div>
                <div className="text-gray-600 text-sm">Protocolo de respuesta rápida</div>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-6 border border-indigo-200">
                <div className="text-3xl font-bold text-indigo-600 mb-2">#</div>
                <div className="font-bold text-gray-800 mb-2">Protocolo Científicamente Fundamentado</div>
                <div className="text-gray-600 text-sm">Basado en CBT-I y neurociencia</div>
              </div>
            </div>
          </div>

          {/* Produtos principais */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-5xl mb-6 text-center">{product.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                  {product.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  {product.description}
                </p>
                
                <div className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Ferramentas extras */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8 text-center">
              Herramientas Adicionales Incluidas
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📋</div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Hojas de Trabajo para Pensamientos Intrusivos</h4>
                    <p className="text-gray-600 text-sm">Ventana de preocupación, etiquetado de pensamientos, guión 5-4-3-2-1</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">🔄</div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Guía Visual del Ciclo del Pánico</h4>
                    <p className="text-gray-600 text-sm">Para desarmar el "miedo al miedo" y entender qué pasa en tu cuerpo</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📊</div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Escalas de Seguimiento</h4>
                    <p className="text-gray-600 text-sm">GAD-7 e ISI para monitorear tu progreso objetivamente</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">👥</div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Comunidad y Apoyo</h4>
                    <p className="text-gray-600 text-sm">Grupo de apoyo online y desafío "7 días CALMA#"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nota final */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Cada elemento fue elaborado después de mapear gatillos reales, como cafeína, 
              hipoglucemia, horarios fijos de despertar, calor, luz y ruido. El kit ya está 
              disponible en español y listo para transformar tus noches.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;