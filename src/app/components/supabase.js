import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://wwlsosfijgamtofokttb.supabase.co";

const supabaseKey =
  "sb_publishable_AN-pdCSvenXTmzM5gmqdZw_ZZH7TwdU";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);