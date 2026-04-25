import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight, ShieldCheck, Users, Clock } from "lucide-react";
import {
  captureLead,
  formatWhatsappForInput,
  isValidBrazilianMobilePhone,
  normalizePhone,
  persistFormDraft,
  track,
  type RenalProfile,
  type RenalUtm,
} from "../lib";
import { checkDuplicateLeadByWhatsapp, createLead } from "../db";
import { useNavigate } from "react-router-dom";

export function RenalFinalForm(props: { utm: RenalUtm }) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [whatsappRaw, setWhatsappRaw] = useState("");
  const [profile, setProfile] = useState<RenalProfile>("paciente");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showDuplicateModal, setShowDuplicateModal] = useState(false);
  const [duplicateLead, setDuplicateLead] = useState<{ name: string; whatsapp: string } | null>(null);

  const normalized = useMemo(() => normalizePhone(whatsappRaw), [whatsappRaw]);
  const webinarAccessUrl = useMemo(
    () => (duplicateLead ? `/webinar?w=${encodeURIComponent(duplicateLead.whatsapp)}` : "/webinar"),
    [duplicateLead],
  );

  const isValid = useMemo(() => {
    const n = name.trim();
    return n.length >= 2 && isValidBrazilianMobilePhone(whatsappRaw);
  }, [name, whatsappRaw]);

  const submit = async () => {
    setError(null);
    if (name.trim().length < 2) {
      setError("Preencha seu nome completo para continuar.");
      return;
    }

    if (!isValidBrazilianMobilePhone(whatsappRaw)) {
      setError("Informe um WhatsApp brasileiro válido com DDD + 9 dígitos. Ex.: (11) 99999-9999.");
      return;
    }

    setSubmitting(true);

    const trimmedName = name.trim();

    try {
      const duplicateCheck = await checkDuplicateLeadByWhatsapp(normalized);

      if (duplicateCheck.status === "invalid_phone" || duplicateCheck.status === "lookup_error") {
        setError(duplicateCheck.message);
        return;
      }

      if (duplicateCheck.lead) {
        setDuplicateLead({
          name: duplicateCheck.lead.name,
          whatsapp: duplicateCheck.lead.whatsapp,
        });
        setShowDuplicateModal(true);
        track("duplicate_signup_detected", { page: "/renal", lead_id: duplicateCheck.lead.id });
        return;
      }

      // Store lead in Supabase
      const createdLead = await createLead({
        name: trimmedName,
        whatsapp: normalized,
        profile,
        utm: props.utm,
        source: "site",
      });
      if (!createdLead) {
        throw new Error("lead_create_failed");
      }

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

      try {
        const w = window as any;
        if (typeof w.__renalCompleteRegistration === "function") {
          w.__renalCompleteRegistration();
        } else if (typeof w.fbq === "function") {
          w.fbq("track", "CompleteRegistration");
        }
      } catch {
        // Ignore pixel failures to avoid blocking conversion flow.
      }

      navigate("/renal/obrigado");
    } catch {
      setError("Não foi possível concluir sua inscrição agora. Tente novamente em instantes.");
    } finally {
      setSubmitting(false);
    }
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
                  <div className="text-xs text-gray-500">38 minutos que podem mudar sua rotina.</div>
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

      <Dialog open={showDuplicateModal} onOpenChange={setShowDuplicateModal}>
        <DialogContent className="border-emerald-200 sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl text-emerald-700">Inscrição já confirmada</DialogTitle>
            <DialogDescription className="text-sm text-gray-600">
              {duplicateLead?.name
                ? `${duplicateLead.name}, identificamos que seu WhatsApp já está inscrito no webinário renal.`
                : "Identificamos que esse WhatsApp já está inscrito no webinário renal."}
              {" "}Você já pode entrar direto na sala da aula.
            </DialogDescription>
          </DialogHeader>

          <Button
            className="h-11 w-full bg-emerald-600 hover:bg-emerald-500 font-bold"
            onClick={() => {
              track("duplicate_signup_open_webinar_click", { page: "/renal" });
              window.open(webinarAccessUrl, "_blank", "noopener,noreferrer");
            }}
          >
            Acessar sala da aula agora
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
}
