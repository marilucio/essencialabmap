import { useEffect, useMemo, useRef, useState, useCallback, type FormEvent } from "react";
import {
  buildPrefilledWhatsAppMessage,
  buildWebinarFeedbackMessage,
  buildWhatsAppUrl,
  getRenalConfig,
  readFormDraft,
  normalizePhone,
  persistFormDraft,
  track,
} from "./lib";
import { addLeadEvent, getLeadById, getLeadByWhatsapp, updateLeadStatus, type Lead, type LeadStatus } from "./db";
import { setSeoTags } from "./lib";

/* ------------------------------------------------------------------ */
/*  YouTube IFrame API types                                           */
/* ------------------------------------------------------------------ */

declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
    YT?: {
      Player: new (
        el: string | HTMLElement,
        opts: {
          videoId: string;
          width?: string | number;
          height?: string | number;
          playerVars?: Record<string, unknown>;
          events?: Record<string, (e: unknown) => void>;
        },
      ) => YTPlayer;
      PlayerState?: {
        PLAYING: number;
        PAUSED: number;
        ENDED: number;
      };
    };
  }
}

interface YTPlayer {
  getCurrentTime(): number;
  getDuration(): number;
  getPlayerState(): number;
  destroy(): void;
}

/* ------------------------------------------------------------------ */
/*  Config                                                             */
/* ------------------------------------------------------------------ */

function getConfiguredYouTubeId(input: string, fallback: string): string {
  const videoId = input.trim();
  return /^[a-zA-Z0-9_-]{11}$/.test(videoId) ? videoId : fallback;
}

const ENV_VIDEO_ID = (import.meta as any)?.env?.VITE_WEBINAR_YT_ID || "";
const YOUTUBE_VIDEO_ID = getConfiguredYouTubeId(ENV_VIDEO_ID, "0xGlgGrG8ok");
const CTA_DELAY_SECONDS = 300; // 5 minutes
const PROGRESS_INTERVAL_MS = 30_000; // Log progress every 30s
const PROGRESS_SAVE_INTERVAL = 60; // Save to DB every 60s of play
const QUALIFIED_WATCH_MIN_SECONDS = 20 * 60; // 20 minutes
const QUALIFIED_WATCH_RATIO = 0.6; // Or 60% of the video, whichever comes first
const PAUSE_FEEDBACK_MS = 60_000; // Prompt for feedback after 60s of pause
const PAUSE_FEEDBACK_MIN_WATCHED_SECONDS = 30; // Only prompt if user actually watched something first

const APP_STORE_URL = "https://apps.apple.com/app/id6756675158";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.essencialab.app";
// Statuses after "confirmou_whatsapp" keep access because they represent later funnel steps.
const WEBINAR_ACCESS_STATUSES = new Set<LeadStatus>([
  "confirmou_whatsapp",
  "assistiu_webinar",
  "baixou_app",
  "trial_ativo",
]);

function hasWebinarAccess(lead: Lead) {
  return WEBINAR_ACCESS_STATUSES.has(lead.status);
}

function formatWhatsAppPhone(phone: string) {
  const digits = phone.replace(/\D+/g, "").replace(/^55/, "");
  if (digits.length !== 11) return phone;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function RenalWebinar() {
  const playerRef = useRef<YTPlayer | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const lastSavedMinute = useRef(0);
  const leadIdRef = useRef<string | null>(null);
  const leadStatusRef = useRef<LeadStatus | null>(null);
  const hasLoggedStartRef = useRef(false);
  const hasMarkedQualifiedWatchRef = useRef(false);
  const hasEverPlayedRef = useRef(false);
  const playSecondsRef = useRef(0);
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const feedbackSectionRef = useRef<HTMLElement | null>(null);

  const [authChecked, setAuthChecked] = useState(false);
  const [authorized, setAuthorized] = useState(false);
  const [playSeconds, setPlaySeconds] = useState(0);
  const [showCta, setShowCta] = useState(false);
  const [ctaAnimating, setCtaAnimating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [feedbackReason, setFeedbackReason] = useState<string>("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [feedbackSending, setFeedbackSending] = useState(false);
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [feedbackPrompted, setFeedbackPrompted] = useState(false);

  const cfg = useMemo(() => getRenalConfig(), []);
  const draft = useMemo(() => readFormDraft(), []);
  const [leadName, setLeadName] = useState(() => draft?.name || "");
  const confirmationMessage = useMemo(
    () => buildPrefilledWhatsAppMessage({ name: draft?.name, profile: draft?.profile }),
    [draft],
  );
  const whatsappUrl = useMemo(
    () => buildWhatsAppUrl({ phone: cfg.whatsappPhone, message: confirmationMessage }),
    [cfg.whatsappPhone, confirmationMessage],
  );

  // Identify lead
  useEffect(() => {
    const denyAccess = () => {
      leadIdRef.current = null;
      leadStatusRef.current = null;
      hasLoggedStartRef.current = false;
      hasMarkedQualifiedWatchRef.current = false;
      setAuthorized(false);
      setAuthChecked(true);
      track("webinar_access_denied", { page: "/webinar" });
    };

    const resolveLeadAccess = (lead: Lead | null, source: string) => {
      if (!lead) return false;

      if (!hasWebinarAccess(lead)) {
        denyAccess();
        return true;
      }

      leadIdRef.current = lead.id;
      leadStatusRef.current = lead.status;
      hasLoggedStartRef.current = false;
      hasMarkedQualifiedWatchRef.current = lead.status !== "confirmou_whatsapp";
      setLeadName(lead.name || draft?.name || "");
      persistFormDraft({ name: lead.name, whatsapp: lead.whatsapp, profile: lead.profile });
      setAuthorized(true);
      setAuthChecked(true);
      track("webinar_access_granted", { page: "/webinar", source });
      return true;
    };

    const identify = async () => {
      const params = new URLSearchParams(window.location.search);
      const leadId = params.get("lead") || params.get("lead_id") || params.get("id");
      const phoneParam = params.get("w") || params.get("whatsapp") || params.get("phone");

      if (leadId && resolveLeadAccess(await getLeadById(leadId), "query_lead_id")) return;
      if (phoneParam && resolveLeadAccess(await getLeadByWhatsapp(normalizePhone(phoneParam)), "query_phone")) return;
      if (draft?.whatsapp && resolveLeadAccess(await getLeadByWhatsapp(normalizePhone(draft.whatsapp)), "local_draft")) return;

      denyAccess();
    };
    identify().catch(() => {
      denyAccess();
    });
  }, [draft]);

  // SEO
  useEffect(() => {
    setSeoTags({
      title: "Aula ao vivo — Rotina Renal",
      description: "Assista a aula gratuita sobre como ter mais clareza na rotina renal.",
      canonicalPath: "/webinar",
      robots: "noindex,nofollow",
      ogType: "website",
    });
  }, []);

  // Save progress event to Supabase
  const saveProgress = useCallback(async (minutes: number) => {
    if (!leadIdRef.current || minutes <= lastSavedMinute.current) return;
    lastSavedMinute.current = minutes;
    await addLeadEvent(leadIdRef.current, {
      type: "webinar_progress",
      ts: new Date().toISOString(),
      meta: { minutes },
    });
  }, []);

  const getQualifiedWatchThreshold = useCallback(() => {
    try {
      const duration = playerRef.current?.getDuration() || 0;
      if (duration > 0) {
        return Math.min(QUALIFIED_WATCH_MIN_SECONDS, Math.ceil(duration * QUALIFIED_WATCH_RATIO));
      }
    } catch {
      // If YouTube duration is unavailable, fall back to the absolute threshold.
    }
    return QUALIFIED_WATCH_MIN_SECONDS;
  }, []);

  const markQualifiedWatch = useCallback((secondsWatched: number) => {
    if (!leadIdRef.current || hasMarkedQualifiedWatchRef.current) return;
    if (leadStatusRef.current !== "confirmou_whatsapp") return;
    if (secondsWatched < getQualifiedWatchThreshold()) return;

    const leadId = leadIdRef.current;
    hasMarkedQualifiedWatchRef.current = true;
    leadStatusRef.current = "assistiu_webinar";
    track("webinar_qualified_watch", { page: "/webinar", seconds_watched: secondsWatched });
    void updateLeadStatus(leadId, "assistiu_webinar");
  }, [getQualifiedWatchThreshold]);

  // Load YouTube IFrame API
  useEffect(() => {
    if (!authorized || !YOUTUBE_VIDEO_ID) return;

    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      if (!window.YT) return;
      playerRef.current = new window.YT.Player("yt-player", {
        videoId: YOUTUBE_VIDEO_ID,
        width: "100%",
        height: "100%",
        playerVars: {
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          iv_load_policy: 3,
        },
        events: {
          onStateChange: (e: unknown) => {
            const event = e as { data: number };
            const YT = window.YT;
            if (!YT?.PlayerState) return;

            if (event.data === YT.PlayerState.PLAYING) {
              setIsPlaying(true);
              hasEverPlayedRef.current = true;
              if (leadIdRef.current && !hasLoggedStartRef.current) {
                hasLoggedStartRef.current = true;
                void addLeadEvent(leadIdRef.current, {
                  type: "webinar_started",
                  ts: new Date().toISOString(),
                });
                track("webinar_play", { page: "/webinar" });
              }
            } else {
              setIsPlaying(false);
            }
          },
        },
      });
    };

    return () => {
      if (playerRef.current) {
        try { playerRef.current.destroy(); } catch { /* ignore */ }
      }
    };
  }, [authorized]);

  // Play time counter
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setPlaySeconds((prev) => {
          const next = prev + 1;
          playSecondsRef.current = next;
          // Show CTA at 5 min
          if (next >= CTA_DELAY_SECONDS) {
            setShowCta(true);
          }
          markQualifiedWatch(next);
          // Save progress to DB every PROGRESS_SAVE_INTERVAL seconds
          const minutes = Math.floor(next / 60);
          if (next % PROGRESS_SAVE_INTERVAL === 0 && minutes > 0) {
            saveProgress(minutes);
          }
          return next;
        });
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, saveProgress, markQualifiedWatch]);

  // Animate CTA entrance
  useEffect(() => {
    if (showCta) {
      setTimeout(() => setCtaAnimating(true), 50);
    }
  }, [showCta]);

  // Auto-prompt for feedback after a prolonged pause
  useEffect(() => {
    if (!authorized || feedbackSent || feedbackPrompted) return;

    if (isPlaying) {
      if (pauseTimerRef.current) {
        clearTimeout(pauseTimerRef.current);
        pauseTimerRef.current = null;
      }
      return;
    }

    if (!hasEverPlayedRef.current) return;
    if (playSecondsRef.current < PAUSE_FEEDBACK_MIN_WATCHED_SECONDS) return;

    pauseTimerRef.current = setTimeout(() => {
      pauseTimerRef.current = null;
      setFeedbackPrompted(true);
      const minutesWatched = Math.floor(playSecondsRef.current / 60);
      track("webinar_feedback_prompt", {
        page: "/webinar",
        trigger: "paused_60s",
        minutes_watched: minutesWatched,
      });
      if (leadIdRef.current) {
        void addLeadEvent(leadIdRef.current, {
          type: "webinar_feedback_prompt",
          ts: new Date().toISOString(),
          meta: { trigger: "paused_60s", minutes_watched: minutesWatched },
        });
      }
      feedbackSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, PAUSE_FEEDBACK_MS);

    return () => {
      if (pauseTimerRef.current) {
        clearTimeout(pauseTimerRef.current);
        pauseTimerRef.current = null;
      }
    };
  }, [authorized, isPlaying, feedbackSent, feedbackPrompted]);

  const handleSubmitFeedback = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (feedbackSending || feedbackSent) return;
    const trimmedMessage = feedbackMessage.trim();
    if (!feedbackReason && !trimmedMessage) return;

    setFeedbackSending(true);
    const minutesWatched = Math.floor(playSeconds / 60);
    const whatsappDigits = draft?.whatsapp || "";

    try {
      if (leadIdRef.current) {
        await addLeadEvent(leadIdRef.current, {
          type: "webinar_feedback",
          ts: new Date().toISOString(),
          meta: {
            reason: feedbackReason || null,
            message: trimmedMessage || null,
            minutes_watched: minutesWatched,
          },
        });
      }
      track("webinar_feedback_submit", {
        page: "/webinar",
        reason: feedbackReason || "none",
        minutes_watched: minutesWatched,
        has_message: Boolean(trimmedMessage),
      });

      const adminMessage = buildWebinarFeedbackMessage({
        name: leadName,
        whatsapp: whatsappDigits,
        reason: feedbackReason || undefined,
        message: trimmedMessage || undefined,
        minutesWatched,
      });
      const url = buildWhatsAppUrl({
        phone: cfg.adminWhatsappPhone,
        message: adminMessage,
      });
      window.open(url, "_blank", "noopener,noreferrer");
      setFeedbackSent(true);
    } finally {
      setFeedbackSending(false);
    }
  };

  const handleCtaClick = async (platform: "ios" | "android") => {
    track("webinar_cta_click", { platform, minutes: Math.floor(playSeconds / 60) });
    if (leadIdRef.current) {
      await addLeadEvent(leadIdRef.current, {
        type: "webinar_cta_click",
        ts: new Date().toISOString(),
        meta: { platform, minutes_watched: Math.floor(playSeconds / 60) },
      });
      await updateLeadStatus(leadIdRef.current, "baixou_app");
      leadStatusRef.current = "baixou_app";
      hasMarkedQualifiedWatchRef.current = true;
    }
    const url = platform === "ios" ? APP_STORE_URL : PLAY_STORE_URL;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const minutes = Math.floor(playSeconds / 60);
  const seconds = playSeconds % 60;
  const webinarTitle = leadName
    ? `${leadName}, sua aula gratuita está pronta.`
    : "Sua aula gratuita está pronta.";
  const blockedTitle = "Confirme sua inscrição para acessar a aula";
  const blockedMessage = "Para assistir, você precisa concluir a inscrição e confirmar seu WhatsApp. Isso garante que seu contato fique registrado para receber o acesso, lembretes e acompanhamento.";

  if (!authChecked) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <span className="text-sm text-slate-400">Carregando sua aula...</span>
      </div>
    );
  }

  if (!authorized) {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        <header className="w-full border-b border-white/10 bg-slate-950/95 backdrop-blur">
          <div className="container mx-auto flex h-12 max-w-5xl items-center px-4">
            <span className="text-base font-bold text-emerald-400">Aula Gratuita</span>
          </div>
        </header>

        <main className="container mx-auto flex min-h-[calc(100vh-3rem)] max-w-3xl items-center px-4 py-12">
          <section className="w-full rounded-lg border border-white/10 bg-slate-900/80 p-6 text-center shadow-2xl ring-1 ring-white/5 md:p-8">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
              <svg className="size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.25v3.5m0-9.5a4 4 0 00-4 4v2h8v-2a4 4 0 00-4-4z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 11.25h10.5v8H6.75z" />
              </svg>
            </div>
            <h1 className="mt-5 text-2xl font-bold leading-tight md:text-3xl">{blockedTitle}</h1>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-300 md:text-base">{blockedMessage}</p>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="/renal#inscricao"
                onClick={() => track("webinar_blocked_signup_click", { page: "/webinar" })}
                className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-emerald-500 px-5 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/15 transition hover:bg-emerald-400 sm:w-auto"
              >
                Fazer inscrição gratuita
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("webinar_blocked_whatsapp_click", { page: "/webinar" })}
                className="inline-flex h-12 w-full items-center justify-center rounded-lg border border-white/15 px-5 text-sm font-bold text-white transition hover:bg-white/10 sm:w-auto"
              >
                Confirmar pelo WhatsApp
              </a>
            </div>

            <p className="mt-5 text-xs leading-5 text-slate-500">
              Confirmação válida pelo WhatsApp {formatWhatsAppPhone(cfg.whatsappPhone)}.
            </p>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="w-full border-b border-white/10 bg-slate-950/95 backdrop-blur">
        <div className="container mx-auto flex h-12 max-w-5xl items-center px-4">
          <span className="text-base font-bold text-emerald-400">Aula Gratuita</span>
        </div>
      </header>

      <main className="container mx-auto max-w-5xl px-4 py-8 md:py-10">
        {/* Title */}
        <div className="mx-auto mb-6 max-w-3xl text-center md:mb-8">
          <h1 className="text-2xl font-bold leading-tight text-white md:text-4xl">
            {webinarTitle}
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-300 md:text-base">
            Assista com atenção. Essa aula pode mudar sua relação com a rotina renal.
          </p>
        </div>

        {/* Video container */}
        <section aria-label="Vídeo da aula" className="mx-auto w-full max-w-4xl">
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-black shadow-2xl ring-1 ring-white/5">
            <div className="relative aspect-video w-full bg-black [&_iframe]:h-full [&_iframe]:w-full [&_iframe]:border-0">
              {YOUTUBE_VIDEO_ID ? (
                <div
                  id="yt-player"
                  className="absolute inset-0 h-full w-full"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="flex size-16 items-center justify-center rounded-full bg-emerald-500/20">
                    <svg className="size-8 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-sm text-slate-400">O vídeo será disponibilizado em breve.</p>
                  <p className="text-xs text-slate-600">Fique de olho no WhatsApp para receber o aviso.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Watch time indicator */}
        {isPlaying && (
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="size-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs text-slate-500 font-mono">
              {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")} assistidos
            </span>
          </div>
        )}

        {/* Feedback — always visible to recover leads who stopped early */}
        <section
          ref={feedbackSectionRef}
          aria-label="Feedback da aula"
          className="mx-auto mt-10 max-w-3xl scroll-mt-16"
        >
          <div
            className={`rounded-2xl border bg-slate-900/60 p-6 md:p-8 transition-all duration-500 ${
              feedbackPrompted && !feedbackSent
                ? "border-emerald-400/60 ring-2 ring-emerald-400/40 shadow-lg shadow-emerald-500/10"
                : "border-white/10"
            }`}
          >
            {feedbackSent ? (
              <div className="text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-3 text-lg font-bold text-white">Recebemos seu feedback. Obrigado!</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Se o WhatsApp não abriu automaticamente, toque no botão abaixo para concluir o envio.
                </p>
                <a
                  href={buildWhatsAppUrl({
                    phone: cfg.adminWhatsappPhone,
                    message: buildWebinarFeedbackMessage({
                      name: leadName,
                      whatsapp: draft?.whatsapp || "",
                      reason: feedbackReason || undefined,
                      message: feedbackMessage.trim() || undefined,
                      minutesWatched: Math.floor(playSeconds / 60),
                    }),
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex h-10 items-center justify-center rounded-lg border border-white/15 px-4 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Reenviar pelo WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmitFeedback} className="space-y-5">
                <div>
                  <h3 className="text-lg font-bold text-white md:text-xl">
                    {feedbackPrompted
                      ? "Percebemos que você pausou. Está tudo bem?"
                      : "Conta pra gente: o que você achou da aula?"}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">
                    {feedbackPrompted
                      ? "Se algo te incomodou ou ficou faltando, conta pra gente em uma linha. Leva 30 segundos e vai direto para nossa equipe pelo WhatsApp."
                      : "Seu retorno nos ajuda a melhorar. Leva menos de 30 segundos e seu feedback vai direto para nossa equipe pelo WhatsApp."}
                  </p>
                </div>

                <fieldset className="space-y-2">
                  <legend className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Selecione o que mais combina (opcional)
                  </legend>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {[
                      "Gostei muito da aula",
                      "Conteúdo não era o que eu esperava",
                      "Aula ficou longa demais",
                      "Tive dificuldade técnica para assistir",
                    ].map((option) => {
                      const checked = feedbackReason === option;
                      return (
                        <label
                          key={option}
                          className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-sm transition ${
                            checked
                              ? "border-emerald-400/60 bg-emerald-500/10 text-white"
                              : "border-white/10 bg-slate-950/40 text-slate-300 hover:border-white/20"
                          }`}
                        >
                          <input
                            type="radio"
                            name="feedback_reason"
                            value={option}
                            checked={checked}
                            onChange={() => setFeedbackReason(option)}
                            className="size-4 accent-emerald-400"
                          />
                          <span>{option}</span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>

                <div>
                  <label htmlFor="feedback_message" className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Conta mais (opcional)
                  </label>
                  <textarea
                    id="feedback_message"
                    value={feedbackMessage}
                    onChange={(ev) => setFeedbackMessage(ev.target.value)}
                    rows={4}
                    maxLength={600}
                    placeholder="O que faltou, o que gostaria de ver, dúvidas..."
                    className="mt-1 w-full rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2 text-sm text-white placeholder:text-slate-600 focus:border-emerald-400/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={feedbackSending || (!feedbackReason && !feedbackMessage.trim())}
                  className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-emerald-500 px-5 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/15 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                >
                  {feedbackSending ? "Enviando..." : "Enviar feedback pelo WhatsApp"}
                </button>
                <p className="text-xs text-slate-500">
                  Ao enviar, o WhatsApp será aberto com sua mensagem pré-preenchida para a nossa equipe.
                </p>
              </form>
            )}
          </div>
        </section>

        {/* CTA — appears after 5 min */}
        <div
          className={`mt-8 transition-all duration-700 ease-out ${
            showCta && ctaAnimating
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8 pointer-events-none"
          }`}
        >
          <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950 to-slate-900 p-6 md:p-8 text-center">
            <h2 className="text-lg md:text-xl font-bold text-white">
              Pronto(a) para experimentar na prática?
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-md mx-auto">
              Baixe o app e ative seus 7 dias de teste grátis. Comece a ter clareza nas suas escolhas hoje.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Apple Store */}
              <button
                onClick={() => handleCtaClick("ios")}
                className="inline-flex h-14 items-center gap-3 rounded-xl bg-white px-6 text-black shadow-lg transition-transform hover:scale-[1.03] active:scale-[0.98]"
              >
                <svg className="size-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-none opacity-60">Baixar na</div>
                  <div className="text-lg font-semibold leading-tight">App Store</div>
                </div>
              </button>

              {/* Google Play */}
              <button
                onClick={() => handleCtaClick("android")}
                className="inline-flex h-14 items-center gap-3 rounded-xl bg-white px-6 text-black shadow-lg transition-transform hover:scale-[1.03] active:scale-[0.98]"
              >
                <svg className="size-7" viewBox="0 0 24 24" fill="none">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92z" fill="#4285F4" />
                  <path d="M17.556 8.236L5.244.924C4.763.647 4.225.579 3.74.734l10.052 11.268 3.764-3.766z" fill="#EA4335" />
                  <path d="M17.556 15.764l-3.764-3.766L3.74 23.266c.485.155 1.023.087 1.504-.19l12.312-7.312z" fill="#34A853" />
                  <path d="M20.922 10.668l-3.366-2.002-3.764 3.766 3.764 3.766 3.366-2.002c.916-.544.916-1.984 0-2.528z" fill="#FBBC05" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-none opacity-60">Disponível no</div>
                  <div className="text-lg font-semibold leading-tight">Google Play</div>
                </div>
              </button>
            </div>

            <p className="mt-4 text-xs text-slate-600">
              7 dias grátis. Sem compromisso. Cancele quando quiser.
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-center text-xs text-slate-700">
          Conteúdo educativo. Não substitui acompanhamento médico ou nutricional.
        </p>
      </main>
    </div>
  );
}
