import { motion } from "framer-motion";
import { AppStoreBadge } from "../../../components/badges/AppStoreBadge";
import { GooglePlayBadge } from "../../../components/badges/GooglePlayBadge";

const CTASection = () => {
  const handleAppStoreClick = () => {
    window.open("https://apps.apple.com/app/id6756675158", "_blank");
  };

  const handleGooglePlayClick = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.essencialab.app",
      "_blank",
    );
  };

  return (
    <>
      <section className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-slate-50 py-20 md:py-28 overflow-hidden">
        {/* Background decorativo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-emerald-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-teal-200 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-4xl mb-6">🌿</span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Se você chegou até aqui,
                <br />
                talvez esteja pronto para observar diferente.
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
                Não prometemos transformações milagrosas. Oferecemos uma
                ferramenta para quem quer{" "}
                <strong className="text-gray-700">perceber</strong> o que o
                corpo já está comunicando,{" "}
                <strong className="text-gray-700">acompanhar</strong> padrões ao
                longo do tempo e{" "}
                <strong className="text-gray-700">observar</strong> com mais
                consciência.
              </p>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm mb-8">
                <p className="text-gray-700 mb-2 font-medium">
                  Comece a observar gratuitamente por 7 dias.
                </p>
                <p className="text-gray-500 text-sm mb-6">
                  Sem cartão de crédito. Sem compromisso. Cancele quando quiser.
                </p>

                {/* CTAs - App Store e Google Play */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <AppStoreBadge onClick={handleAppStoreClick} />
                  <GooglePlayBadge onClick={handleGooglePlayClick} />
                </div>
              </div>

              <p className="text-gray-500 text-sm">
                Ou, se preferir, continue observando. Volte quando fizer sentido
                para você.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Disclaimer Legal */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-0">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-gray-700">
            <strong>Aviso Importante:</strong> A análise de sinais corporais
            apresentada nesta página é baseada em princípios da naturopatia e
            medicina integrativa, com finalidade educacional e informativa. Esta
            ferramenta não substitui consulta médica, exames laboratoriais,
            diagnóstico ou tratamento profissional. As recomendações de óleos
            essenciais e suplementos são sugestões gerais de bem-estar e não
            constituem prescrição médica. Os sinais observados podem ter
            múltiplas causas e requerem avaliação profissional adequada.
            Consulte sempre um médico ou profissional de saúde qualificado antes
            de iniciar qualquer intervenção. Resultados individuais podem
            variar. Este conteúdo não deve ser usado para autodiagnóstico ou
            automedicação.
          </p>
        </div>
      </div>

      {/* Seção de Credenciais */}
      <section className="bg-gray-50 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-lg font-semibold mb-4">
            Informações Profissionais
          </h3>
          <div className="text-sm text-gray-700 space-y-2">
            <p>
              <strong>Marilúcio Rocha</strong> - Naturopata Ortomolecular
            </p>
            <p>Registro Profissional: CRT 50859</p>
            <p>CNPJ: 38.494.267/0001-55</p>
            <p>
              Contato: contato@essencialab.app | WhatsApp: +55 (43) 99194-8185
            </p>
            <p>Londrina, Paraná, Brasil</p>
          </div>
        </div>
      </section>

      {/* Footer com Links Obrigatórios */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
            <a
              href="/politica-de-privacidade"
              className="text-gray-300 hover:text-white transition-colors underline"
            >
              Política de Privacidade
            </a>
            <a
              href="/termos-de-uso"
              className="text-gray-300 hover:text-white transition-colors underline"
            >
              Termos de Uso
            </a>
            <a
              href="/contato"
              className="text-gray-300 hover:text-white transition-colors underline"
            >
              Contato
            </a>
            <a
              href="/lgpd"
              className="text-gray-300 hover:text-white transition-colors underline"
            >
              LGPD
            </a>
          </div>
          <p className="text-center text-xs text-gray-500">
            © {new Date().getFullYear()} EssenciaLab. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </>
  );
};

export default CTASection;
export { CTASection };
