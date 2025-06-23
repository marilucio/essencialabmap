import { Card } from '../components/ui/card'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contato() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      <div className="container mx-auto py-12 px-4 max-w-4xl">
        <Card className="p-8">
          <h1 className="text-3xl font-bold mb-6">Contato</h1>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-blue-100 rounded-full">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Email</h2>
                <p className="text-gray-700">suporte@essencialab.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-2 bg-green-100 rounded-full">
                <Phone className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Telefone</h2>
                <p className="text-gray-700">43 99134-3807</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-2 bg-orange-100 rounded-full">
                <MapPin className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Endereço</h2>
                <p className="text-gray-700">Av. Nassim Jabur, 145, Londrina/PR</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold mb-2">Horário de Atendimento</h3>
            <p className="text-sm text-gray-700">
              Segunda a Sexta: 08h às 18h<br />
              Sábado: 08h às 12h
            </p>
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  )
}
