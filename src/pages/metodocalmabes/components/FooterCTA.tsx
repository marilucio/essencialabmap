const FooterCTA = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* CTA Principal */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Tu Nueva Vida Sin Ansiedad{" "}
              <span className="text-yellow-400">Comienza Hoy</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              No dejes que la ansiedad controle un día más de tu vida. 
              Miles de personas ya transformaron su realidad con el Método CALMA#.
            </p>
            
            {/* Precio destacado */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 mb-8">
              <div className="text-lg text-green-100 mb-2">Oferta especial por tiempo limitado</div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-4">
                <span data-price-localize="39.90">$5.99 USD</span>
              </div>
              <div className="text-green-100">
                En lugar de $93 USD - Ahorra más del 90%
              </div>
            </div>

            <a href="https://pay.hotmart.com/B102258373B" target="_blank" rel="noopener noreferrer" className="block">
              <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-xl lg:text-2xl py-6 px-12 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 mb-8">
                🎯 TRANSFORMAR MI ANSIEDAD AHORA
              </button>
            </a>

            {/* Garantias */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="flex flex-col items-center">
                <div className="text-3xl mb-3">🛡️</div>
                <div className="font-semibold">Garantía 30 Días</div>
                <div className="text-sm text-gray-400">100% de tu dinero de vuelta</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl mb-3">⚡</div>
                <div className="font-semibold">Acceso Inmediato</div>
                <div className="text-sm text-gray-400">Disponible 24/7</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl mb-3">🔒</div>
                <div className="font-semibold">Compra Segura</div>
                <div className="text-sm text-gray-400">Datos protegidos</div>
              </div>
            </div>
          </div>

          {/* Separador */}
          <div className="border-t border-gray-700 pt-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Sobre o método */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-yellow-400">
                  Método CALMA#
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Sistema completo para superar la ansiedad de forma natural, 
                  desarrollado por el Dr. Marilúcio con más de 15 años de experiencia 
                  y validado por miles de personas en Latinoamérica y España.
                </p>
                <div className="flex space-x-4">
                  <span className="text-2xl">🇪🇸</span>
                  <span className="text-2xl">🇲🇽</span>
                  <span className="text-2xl">🇦🇷</span>
                  <span className="text-2xl">🇨🇴</span>
                  <span className="text-2xl">🇵🇪</span>
                  <span className="text-2xl">🇺🇾</span>
                </div>
              </div>

              {/* Links úteis */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-yellow-400">
                  Enlaces Útiles
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <a href="#testimonios" className="hover:text-white transition-colors">
                      Testimonios Reales
                    </a>
                  </li>
                  <li>
                    <a href="#garantia" className="hover:text-white transition-colors">
                      Garantía y Devoluciones
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="hover:text-white transition-colors">
                      Preguntas Frecuentes
                    </a>
                  </li>
                  <li>
                    <a href="#soporte" className="hover:text-white transition-colors">
                      Soporte Técnico
                    </a>
                  </li>
                  <li>
                    <a href="#privacidad" className="hover:text-white transition-colors">
                      Política de Privacidad
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contato */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-yellow-400">
                  Soporte y Contacto
                </h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center">
                    <span className="mr-3">📧</span>
                    <span>soporte@metodocalma.com</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-3">💬</span>
                    <span>WhatsApp: +55 11 99999-9999</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-3">⏰</span>
                    <span>Lun-Vie: 9:00-18:00 (GMT-3)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-3">🌍</span>
                    <span>Soporte en Español</span>
                  </div>
                </div>

                {/* Redes sociais */}
                <div className="mt-6">
                  <h4 className="font-semibold mb-3">Síguenos:</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-2xl hover:text-yellow-400 transition-colors">📘</a>
                    <a href="#" className="text-2xl hover:text-yellow-400 transition-colors">📷</a>
                    <a href="#" className="text-2xl hover:text-yellow-400 transition-colors">🐦</a>
                    <a href="#" className="text-2xl hover:text-yellow-400 transition-colors">📺</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Última chamada */}
          <div className="border-t border-gray-700 pt-8 mt-12">
            <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-6 text-center mb-8">
              <h4 className="text-xl font-bold mb-2">
                ⚠️ ÚLTIMA OPORTUNIDAD
              </h4>
              <p className="text-lg">
                Esta oferta especial expira pronto. No dejes pasar la oportunidad 
                de transformar tu ansiedad por menos de lo que cuesta una pizza.
              </p>
            </div>

            <div className="text-center">
              <a href="https://pay.hotmart.com/B102258373B" target="_blank" rel="noopener noreferrer" className="block">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold text-xl py-4 px-8 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 mb-6">
              ⚡ COMPRAR ANTES QUE EXPIRE
            </button>
          </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-400">
            <p className="mb-4">
              © 2024 Método CALMA# - Dr. Marilúcio. Todos los derechos reservados.
            </p>
            <p className="text-sm">
              Este producto no sustituye el tratamiento médico profesional. 
              Si tienes pensamientos suicidas o crisis severas, busca ayuda médica inmediata.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
              <a href="#" className="hover:text-white">Términos de Uso</a>
              <span>|</span>
              <a href="#" className="hover:text-white">Política de Privacidad</a>
              <span>|</span>
              <a href="#" className="hover:text-white">Política de Reembolso</a>
              <span>|</span>
              <a href="#" className="hover:text-white">Contacto</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;