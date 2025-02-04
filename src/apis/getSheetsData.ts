import { google, sheets_v4 } from "googleapis";
import { ACMEvent } from "@public/data/events";
import { BranchFAQType, FAQType } from "@public/data/faq";
import { BranchType } from "@public/data/branchData";

enum SheetName {
  Events = "Events",
  FAQs = "FAQs",
}

const getRawSheetData = async (sheetName: SheetName) => {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets: sheets_v4.Sheets = google.sheets({
    version: "v4",
    auth: (await auth.getClient()) as any,
  });

  const range = `${sheetName}!A2:Z`;

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: range,
    });
    return response.data.values;
  } catch (error) {
    console.error("Error fetching sheets data: ", error);
    return [];
  }
};

export const getFAQData = async () => {
  const faqData = await getRawSheetData(SheetName.FAQs);
  if (!faqData || !faqData.length) return [];

  return faqData.map((faq) => ({
    question: faq[0],
    answer: faq[1],
  })) as FAQType[];
};

const getBranchType = (str: string): BranchType => {
  const branches = {
    "webdev": BranchType.Webdev,
    "research": BranchType.Research,
    "icpc": BranchType.ICPC,
    "build": BranchType.Build,
    "social": BranchType.Social,
    "general": BranchType.General,
  }

  return branches[str.toLowerCase() as keyof typeof branches] ?? BranchType.General;
}

export const getEventsData = async () => {
  const eventsData = await getRawSheetData(SheetName.Events);
  if (!eventsData || !eventsData.length) return [];

  return eventsData.map((event) => ({
    name: event[0],
    tagline: event[1],
    description: event[2],
    datetime: event[3],
    location: event[4],
    branch: getBranchType(event[5])
  })) as ACMEvent[];
};