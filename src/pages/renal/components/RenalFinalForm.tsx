import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, ShieldCheck, Users, Clock } from "lucide-react";
import { captureLead, formatWhatsappForInput, normalizePhone, persistFormDraft, track, type RenalProfile, type RenalUtm } from "../lib";
import { createLead } from "../db";
import { useNavigate } from "react-router-dom";

export function RenalFinalForm(props: { utm: RenalUtm }) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [whatsappRaw, setWhatsappRaw] = useState("");
  const [profile, setProfile] = useState<RenalProfile>("paciente");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const normalized = useMemo(() => normalizePhone(whatsappRaw), [whatsappRaw]);

  const isValid = useMemo(() => {
    const n = name.trim();
    const digits = (whatsappRaw || "").replace(/\D+/g, "").replace(/^55/, "");
    return n.length >= 2 && digits.length >= 10;
  }, [name, whatsappRaw]);

  const submit = async () => {
    setError(null);
    if (!isValid) {
      setError("Preencha seu nome e um WhatsApp válido.");
      return;
    }

    setSubmitting(true);

    const trimmedName = name.trim();

    // Store lead in local database
    createLead({
      name: trimmedName,
      whatsapp: normalized,
      profile,
      utm: props.utm,
    });

    // Also send to external endpoint if configured
    const payload = {
      page: "/renal",
      event: "submit_renal_webinar_form",
      ts: new Date().toISOString(),
      name: trimmedName,
      whatsapp: normalized,
      profile,
      utm: props.utm,
    };

    track("submit_renal_webinar_form", { profile });
    persistFormDraft({ name: trimmedName, whatsapp: normalized, profile });
    await captureLead(payload);
    setSubmitting(false);
    navigate("/renal/obrigado");
  };

  return (
    <section id="inscricao" className="w-full bg-gradient-to-b from-emerald-50/60 to-white py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* Left: social proof + urgency */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Reserve sua vaga agora
            </h2>
            <p className="mt-4 text-gray-600">
              A aula é gratuita, online e o acesso é enviado pelo WhatsApp.
              Inscreva-se em 30 segundos.
            </p>

            {/* Trust signals */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex size-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                  <ShieldCheck className="size-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Sem spam. Sem pegadinhas.</div>
                  <div className="text-xs text-gray-500">Você pode sair da lista quando quiser.</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex size-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                  <Clock className="size-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Conteúdo direto ao ponto</div>
                  <div className="text-xs text-gray-500">60 minutos que podem mudar sua rotina.</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex size-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                  <Users className="size-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Para pacientes, cuidadores e profissionais</div>
                  <div className="text-xs text-gray-500">Conteúdo educativo. Não substitui seu médico.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <Card className="border-emerald-200 shadow-lg">
            <CardContent className="pt-6">
              <div className="text-center mb-6">
                <div className="text-lg font-bold text-gray-900">Inscrição gratuita</div>
                <div className="text-xs text-gray-500 mt-1">Preencha abaixo e receba o acesso pelo WhatsApp</div>
              </div>

              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="renal-name">Seu nome</Label>
                  <Input
                    id="renal-name"
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    placeholder="Como quer ser chamado(a)?"
                    autoComplete="name"
                    className="h-11"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="renal-whatsapp">Seu WhatsApp</Label>
                  <Input
                    id="renal-whatsapp"
                    value={formatWhatsappForInput(whatsappRaw)}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWhatsappRaw(e.target.value)}
                    inputMode="tel"
                    placeholder="(11) 99999-9999"
                    autoComplete="tel"
                    className="h-11"
                  />
                </div>

                <div className="grid gap-2">
                  <Label>Você é... (opcional)</Label>
                  <Select value={profile} onValueChange={(v: string) => setProfile(v as RenalProfile)}>
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="paciente">Paciente renal</SelectItem>
                      <SelectItem value="cuidador">Cuidador(a) / familiar</SelectItem>
                      <SelectItem value="profissional">Profissional de saúde</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {error ? <div className="text-sm text-red-600">{error}</div> : null}

                <Button
                  className="h-12 bg-emerald-600 hover:bg-emerald-500 text-base font-bold shadow-md shadow-emerald-600/20 transition-all hover:shadow-lg"
                  disabled={!isValid || submitting}
                  onClick={submit}
                >
                  {submitting ? "Enviando..." : "Reservar minha vaga gratuita"}
                  <ArrowRight className="size-4" />
                </Button>

                <p className="text-center text-xs text-gray-400">
                  Ao continuar, você concorda em receber as instruções da aula pelo WhatsApp.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
