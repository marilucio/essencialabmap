import { Card } from '../components/ui/card'
import { useSearchParams } from 'react-router-dom'

export default function TermosDeUso() {
  const [searchParams] = useSearchParams()
  const language = searchParams.get('lang') || 'pt'

  const content = {
    pt: {
      title: "Termos de Uso",
      subtitle: "Leia atentamente antes de usar o EssenciaLab",
      lastUpdate: "Última atualização: 01 de fevereiro de 2026",
      sections: [
        {
          title: "1. Aceitação dos Termos",
          content: `Ao baixar, acessar ou utilizar o aplicativo EssenciaLab ("App"), você concorda com estes Termos de Uso e com nossa Política de Privacidade. Se você não concordar com qualquer parte destes termos, não utilize o App.

O EssenciaLab é oferecido por EssenciaLab Tecnologia ("nós", "nosso" ou "Empresa"), com sede no Brasil.`
        },
        {
          title: "2. Descrição do Serviço",
          content: `O EssenciaLab é uma ferramenta de consciência corporal e bem-estar que utiliza tecnologia de análise visual para oferecer observações educativas sobre padrões faciais e sugestões gerais de práticas de bem-estar, como aromaterapia.

O App é destinado a fins educativos e informativos. Ele NÃO é um dispositivo médico, NÃO realiza diagnósticos, NÃO oferece tratamentos e NÃO substitui a avaliação de profissionais de saúde qualificados.`
        },
        {
          title: "3. Limitações Importantes",
          content: `O EssenciaLab:
• NÃO é um dispositivo médico registrado junto à ANVISA ou qualquer órgão regulador de saúde
• NÃO realiza diagnósticos de condições de saúde
• NÃO oferece tratamentos, prescrições ou intervenções médicas
• NÃO substitui consultas médicas, exames ou acompanhamento profissional
• NÃO garante resultados específicos de saúde ou bem-estar

As observações e sugestões fornecidas pelo App são de natureza educativa e geral, baseadas em padrões visuais observados. Elas não devem ser interpretadas como aconselhamento médico.

Se você apresentar sintomas, preocupações de saúde ou estiver em tratamento médico, consulte sempre um profissional de saúde qualificado.`
        },
        {
          title: "4. Elegibilidade",
          content: `Para usar o EssenciaLab, você deve:
• Ter pelo menos 18 anos de idade ou a maioridade legal em sua jurisdição
• Aceitar estes Termos de Uso e a Política de Privacidade
• Usar o App apenas para fins pessoais e não comerciais (exceto se autorizado)

Ao criar uma conta, você declara que as informações fornecidas são verdadeiras e precisas.`
        },
        {
          title: "5. Conta do Usuário",
          content: `Você é responsável por:
• Manter a confidencialidade de suas credenciais de acesso
• Todas as atividades realizadas em sua conta
• Notificar-nos imediatamente sobre qualquer uso não autorizado

Reservamo-nos o direito de suspender ou encerrar contas que violem estes Termos.`
        },
        {
          title: "6. Período de Teste e Assinaturas",
          content: `O EssenciaLab pode oferecer um período de teste gratuito. Após o término do período de teste, o acesso a determinadas funcionalidades pode requerer uma assinatura paga.

As condições de assinatura, incluindo preços e renovação, são apresentadas no momento da contratação através das lojas de aplicativos (App Store ou Google Play).

Cancelamentos e reembolsos seguem as políticas das respectivas lojas de aplicativos.`
        },
        {
          title: "7. Propriedade Intelectual",
          content: `Todo o conteúdo do EssenciaLab, incluindo mas não limitado a:
• Software, algoritmos e código-fonte
• Design, interfaces e elementos visuais
• Textos, imagens e materiais educativos
• Marcas, logotipos e nomes comerciais

É propriedade exclusiva da EssenciaLab Tecnologia ou de seus licenciadores e está protegido por leis de propriedade intelectual.

Você recebe uma licença limitada, não exclusiva, não transferível e revogável para uso pessoal do App.`
        },
        {
          title: "8. Uso Proibido",
          content: `Você concorda em NÃO:
• Usar o App para fins ilegais ou não autorizados
• Tentar acessar sistemas, dados ou funcionalidades não autorizadas
• Realizar engenharia reversa, descompilar ou modificar o App
• Distribuir, sublicenciar ou comercializar o App sem autorização
• Usar o App de forma que possa danificar, sobrecarregar ou prejudicar nossos serviços
• Fornecer informações falsas ou enganosas
• Violar direitos de terceiros ou leis aplicáveis`
        },
        {
          title: "9. Isenção de Garantias",
          content: `O EssenciaLab é fornecido "como está" e "conforme disponível", sem garantias de qualquer tipo, expressas ou implícitas.

Não garantimos que:
• O App funcionará sem interrupções ou erros
• Os resultados obtidos serão precisos ou confiáveis
• O App atenderá a requisitos específicos de saúde ou bem-estar

Você assume total responsabilidade pelo uso do App e pelas decisões tomadas com base nas informações fornecidas.`
        },
        {
          title: "10. Limitação de Responsabilidade",
          content: `Na extensão máxima permitida por lei, a EssenciaLab Tecnologia não será responsável por:
• Danos diretos, indiretos, incidentais, especiais ou consequentes
• Perdas de dados, lucros ou oportunidades
• Decisões de saúde tomadas com base no uso do App
• Qualquer conteúdo ou conduta de terceiros

Nossa responsabilidade total não excederá o valor pago por você nos últimos 12 meses de uso do App.`
        },
        {
          title: "11. Indenização",
          content: `Você concorda em indenizar e isentar a EssenciaLab Tecnologia, seus diretores, funcionários e parceiros de qualquer reclamação, dano ou despesa decorrente de:
• Seu uso do App
• Violação destes Termos
• Violação de direitos de terceiros`
        },
        {
          title: "12. Modificações",
          content: `Reservamo-nos o direito de modificar estes Termos a qualquer momento. Alterações significativas serão comunicadas através do App ou por e-mail.

O uso continuado do App após as modificações constitui aceitação dos novos Termos.`
        },
        {
          title: "13. Rescisão",
          content: `Você pode encerrar sua conta a qualquer momento através das configurações do App ou entrando em contato conosco.

Reservamo-nos o direito de suspender ou encerrar seu acesso por violação destes Termos, sem aviso prévio.`
        },
        {
          title: "14. Lei Aplicável e Foro",
          content: `Estes Termos são regidos pelas leis da República Federativa do Brasil.

Qualquer disputa será submetida ao foro da comarca de Londrina/PR, com exclusão de qualquer outro.`
        },
        {
          title: "15. Contato",
          content: `Para dúvidas sobre estes Termos de Uso:

Email: contato@essencialab.app
WhatsApp: (43) 99134-3807

Horário de atendimento: Segunda a Sexta, das 9h às 18h (horário de Brasília)`
        }
      ]
    },
    en: {
      title: "Terms of Use",
      subtitle: "Please read carefully before using EssenciaLab",
      lastUpdate: "Last updated: February 1, 2026",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content: `By downloading, accessing, or using the EssenciaLab application ("App"), you agree to these Terms of Use and our Privacy Policy. If you do not agree with any part of these terms, do not use the App.

EssenciaLab is offered by EssenciaLab Tecnologia ("we", "our", or "Company"), based in Brazil.`
        },
        {
          title: "2. Description of Service",
          content: `EssenciaLab is a body consciousness and wellness tool that uses visual analysis technology to provide educational observations about facial patterns and general suggestions for wellness practices, such as aromatherapy.

The App is intended for educational and informational purposes. It is NOT a medical device, does NOT provide diagnoses, does NOT offer treatments, and does NOT replace evaluation by qualified healthcare professionals.`
        },
        {
          title: "3. Important Limitations",
          content: `EssenciaLab:
• Is NOT a medical device registered with ANVISA or any health regulatory body
• Does NOT diagnose health conditions
• Does NOT offer treatments, prescriptions, or medical interventions
• Does NOT replace medical consultations, exams, or professional monitoring
• Does NOT guarantee specific health or wellness results

The observations and suggestions provided by the App are educational and general in nature, based on observed visual patterns. They should not be interpreted as medical advice.

If you have symptoms, health concerns, or are undergoing medical treatment, always consult a qualified healthcare professional.`
        },
        {
          title: "4. Eligibility",
          content: `To use EssenciaLab, you must:
• Be at least 18 years old or the legal age in your jurisdiction
• Accept these Terms of Use and Privacy Policy
• Use the App only for personal, non-commercial purposes (unless authorized)

By creating an account, you represent that the information provided is true and accurate.`
        },
        {
          title: "5. User Account",
          content: `You are responsible for:
• Maintaining the confidentiality of your access credentials
• All activities carried out on your account
• Immediately notifying us of any unauthorized use

We reserve the right to suspend or terminate accounts that violate these Terms.`
        },
        {
          title: "6. Trial Period and Subscriptions",
          content: `EssenciaLab may offer a free trial period. After the trial period ends, access to certain features may require a paid subscription.

Subscription conditions, including prices and renewal, are presented at the time of purchase through app stores (App Store or Google Play).

Cancellations and refunds follow the policies of the respective app stores.`
        },
        {
          title: "7. Intellectual Property",
          content: `All EssenciaLab content, including but not limited to:
• Software, algorithms, and source code
• Design, interfaces, and visual elements
• Texts, images, and educational materials
• Trademarks, logos, and trade names

Is the exclusive property of EssenciaLab Tecnologia or its licensors and is protected by intellectual property laws.

You receive a limited, non-exclusive, non-transferable, and revocable license for personal use of the App.`
        },
        {
          title: "8. Prohibited Use",
          content: `You agree NOT to:
• Use the App for illegal or unauthorized purposes
• Attempt to access unauthorized systems, data, or features
• Reverse engineer, decompile, or modify the App
• Distribute, sublicense, or commercialize the App without authorization
• Use the App in a way that could damage, overload, or impair our services
• Provide false or misleading information
• Violate third-party rights or applicable laws`
        },
        {
          title: "9. Disclaimer of Warranties",
          content: `EssenciaLab is provided "as is" and "as available", without warranties of any kind, express or implied.

We do not guarantee that:
• The App will function without interruption or errors
• Results obtained will be accurate or reliable
• The App will meet specific health or wellness requirements

You assume full responsibility for using the App and for decisions made based on the information provided.`
        },
        {
          title: "10. Limitation of Liability",
          content: `To the maximum extent permitted by law, EssenciaLab Tecnologia shall not be liable for:
• Direct, indirect, incidental, special, or consequential damages
• Loss of data, profits, or opportunities
• Health decisions made based on App use
• Any third-party content or conduct

Our total liability shall not exceed the amount paid by you in the last 12 months of App use.`
        },
        {
          title: "11. Indemnification",
          content: `You agree to indemnify and hold harmless EssenciaLab Tecnologia, its directors, employees, and partners from any claim, damage, or expense arising from:
• Your use of the App
• Violation of these Terms
• Violation of third-party rights`
        },
        {
          title: "12. Modifications",
          content: `We reserve the right to modify these Terms at any time. Significant changes will be communicated through the App or by email.

Continued use of the App after modifications constitutes acceptance of the new Terms.`
        },
        {
          title: "13. Termination",
          content: `You may terminate your account at any time through the App settings or by contacting us.

We reserve the right to suspend or terminate your access for violation of these Terms, without prior notice.`
        },
        {
          title: "14. Governing Law and Jurisdiction",
          content: `These Terms are governed by the laws of the Federative Republic of Brazil.

Any dispute shall be submitted to the courts of Londrina/PR, Brazil, to the exclusion of any other.`
        },
        {
          title: "15. Contact",
          content: `For questions about these Terms of Use:

Email: contato@essencialab.app
WhatsApp: +55 43 99134-3807

Business hours: Monday to Friday, 9am to 6pm (Brasília time)`
        }
      ]
    },
    es: {
      title: "Términos de Uso",
      subtitle: "Lea atentamente antes de usar EssenciaLab",
      lastUpdate: "Última actualización: 1 de febrero de 2026",
      sections: [
        {
          title: "1. Aceptación de los Términos",
          content: `Al descargar, acceder o utilizar la aplicación EssenciaLab ("App"), usted acepta estos Términos de Uso y nuestra Política de Privacidad. Si no está de acuerdo con cualquier parte de estos términos, no utilice la App.

EssenciaLab es ofrecido por EssenciaLab Tecnologia ("nosotros", "nuestro" o "Empresa"), con sede en Brasil.`
        },
        {
          title: "2. Descripción del Servicio",
          content: `EssenciaLab es una herramienta de consciencia corporal y bienestar que utiliza tecnología de análisis visual para ofrecer observaciones educativas sobre patrones faciales y sugerencias generales de prácticas de bienestar, como aromaterapia.

La App está destinada a fines educativos e informativos. NO es un dispositivo médico, NO realiza diagnósticos, NO ofrece tratamientos y NO sustituye la evaluación de profesionales de la salud calificados.`
        },
        {
          title: "3. Limitaciones Importantes",
          content: `EssenciaLab:
• NO es un dispositivo médico registrado ante ANVISA o cualquier órgano regulador de salud
• NO realiza diagnósticos de condiciones de salud
• NO ofrece tratamientos, prescripciones o intervenciones médicas
• NO sustituye consultas médicas, exámenes o seguimiento profesional
• NO garantiza resultados específicos de salud o bienestar

Las observaciones y sugerencias proporcionadas por la App son de naturaleza educativa y general, basadas en patrones visuales observados. No deben interpretarse como asesoramiento médico.

Si presenta síntomas, preocupaciones de salud o está en tratamiento médico, consulte siempre a un profesional de la salud calificado.`
        },
        {
          title: "4. Elegibilidad",
          content: `Para usar EssenciaLab, debe:
• Tener al menos 18 años o la mayoría de edad legal en su jurisdicción
• Aceptar estos Términos de Uso y la Política de Privacidad
• Usar la App solo para fines personales y no comerciales (excepto si está autorizado)

Al crear una cuenta, declara que la información proporcionada es verdadera y precisa.`
        },
        {
          title: "5. Cuenta del Usuario",
          content: `Usted es responsable de:
• Mantener la confidencialidad de sus credenciales de acceso
• Todas las actividades realizadas en su cuenta
• Notificarnos inmediatamente sobre cualquier uso no autorizado

Nos reservamos el derecho de suspender o cancelar cuentas que violen estos Términos.`
        },
        {
          title: "6. Período de Prueba y Suscripciones",
          content: `EssenciaLab puede ofrecer un período de prueba gratuito. Después del período de prueba, el acceso a ciertas funcionalidades puede requerir una suscripción paga.

Las condiciones de suscripción, incluyendo precios y renovación, se presentan al momento de la contratación a través de las tiendas de aplicaciones (App Store o Google Play).

Las cancelaciones y reembolsos siguen las políticas de las respectivas tiendas de aplicaciones.`
        },
        {
          title: "7. Propiedad Intelectual",
          content: `Todo el contenido de EssenciaLab, incluyendo pero no limitado a:
• Software, algoritmos y código fuente
• Diseño, interfaces y elementos visuales
• Textos, imágenes y materiales educativos
• Marcas, logotipos y nombres comerciales

Es propiedad exclusiva de EssenciaLab Tecnologia o de sus licenciantes y está protegido por leyes de propiedad intelectual.

Usted recibe una licencia limitada, no exclusiva, no transferible y revocable para uso personal de la App.`
        },
        {
          title: "8. Uso Prohibido",
          content: `Usted acepta NO:
• Usar la App para fines ilegales o no autorizados
• Intentar acceder a sistemas, datos o funcionalidades no autorizadas
• Realizar ingeniería inversa, descompilar o modificar la App
• Distribuir, sublicenciar o comercializar la App sin autorización
• Usar la App de forma que pueda dañar, sobrecargar o perjudicar nuestros servicios
• Proporcionar información falsa o engañosa
• Violar derechos de terceros o leyes aplicables`
        },
        {
          title: "9. Exención de Garantías",
          content: `EssenciaLab se proporciona "tal cual" y "según disponibilidad", sin garantías de ningún tipo, expresas o implícitas.

No garantizamos que:
• La App funcionará sin interrupciones o errores
• Los resultados obtenidos serán precisos o confiables
• La App cumplirá requisitos específicos de salud o bienestar

Usted asume total responsabilidad por el uso de la App y por las decisiones tomadas con base en la información proporcionada.`
        },
        {
          title: "10. Limitación de Responsabilidad",
          content: `En la máxima extensión permitida por ley, EssenciaLab Tecnologia no será responsable por:
• Daños directos, indirectos, incidentales, especiales o consecuentes
• Pérdidas de datos, ganancias u oportunidades
• Decisiones de salud tomadas con base en el uso de la App
• Cualquier contenido o conducta de terceros

Nuestra responsabilidad total no excederá el monto pagado por usted en los últimos 12 meses de uso de la App.`
        },
        {
          title: "11. Indemnización",
          content: `Usted acepta indemnizar y eximir a EssenciaLab Tecnologia, sus directores, empleados y socios de cualquier reclamo, daño o gasto derivado de:
• Su uso de la App
• Violación de estos Términos
• Violación de derechos de terceros`
        },
        {
          title: "12. Modificaciones",
          content: `Nos reservamos el derecho de modificar estos Términos en cualquier momento. Los cambios significativos serán comunicados a través de la App o por correo electrónico.

El uso continuado de la App después de las modificaciones constituye aceptación de los nuevos Términos.`
        },
        {
          title: "13. Rescisión",
          content: `Puede cancelar su cuenta en cualquier momento a través de la configuración de la App o contactándonos.

Nos reservamos el derecho de suspender o cancelar su acceso por violación de estos Términos, sin previo aviso.`
        },
        {
          title: "14. Ley Aplicable y Jurisdicción",
          content: `Estos Términos se rigen por las leyes de la República Federativa de Brasil.

Cualquier disputa será sometida a los tribunales de Londrina/PR, Brasil, con exclusión de cualquier otro.`
        },
        {
          title: "15. Contacto",
          content: `Para dudas sobre estos Términos de Uso:

Email: contato@essencialab.app
WhatsApp: +55 43 99134-3807

Horario de atención: Lunes a Viernes, 9h a 18h (horario de Brasilia)`
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
            <a href="/politica-de-privacidade" className="hover:text-gray-700">Política de Privacidade</a>
            <a href="/contato" className="hover:text-gray-700">Contato</a>
          </div>
          <p>© {new Date().getFullYear()} EssenciaLab. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
