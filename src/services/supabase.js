// فایل کانفیگ اتصال به Supabase
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://ibqvonyvtuxddrnmdjjc.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlicXZvbnl2dHV4ZGRybm1kampjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0MDQxMjcsImV4cCI6MjA2Mjk4MDEyN30.vMeCDa5niTmiMM0tnb_ZnbIPvVXobY8i05UedC8CVgc";
export const supabase = createClient(supabaseUrl, supabaseKey);
