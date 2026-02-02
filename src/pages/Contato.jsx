import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Mail, Phone, MessageCircle, Send, Clock, CheckCircle, Loader2 } from 'lucide-react'

export default function Contato() {
  const [searchParams] = useSearchParams();
  const language = searchParams.get('lang') || 'pt';
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const content = {
    pt: {
      title: 'Entre em Contato',
      subtitle: 'Estamos aqui para ajudar',
      description: 'Tem dúvidas sobre o EssenciaLab? Entre em contato conosco pelos canais abaixo ou preencha o formulário.',
      email: 'Email',
      phone: 'WhatsApp',
      hours: 'Horário de Atendimento',
      hoursText: 'Segunda a Sexta: 9h às 18h',
      formTitle: 'Envie sua mensagem',
      nameLabel: 'Nome',
      namePlaceholder: 'Seu nome',
      emailLabel: 'Email',
      emailPlaceholder: 'seu@email.com',
      subjectLabel: 'Assunto',
      subjectPlaceholder: 'Como podemos ajudar?',
      messageLabel: 'Mensagem',
      messagePlaceholder: 'Descreva sua dúvida ou sugestão...',
      required: '*',
      submitButton: 'Enviar Mensagem',
      sendingButton: 'Enviando...',
      formNote: 'Responderemos em até 48 horas úteis',
      whatsappButton: 'Falar pelo WhatsApp',
      successTitle: 'Mensagem enviada!',
      successMessage: 'Obrigado pelo contato. Responderemos em breve.',
      errorMessage: 'Erro ao enviar. Tente novamente ou use o WhatsApp.',
      sendAnother: 'Enviar outra mensagem'
    },
    en: {
      title: 'Contact Us',
      subtitle: 'We are here to help',
      description: 'Have questions about EssenciaLab? Contact us through the channels below or fill out the form.',
      email: 'Email',
      phone: 'WhatsApp',
      hours: 'Business Hours',
      hoursText: 'Monday to Friday: 9am to 6pm (BRT)',
      formTitle: 'Send your message',
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'your@email.com',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'How can we help?',
      messageLabel: 'Message',
      messagePlaceholder: 'Describe your question or suggestion...',
      required: '*',
      submitButton: 'Send Message',
      sendingButton: 'Sending...',
      formNote: 'We will respond within 48 business hours',
      whatsappButton: 'Chat on WhatsApp',
      successTitle: 'Message sent!',
      successMessage: 'Thank you for contacting us. We will respond soon.',
      errorMessage: 'Error sending. Try again or use WhatsApp.',
      sendAnother: 'Send another message'
    },
    es: {
      title: 'Contáctanos',
      subtitle: 'Estamos aquí para ayudar',
      description: '¿Tienes dudas sobre EssenciaLab? Contáctanos a través de los canales a continuación o completa el formulario.',
      email: 'Email',
      phone: 'WhatsApp',
      hours: 'Horario de Atención',
      hoursText: 'Lunes a Viernes: 9h a 18h (BRT)',
      formTitle: 'Envía tu mensaje',
      nameLabel: 'Nombre',
      namePlaceholder: 'Tu nombre',
      emailLabel: 'Email',
      emailPlaceholder: 'tu@email.com',
      subjectLabel: 'Asunto',
      subjectPlaceholder: '¿Cómo podemos ayudar?',
      messageLabel: 'Mensaje',
      messagePlaceholder: 'Describe tu duda o sugerencia...',
      required: '*',
      submitButton: 'Enviar Mensaje',
      sendingButton: 'Enviando...',
      formNote: 'Responderemos en hasta 48 horas hábiles',
      whatsappButton: 'Hablar por WhatsApp',
      successTitle: '¡Mensaje enviado!',
      successMessage: 'Gracias por contactarnos. Responderemos pronto.',
      errorMessage: 'Error al enviar. Intenta de nuevo o usa WhatsApp.',
      sendAnother: 'Enviar otro mensaje'
    }
  };

  const t = content[language] || content.pt;

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5543991343807', '_blank');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://formsubmit.co/ajax/contato@essencialab.app', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          nome: formData.get('nome'),
          email: formData.get('email'),
          assunto: formData.get('assunto'),
          mensagem: formData.get('mensagem'),
          _subject: `[EssenciaLab] ${formData.get('assunto')}`,
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        e.target.reset();
      } else {
        throw new Error('Failed to send');
      }
    } catch (err) {
      setError(t.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendAnother = () => {
    setIsSuccess(false);
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-emerald-50">
      {/* Header simples */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <a href="/" className="flex items-center gap-2 w-fit">
            <span className="text-2xl">🌿</span>
            <span className="text-xl font-bold text-gray-900">EssenciaLab</span>
          </a>
        </div>
      </header>

      <div className="container mx-auto py-12 px-4 max-w-5xl">
        {/* Título */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{t.title}</h1>
          <p className="text-lg text-gray-600">{t.description}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Informações de Contato */}
          <div className="lg:col-span-2 space-y-6">
            {/* Email */}
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-100 rounded-xl">
                  <Mail className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900 mb-1">{t.email}</h2>
                  <a
                    href="mailto:contato@essencialab.app"
                    className="text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    contato@essencialab.app
                  </a>
                </div>
              </div>
            </Card>

            {/* WhatsApp */}
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 rounded-xl">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h2 className="font-semibold text-gray-900 mb-1">{t.phone}</h2>
                  <p className="text-gray-600 mb-3">(43) 99134-3807</p>
                  <Button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {t.whatsappButton}
                  </Button>
                </div>
              </div>
            </Card>

            {/* Horário */}
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900 mb-1">{t.hours}</h2>
                  <p className="text-gray-600 text-sm">{t.hoursText}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Formulário de Contato */}
          <Card className="lg:col-span-3 p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">{t.formTitle}</h2>

            {isSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.successTitle}</h3>
                <p className="text-gray-600 mb-6">{t.successMessage}</p>
                <Button
                  onClick={handleSendAnother}
                  variant="outline"
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                >
                  {t.sendAnother}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1.5">
                      {t.nameLabel} {t.required}
                    </label>
                    <Input
                      type="text"
                      id="nome"
                      name="nome"
                      placeholder={t.namePlaceholder}
                      required
                      className="w-full"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      {t.emailLabel} {t.required}
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder={t.emailPlaceholder}
                      required
                      className="w-full"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-1.5">
                    {t.subjectLabel} {t.required}
                  </label>
                  <Input
                    type="text"
                    id="assunto"
                    name="assunto"
                    placeholder={t.subjectPlaceholder}
                    required
                    className="w-full"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1.5">
                    {t.messageLabel} {t.required}
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={5}
                    placeholder={t.messagePlaceholder}
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                    {error}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-medium disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      {t.sendingButton}
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      {t.submitButton}
                    </>
                  )}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  {t.formNote}
                </p>
              </form>
            )}
          </Card>
        </div>
      </div>

      {/* Footer simples */}
      <footer className="border-t border-gray-200 mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <a href="/termos-de-uso" className="hover:text-gray-700">Termos de Uso</a>
            <a href="/politica-de-privacidade" className="hover:text-gray-700">Política de Privacidade</a>
          </div>
          <p>© {new Date().getFullYear()} EssenciaLab. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
