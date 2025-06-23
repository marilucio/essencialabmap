import { Card } from '../components/ui/card'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function TermosDeUso() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      <div className="container mx-auto py-12 px-4 max-w-4xl">
        <Card className="p-8">
        <h1 className="text-3xl font-bold mb-6">Termos de Uso</h1>
        
        <h2 className="text-xl font-semibold mb-4">1. Aceitação dos Termos</h2>
        <p className="mb-6 text-gray-700">
          Ao acessar e utilizar a plataforma EssenciaLab, você concorda com estes Termos de Uso e com nossa Política de Privacidade.
        </p>

        <h2 className="text-xl font-semibold mb-4">2. Uso da Plataforma</h2>
        <p className="mb-6 text-gray-700">
          A plataforma destina-se exclusivamente a profissionais de saúde habilitados. É proibido qualquer uso que viole leis ou regulamentos aplicáveis.
        </p>

        <h2 className="text-xl font-semibold mb-4">3. Responsabilidades</h2>
        <p className="mb-6 text-gray-700">
          O profissional é responsável por todas as atividades realizadas em sua conta e deve manter a confidencialidade de suas credenciais de acesso.
        </p>

        <h2 className="text-xl font-semibold mb-4">4. Propriedade Intelectual</h2>
        <p className="mb-6 text-gray-700">
          Todo o conteúdo da plataforma, incluindo algoritmos, interfaces e materiais, são propriedade exclusiva da EssenciaLab.
        </p>

        <h2 className="text-xl font-semibold mb-4">5. Modificações</h2>
        <p className="mb-6 text-gray-700">
          Reservamo-nos o direito de modificar estes Termos a qualquer momento. Alterações significativas serão comunicadas por e-mail.
        </p>

        <p className="text-sm text-gray-500 mt-8">
          Última atualização: 23/06/2025
        </p>
        </Card>
      </div>
      <Footer />
    </div>
  )
}
