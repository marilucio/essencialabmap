export type RenalProfile = "paciente" | "cuidador" | "profissional" | "outro";

export type RenalUtm = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  referrer?: string;
  click_id?: string;
};

export type RenalLeadPayload = {
  page: string;
  event: string;
  ts: string;
  name?: string;
  whatsapp?: string;
  profile?: RenalProfile;
  utm?: RenalUtm;
  client_id?: string;
};

const STORAGE_KEY_UTM = "renal_utms_v1";
const STORAGE_KEY_FORM = "renal_form_v1";

function writeBrowserStorage(key: string, value: string) {
  try {
    sessionStorage.setItem(key, value);
  } catch {
    // Ignore unavailable storage.
  }

  try {
    localStorage.setItem(key, value);
  } catch {
    // Ignore unavailable storage.
  }
}

function readBrowserStorage(key: string): string | null {
  try {
    const sessionValue = sessionStorage.getItem(key);
    if (sessionValue) return sessionValue;
  } catch {
    // Ignore unavailable storage.
  }

  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function getRenalConfig() {
  const leadEndpoint = (import.meta.env.VITE_RENAL_LEAD_ENDPOINT as string | undefined) || "";
  const whatsappPhone = (import.meta.env.VITE_RENAL_WHATSAPP_PHONE as string | undefined) || "5543991948185";
  const webinarSlug = (import.meta.env.VITE_RENAL_WEBINAR_SLUG as string | undefined) || "renal";
  const appIosUrl =
    (import.meta.env.VITE_ESSENCIALAB_IOS_URL as string | undefined) ||
    "https://apps.apple.com/app/id6756675158";
  const appAndroidUrl =
    (import.meta.env.VITE_ESSENCIALAB_ANDROID_URL as string | undefined) ||
    "https://play.google.com/store/apps/details?id=com.essencialab.app";

  return {
    leadEndpoint,
    whatsappPhone,
    webinarSlug,
    appIosUrl,
    appAndroidUrl,
  };
}

export function parseUtmFromLocation(): RenalUtm {
  const url = new URL(window.location.href);
  const sp = url.searchParams;
  const click = sp.get("gclid") || sp.get("fbclid") || sp.get("ttclid") || "";

  const utm: RenalUtm = {
    utm_source: sp.get("utm_source") || undefined,
    utm_medium: sp.get("utm_medium") || undefined,
    utm_campaign: sp.get("utm_campaign") || undefined,
    utm_content: sp.get("utm_content") || undefined,
    utm_term: sp.get("utm_term") || undefined,
    referrer: document.referrer || undefined,
    click_id: click || undefined,
  };

  return utm;
}

export function persistUtm(utm: RenalUtm) {
  try {
    writeBrowserStorage(STORAGE_KEY_UTM, JSON.stringify(utm));
  } catch {
    return;
  }
}

export function readPersistedUtm(): RenalUtm {
  try {
    const raw = readBrowserStorage(STORAGE_KEY_UTM);
    if (!raw) return {};
    return JSON.parse(raw) as RenalUtm;
  } catch {
    return {};
  }
}

export function persistFormDraft(input: {
  name: string;
  whatsapp: string;
  profile: RenalProfile;
}) {
  try {
    writeBrowserStorage(STORAGE_KEY_FORM, JSON.stringify(input));
  } catch {
    return;
  }
}

export function readFormDraft(): { name: string; whatsapp: string; profile: RenalProfile } | null {
  try {
    const raw = readBrowserStorage(STORAGE_KEY_FORM);
    if (!raw) return null;
    return JSON.parse(raw) as { name: string; whatsapp: string; profile: RenalProfile };
  } catch {
    return null;
  }
}

export function normalizePhone(input: string) {
  const digits = (input || "").replace(/\D+/g, "");
  if (!digits) return "";
  if (digits.startsWith("55")) return `+${digits}`;
  if (digits.length >= 10 && digits.length <= 13) return `+55${digits}`;
  return `+${digits}`;
}

export function formatWhatsappForInput(input: string) {
  const digits = (input || "").replace(/\D+/g, "");
  if (!digits) return "";
  const d = digits.replace(/^55/, "");
  if (d.length <= 2) return `(${d}`;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 11) return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7, 11)}`;
}

export function buildWhatsAppUrl(params: {
  phone: string;
  message: string;
}) {
  const phoneDigits = (params.phone || "").replace(/\D+/g, "");
  const msg = encodeURIComponent(params.message || "");
  return `https://wa.me/${phoneDigits}?text=${msg}`;
}

export function buildPrefilledWhatsAppMessage(input: {
  name?: string;
  profile?: RenalProfile;
}) {
  const parts: string[] = [];
  parts.push("Olá! Quero confirmar a inscrição na aula online gratuita sobre rotina renal e receber os lembretes no WhatsApp.");
  if (input.name) parts.push(`Meu nome é ${input.name}.`);
  if (input.profile && input.profile !== "outro") {
    const label =
      input.profile === "paciente"
        ? "Sou paciente renal."
        : input.profile === "cuidador"
          ? "Sou cuidador(a) / familiar."
          : "Sou profissional de saúde.";
    parts.push(label);
  }
  parts.push("Pode me enviar o acesso e as orientações, por favor?");
  return parts.join(" ");
}

export function track(eventName: string, params?: Record<string, unknown>) {
  const w = window as any;
  try {
    if (Array.isArray(w.dataLayer)) {
      w.dataLayer.push({ event: eventName, ...(params || {}) });
    }
  } catch {
    return;
  }

  try {
    if (typeof w.gtag === "function") {
      w.gtag("event", eventName, params || {});
    }
  } catch {
    return;
  }

  try {
    if (typeof w.fbq === "function") {
      w.fbq("trackCustom", eventName, params || {});
    }
  } catch {
    return;
  }
}

export async function captureLead(payload: RenalLeadPayload): Promise<{ ok: boolean; lead_id?: string }> {
  const { leadEndpoint } = getRenalConfig();
  if (!leadEndpoint) return { ok: true };

  try {
    const res = await fetch(leadEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      keepalive: true,
    });
    if (!res.ok) return { ok: false };
    const json = (await res.json().catch(() => null)) as any;
    return { ok: true, lead_id: json?.lead_id };
  } catch {
    return { ok: false };
  }
}

export function setSeoTags(input: {
  title: string;
  description: string;
  canonicalPath: string;
  ogImage?: string;
  robots?: string;
  ogType?: string;
}) {
  document.title = input.title;

  const ensureMeta = (selector: string, create: () => HTMLMetaElement) => {
    const existing = document.querySelector(selector) as HTMLMetaElement | null;
    if (existing) return existing;
    const meta = create();
    document.head.appendChild(meta);
    return meta;
  };

  const ensureLink = (selector: string, create: () => HTMLLinkElement) => {
    const existing = document.querySelector(selector) as HTMLLinkElement | null;
    if (existing) return existing;
    const link = create();
    document.head.appendChild(link);
    return link;
  };

  ensureMeta('meta[name="description"]', () => {
    const meta = document.createElement("meta");
    meta.name = "description";
    return meta;
  }).setAttribute("content", input.description);

  ensureMeta('meta[property="og:title"]', () => {
    const meta = document.createElement("meta");
    meta.setAttribute("property", "og:title");
    return meta;
  }).setAttribute("content", input.title);

  ensureMeta('meta[property="og:description"]', () => {
    const meta = document.createElement("meta");
    meta.setAttribute("property", "og:description");
    return meta;
  }).setAttribute("content", input.description);

  ensureMeta('meta[property="og:type"]', () => {
    const meta = document.createElement("meta");
    meta.setAttribute("property", "og:type");
    return meta;
  }).setAttribute("content", input.ogType || "website");

  ensureMeta('meta[property="og:url"]', () => {
    const meta = document.createElement("meta");
    meta.setAttribute("property", "og:url");
    return meta;
  }).setAttribute("content", window.location.origin + input.canonicalPath);

  if (input.ogImage) {
    ensureMeta('meta[property="og:image"]', () => {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:image");
      return meta;
    }).setAttribute("content", input.ogImage);
  }

  ensureMeta('meta[name="robots"]', () => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    return meta;
  }).setAttribute("content", input.robots || "index,follow");

  ensureLink('link[rel="canonical"]', () => {
    const link = document.createElement("link");
    link.rel = "canonical";
    return link;
  }).setAttribute("href", window.location.origin + input.canonicalPath);
}

export function setFaqSchema(schemaId: string, faq: Array<{ question: string; answer: string }>) {
  const existing = document.getElementById(schemaId);
  if (existing) existing.remove();
  const script = document.createElement("script");
  script.id = schemaId;
  script.type = "application/ld+json";
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  });
  document.head.appendChild(script);
}
