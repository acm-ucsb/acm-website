import { google, sheets_v4 } from "googleapis";
import { ACMEvent } from "../../public/data/events";

const getRawEventsData = async () => {
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

  const range = "Sheet1!A:Z";

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

export const getEventsData = async () => {
  const rawEventsData = await getRawEventsData();
  if (!rawEventsData || !rawEventsData.length) return [];

  const [columnHeaders, ...eventsData] = rawEventsData;
  return eventsData.map((event) => ({
    name: event[0],
    tagline: event[1],
    description: event[2],
    datetime: event[3],
    location: event[4],
  })) as ACMEvent[];
};
