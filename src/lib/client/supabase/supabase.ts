import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from "$env/static/public";
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = PUBLIC_SUPABASE_URL!
const supabaseKey = PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

export { supabase }