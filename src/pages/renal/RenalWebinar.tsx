import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { readFormDraft, normalizePhone, track } from "./lib";
import { addLeadEvent, getLeadByWhatsapp, updateLeadStatus } from "./db";
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

function extractYouTubeId(input: string): string {
  if (!input) return "";
  try {
    if (/^[a-zA-Z0-9_-]{10,}$/.test(input) && !input.includes("http")) return input;
    const url = new URL(input);
    if (url.hostname.includes("youtu.be")) {
      return url.pathname.replace("/", "");
    }
    if (url.hostname.includes("youtube.com")) {
      const v = url.searchParams.get("v");
      if (v) return v;
      const parts = url.pathname.split("/");
      const idx = parts.findIndex((p) => p === "embed");
      if (idx >= 0 && parts[idx + 1]) return parts[idx + 1];
    }
  } catch {
  }
  return input;
}

const QUERY_VIDEO_PARAM = (() => {
  try {
    return new URLSearchParams(window.location.search).get("v") || "";
  } catch {
    return "";
  }
})();
const ENV_VIDEO_ID = (import.meta as any)?.env?.VITE_WEBINAR_YT_ID || "";
const YOUTUBE_VIDEO_ID = extractYouTubeId(QUERY_VIDEO_PARAM || ENV_VIDEO_ID || "0xGlgGrG8ok");
const CTA_DELAY_SECONDS = 300; // 5 minutes
const PROGRESS_INTERVAL_MS = 30_000; // Log progress every 30s
const PROGRESS_SAVE_INTERVAL = 60; // Save to DB every 60s of play

const APP_STORE_URL = "https://apps.apple.com/app/id6756675158";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.essencialab.app";

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function RenalWebinar() {
  const playerRef = useRef<YTPlayer | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const lastSavedMinute = useRef(0);
  const leadIdRef = useRef<string | null>(null);

  const [authChecked, setAuthChecked] = useState(false);
  const [authorized, setAuthorized] = useState(false);
  const [playSeconds, setPlaySeconds] = useState(0);
  const [showCta, setShowCta] = useState(false);
  const [ctaAnimating, setCtaAnimating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const draft = useMemo(() => readFormDraft(), []);

  // Identify lead
  useEffect(() => {
    const identify = async () => {
      if (draft?.whatsapp) {
        const phone = normalizePhone(draft.whatsapp);
        const lead = await getLeadByWhatsapp(phone);
        if (lead) {
          leadIdRef.current = lead.id;
          setAuthorized(true);
          setAuthChecked(true);
          return;
        }
      }
      const params = new URLSearchParams(window.location.search);
      const w = params.get("w");
      if (w) {
        const phone = normalizePhone(w);
        const lead = await getLeadByWhatsapp(phone);
        if (lead) {
          leadIdRef.current = lead.id;
          setAuthorized(true);
          setAuthChecked(true);
          return;
        }
      }
      setAuthChecked(true);
      try {
        window.location.replace("/renal");
      } catch {
        window.location.href = "/renal";
      }
    };
    identify();
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

  // Load YouTube IFrame API
  useEffect(() => {
    if (!YOUTUBE_VIDEO_ID) return;

    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      if (!window.YT) return;
      playerRef.current = new window.YT.Player("yt-player", {
        videoId: YOUTUBE_VIDEO_ID,
        playerVars: {
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
        },
        events: {
          onStateChange: (e: unknown) => {
            const event = e as { data: number };
            const YT = window.YT;
            if (!YT?.PlayerState) return;

            if (event.data === YT.PlayerState.PLAYING) {
              setIsPlaying(true);
              // Log start only once
              if (leadIdRef.current) {
                addLeadEvent(leadIdRef.current, {
                  type: "webinar_started",
                  ts: new Date().toISOString(),
                });
              }
              track("webinar_play", { page: "/webinar" });
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
  }, []);

  // Play time counter
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setPlaySeconds((prev) => {
          const next = prev + 1;
          // Show CTA at 5 min
          if (next >= CTA_DELAY_SECONDS) {
            setShowCta(true);
          }
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
  }, [isPlaying, saveProgress]);

  // Animate CTA entrance
  useEffect(() => {
    if (showCta) {
      setTimeout(() => setCtaAnimating(true), 50);
      // Update lead status
      if (leadIdRef.current) {
        updateLeadStatus(leadIdRef.current, "assistiu_webinar");
      }
    }
  }, [showCta]);

  const handleCtaClick = async (platform: "ios" | "android") => {
    track("webinar_cta_click", { platform, minutes: Math.floor(playSeconds / 60) });
    if (leadIdRef.current) {
      await addLeadEvent(leadIdRef.current, {
        type: "webinar_cta_click",
        ts: new Date().toISOString(),
        meta: { platform, minutes_watched: Math.floor(playSeconds / 60) },
      });
      await updateLeadStatus(leadIdRef.current, "baixou_app");
    }
    const url = platform === "ios" ? APP_STORE_URL : PLAY_STORE_URL;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const minutes = Math.floor(playSeconds / 60);
  const seconds = playSeconds % 60;

  if (!authorized) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <span className="text-sm text-slate-400">Redirecionando...</span>
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

      <main className="container mx-auto max-w-5xl px-4 py-8 md:py-12">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-xl md:text-2xl font-bold text-white">
            {draft?.name ? `${draft.name}, sua aula est\u00e1 pronta.` : "Sua aula est\u00e1 pronta."}
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Assista com aten\u00e7\u00e3o. Essa aula pode mudar sua rela\u00e7\u00e3o com a rotina renal.
          </p>
        </div>

        {/* Video container */}
        <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl">
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            {YOUTUBE_VIDEO_ID ? (
              <div
                id="yt-player"
                className="absolute inset-0"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="flex size-16 items-center justify-center rounded-full bg-emerald-500/20">
                  <svg className="size-8 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-sm text-slate-400">O v\u00eddeo ser\u00e1 disponibilizado em breve.</p>
                <p className="text-xs text-slate-600">Fique de olho no WhatsApp para receber o aviso.</p>
              </div>
            )}
          </div>
        </div>

        {/* Watch time indicator */}
        {isPlaying && (
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="size-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs text-slate-500 font-mono">
              {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")} assistidos
            </span>
          </div>
        )}

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
              Pronto(a) para experimentar na pr\u00e1tica?
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-md mx-auto">
              Baixe o app e ative seus 7 dias de teste gr\u00e1tis. Comece a ter clareza nas suas escolhas hoje.
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
              7 dias gr\u00e1tis. Sem compromisso. Cancele quando quiser.
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-center text-xs text-slate-700">
          Conte\u00fado educativo. N\u00e3o substitui acompanhamento m\u00e9dico ou nutricional.
        </p>
      </main>
    </div>
  );
}
