// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yarflfdgqxvvjexxvdtm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlhcmZsZmRncXh2dmpleHh2ZHRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI1OTQ1MDcsImV4cCI6MjAzODE3MDUwN30.Xq23WJXAvxRBKlufcWfmHNVZrKk9MRxsj8NfeVZIxMA'
const supabase = createClient(supabaseUrl, supabaseKey);

if (!supabaseUrl || !supabaseKey) {
  console.error('Supabase URL or Key is missing');
}

export default supabase;
