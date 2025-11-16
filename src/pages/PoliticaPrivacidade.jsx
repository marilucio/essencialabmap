import { Card } from '../components/ui/card'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useSearchParams } from 'react-router-dom'

const content = {
  pt: {
    title: "Política de Privacidade",
    sections: [
      {
        title: "1. Informações Coletadas",
        text: "Coletamos informações pessoais e de saúde necessárias para fornecer nossos serviços, incluindo dados de cadastro, imagens faciais e informações metabólicas."
      },
      {
        title: "2. Uso das Informações",
        text: "As informações são utilizadas exclusivamente para fornecer os serviços contratados, melhorar nossa plataforma e cumprir obrigações legais."
      },
      {
        title: "3. Compartilhamento de Dados",
        text: "Seus dados não serão compartilhados com terceiros sem seu consentimento, exceto quando exigido por lei ou para prestação de serviços essenciais."
      },
      {
        title: "4. Segurança",
        text: "Implementamos medidas técnicas e organizacionais rigorosas para proteger seus dados contra acesso não autorizado ou violação."
      },
      {
        title: "5. Seus Direitos",
        text: "Você tem direito a acessar, corrigir, excluir ou limitar o uso de seus dados pessoais, conforme previsto na LGPD."
      }
    ],
    lastUpdate: "Última atualização: 23/06/2025"
  },
  en: {
    title: "Privacy Policy",
    sections: [
      {
        title: "1. Information Collected",
        text: "We collect personal and health information necessary to provide our services, including registration data, facial images and metabolic information."
      },
      {
        title: "2. Use of Information",
        text: "Information is used exclusively to provide contracted services, improve our platform and comply with legal obligations."
      },
      {
        title: "3. Data Sharing",
        text: "Your data will not be shared with third parties without your consent, except when required by law or for the provision of essential services."
      },
      {
        title: "4. Security",
        text: "We implement rigorous technical and organizational measures to protect your data against unauthorized access or breach."
      },
      {
        title: "5. Your Rights",
        text: "You have the right to access, correct, delete or limit the use of your personal data, as provided for in the LGPD."
      }
    ],
    lastUpdate: "Last updated: 06/23/2025"
  },
  es: {
    title: "Política de Privacidad",
    sections: [
      {
        title: "1. Información Recopilada",
        text: "Recopilamos información personal y de salud necesaria para proporcionar nuestros servicios, incluyendo datos de registro, imágenes faciales e información metabólica."
      },
      {
        title: "2. Uso de la Información",
        text: "La información se utiliza exclusivamente para proporcionar los servicios contratados, mejorar nuestra plataforma y cumplir con obligaciones legales."
      },
      {
        title: "3. Compartir Datos",
        text: "Sus datos no serán compartidos con terceros sin su consentimiento, excepto cuando sea requerido por ley o para la prestación de servicios esenciales."
      },
      {
        title: "4. Seguridad",
        text: "Implementamos medidas técnicas y organizacionales rigurosas para proteger sus datos contra acceso no autorizado o violación."
      },
      {
        title: "5. Sus Derechos",
        text: "Usted tiene derecho a acceder, corregir, eliminar o limitar el uso de sus datos personales, según lo previsto en la LGPD."
      }
    ],
    lastUpdate: "Última actualización: 23/06/2025"
  }
}

export default function PoliticaPrivacidade() {
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
