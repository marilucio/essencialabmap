import { Leaf, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer({ language = 'pt' }) {
  const content = {
    pt: {
      about: 'Sobre',
      aboutText: 'Transformando vidas através da integração entre ciência, tecnologia e bem-estar humano.',
      product: 'Produto',
      features: 'Funcionalidades',
      courses: 'Cursos',
      map: 'Sistema MAP',
      pricing: 'Preços',
      support: 'Suporte',
      helpCenter: 'Central de Ajuda',
      contact: 'Contato',
      systemStatus: 'Status do Sistema',
      legal: 'Legal',
      terms: 'Termos de Uso',
      privacy: 'Política de Privacidade',
      lgpd: 'LGPD',
      copyright: '© 2025 EssenciaLab. Todos os direitos reservados.',
      tagline: 'Cuidando de quem cuida de pessoas'
    },
    en: {
      about: 'About',
      aboutText: 'Transforming lives through the integration of science, technology and human well-being.',
      product: 'Product',
      features: 'Features',
      courses: 'Courses',
      map: 'MAP System',
      pricing: 'Pricing',
      support: 'Support',
      helpCenter: 'Help Center',
      contact: 'Contact',
      systemStatus: 'System Status',
      legal: 'Legal',
      terms: 'Terms of Use',
      privacy: 'Privacy Policy',
      lgpd: 'Data Protection',
      copyright: '© 2025 EssenciaLab. All rights reserved.',
      tagline: 'Caring for those who care for people'
    },
    es: {
      about: 'Acerca de',
      aboutText: 'Transformando vidas a través de la integración entre ciencia, tecnología y bienestar humano.',
      product: 'Producto',
      features: 'Funcionalidades',
      courses: 'Cursos',
      map: 'Sistema MAP',
      pricing: 'Precios',
      support: 'Soporte',
      helpCenter: 'Centro de Ayuda',
      contact: 'Contacto',
      systemStatus: 'Estado del Sistema',
      legal: 'Legal',
      terms: 'Términos de Uso',
      privacy: 'Política de Privacidad',
      lgpd: 'Protección de Datos',
      copyright: '© 2025 EssenciaLab. Todos los derechos reservados.',
      tagline: 'Cuidando a quienes cuidan personas'
    }
  };

  const t = content[language] || content.pt;

  // Helper para adicionar idioma aos links
  const addLangToUrl = (url) => {
    if (language === 'pt') return url;
    if (url.includes('?')) return `${url}&lang=${language}`;
    if (url.includes('#')) return url.replace('#', `?lang=${language}#`);
    return `${url}?lang=${language}`;
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">EssenciaLab</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.aboutText}
            </p>
          </div>
          
          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4 text-green-400">{t.product}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a 
                  href={addLangToUrl('/funcionalidades')}
                  className="hover:text-white transition-colors"
                >
                  {t.features}
                </a>
              </li>
              <li>
                <a 
                  href={addLangToUrl('/map')}
                  className="hover:text-white transition-colors"
                >
                  {t.map}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-green-400">{t.support}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href={addLangToUrl('/central-de-ajuda')} className="hover:text-white transition-colors">
                  {t.helpCenter}
                </a>
              </li>
              <li>
                <a href={addLangToUrl('/contato')} className="hover:text-white transition-colors">
                  {t.contact}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-green-400">{t.legal}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href={addLangToUrl('/termos-de-uso')} className="hover:text-white transition-colors">
                  {t.terms}
                </a>
              </li>
              <li>
                <a href={addLangToUrl('/politica-de-privacidade')} className="hover:text-white transition-colors">
                  {t.privacy}
                </a>
              </li>
              <li>
                <a href={addLangToUrl('/lgpd')} className="hover:text-white transition-colors">
                  {t.lgpd}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              {t.copyright}
            </p>
            <p className="text-sm text-green-400 italic">
              💚 {t.tagline}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
