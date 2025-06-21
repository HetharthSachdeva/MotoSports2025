// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nfobbdhyoxysjgkintmn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5mb2JiZGh5b3h5c2pna2ludG1uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA1MDA5OTUsImV4cCI6MjA2NjA3Njk5NX0.OyU5HgSn0_gNBpsz-V-PCw_PdFTdwJVmt6QnLdDL3B0';

export const supabase = createClient(supabaseUrl, supabaseKey);
