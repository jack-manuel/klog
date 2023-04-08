import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://eeusjgnsrbisqmugmsrn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVldXNqZ25zcmJpc3FtdWdtc3JuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA5NjU2OTQsImV4cCI6MTk5NjU0MTY5NH0.-v3HAHqMoPoGEyYWi6Jy3G7YbPsMCP9VCiXDUx5QAQ8"
);
