import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string || "https://vbdirkokkxvlphyenjko.supabase.co";
const SUPABASE_ANON_KEY = (import.meta.env.VITE_SUPABASE_ANON_KEY as string) || "";

if (!SUPABASE_ANON_KEY) {
  console.warn("[renal] VITE_SUPABASE_ANON_KEY is not set. Supabase calls will fail.");
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
