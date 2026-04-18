import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Copy, MessageCircle, Bell, Calendar } from "lucide-react";
import {
  buildPrefilledWhatsAppMessage,
  buildWhatsAppUrl,
  captureLead,
  getRenalConfig,
  readFormDraft,
  readPersistedUtm,
  setSeoTags,
  track,
} from "./lib";

export default function RenalObrigado() {
  const cfg = useMemo(() => getRenalConfig(), []);
  const utm = useMemo(() => readPersistedUtm(), []);
  const draft = useMemo(() => readFormDraft(), []);
  const [copied, setCopied] = useState(false);

  const message = buildPrefilledWhatsAppMessage({ name: draft?.name, profile: draft?.profile });
  const waUrl = cfg.whatsappPhone ? buildWhatsAppUrl({ phone: cfg.whatsappPhone, message }) : "";

  useEffect(() => {
    setSeoTags({
      title: "Inscrição confirmada | Aula Rotina Renal",
      description: "Sua inscrição foi confirmada. Confirme no WhatsApp para receber o acesso à aula.",
      canonicalPath: "/renal/obrigado",
      robots: "noindex,follow",
      ogType: "website",
    });
    track("webinar_page_view", { page: "/renal/obrigado" });
    captureLead({ page: "/renal/obrigado", event: "thank_you_view", ts: new Date().toISOString(), utm });
  }, [utm]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Header minimalista */}
      <header className="w-full border-b border-emerald-100 bg-white/80 backdrop-blur">
        <div className="container mx-auto flex h-12 max-w-5xl items-center px-4">
          <span className="text-base font-bold text-emerald-700">Aula Gratuita</span>
        </div>
      </header>

      <main className="container mx-auto max-w-5xl px-4 py-12">
        <div className="mx-auto max-w-2xl">
          {/* Confirmation */}
          <div className="text-center">
            <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-emerald-100">
              <CheckCircle2 className="size-8 text-emerald-600" />
            </div>
            <h1 className="mt-5 text-2xl md:text-3xl font-bold text-gray-900">
              {draft?.name ? `${draft.name}, você está dentro!` : "Você está dentro!"}
            </h1>
            <p className="mt-3 text-gray-600 max-w-md mx-auto">
              Sua inscrição foi registrada. Agora falta <strong>um passo</strong> para garantir que você receba tudo.
            </p>
          </div>

          <div className="mt-10 grid gap-5">
            {/* MAIN CTA: Confirm on WhatsApp */}
            <Card className="border-emerald-300 shadow-lg ring-2 ring-emerald-200">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <div className="flex size-7 items-center justify-center rounded-full bg-emerald-600 text-white text-xs font-bold">1</div>
                  Confirme agora no WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Sem essa confirmação, você <strong>não recebe o link da aula</strong> nem os lembretes.
                  Clique no botão abaixo — a mensagem já está pronta.
                </p>
                <Button
                  className="w-full bg-green-600 hover:bg-green-500 h-12 text-base font-bold shadow-md"
                  size="lg"
                  disabled={!waUrl}
                  onClick={() => {
                    track("whatsapp_join_click", { placement: "thankyou" });
                    if (waUrl) window.open(waUrl, "_blank", "noopener,noreferrer");
                  }}
                >
                  <MessageCircle className="size-5" />
                  Abrir WhatsApp e confirmar
                </Button>

                {/* Fallback: copy message */}
                <div className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50/60 p-4">
                  <div className="text-xs font-semibold text-emerald-800">Se o WhatsApp não abrir, copie a mensagem:</div>
                  <div className="mt-2 whitespace-pre-wrap text-sm text-gray-700">{message}</div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-3"
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText(message);
                        setCopied(true);
                        window.setTimeout(() => setCopied(false), 1400);
                      } catch {
                        setCopied(false);
                      }
                    }}
                  >
                    <Copy className="size-4" />
                    {copied ? "Copiado!" : "Copiar mensagem"}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* What happens next */}
            <Card className="border-gray-200 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">O que acontece agora</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex size-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 shrink-0">
                      <MessageCircle className="size-3.5" />
                    </div>
                    <div className="text-sm">
                      <strong>Confirme no WhatsApp</strong> — é por lá que tudo acontece.
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex size-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 shrink-0">
                      <Bell className="size-3.5" />
                    </div>
                    <div className="text-sm">
                      <strong>Receba lembretes</strong> — vamos te avisar antes da aula para você não perder.
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex size-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 shrink-0">
                      <Calendar className="size-3.5" />
                    </div>
                    <div className="text-sm">
                      <strong>Assista à aula</strong> — 38 minutos que podem mudar sua relação com a rotina renal.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Urgency reinforcement */}
            <div className="rounded-xl border border-amber-300 bg-amber-50 p-5">
              <div className="flex items-start gap-3">
                <div className="flex size-8 items-center justify-center rounded-lg bg-amber-200 text-amber-800 shrink-0">
                  <Bell className="size-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-amber-900">Não perca o acesso</div>
                  <p className="mt-1 text-sm text-amber-800">
                    O link da aula será enviado <strong>exclusivamente pelo WhatsApp</strong>.
                    Se você não confirmar, pode ficar de fora. Faça isso agora — leva 5 segundos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-10 text-center text-xs text-gray-400">
            Conteúdo educativo. Não substitui acompanhamento médico ou nutricional.
          </p>
        </div>
      </main>
    </div>
  );
}
