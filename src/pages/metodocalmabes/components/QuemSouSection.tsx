const QuemSouSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Cabeçalho */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">
              Conoce al Dr. Marilúcio{" "}
              <span className="text-green-600">Creador del Método CALMA#</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Naturópata con 15 años de experiencia especializado en ansiedad, 
              trastornos del sueño y medicina integrativa.
            </p>
          </div>

          {/* Perfil principal */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 lg:p-12 mb-12">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="flex-shrink-0">
                <img
                  src="/images/foto_eu.png"
                  alt="Dr. Marilúcio - Naturópata especialista en ansiedad"
                  className="w-48 h-48 lg:w-64 lg:h-64 rounded-full object-cover shadow-2xl border-4 border-white"
                />
              </div>
              
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                  Dr. Marilúcio Santos
                </h3>
                <div className="text-lg text-green-600 font-semibold mb-6">
                  Naturópata • Especialista en Ansiedad y Sueño • 15 años de experiencia
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  "Mi historia con la ansiedad nocturna comenzó de manera personal. Durante años, 
                  yo mismo experimenté esos despertares a las 3 AM, el corazón acelerado y la 
                  mente que no paraba de dar vueltas. Como naturópata, sabía que tenía que 
                  existir una solución natural y efectiva."
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  "Después de estudiar técnicas de CBT-I, mindfulness y neuroacústica, desarrollé 
                  el Protocolo CALMA# que no solo cambió mi vida, sino la de cientos de pacientes. 
                  Ayudar a las personas es mi misión - ¡esa es mi verdadera vocación!"
                </p>

                {/* Conexão com LATAM */}
                <div className="bg-blue-100 rounded-2xl p-6 border-l-4 border-blue-500">
                  <p className="text-lg text-gray-700 leading-relaxed font-medium">
                    "Después de ayudar a cientos de pacientes en Brasil con este protocolo, 
                    decidí traducir todo el contenido al español para que millones de 
                    personas en toda Latinoamérica puedan tener acceso a esta solución 
                    natural y científicamente respaldada."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Credenciais e formação */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center border border-gray-100">
              <div className="text-3xl mb-3">🎓</div>
              <h4 className="font-bold text-gray-800 mb-2">Formación</h4>
              <p className="text-gray-600 text-sm">Naturópata certificado con especialización en medicina integrativa</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center border border-gray-100">
              <div className="text-3xl mb-3">🏥</div>
              <h4 className="font-bold text-gray-800 mb-2">Experiencia</h4>
              <p className="text-gray-600 text-sm">15 años tratando ansiedad y trastornos del sueño</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center border border-gray-100">
              <div className="text-3xl mb-3">👥</div>
              <h4 className="font-bold text-gray-800 mb-2">Pacientes</h4>
              <p className="text-gray-600 text-sm">Más de 500 personas ayudadas con el Protocolo CALMA#</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center border border-gray-100">
              <div className="text-3xl mb-3">🔬</div>
              <h4 className="font-bold text-gray-800 mb-2">Especialización</h4>
              <p className="text-gray-600 text-sm">CBT-I, mindfulness clínico y neuroacústica terapéutica</p>
            </div>
          </div>

          {/* Missão e valores */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 lg:p-12 text-white text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6">
              Mi Misión Es Simple
            </h3>
            <p className="text-lg lg:text-xl leading-relaxed mb-8 opacity-90">
              Democratizar el acceso a técnicas naturales y científicamente validadas 
              para que cualquier persona pueda recuperar su tranquilidad nocturna, 
              sin depender de medicamentos ni tratamientos costosos.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl mb-3">🌱</div>
                <div className="font-semibold text-lg">Natural</div>
                <div className="text-sm opacity-80">Sin efectos secundarios</div>
              </div>
              <div>
                <div className="text-3xl mb-3">🔬</div>
                <div className="font-semibold text-lg">Científico</div>
                <div className="text-sm opacity-80">Basado en evidencia</div>
              </div>
              <div>
                <div className="text-3xl mb-3">🤝</div>
                <div className="font-semibold text-lg">Accesible</div>
                <div className="text-sm opacity-80">Para toda Latinoamérica</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuemSouSection;