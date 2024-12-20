import { createClient } from "@supabase/supabase-js";

// ====================== supabase ======================
const supabaseUrl = "https://wjbiitujkttspbctmazl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqYmlpdHVqa3R0c3BiY3RtYXpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQzMTE0MzksImV4cCI6MjA0OTg4NzQzOX0.jgkB3nRej99zMr5JmZD2-keWYlP02ct5Eu6L0R_sBD8";
export const supabase2 = createClient(supabaseUrl, supabaseKey);
