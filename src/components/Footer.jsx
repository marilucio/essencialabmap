import { Brain } from 'lucide-react'

export default function Footer({ onOpenDemo, onScrollToForm, onScrollToScience }) {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">MAP</span>
            </div>
            <p className="text-gray-400 text-sm">
              Revolucionando a avaliação metabólica através de inteligência artificial e ciência.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Produto</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button 
                  onClick={onOpenDemo}
                  className="hover:text-white transition-colors text-left"
                >
                  Como Funciona
                </button>
              </li>
              <li>
                <button 
                  onClick={onScrollToScience}
                  className="hover:text-white transition-colors text-left"
                >
                  Base Científica
                </button>
              </li>
              <li>
                <a href="/precos" className="hover:text-white transition-colors">
                  Preços
                </a>
              </li>
              <li>
                <button 
                  onClick={onScrollToForm}
                  className="hover:text-white transition-colors text-left"
                >
                  Trial Gratuito
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="/central-de-ajuda" className="hover:text-white transition-colors">
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a href="/contato" className="hover:text-white transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="/status-do-sistema" className="hover:text-white transition-colors">
                  Status do Sistema
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/termos-de-uso" className="hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="/politica-de-privacidade" className="hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="/lgpd" className="hover:text-white transition-colors">LGPD</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 - EssenciaLab - Método de Avaliação Personalizada. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
