/**
 * Lead database — Supabase-backed.
 *
 * Table: renal_leads
 * Events table: renal_lead_events
 *
 * All public functions are async.
 */

import type { RenalProfile, RenalUtm } from "./lib";
import { supabase } from "./supabase";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export type LeadStatus =
  | "inscrito"
  | "confirmou_whatsapp"
  | "assistiu_webinar"
  | "baixou_app"
  | "trial_ativo";

export const LEAD_STATUS_LABELS: Record<LeadStatus, string> = {
  inscrito: "Inscrito",
  confirmou_whatsapp: "Confirmou WhatsApp",
  assistiu_webinar: "Assistiu Webinar",
  baixou_app: "Baixou App",
  trial_ativo: "Trial Ativo",
};

export const LEAD_STATUS_ORDER: LeadStatus[] = [
  "inscrito",
  "confirmou_whatsapp",
  "assistiu_webinar",
  "baixou_app",
  "trial_ativo",
];

export interface LeadEvent {
  id?: string;
  lead_id?: string;
  type: string;
  ts: string;
  meta?: Record<string, unknown>;
}

export interface Lead {
  id: string;
  name: string;
  whatsapp: string;
  profile: RenalProfile;
  status: LeadStatus;
  source: string;
  created_at: string;
  updated_at: string;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_content: string | null;
  utm_term: string | null;
  referrer: string | null;
  click_id: string | null;
  events?: LeadEvent[];
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function flattenUtm(utm: RenalUtm) {
  return {
    utm_source: utm.utm_source || null,
    utm_medium: utm.utm_medium || null,
    utm_campaign: utm.utm_campaign || null,
    utm_content: utm.utm_content || null,
    utm_term: utm.utm_term || null,
    referrer: utm.referrer || null,
    click_id: utm.click_id || null,
  };
}

/** Reconstruct utm object from flat lead row (for backward compat) */
export function leadToUtm(lead: Lead): RenalUtm {
  return {
    utm_source: lead.utm_source || undefined,
    utm_medium: lead.utm_medium || undefined,
    utm_campaign: lead.utm_campaign || undefined,
    utm_content: lead.utm_content || undefined,
    utm_term: lead.utm_term || undefined,
    referrer: lead.referrer || undefined,
    click_id: lead.click_id || undefined,
  };
}

/* ------------------------------------------------------------------ */
/*  Public API                                                         */
/* ------------------------------------------------------------------ */

export async function createLead(input: {
  name: string;
  whatsapp: string;
  profile: RenalProfile;
  utm: RenalUtm;
  source?: string;
}): Promise<Lead | null> {
  const now = new Date().toISOString();

  // Check for existing lead by whatsapp (upsert)
  const { data: existing } = await supabase
    .from("renal_leads")
    .select("id")
    .eq("whatsapp", input.whatsapp)
    .maybeSingle();

  if (existing) {
    // Update existing lead
    const { data, error } = await supabase
      .from("renal_leads")
      .update({
        name: input.name,
        profile: input.profile,
        updated_at: now,
      })
      .eq("id", existing.id)
      .select()
      .single();

    if (!error && data) {
      await addLeadEvent(existing.id, { type: "reinscricao", ts: now });
    }
    return (data as Lead) || null;
  }

  // Insert new lead
  const { data, error } = await supabase
    .from("renal_leads")
    .insert({
      name: input.name,
      whatsapp: input.whatsapp,
      profile: input.profile,
      status: "inscrito" as LeadStatus,
      source: input.source || "site",
      created_at: now,
      updated_at: now,
      ...flattenUtm(input.utm),
    })
    .select()
    .single();

  if (error) {
    console.error("[renal] createLead error:", error);
    return null;
  }

  // Insert initial event
  if (data) {
    await addLeadEvent(data.id, { type: "inscricao", ts: now, meta: { source: input.source || "site" } });
  }

  return data as Lead;
}

export async function getAllLeads(): Promise<Lead[]> {
  const { data: leads, error } = await supabase
    .from("renal_leads")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("[renal] getAllLeads error:", error);
    return [];
  }

  // Fetch events for all leads
  const ids = (leads || []).map((l: Lead) => l.id);
  const { data: events } = await supabase
    .from("renal_lead_events")
    .select("*")
    .in("lead_id", ids.length > 0 ? ids : ["__none__"])
    .order("ts", { ascending: true });

  const eventsByLead: Record<string, LeadEvent[]> = {};
  for (const ev of events || []) {
    if (!eventsByLead[ev.lead_id]) eventsByLead[ev.lead_id] = [];
    eventsByLead[ev.lead_id].push(ev);
  }

  return (leads || []).map((l: Lead) => ({
    ...l,
    events: eventsByLead[l.id] || [],
  }));
}

export async function getLeadById(id: string): Promise<Lead | null> {
  const { data, error } = await supabase
    .from("renal_leads")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) return null;

  const { data: events } = await supabase
    .from("renal_lead_events")
    .select("*")
    .eq("lead_id", id)
    .order("ts", { ascending: true });

  return { ...data, events: events || [] } as Lead;
}

export async function updateLeadStatus(id: string, status: LeadStatus): Promise<Lead | null> {
  const now = new Date().toISOString();

  const { data, error } = await supabase
    .from("renal_leads")
    .update({ status, updated_at: now })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("[renal] updateLeadStatus error:", error);
    return null;
  }

  await addLeadEvent(id, { type: `status_${status}`, ts: now });
  return data as Lead;
}

export async function addLeadEvent(leadId: string, event: LeadEvent): Promise<void> {
  await supabase.from("renal_lead_events").insert({
    lead_id: leadId,
    type: event.type,
    ts: event.ts,
    meta: event.meta || null,
  });
}

export async function deleteLead(id: string): Promise<boolean> {
  // Delete events first
  await supabase.from("renal_lead_events").delete().eq("lead_id", id);
  const { error } = await supabase.from("renal_leads").delete().eq("id", id);
  return !error;
}

export async function exportLeadsCsv(): Promise<string> {
  const leads = await getAllLeads();
  const header = "ID,Nome,WhatsApp,Perfil,Status,Origem,Criado em,Atualizado em,UTM Source,UTM Medium,UTM Campaign";
  const rows = leads.map((l) =>
    [
      l.id,
      `"${l.name}"`,
      l.whatsapp,
      l.profile,
      l.status,
      l.source,
      l.created_at,
      l.updated_at,
      l.utm_source || "",
      l.utm_medium || "",
      l.utm_campaign || "",
    ].join(","),
  );
  return [header, ...rows].join("\n");
}

export async function getLeadStats() {
  const leads = await getAllLeads();
  const total = leads.length;
  const byStatus: Record<LeadStatus, number> = {
    inscrito: 0,
    confirmou_whatsapp: 0,
    assistiu_webinar: 0,
    baixou_app: 0,
    trial_ativo: 0,
  };
  const byProfile: Record<string, number> = {};
  const bySource: Record<string, number> = {};

  for (const l of leads) {
    byStatus[l.status]++;
    byProfile[l.profile] = (byProfile[l.profile] || 0) + 1;
    bySource[l.source || "site"] = (bySource[l.source || "site"] || 0) + 1;
  }

  const today = new Date().toISOString().slice(0, 10);
  const todayCount = leads.filter((l) => l.created_at.slice(0, 10) === today).length;

  return { total, todayCount, byStatus, byProfile, bySource };
}

/* ------------------------------------------------------------------ */
/*  Webinar helpers                                                    */
/* ------------------------------------------------------------------ */

export async function getLeadByWhatsapp(whatsapp: string): Promise<Lead | null> {
  const { data, error } = await supabase
    .from("renal_leads")
    .select("*")
    .eq("whatsapp", whatsapp)
    .maybeSingle();

  if (error || !data) return null;
  return data as Lead;
}

export async function getWebinarStats() {
  // Get all webinar-related events
  const { data: events } = await supabase
    .from("renal_lead_events")
    .select("lead_id, type, meta")
    .in("type", ["webinar_started", "webinar_progress", "webinar_cta_click"]);

  const viewers = new Set<string>();
  const ctaClickers = new Set<string>();
  const maxMinutes: Record<string, number> = {};

  for (const ev of events || []) {
    if (ev.type === "webinar_started") {
      viewers.add(ev.lead_id);
    }
    if (ev.type === "webinar_progress" && ev.meta?.minutes) {
      const prev = maxMinutes[ev.lead_id] || 0;
      maxMinutes[ev.lead_id] = Math.max(prev, ev.meta.minutes as number);
      viewers.add(ev.lead_id);
    }
    if (ev.type === "webinar_cta_click") {
      ctaClickers.add(ev.lead_id);
    }
  }

  const minutesValues = Object.values(maxMinutes);
  const avgMinutes = minutesValues.length > 0
    ? Math.round(minutesValues.reduce((a, b) => a + b, 0) / minutesValues.length)
    : 0;

  return {
    totalViewers: viewers.size,
    ctaClicks: ctaClickers.size,
    avgMinutes,
    maxMinutesByLead: maxMinutes,
  };
}
