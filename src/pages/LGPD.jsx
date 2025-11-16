import { Card } from '../components/ui/card'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useSearchParams } from 'react-router-dom'

const content = {
  pt: {
    title: "LGPD - Lei Geral de Proteção de Dados",
    sections: [
      {
        title: "1. Conformidade com a Lei 13.709/2018",
        text: "A EssenciaLab está em plena conformidade com a Lei Geral de Proteção de Dados (LGPD), garantindo os direitos dos titulares de dados."
      },
      {
        title: "2. Dados Sensíveis",
        text: "Tratamos dados de saúde com especial cuidado, seguindo as diretrizes do art. 11 da LGPD e as boas práticas do setor de saúde."
      },
      {
        title: "3. Encarregado de Dados (DPO)",
        text: "Nomeamos um Encarregado de Proteção de Dados para supervisionar o cumprimento da LGPD. Contato: dpo@essencialab.com.br"
      },
      {
        title: "4. Bases Legais",
        text: "O tratamento de dados na EssenciaLab baseia-se no consentimento, cumprimento de obrigação legal e execução de contrato."
      },
      {
        title: "5. Transferência Internacional",
        text: "Em caso de transferência internacional de dados, garantimos o mesmo nível de proteção exigido pela LGPD."
      }
    ],
    rightsTitle: "Como Exercer Seus Direitos",
    rightsText: "Para solicitar acesso, correção ou exclusão de dados, envie um e-mail para dpo@essencialab.com.br com o assunto \"Direitos LGPD\".",
    lastUpdate: "Última atualização: 23/06/2025"
  },
  en: {
    title: "LGPD - General Data Protection Law",
    sections: [
      {
        title: "1. Compliance with Law 13.709/2018",
        text: "EssenciaLab is in full compliance with the General Data Protection Law (LGPD), ensuring the rights of data subjects."
      },
      {
        title: "2. Sensitive Data",
        text: "We treat health data with special care, following the guidelines of Article 11 of the LGPD and best practices in the healthcare sector."
      },
      {
        title: "3. Data Protection Officer (DPO)",
        text: "We have appointed a Data Protection Officer to oversee LGPD compliance. Contact: dpo@essencialab.com.br"
      },
      {
        title: "4. Legal Bases",
        text: "Data processing at EssenciaLab is based on consent, compliance with legal obligations and contract execution."
      },
      {
        title: "5. International Transfer",
        text: "In case of international data transfer, we guarantee the same level of protection required by the LGPD."
      }
    ],
    rightsTitle: "How to Exercise Your Rights",
    rightsText: "To request access, correction or deletion of data, send an email to dpo@essencialab.com.br with the subject \"LGPD Rights\".",
    lastUpdate: "Last updated: 06/23/2025"
  },
  es: {
    title: "LGPD - Ley General de Protección de Datos",
    sections: [
      {
        title: "1. Cumplimiento de la Ley 13.709/2018",
        text: "EssenciaLab está en pleno cumplimiento de la Ley General de Protección de Datos (LGPD), garantizando los derechos de los titulares de datos."
      },
      {
        title: "2. Datos Sensibles",
        text: "Tratamos los datos de salud con especial cuidado, siguiendo las directrices del art. 11 de la LGPD y las mejores prácticas del sector de salud."
      },
      {
        title: "3. Encargado de Datos (DPO)",
        text: "Hemos designado un Encargado de Protección de Datos para supervisar el cumplimiento de la LGPD. Contacto: dpo@essencialab.com.br"
      },
      {
        title: "4. Bases Legales",
        text: "El tratamiento de datos en EssenciaLab se basa en el consentimiento, cumplimiento de obligaciones legales y ejecución de contrato."
      },
      {
        title: "5. Transferencia Internacional",
        text: "En caso de transferencia internacional de datos, garantizamos el mismo nivel de protección exigido por la LGPD."
      }
    ],
    rightsTitle: "Cómo Ejercer Sus Derechos",
    rightsText: "Para solicitar acceso, corrección o eliminación de datos, envíe un correo electrónico a dpo@essencialab.com.br con el asunto \"Derechos LGPD\".",
    lastUpdate: "Última actualización: 23/06/2025"
  }
}

export default function LGPD() {
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

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold mb-2">{t.rightsTitle}</h3>
            <p className="text-sm text-gray-700">
              {t.rightsText}
            </p>
          </div>

          <p className="text-sm text-gray-500 mt-8">
            {t.lastUpdate}
          </p>
        </Card>
      </div>
      <Footer />
    </div>
  )
}
