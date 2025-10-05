const IdentificationSection = () => {
  const painPoints = [
    {
      icon: "😰",
      title: "Te despiertas a las 3 AM con el corazón acelerado",
      description: "Esa sensación horrible de pánico que te hace pensar que algo malo va a pasar"
    },
    {
      icon: "🔄",
      title: "Tu mente no para de dar vueltas",
      description: "Pensamientos sobre el trabajo, problemas familiares o preocupaciones que no puedes controlar"
    },
    {
      icon: "😴",
      title: "No puedes volver a dormir",
      description: "Te quedas despierto hasta el amanecer, sintiéndote agotado al día siguiente"
    },
    {
      icon: "💊",
      title: "Dependes de medicamentos para dormir",
      description: "Pero sabes que no es una solución a largo plazo y te preocupan los efectos secundarios"
    },
    {
      icon: "😔",
      title: "Te sientes solo en esta lucha",
      description: "Nadie entiende realmente lo que vives cada noche, el miedo y la desesperación"
    },
    {
      icon: "⚡",
      title: "Vives con miedo de la próxima crisis",
      description: "La ansiedad anticipatoria te mantiene en alerta constante, esperando el próximo ataque"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">
            Si Te Identificas con Esto,{" "}
            <span className="text-red-600">No Estás Solo</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Millones de personas en Latinoamérica viven esta realidad cada noche. 
            La ansiedad nocturna no es solo "nervios" - es un problema real que merece una solución real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-red-500"
            >
              <div className="text-4xl mb-4">{point.icon}</div>
              <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight">
                {point.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 lg:mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl max-w-3xl mx-auto border border-red-200">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
              La Buena Noticia Es Que{" "}
              <span className="text-green-600">Hay Una Solución</span>
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              No tienes que vivir así para siempre. Existe un protocolo natural, 
              científicamente respaldado, que puede ayudarte a recuperar el control 
              sobre tu sueño y tu tranquilidad mental.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Sin medicamentos
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Resultados en días
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Científicamente probado
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdentificationSection;