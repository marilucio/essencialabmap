import { useSearchParams } from 'react-router-dom';
import { Card } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contato() {
  const [searchParams, setSearchParams] = useSearchParams();
  const language = searchParams.get('lang') || 'pt';

  const handleLanguageChange = (newLang) => {
    setSearchParams({ lang: newLang });
  };

  const content = {
    pt: {
      title: 'Entre em Contato',
      email: 'Email',
      phone: 'Telefone',
      address: 'Endereço',
      addressText: 'Av. Nassim Jabur, 145, Londrina/PR',
      hours: 'Horário de Atendimento',
      hoursText: 'Segunda a Sexta: 08h às 18h\nSábado: 08h às 12h',
      formTitle: 'Cadastre-se para Acesso Gratuito',
      emailLabel: 'Email',
      emailPlaceholder: 'seu@email.com',
      specialtyLabel: 'Especialidade',
      specialtyPlaceholder: 'Ex: Consultor doTERRA, Terapeuta, Aromaterapeuta...',
      required: '*',
      submitButton: 'Cadastrar e Acessar Gratuitamente',
      formNote: 'Acesso liberado imediatamente após o cadastro'
    },
    en: {
      title: 'Contact Us',
      email: 'Email',
      phone: 'Phone',
      address: 'Address',
      addressText: 'Av. Nassim Jabur, 145, Londrina/PR, Brazil',
      hours: 'Business Hours',
      hoursText: 'Monday to Friday: 8am to 6pm\nSaturday: 8am to 12pm',
      formTitle: 'Register for Free Access',
      emailLabel: 'Email',
      emailPlaceholder: 'your@email.com',
      specialtyLabel: 'Specialty',
      specialtyPlaceholder: 'Ex: doTERRA Consultant, Therapist, Aromatherapist...',
      required: '*',
      submitButton: 'Register and Access for Free',
      formNote: 'Access granted immediately after registration'
    },
    es: {
      title: 'Contáctanos',
      email: 'Email',
      phone: 'Teléfono',
      address: 'Dirección',
      addressText: 'Av. Nassim Jabur, 145, Londrina/PR, Brasil',
      hours: 'Horario de Atención',
      hoursText: 'Lunes a Viernes: 08h a 18h\nSábado: 08h a 12h',
      formTitle: 'Regístrese para Acceso Gratuito',
      emailLabel: 'Email',
      emailPlaceholder: 'tu@email.com',
      specialtyLabel: 'Especialidad',
      specialtyPlaceholder: 'Ej: Consultor doTERRA, Terapeuta, Aromaterapista...',
      required: '*',
      submitButton: 'Registrarse y Acceder Gratis',
      formNote: 'Acceso liberado inmediatamente después del registro'
    }
  };

  const t = content[language] || content.pt;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <div className="container mx-auto py-12 px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Informações de Contato */}
          <Card className="p-8" data-aos="fade-right">
            <h1 className="text-3xl font-bold mb-6">{t.title}</h1>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-green-100 rounded-full">
                  <Mail className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{t.email}</h2>
                  <p className="text-gray-700">suporte@essencialab.site</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-emerald-100 rounded-full">
                  <Phone className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{t.phone}</h2>
                  <p className="text-gray-700">+55 43 99134-3807</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-green-100 rounded-full">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{t.address}</h2>
                  <p className="text-gray-700">{t.addressText}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold mb-2">{t.hours}</h3>
              <p className="text-sm text-gray-700 whitespace-pre-line">
                {t.hoursText}
              </p>
            </div>
          </Card>

          {/* Formulário de Contato com Netlify Forms */}
          <Card className="p-8" data-aos="fade-left">
            <h2 className="text-2xl font-bold mb-6">{t.formTitle}</h2>
            
            <form name="guia-essencialab" method="POST" data-netlify="true" className="space-y-6">
              <input type="hidden" name="form-name" value="guia-essencialab" />
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.emailLabel} {t.required}
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t.emailPlaceholder}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="especialidade" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.specialtyLabel} {t.required}
                </label>
                <Input
                  type="text"
                  id="especialidade"
                  name="especialidade"
                  placeholder={t.specialtyPlaceholder}
                  required
                  className="w-full"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Send className="w-5 h-5 mr-2" />
                {t.submitButton}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                {t.formNote}
              </p>
            </form>
          </Card>
        </div>
      </div>
      <Footer language={language} />
    </div>
  )
}
