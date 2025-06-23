import { Card } from '../components/ui/card'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      <div className="container mx-auto py-12 px-4 max-w-4xl">
        <Card className="p-8">
        <h1 className="text-3xl font-bold mb-6">Política de Privacidade</h1>
        
        <h2 className="text-xl font-semibold mb-4">1. Informações Coletadas</h2>
        <p className="mb-6 text-gray-700">
          Coletamos informações pessoais e de saúde necessárias para fornecer nossos serviços, incluindo dados de cadastro, imagens faciais e informações metabólicas.
        </p>

        <h2 className="text-xl font-semibold mb-4">2. Uso das Informações</h2>
        <p className="mb-6 text-gray-700">
          As informações são utilizadas exclusivamente para fornecer os serviços contratados, melhorar nossa plataforma e cumprir obrigações legais.
        </p>

        <h2 className="text-xl font-semibold mb-4">3. Compartilhamento de Dados</h2>
        <p className="mb-6 text-gray-700">
          Seus dados não serão compartilhados com terceiros sem seu consentimento, exceto quando exigido por lei ou para prestação de serviços essenciais.
        </p>

        <h2 className="text-xl font-semibold mb-4">4. Segurança</h2>
        <p className="mb-6 text-gray-700">
          Implementamos medidas técnicas e organizacionais rigorosas para proteger seus dados contra acesso não autorizado ou violação.
        </p>

        <h2 className="text-xl font-semibold mb-4">5. Seus Direitos</h2>
        <p className="mb-6 text-gray-700">
          Você tem direito a acessar, corrigir, excluir ou limitar o uso de seus dados pessoais, conforme previsto na LGPD.
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
