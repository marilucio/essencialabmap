import { Card } from '../components/ui/card'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function LGPD() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      <div className="container mx-auto py-12 px-4 max-w-4xl">
        <Card className="p-8">
        <h1 className="text-3xl font-bold mb-6">LGPD - Lei Geral de Proteção de Dados</h1>
        
        <h2 className="text-xl font-semibold mb-4">1. Conformidade com a Lei 13.709/2018</h2>
        <p className="mb-6 text-gray-700">
          A EssenciaLab está em plena conformidade com a Lei Geral de Proteção de Dados (LGPD), garantindo os direitos dos titulares de dados.
        </p>

        <h2 className="text-xl font-semibold mb-4">2. Dados Sensíveis</h2>
        <p className="mb-6 text-gray-700">
          Tratamos dados de saúde com especial cuidado, seguindo as diretrizes do art. 11 da LGPD e as boas práticas do setor de saúde.
        </p>

        <h2 className="text-xl font-semibold mb-4">3. Encarregado de Dados (DPO)</h2>
        <p className="mb-6 text-gray-700">
          Nomeamos um Encarregado de Proteção de Dados para supervisionar o cumprimento da LGPD. Contato: dpo@essencialab.com.br
        </p>

        <h2 className="text-xl font-semibold mb-4">4. Bases Legais</h2>
        <p className="mb-6 text-gray-700">
          O tratamento de dados na EssenciaLab baseia-se no consentimento, cumprimento de obrigação legal e execução de contrato.
        </p>

        <h2 className="text-xl font-semibold mb-4">5. Transferência Internacional</h2>
        <p className="mb-6 text-gray-700">
          Em caso de transferência internacional de dados, garantimos o mesmo nível de proteção exigido pela LGPD.
        </p>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold mb-2">Como Exercer Seus Direitos</h3>
          <p className="text-sm text-gray-700">
            Para solicitar acesso, correção ou exclusão de dados, envie um e-mail para dpo@essencialab.com.br com o assunto "Direitos LGPD".
          </p>
        </div>

        <p className="text-sm text-gray-500 mt-8">
          Última atualização: 23/06/2025
        </p>
        </Card>
      </div>
      <Footer />
    </div>
  )
}
