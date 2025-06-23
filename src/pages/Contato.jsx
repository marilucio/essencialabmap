import { Card } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contato() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      <div className="container mx-auto py-12 px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Informações de Contato */}
          <Card className="p-8" data-aos="fade-right">
            <h1 className="text-3xl font-bold mb-6">Entre em Contato</h1>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-100 rounded-full">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Email</h2>
                  <p className="text-gray-700">suporte@essencialab.site</p>
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

          {/* Formulário de Contato com Netlify Forms */}
          <Card className="p-8" data-aos="fade-left">
            <h2 className="text-2xl font-bold mb-6">Envie sua Mensagem</h2>
            
            <form name="lead-form" method="POST" data-netlify="true" className="space-y-6">
              <input type="hidden" name="form-name" value="lead-form" />
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="seu.email@exemplo.com"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="especialidade" className="block text-sm font-semibold text-gray-700 mb-2">
                  Especialidade *
                </label>
                <Input
                  type="text"
                  id="especialidade"
                  name="especialidade"
                  placeholder="Ex: Nutricionista, Médico, Biomédico..."
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="nome" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome Completo
                </label>
                <Input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Seu nome completo"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="telefone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Telefone
                </label>
                <Input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  placeholder="(00) 00000-0000"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="mensagem"
                  name="mensagem"
                  placeholder="Conte-nos como podemos ajudá-lo..."
                  rows={4}
                  className="w-full"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensagem
              </Button>

              <p className="text-xs text-gray-500 text-center">
                Responderemos em até 24 horas úteis
              </p>
            </form>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  )
}
