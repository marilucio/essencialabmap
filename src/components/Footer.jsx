import { Brain } from 'lucide-react'

export default function Footer() {
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
              <li>Como Funciona</li>
              <li>Base Científica</li>
              <li>Preços</li>
              <li>Trial Gratuito</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Central de Ajuda</li>
              <li>Documentação</li>
              <li><a href="/contato" className="hover:text-white transition-colors">Contato</a></li>
              <li>Status do Sistema</li>
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
