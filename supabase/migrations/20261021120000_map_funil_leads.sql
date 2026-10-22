-- ============================================================
-- Funil /map/comecar: leads do onboarding do Sistema MAP
-- Projeto: Supabase da landing (o mesmo do /renal), não o do app.
-- Aplicar no SQL Editor do projeto ou com `supabase db push`.
--
-- Quem grava: só a função netlify/functions/map-funil-lead.mts, com a
-- service role. O navegador nunca acessa esta tabela (RLS ligada, sem
-- policies, e sem grants para anon/authenticated).
-- Cada passagem pelo funil é uma linha; deduplicar por e-mail nas consultas.
-- ============================================================

create table if not exists public.map_funil_leads (
  id                      uuid primary key default gen_random_uuid(),
  created_at              timestamptz not null default now(),
  updated_at              timestamptz not null default now(),

  -- Cadastro (telas 21 e 22). E-mail sempre em minúsculas.
  email                   text not null
                          check (length(email) <= 254 and email = lower(email) and email ~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]{2,}$'),
  nome                    text check (nome is null or length(nome) between 1 and 40),
  consentimento           boolean not null check (consentimento),
  consentimento_texto     text not null check (length(consentimento_texto) <= 500),
  idioma                  text not null default 'pt' check (idioma in ('pt', 'es', 'en')),

  -- Respostas (índices das opções; escalas de 1 a 5) e o que o servidor calculou.
  area                    text not null check (area in ('nutricionista', 'naturopata', 'terapeuta', 'estetica', 'outra')),
  respostas               jsonb not null check (jsonb_typeof(respostas) = 'object'),
  eixo                    text not null check (eixo in ('antes', 'decisao', 'retorno')),
  horas_mes               numeric(6, 1) not null check (horas_mes >= 0),

  -- Página de preço (tela 24).
  card                    text check (card in ('anual', 'mensal')),
  clicou_teste_em         timestamptz,

  -- Rastreamento: o mesmo eventID do Lead no Pixel (deduplicação futura com a Conversions API).
  meta_event_id           uuid not null unique,

  -- E-mail do plano (Resend) e descadastro.
  email_plano_id          text,
  email_plano_enviado_em  timestamptz,
  descadastrado_em        timestamptz,

  -- Atribuição da primeira visita.
  utm_source              text check (length(utm_source) <= 200),
  utm_medium              text check (length(utm_medium) <= 200),
  utm_campaign            text check (length(utm_campaign) <= 200),
  utm_content             text check (length(utm_content) <= 200),
  utm_term                text check (length(utm_term) <= 200),
  publico                 text check (publico in ('doterra', 'aroma')),
  referrer                text check (length(referrer) <= 500)
);

comment on table public.map_funil_leads is
  'Leads do funil /map/comecar (essencialab.site). Gravados só pela função Netlify map-funil-lead com a service role.';

create index if not exists map_funil_leads_created_idx on public.map_funil_leads (created_at desc);
create index if not exists map_funil_leads_email_idx on public.map_funil_leads (email);
create index if not exists map_funil_leads_email_enviado_idx
  on public.map_funil_leads (email, email_plano_enviado_em)
  where email_plano_enviado_em is not null;

alter table public.map_funil_leads enable row level security;

-- Sem policies: anon e authenticated não leem nem escrevem.
revoke all on table public.map_funil_leads from anon, authenticated;
