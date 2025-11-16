import { Card } from '../components/ui/card'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useSearchParams } from 'react-router-dom'

const content = {
  pt: {
    title: "Termos de Uso",
    sections: [
      {
        title: "1. Aceitação dos Termos",
        text: "Ao acessar e utilizar a plataforma EssenciaLab, você concorda com estes Termos de Uso e com nossa Política de Privacidade."
      },
      {
        title: "2. Uso da Plataforma",
        text: "A plataforma destina-se exclusivamente a profissionais de saúde habilitados. É proibido qualquer uso que viole leis ou regulamentos aplicáveis."
      },
      {
        title: "3. Responsabilidades",
        text: "O profissional é responsável por todas as atividades realizadas em sua conta e deve manter a confidencialidade de suas credenciais de acesso."
      },
      {
        title: "4. Propriedade Intelectual",
        text: "Todo o conteúdo da plataforma, incluindo algoritmos, interfaces e materiais, são propriedade exclusiva da EssenciaLab."
      },
      {
        title: "5. Modificações",
        text: "Reservamo-nos o direito de modificar estes Termos a qualquer momento. Alterações significativas serão comunicadas por e-mail."
      }
    ],
    lastUpdate: "Última atualização: 23/06/2025"
  },
  en: {
    title: "Terms of Use",
    sections: [
      {
        title: "1. Acceptance of Terms",
        text: "By accessing and using the EssenciaLab platform, you agree to these Terms of Use and our Privacy Policy."
      },
      {
        title: "2. Platform Use",
        text: "The platform is intended exclusively for qualified healthcare professionals. Any use that violates applicable laws or regulations is prohibited."
      },
      {
        title: "3. Responsibilities",
        text: "The professional is responsible for all activities carried out on their account and must maintain the confidentiality of their access credentials."
      },
      {
        title: "4. Intellectual Property",
        text: "All platform content, including algorithms, interfaces and materials, is the exclusive property of EssenciaLab."
      },
      {
        title: "5. Modifications",
        text: "We reserve the right to modify these Terms at any time. Significant changes will be communicated by email."
      }
    ],
    lastUpdate: "Last updated: 06/23/2025"
  },
  es: {
    title: "Términos de Uso",
    sections: [
      {
        title: "1. Aceptación de los Términos",
        text: "Al acceder y utilizar la plataforma EssenciaLab, usted acepta estos Términos de Uso y nuestra Política de Privacidad."
      },
      {
        title: "2. Uso de la Plataforma",
        text: "La plataforma está destinada exclusivamente a profesionales de la salud calificados. Cualquier uso que viole leyes o regulaciones aplicables está prohibido."
      },
      {
        title: "3. Responsabilidades",
        text: "El profesional es responsable de todas las actividades realizadas en su cuenta y debe mantener la confidencialidad de sus credenciales de acceso."
      },
      {
        title: "4. Propiedad Intelectual",
        text: "Todo el contenido de la plataforma, incluyendo algoritmos, interfaces y materiales, es propiedad exclusiva de EssenciaLab."
      },
      {
        title: "5. Modificaciones",
        text: "Nos reservamos el derecho de modificar estos Términos en cualquier momento. Los cambios significativos serán comunicados por correo electrónico."
      }
    ],
    lastUpdate: "Última actualización: 23/06/2025"
  }
}

export default function TermosDeUso() {
  const [searchParams] = useSearchParams()
  const language = searchParams.get('lang') || 'pt'
  const t = content[language] || content.pt

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      <div className="container mx-auto py-12 px-4 max-w-4xl">
        <Card className="p-8">
          <h1 className="text-3xl font-bold mb-6">{t.title}</h1>
          
          {t.sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
              <p className="mb-6 text-gray-700">{section.text}</p>
            </div>
          ))}

          <p className="text-sm text-gray-500 mt-8">
            {t.lastUpdate}
          </p>
        </Card>
      </div>
      <Footer />
    </div>
  )
}
