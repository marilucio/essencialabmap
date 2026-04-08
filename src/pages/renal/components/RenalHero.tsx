import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { track } from "../lib";

export function RenalHero() {
  const scrollToForm = () => {
    track("click_register_renal_webinar", { placement: "hero" });
    document.getElementById("inscricao")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-20 -left-20 size-96 rounded-full bg-emerald-500 blur-[120px]" />
        <div className="absolute bottom-0 right-0 size-80 rounded-full bg-sky-500 blur-[100px]" />
      </div>

      <div className="relative container mx-auto max-w-4xl px-4 py-16 md:py-24">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-300">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            Aula online gratuita • Vagas limitadas
          </div>

          <h1 className="mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-white">
            Doença Renal<br />
            <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
              Não Precisa Ser Uma Sentença
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-slate-300 leading-relaxed">
            Descubra como a tecnologia está devolvendo <strong className="text-white">clareza, controle e confiança</strong> para
            milhares de pacientes renais — em cada refeição, cada ida ao mercado, cada escolha do dia a dia.
          </p>

          {/* Pain trigger from Criativo 1 */}
          <div className="mx-auto mt-8 max-w-lg rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <p className="text-sm text-slate-400 italic">
              "Abrir a geladeira e não saber o que é seguro comer. Potássio, fósforo, sódio, líquido…
              são 5 variáveis ao mesmo tempo. Nenhuma tabela resolve isso."
            </p>
            <p className="mt-2 text-xs text-slate-500">— Se isso é familiar, essa aula é para você.</p>
          </div>

          <div className="mt-10">
            <Button
              onClick={scrollToForm}
              className="h-14 px-10 text-base font-bold bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-500/25 transition-all hover:shadow-emerald-400/30 hover:scale-[1.02]"
              size="lg"
            >
              Quero reservar minha vaga gratuita
              <ArrowRight className="size-5" />
            </Button>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            100% gratuita • Online • Acesso enviado pelo WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
}
