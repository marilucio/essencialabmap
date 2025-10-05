const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "María González",
      age: 34,
      location: "Madrid, España",
      image: "👩‍💼",
      rating: 5,
      title: "Ejecutiva de Marketing",
      testimonial: "Después de 3 años sufriendo ataques de pánico que me impedían trabajar normalmente, encontré este método. En solo 2 semanas ya podía dormir toda la noche sin despertarme con ansiedad. Los audios neuroacústicos son increíbles, realmente funcionan mientras duermes.",
      highlight: "Duermo 8 horas seguidas por primera vez en años",
      timeframe: "Resultados en 2 semanas"
    },
    {
      name: "Carlos Mendoza",
      age: 28,
      location: "Ciudad de México, México",
      image: "👨‍💻",
      rating: 5,
      title: "Desarrollador de Software",
      testimonial: "La ansiedad me tenía completamente bloqueado. No podía concentrarme en el trabajo y vivía con miedo constante. El Kit SOS me enseñó técnicas que uso todos los días. Ahora manejo mi ansiedad en lugar de que ella me maneje a mí.",
      highlight: "Recuperé mi concentración y productividad",
      timeframe: "Cambios desde el día 1"
    },
    {
      name: "Ana Rodríguez",
      age: 42,
      location: "Buenos Aires, Argentina",
      image: "👩‍🏫",
      rating: 5,
      title: "Profesora",
      testimonial: "Como madre de dos hijos, la ansiedad me consumía. No podía estar presente con mi familia. Las técnicas del Dr. Marilúcio me devolvieron la paz. Mis hijos me dijeron que 'mamá volvió a sonreír'. Eso no tiene precio.",
      highlight: "Volví a ser la madre que quería ser",
      timeframe: "Transformación en 3 semanas"
    },
    {
      name: "Diego Fernández",
      age: 31,
      location: "Lima, Perú",
      image: "👨‍⚕️",
      rating: 5,
      title: "Médico",
      testimonial: "Como médico, era escéptico sobre métodos alternativos. Pero la ansiedad me estaba afectando profesionalmente. Este método tiene base científica sólida. Los audios con frecuencias específicas realmente reprograman el cerebro. Lo recomiendo a mis pacientes.",
      highlight: "Base científica que realmente funciona",
      timeframe: "Validado profesionalmente"
    },
    {
      name: "Sofía Herrera",
      age: 26,
      location: "Bogotá, Colombia",
      image: "👩‍🎓",
      rating: 5,
      title: "Estudiante de Posgrado",
      testimonial: "Los ataques de pánico me impedían presentar mi tesis. Probé terapia tradicional por meses sin resultados. Con este método, en 10 días ya podía hablar en público sin temblar. Defendí mi tesis exitosamente y ahora ayudo a otros estudiantes.",
      highlight: "Superé el miedo a hablar en público",
      timeframe: "Resultados en 10 días"
    },
    {
      name: "Roberto Silva",
      age: 39,
      location: "Montevideo, Uruguay",
      image: "👨‍💼",
      rating: 5,
      title: "Empresario",
      testimonial: "La ansiedad casi me hace perder mi empresa. No podía tomar decisiones, vivía paralizado por el miedo. Las técnicas de respiración y los audios nocturnos me devolvieron la claridad mental. Ahora mi negocio está mejor que nunca.",
      highlight: "Recuperé mi capacidad de liderazgo",
      timeframe: "Transformación completa en 1 mes"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Cabeçalho */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">
              Historias Reales de{" "}
              <span className="text-blue-600">Transformación</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Miles de personas en toda Latinoamérica y España ya transformaron 
              sus vidas con el Método CALMA#. Estas son algunas de sus historias.
            </p>
          </div>

          {/* Estatísticas */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Reportan mejora en la primera semana</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">15.000+</div>
              <div className="text-gray-600">Personas transformadas</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Calificación promedio</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="text-3xl lg:text-4xl font-bold text-orange-600 mb-2">7 días</div>
              <div className="text-gray-600">Tiempo promedio para ver resultados</div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{testimonial.image}</div>
                  <div className="flex-1">
                    <div className="font-bold text-lg text-gray-800">
                      {testimonial.name}, {testimonial.age}
                    </div>
                    <div className="text-gray-600">{testimonial.title}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.testimonial}"
                </blockquote>

                {/* Highlight */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 mb-4">
                  <div className="font-semibold text-blue-800 mb-2">
                    ✨ Resultado Principal:
                  </div>
                  <div className="text-blue-700">{testimonial.highlight}</div>
                </div>

                {/* Timeframe */}
                <div className="flex items-center text-green-600 font-semibold">
                  <span className="mr-2">⏱️</span>
                  {testimonial.timeframe}
                </div>
              </div>
            ))}
          </div>

          {/* Seção especial - Antes vs Depois */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 lg:p-12 text-white mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8">
              El Antes y Después Más Común
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Antes */}
              <div className="bg-white/10 rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4 text-red-300">😰 ANTES del Método CALMA#</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-red-400 mr-3">❌</span>
                    Ataques de pánico frecuentes
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-400 mr-3">❌</span>
                    Insomnio y sueño interrumpido
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-400 mr-3">❌</span>
                    Miedo constante e irracional
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-400 mr-3">❌</span>
                    Evitar situaciones sociales
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-400 mr-3">❌</span>
                    Baja productividad y concentración
                  </li>
                </ul>
              </div>

              {/* Depois */}
              <div className="bg-white/10 rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4 text-green-300">😊 DESPUÉS del Método CALMA#</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✅</span>
                    Calma y control emocional
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✅</span>
                    Sueño reparador de 7-8 horas
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✅</span>
                    Confianza en situaciones desafiantes
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✅</span>
                    Vida social activa y plena
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✅</span>
                    Máximo rendimiento profesional
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Video testimonials placeholder */}
          <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
              Testimonios en Video
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Escucha directamente de personas reales que transformaron su ansiedad 
              con el Método CALMA#
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-100 rounded-2xl p-6 aspect-video flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">▶️</div>
                  <div className="font-semibold">María - España</div>
                  <div className="text-sm text-gray-600">"Duermo sin ansiedad"</div>
                </div>
              </div>
              <div className="bg-gray-100 rounded-2xl p-6 aspect-video flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">▶️</div>
                  <div className="font-semibold">Carlos - México</div>
                  <div className="text-sm text-gray-600">"Recuperé mi vida"</div>
                </div>
              </div>
              <div className="bg-gray-100 rounded-2xl p-6 aspect-video flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">▶️</div>
                  <div className="font-semibold">Ana - Argentina</div>
                  <div className="text-sm text-gray-600">"Soy otra persona"</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Únete a miles de personas que ya transformaron su ansiedad
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold text-lg px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
              ✅ QUIERO MI TRANSFORMACIÓN AHORA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;