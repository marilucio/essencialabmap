/**
 * Lead database — localStorage-based.
 *
 * Works for single-machine operation. For production with multiple devices,
 * swap the storage calls for a real backend (Supabase, Firebase, etc.).
 */

import type { RenalProfile, RenalUtm } from "./lib";

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
  created_at: string;
  updated_at: string;
  utm: RenalUtm;
  events: LeadEvent[];
}

/* ------------------------------------------------------------------ */
/*  Storage helpers                                                    */
/* ------------------------------------------------------------------ */

const STORAGE_KEY = "renal_leads_db_v1";

function readAll(): Lead[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as Lead[];
  } catch {
    return [];
  }
}

function writeAll(leads: Lead[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
}

/* ------------------------------------------------------------------ */
/*  Public API                                                         */
/* ------------------------------------------------------------------ */

export function generateId(): string {
  return `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

export function createLead(input: {
  name: string;
  whatsapp: string;
  profile: RenalProfile;
  utm: RenalUtm;
}): Lead {
  const now = new Date().toISOString();
  const lead: Lead = {
    id: generateId(),
    name: input.name,
    whatsapp: input.whatsapp,
    profile: input.profile,
    status: "inscrito",
    created_at: now,
    updated_at: now,
    utm: input.utm,
    events: [{ type: "inscricao", ts: now }],
  };

  const leads = readAll();
  // Avoid duplicates by whatsapp
  const existing = leads.findIndex((l) => l.whatsapp === input.whatsapp);
  if (existing >= 0) {
    leads[existing] = {
      ...leads[existing],
      name: input.name,
      profile: input.profile,
      updated_at: now,
      events: [...leads[existing].events, { type: "reinscricao", ts: now }],
    };
    writeAll(leads);
    return leads[existing];
  }

  leads.unshift(lead);
  writeAll(leads);
  return lead;
}

export function getAllLeads(): Lead[] {
  return readAll();
}

export function getLeadById(id: string): Lead | null {
  return readAll().find((l) => l.id === id) || null;
}

export function getLeadByWhatsapp(whatsapp: string): Lead | null {
  return readAll().find((l) => l.whatsapp === whatsapp) || null;
}

export function updateLeadStatus(id: string, status: LeadStatus): Lead | null {
  const leads = readAll();
  const idx = leads.findIndex((l) => l.id === id);
  if (idx < 0) return null;

  const now = new Date().toISOString();
  leads[idx].status = status;
  leads[idx].updated_at = now;
  leads[idx].events.push({ type: `status_${status}`, ts: now });
  writeAll(leads);
  return leads[idx];
}

export function addLeadEvent(id: string, event: LeadEvent): Lead | null {
  const leads = readAll();
  const idx = leads.findIndex((l) => l.id === id);
  if (idx < 0) return null;

  leads[idx].events.push(event);
  leads[idx].updated_at = event.ts;
  writeAll(leads);
  return leads[idx];
}

export function deleteLead(id: string): boolean {
  const leads = readAll();
  const filtered = leads.filter((l) => l.id !== id);
  if (filtered.length === leads.length) return false;
  writeAll(filtered);
  return true;
}

export function exportLeadsCsv(): string {
  const leads = readAll();
  const header = "ID,Nome,WhatsApp,Perfil,Status,Criado em,Atualizado em,UTM Source,UTM Medium,UTM Campaign";
  const rows = leads.map((l) =>
    [
      l.id,
      `"${l.name}"`,
      l.whatsapp,
      l.profile,
      l.status,
      l.created_at,
      l.updated_at,
      l.utm.utm_source || "",
      l.utm.utm_medium || "",
      l.utm.utm_campaign || "",
    ].join(","),
  );
  return [header, ...rows].join("\n");
}

export function getLeadStats() {
  const leads = readAll();
  const total = leads.length;
  const byStatus: Record<LeadStatus, number> = {
    inscrito: 0,
    confirmou_whatsapp: 0,
    assistiu_webinar: 0,
    baixou_app: 0,
    trial_ativo: 0,
  };
  const byProfile: Record<string, number> = {};

  for (const l of leads) {
    byStatus[l.status]++;
    byProfile[l.profile] = (byProfile[l.profile] || 0) + 1;
  }

  const today = new Date().toISOString().slice(0, 10);
  const todayCount = leads.filter((l) => l.created_at.slice(0, 10) === today).length;

  return { total, todayCount, byStatus, byProfile };
}
