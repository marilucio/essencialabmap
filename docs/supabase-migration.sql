-- ============================================================
-- Supabase migration: renal_leads + renal_lead_events
-- Run this in the Supabase SQL Editor (Dashboard > SQL Editor)
-- ============================================================

-- 1. Table: renal_leads
create table if not exists public.renal_leads (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  whatsapp    text not null,
  profile     text not null default 'paciente',
  status      text not null default 'inscrito',
  source      text not null default 'site',
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now(),
  utm_source  text,
  utm_medium  text,
  utm_campaign text,
  utm_content text,
  utm_term    text,
  referrer    text,
  click_id    text
);

-- Unique index on whatsapp (prevents duplicates)
create unique index if not exists renal_leads_whatsapp_idx on public.renal_leads (whatsapp);

-- Index for common queries
create index if not exists renal_leads_status_idx on public.renal_leads (status);
create index if not exists renal_leads_source_idx on public.renal_leads (source);
create index if not exists renal_leads_created_idx on public.renal_leads (created_at desc);

-- 2. Table: renal_lead_events
create table if not exists public.renal_lead_events (
  id       uuid primary key default gen_random_uuid(),
  lead_id  uuid not null references public.renal_leads(id) on delete cascade,
  type     text not null,
  ts       timestamptz not null default now(),
  meta     jsonb
);

create index if not exists renal_lead_events_lead_idx on public.renal_lead_events (lead_id);
create index if not exists renal_lead_events_ts_idx on public.renal_lead_events (ts);

-- 3. Enable RLS
alter table public.renal_leads enable row level security;
alter table public.renal_lead_events enable row level security;

-- 4. RLS policies — allow anon key full access
--    (admin is UI-protected by password; data is not sensitive)

-- renal_leads
create policy "renal_leads_select" on public.renal_leads
  for select using (true);

create policy "renal_leads_insert" on public.renal_leads
  for insert with check (true);

create policy "renal_leads_update" on public.renal_leads
  for update using (true);

create policy "renal_leads_delete" on public.renal_leads
  for delete using (true);

-- renal_lead_events
create policy "renal_lead_events_select" on public.renal_lead_events
  for select using (true);

create policy "renal_lead_events_insert" on public.renal_lead_events
  for insert with check (true);

create policy "renal_lead_events_delete" on public.renal_lead_events
  for delete using (true);
