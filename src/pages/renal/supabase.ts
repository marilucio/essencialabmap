import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Chave anônima (pública por design: vai no bundle). Sem ela, o erro fica restrito
// às chamadas das páginas /renal em vez de derrubar o carregamento do site inteiro,
// como aconteceu quando o build do Netlify rodou sem VITE_SUPABASE_ANON_KEY.
const SUPABASE_URL =
  (import.meta.env.VITE_SUPABASE_URL as string) || "https://vbdirkokkxvlphyenjko.supabase.co";
const SUPABASE_ANON_KEY = (import.meta.env.VITE_SUPABASE_ANON_KEY as string) || "";

if (!SUPABASE_ANON_KEY) {
  console.warn("[renal] VITE_SUPABASE_ANON_KEY is not set. Supabase calls will fail.");
}

let client: SupabaseClient | null = null;

function getClient(): SupabaseClient {
  if (!client) {
    if (!SUPABASE_ANON_KEY) {
      throw new Error("[renal] VITE_SUPABASE_ANON_KEY is not set.");
    }
    client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  return client;
}

// Mesma interface de antes (supabase.from(...), supabase.rpc(...)), criada sob demanda.
export const supabase = new Proxy({} as SupabaseClient, {
  get(_target, prop) {
    const c = getClient();
    const value = Reflect.get(c, prop) as unknown;
    return typeof value === "function" ? (value as (...a: unknown[]) => unknown).bind(c) : value;
  },
});
