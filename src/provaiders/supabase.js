import { createClient } from "@refinedev/supabase";

const SUPABASE_URL = "https://sjuuafjnxswtdxyqhkhi.supabase.co/";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqdXVhZmpueHN3dGR4eXFoa2hpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzMTAwNTYsImV4cCI6MjAyNzg4NjA1Nn0.y8R559rkQzhBV5rsemFVS4mDDFAnR5x2G-MX7Vq3NlY";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
  db: {
    schema: "public", // this can be overridden by passing `meta.schema` to data hooks.
  },
  auth: {
    persistSession: true,
  },
});