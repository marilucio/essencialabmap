import { Card } from '../components/ui/card'
import { useSearchParams } from 'react-router-dom'

export default function PoliticaPrivacidade() {
  const [searchParams] = useSearchParams()
  const language = searchParams.get('lang') || 'pt'

  const content = {
    pt: {
      title: "Política de Privacidade",
      subtitle: "Como coletamos, usamos e protegemos suas informações",
      lastUpdate: "Última atualização: 01 de fevereiro de 2026",
      sections: [
        {
          title: "1. Introdução",
          content: `A EssenciaLab Tecnologia ("nós", "nosso" ou "Empresa") está comprometida com a proteção da sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, armazenamos e protegemos suas informações pessoais quando você utiliza o aplicativo EssenciaLab ("App").

Ao utilizar o App, você concorda com as práticas descritas nesta Política. Recomendamos que leia este documento com atenção.

Esta Política está em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) e outras legislações aplicáveis.`
        },
        {
          title: "2. Informações que Coletamos",
          content: `Coletamos diferentes tipos de informações para fornecer e melhorar nossos serviços:

Informações fornecidas por você:
• Dados de cadastro: nome, email, data de nascimento
• Informações de perfil: preferências de bem-estar, interesses

Informações coletadas automaticamente:
• Imagens faciais: capturadas pela câmera do seu dispositivo para análise visual (processadas localmente)
• Dados de uso: funcionalidades acessadas, frequência de uso, interações com o App
• Informações do dispositivo: modelo, sistema operacional, identificadores únicos

Informações de pagamento:
• Processadas diretamente pelas lojas de aplicativos (Apple/Google). Não armazenamos dados de cartão de crédito.`
        },
        {
          title: "3. Processamento de Imagens Faciais",
          content: `O EssenciaLab utiliza tecnologia de análise visual para identificar padrões faciais. É importante você saber:

• As imagens são processadas localmente no seu dispositivo
• NÃO enviamos imagens faciais para servidores externos
• NÃO utilizamos suas imagens para treinar modelos de inteligência artificial
• NÃO compartilhamos suas imagens com terceiros
• Você pode excluir seus dados a qualquer momento

O processamento local garante que suas imagens nunca saiam do seu dispositivo, proporcionando máxima privacidade.`
        },
        {
          title: "4. Como Usamos suas Informações",
          content: `Utilizamos suas informações para:

Prestação do serviço:
• Criar e gerenciar sua conta
• Fornecer as funcionalidades do App
• Personalizar sua experiência

Comunicação:
• Enviar notificações sobre o serviço
• Responder a suas dúvidas e solicitações
• Informar sobre atualizações e novidades (com seu consentimento)

Melhoria do serviço:
• Analisar padrões de uso (de forma agregada e anônima)
• Identificar e corrigir problemas técnicos
• Desenvolver novas funcionalidades

Obrigações legais:
• Cumprir requisitos legais e regulatórios
• Proteger nossos direitos e os direitos de terceiros`
        },
        {
          title: "5. Base Legal para o Tratamento (LGPD)",
          content: `De acordo com a LGPD, tratamos seus dados pessoais com base nas seguintes hipóteses legais:

• Consentimento: para coleta de imagens faciais e envio de comunicações de marketing
• Execução de contrato: para prestação dos serviços contratados
• Legítimo interesse: para melhoria do serviço e prevenção de fraudes
• Cumprimento de obrigação legal: para atender requisitos legais e regulatórios

Você pode retirar seu consentimento a qualquer momento, sem prejuízo da licitude do tratamento realizado anteriormente.`
        },
        {
          title: "6. Compartilhamento de Dados",
          content: `NÃO vendemos suas informações pessoais.

Podemos compartilhar dados apenas nas seguintes situações:

Prestadores de serviço:
• Provedores de infraestrutura (hospedagem, armazenamento)
• Ferramentas de análise (dados agregados e anônimos)

Estes parceiros estão obrigados contratualmente a proteger suas informações e usá-las apenas para os fins especificados.

Requisitos legais:
• Quando exigido por lei, ordem judicial ou autoridade competente
• Para proteger direitos, propriedade ou segurança

Transferência de negócios:
• Em caso de fusão, aquisição ou venda de ativos (com notificação prévia)`
        },
        {
          title: "7. Armazenamento e Segurança",
          content: `Implementamos medidas técnicas e organizacionais para proteger suas informações:

Medidas de segurança:
• Criptografia de dados em trânsito e em repouso
• Controle de acesso restrito
• Monitoramento contínuo de segurança
• Backups regulares

Período de retenção:
• Mantemos seus dados enquanto sua conta estiver ativa
• Após exclusão da conta, seus dados são removidos em até 30 dias
• Podemos reter dados anonimizados para fins estatísticos

Localização dos dados:
• Dados são armazenados em servidores seguros no Brasil ou em países com nível adequado de proteção`
        },
        {
          title: "8. Seus Direitos (LGPD)",
          content: `De acordo com a LGPD, você tem direito a:

• Confirmação e acesso: saber se tratamos seus dados e acessá-los
• Correção: corrigir dados incompletos, inexatos ou desatualizados
• Anonimização, bloqueio ou eliminação: de dados desnecessários ou excessivos
• Portabilidade: receber seus dados em formato estruturado
• Eliminação: solicitar a exclusão de dados tratados com base em consentimento
• Informação: saber com quem compartilhamos seus dados
• Revogação: retirar seu consentimento a qualquer momento
• Oposição: opor-se a tratamentos baseados em outras hipóteses legais

Para exercer seus direitos, entre em contato conosco pelos canais indicados ao final desta Política.`
        },
        {
          title: "9. Cookies e Tecnologias Similares",
          content: `O App pode utilizar tecnologias de rastreamento para:
• Lembrar suas preferências
• Analisar o uso do serviço
• Melhorar a experiência do usuário

Você pode gerenciar suas preferências de cookies nas configurações do seu dispositivo.`
        },
        {
          title: "10. Privacidade de Menores",
          content: `O EssenciaLab não é destinado a menores de 18 anos. Não coletamos intencionalmente informações de menores.

Se tomarmos conhecimento de que coletamos dados de um menor, excluiremos essas informações imediatamente. Se você acredita que um menor forneceu informações, entre em contato conosco.`
        },
        {
          title: "11. Transferências Internacionais",
          content: `Seus dados podem ser transferidos para países fora do Brasil para:
• Armazenamento em servidores de nuvem
• Processamento por prestadores de serviço

Garantimos que essas transferências ocorram apenas para países com nível adequado de proteção ou mediante garantias contratuais apropriadas, conforme exigido pela LGPD.`
        },
        {
          title: "12. Alterações nesta Política",
          content: `Podemos atualizar esta Política periodicamente. Alterações significativas serão comunicadas através do App ou por email.

Recomendamos que revise esta Política regularmente. A data da última atualização está indicada no início do documento.

O uso continuado do App após alterações constitui aceitação da nova Política.`
        },
        {
          title: "13. Encarregado de Dados (DPO)",
          content: `Para questões relacionadas à proteção de dados pessoais, você pode entrar em contato com nosso Encarregado de Dados:

Email: privacidade@essencialab.app

O Encarregado é responsável por:
• Atender solicitações dos titulares de dados
• Interagir com a Autoridade Nacional de Proteção de Dados (ANPD)
• Orientar sobre práticas de proteção de dados`
        },
        {
          title: "14. Contato",
          content: `Para dúvidas, solicitações ou exercício de direitos relacionados à privacidade:

Email: contato@essencialab.app
WhatsApp: (43) 99134-3807

Horário de atendimento: Segunda a Sexta, das 9h às 18h (horário de Brasília)

Responderemos sua solicitação no prazo de 15 dias, conforme previsto na LGPD.`
        }
      ]
    },
    en: {
      title: "Privacy Policy",
      subtitle: "How we collect, use, and protect your information",
      lastUpdate: "Last updated: February 1, 2026",
      sections: [
        {
          title: "1. Introduction",
          content: `EssenciaLab Tecnologia ("we", "our", or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use the EssenciaLab application ("App").

By using the App, you agree to the practices described in this Policy. We recommend that you read this document carefully.

This Policy complies with Brazil's General Data Protection Law (LGPD - Law No. 13.709/2018) and other applicable legislation.`
        },
        {
          title: "2. Information We Collect",
          content: `We collect different types of information to provide and improve our services:

Information you provide:
• Registration data: name, email, date of birth
• Profile information: wellness preferences, interests

Automatically collected information:
• Facial images: captured by your device's camera for visual analysis (processed locally)
• Usage data: features accessed, frequency of use, App interactions
• Device information: model, operating system, unique identifiers

Payment information:
• Processed directly by app stores (Apple/Google). We do not store credit card data.`
        },
        {
          title: "3. Facial Image Processing",
          content: `EssenciaLab uses visual analysis technology to identify facial patterns. It's important you know:

• Images are processed locally on your device
• We do NOT send facial images to external servers
• We do NOT use your images to train artificial intelligence models
• We do NOT share your images with third parties
• You can delete your data at any time

Local processing ensures your images never leave your device, providing maximum privacy.`
        },
        {
          title: "4. How We Use Your Information",
          content: `We use your information for:

Service provision:
• Create and manage your account
• Provide App functionality
• Personalize your experience

Communication:
• Send service notifications
• Respond to your questions and requests
• Inform about updates and news (with your consent)

Service improvement:
• Analyze usage patterns (aggregated and anonymous)
• Identify and fix technical issues
• Develop new features

Legal obligations:
• Comply with legal and regulatory requirements
• Protect our rights and the rights of third parties`
        },
        {
          title: "5. Legal Basis for Processing (LGPD)",
          content: `According to LGPD, we process your personal data based on the following legal grounds:

• Consent: for collecting facial images and sending marketing communications
• Contract execution: for providing contracted services
• Legitimate interest: for service improvement and fraud prevention
• Legal obligation compliance: to meet legal and regulatory requirements

You may withdraw your consent at any time, without prejudice to the lawfulness of processing carried out previously.`
        },
        {
          title: "6. Data Sharing",
          content: `We do NOT sell your personal information.

We may share data only in the following situations:

Service providers:
• Infrastructure providers (hosting, storage)
• Analytics tools (aggregated and anonymous data)

These partners are contractually obligated to protect your information and use it only for specified purposes.

Legal requirements:
• When required by law, court order, or competent authority
• To protect rights, property, or safety

Business transfers:
• In case of merger, acquisition, or asset sale (with prior notification)`
        },
        {
          title: "7. Storage and Security",
          content: `We implement technical and organizational measures to protect your information:

Security measures:
• Encryption of data in transit and at rest
• Restricted access control
• Continuous security monitoring
• Regular backups

Retention period:
• We keep your data while your account is active
• After account deletion, your data is removed within 30 days
• We may retain anonymized data for statistical purposes

Data location:
• Data is stored on secure servers in Brazil or in countries with adequate protection levels`
        },
        {
          title: "8. Your Rights (LGPD)",
          content: `According to LGPD, you have the right to:

• Confirmation and access: know if we process your data and access it
• Correction: correct incomplete, inaccurate, or outdated data
• Anonymization, blocking, or deletion: of unnecessary or excessive data
• Portability: receive your data in structured format
• Deletion: request deletion of data processed based on consent
• Information: know with whom we share your data
• Revocation: withdraw your consent at any time
• Opposition: oppose processing based on other legal grounds

To exercise your rights, contact us through the channels indicated at the end of this Policy.`
        },
        {
          title: "9. Cookies and Similar Technologies",
          content: `The App may use tracking technologies to:
• Remember your preferences
• Analyze service usage
• Improve user experience

You can manage your cookie preferences in your device settings.`
        },
        {
          title: "10. Children's Privacy",
          content: `EssenciaLab is not intended for individuals under 18 years of age. We do not intentionally collect information from minors.

If we become aware that we have collected data from a minor, we will delete this information immediately. If you believe a minor has provided information, please contact us.`
        },
        {
          title: "11. International Transfers",
          content: `Your data may be transferred to countries outside Brazil for:
• Storage on cloud servers
• Processing by service providers

We ensure that such transfers occur only to countries with adequate protection levels or through appropriate contractual guarantees, as required by LGPD.`
        },
        {
          title: "12. Changes to this Policy",
          content: `We may update this Policy periodically. Significant changes will be communicated through the App or by email.

We recommend that you review this Policy regularly. The date of the last update is indicated at the beginning of the document.

Continued use of the App after changes constitutes acceptance of the new Policy.`
        },
        {
          title: "13. Data Protection Officer (DPO)",
          content: `For questions related to personal data protection, you may contact our Data Protection Officer:

Email: privacidade@essencialab.app

The DPO is responsible for:
• Responding to data subject requests
• Interacting with the National Data Protection Authority (ANPD)
• Providing guidance on data protection practices`
        },
        {
          title: "14. Contact",
          content: `For questions, requests, or exercising privacy-related rights:

Email: contato@essencialab.app
WhatsApp: +55 43 99134-3807

Business hours: Monday to Friday, 9am to 6pm (Brasília time)

We will respond to your request within 15 days, as required by LGPD.`
        }
      ]
    },
    es: {
      title: "Política de Privacidad",
      subtitle: "Cómo recopilamos, usamos y protegemos su información",
      lastUpdate: "Última actualización: 1 de febrero de 2026",
      sections: [
        {
          title: "1. Introducción",
          content: `EssenciaLab Tecnologia ("nosotros", "nuestro" o "Empresa") está comprometida con la protección de su privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, almacenamos y protegemos su información personal cuando utiliza la aplicación EssenciaLab ("App").

Al utilizar la App, usted acepta las prácticas descritas en esta Política. Recomendamos que lea este documento con atención.

Esta Política cumple con la Ley General de Protección de Datos de Brasil (LGPD - Ley N° 13.709/2018) y otras legislaciones aplicables.`
        },
        {
          title: "2. Información que Recopilamos",
          content: `Recopilamos diferentes tipos de información para proporcionar y mejorar nuestros servicios:

Información proporcionada por usted:
• Datos de registro: nombre, email, fecha de nacimiento
• Información de perfil: preferencias de bienestar, intereses

Información recopilada automáticamente:
• Imágenes faciales: capturadas por la cámara de su dispositivo para análisis visual (procesadas localmente)
• Datos de uso: funcionalidades accedidas, frecuencia de uso, interacciones con la App
• Información del dispositivo: modelo, sistema operativo, identificadores únicos

Información de pago:
• Procesada directamente por las tiendas de aplicaciones (Apple/Google). No almacenamos datos de tarjeta de crédito.`
        },
        {
          title: "3. Procesamiento de Imágenes Faciales",
          content: `EssenciaLab utiliza tecnología de análisis visual para identificar patrones faciales. Es importante que sepa:

• Las imágenes se procesan localmente en su dispositivo
• NO enviamos imágenes faciales a servidores externos
• NO utilizamos sus imágenes para entrenar modelos de inteligencia artificial
• NO compartimos sus imágenes con terceros
• Puede eliminar sus datos en cualquier momento

El procesamiento local garantiza que sus imágenes nunca salgan de su dispositivo, proporcionando máxima privacidad.`
        },
        {
          title: "4. Cómo Usamos su Información",
          content: `Utilizamos su información para:

Prestación del servicio:
• Crear y gestionar su cuenta
• Proporcionar las funcionalidades de la App
• Personalizar su experiencia

Comunicación:
• Enviar notificaciones sobre el servicio
• Responder a sus dudas y solicitudes
• Informar sobre actualizaciones y novedades (con su consentimiento)

Mejora del servicio:
• Analizar patrones de uso (de forma agregada y anónima)
• Identificar y corregir problemas técnicos
• Desarrollar nuevas funcionalidades

Obligaciones legales:
• Cumplir requisitos legales y regulatorios
• Proteger nuestros derechos y los derechos de terceros`
        },
        {
          title: "5. Base Legal para el Tratamiento (LGPD)",
          content: `De acuerdo con la LGPD, tratamos sus datos personales con base en las siguientes hipótesis legales:

• Consentimiento: para recopilación de imágenes faciales y envío de comunicaciones de marketing
• Ejecución de contrato: para prestación de los servicios contratados
• Interés legítimo: para mejora del servicio y prevención de fraudes
• Cumplimiento de obligación legal: para atender requisitos legales y regulatorios

Puede retirar su consentimiento en cualquier momento, sin perjuicio de la licitud del tratamiento realizado anteriormente.`
        },
        {
          title: "6. Compartir Datos",
          content: `NO vendemos su información personal.

Podemos compartir datos solo en las siguientes situaciones:

Proveedores de servicio:
• Proveedores de infraestructura (hospedaje, almacenamiento)
• Herramientas de análisis (datos agregados y anónimos)

Estos socios están obligados contractualmente a proteger su información y usarla solo para los fines especificados.

Requisitos legales:
• Cuando sea exigido por ley, orden judicial o autoridad competente
• Para proteger derechos, propiedad o seguridad

Transferencia de negocios:
• En caso de fusión, adquisición o venta de activos (con notificación previa)`
        },
        {
          title: "7. Almacenamiento y Seguridad",
          content: `Implementamos medidas técnicas y organizacionales para proteger su información:

Medidas de seguridad:
• Cifrado de datos en tránsito y en reposo
• Control de acceso restringido
• Monitoreo continuo de seguridad
• Copias de seguridad regulares

Período de retención:
• Mantenemos sus datos mientras su cuenta esté activa
• Después de eliminar la cuenta, sus datos se eliminan en hasta 30 días
• Podemos retener datos anonimizados para fines estadísticos

Ubicación de los datos:
• Los datos se almacenan en servidores seguros en Brasil o en países con nivel adecuado de protección`
        },
        {
          title: "8. Sus Derechos (LGPD)",
          content: `De acuerdo con la LGPD, usted tiene derecho a:

• Confirmación y acceso: saber si tratamos sus datos y acceder a ellos
• Corrección: corregir datos incompletos, inexactos o desactualizados
• Anonimización, bloqueo o eliminación: de datos innecesarios o excesivos
• Portabilidad: recibir sus datos en formato estructurado
• Eliminación: solicitar la exclusión de datos tratados con base en consentimiento
• Información: saber con quién compartimos sus datos
• Revocación: retirar su consentimiento en cualquier momento
• Oposición: oponerse a tratamientos basados en otras hipótesis legales

Para ejercer sus derechos, contáctenos a través de los canales indicados al final de esta Política.`
        },
        {
          title: "9. Cookies y Tecnologías Similares",
          content: `La App puede utilizar tecnologías de seguimiento para:
• Recordar sus preferencias
• Analizar el uso del servicio
• Mejorar la experiencia del usuario

Puede gestionar sus preferencias de cookies en la configuración de su dispositivo.`
        },
        {
          title: "10. Privacidad de Menores",
          content: `EssenciaLab no está destinado a menores de 18 años. No recopilamos intencionalmente información de menores.

Si tomamos conocimiento de que hemos recopilado datos de un menor, eliminaremos esa información inmediatamente. Si cree que un menor ha proporcionado información, contáctenos.`
        },
        {
          title: "11. Transferencias Internacionales",
          content: `Sus datos pueden ser transferidos a países fuera de Brasil para:
• Almacenamiento en servidores de nube
• Procesamiento por proveedores de servicio

Garantizamos que estas transferencias ocurran solo a países con nivel adecuado de protección o mediante garantías contractuales apropiadas, conforme exigido por la LGPD.`
        },
        {
          title: "12. Cambios en esta Política",
          content: `Podemos actualizar esta Política periódicamente. Los cambios significativos serán comunicados a través de la App o por email.

Recomendamos que revise esta Política regularmente. La fecha de la última actualización está indicada al inicio del documento.

El uso continuado de la App después de los cambios constituye aceptación de la nueva Política.`
        },
        {
          title: "13. Encargado de Datos (DPO)",
          content: `Para cuestiones relacionadas con la protección de datos personales, puede contactar a nuestro Encargado de Datos:

Email: privacidade@essencialab.app

El Encargado es responsable de:
• Atender solicitudes de los titulares de datos
• Interactuar con la Autoridad Nacional de Protección de Datos (ANPD)
• Orientar sobre prácticas de protección de datos`
        },
        {
          title: "14. Contacto",
          content: `Para dudas, solicitudes o ejercicio de derechos relacionados con la privacidad:

Email: contato@essencialab.app
WhatsApp: +55 43 99134-3807

Horario de atención: Lunes a Viernes, 9h a 18h (horario de Brasilia)

Responderemos su solicitud en el plazo de 15 días, conforme previsto en la LGPD.`
        }
      ]
    }
  }

  const t = content[language] || content.pt

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Header simples */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <a href="/" className="flex items-center gap-2 w-fit">
            <span className="text-2xl">🌿</span>
            <span className="text-xl font-bold text-gray-900">EssenciaLab</span>
          </a>
        </div>
      </header>

      <div className="container mx-auto py-12 px-4 max-w-4xl">
        <Card className="p-6 md:p-10">
          {/* Cabeçalho */}
          <div className="mb-10 pb-6 border-b border-gray-200">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{t.title}</h1>
            <p className="text-gray-600">{t.subtitle}</p>
            <p className="text-sm text-gray-500 mt-4">{t.lastUpdate}</p>
          </div>

          {/* Seções */}
          <div className="space-y-8">
            {t.sections.map((section, index) => (
              <section key={index} className="scroll-mt-24" id={`section-${index + 1}`}>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h2>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </section>
            ))}
          </div>
        </Card>
      </div>

      {/* Footer simples */}
      <footer className="border-t border-gray-200 mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <a href="/termos-de-uso" className="hover:text-gray-700">Termos de Uso</a>
            <a href="/contato" className="hover:text-gray-700">Contato</a>
          </div>
          <p>© {new Date().getFullYear()} EssenciaLab. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
