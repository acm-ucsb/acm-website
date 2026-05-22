import { createBrowserClient } from "@supabase/ssr";
import { SupabaseClient } from "@supabase/supabase-js";
import { ACMEvent } from "@public/data/events";
import { FAQType } from "@public/data/faq";
import { BranchType } from "@public/data/branchData";

let browserClient: SupabaseClient | null = null;

export const getSupabaseClient = (): SupabaseClient => {
  if (browserClient) return browserClient;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !publishableKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
    );
  }

  browserClient = createBrowserClient(url, publishableKey);
  return browserClient;
};

const getBranchType = (str: string | null | undefined): BranchType => {
  const branches = {
    dev: BranchType.Development,
    research: BranchType.Research,
    icpc: BranchType.ICPC,
    industry: BranchType.Industry,
    social: BranchType.Social,
    board: BranchType.Board,
  };

  return (
    branches[(str ?? "board").toLowerCase() as keyof typeof branches] ??
    BranchType.Board
  );
};

export const getEventsData = async (): Promise<ACMEvent[]> => {
  const supabase = getSupabaseClient();

  const { data, error } = await supabase
    .from("Events")
    .select("name, tagline, description, datetime, location, branch");

  if (error) {
    console.error("Error fetching events from Supabase: ", error);
    return [];
  }

  return (data ?? []).map((row) => ({
    name: row.name,
    tagline: row.tagline,
    description: row.description,
    datetime: row.datetime,
    location: row.location,
    branch: getBranchType(row.branch),
  }));
};

export const getFAQData = async (): Promise<FAQType[]> => {
  const supabase = getSupabaseClient();

  const { data, error } = await supabase.from("FAQ").select("question, answer");

  if (error) {
    console.error("Error fetching FAQs from Supabase: ", error);
    return [];
  }

  return (data ?? []).map((row) => ({
    question: row.question,
    answer: row.answer,
  }));
};
