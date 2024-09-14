import { google, sheets_v4 } from "googleapis";
import { ACMEvent } from "@public/data/events";
import { BranchType } from "@public/data/branch_data";

enum SheetName {
  Events = "Events",
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

  const range = `${sheetName}!A:Z`;

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

const mockEventsData: ACMEvent[] = [
  {
    name: "Portfolio Workshop",
    tagline: "Build Your First Website!",
    description:
      "Learn how to create a website from scratch using HTML, CSS, JS.",
    datetime: "TBD",
    location: "TBD",
    branch: BranchType.Webdev,
  },
  {
    name: "ICPC Practice",
    tagline: "Prepare for the Ultimate Coding Challenge!",
    description:
      "Train for the International Collegiate Programming Contest with practice problems and live coding sessions.",
    datetime: "TBD",
    location: "TBD",
    branch: BranchType.ICPC,
  },
];

export const getEventsData = async () => {
  // TODO: Replace with actual backend
  return mockEventsData;

  // TODO: Uncomment when backend issues are fixed
  // const rawEventsData = await getRawSheetData(SheetName.Events);
  // if (!rawEventsData || !rawEventsData.length) return [];

  // const [columnHeaders, ...eventsData] = rawEventsData;
  // return eventsData.map((event) => ({
  //   name: event[0],
  //   tagline: event[1],
  //   description: event[2],
  //   datetime: event[3],
  //   location: event[4],
  // })) as ACMEvent[];
};
