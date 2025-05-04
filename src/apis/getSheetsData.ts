import { google, sheets_v4 } from "googleapis";
import { ACMEvent } from "@public/data/events";
import { BranchFAQType, FAQType } from "@public/data/faq";
import { Branch, BranchType } from "@public/data/branchData";
import branchData from "@public/data/branchData";
import acmLogo from "@public/assets/ACM logo.png";

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
    return (response.data.values ?? []).filter((e) => e.length);
  } catch (error) {
    console.error("Error fetching sheets data: ", error);
    return [];
  }
};

export const getFAQData = async () => {
  const rawData = await getRawSheetData(SheetName.FAQs);

  return rawData.map((faq) => ({
    question: faq[0],
    answer: faq[1],
  })) as FAQType[];
};

const getBranchType = (str: string): BranchType => {
  const branches = {
    webdev: BranchType.Webdev,
    research: BranchType.Research,
    icpc: BranchType.ICPC,
    industry: BranchType.Industry,
    social: BranchType.Social,
    general: BranchType.General,
  };

  return (
    branches[(str ?? "general").toLowerCase() as keyof typeof branches] ??
    BranchType.General
  );
};

export const getFAQBranchData = async () => {
  const rawData = await getRawSheetData(SheetName.FAQs);

  const questions = rawData.map((faq) => {
    return {
      question: faq[0],
      answer: faq[1],
      branch: getBranchType(faq[2]),
    };
  });

  const filterFAQData = (bt: BranchType): FAQType[] => {
    return questions
      .filter((item) => item.branch == bt)
      .map((item) => {
        return {
          question: item.question,
          answer: item.answer,
        };
      });
  };

  const branches = [
    {
      id: BranchType.General,
      name: "General",
      img: acmLogo,
      suffix: "general",
      description: "",
      branchColors: ["#18A2F2", "#18A2F2", "#18A2F2"],
      branchBannerColor: "",
    } as Branch,
    ...branchData,
  ];

  return branches.map((br) => {
    return {
      branch: br.suffix,
      image: br.img.src,
      color: br.branchColors,
      faqs: filterFAQData(br.id),
    };
  });
};

export const getEventsData = async () => {
  const rawData = await getRawSheetData(SheetName.Events);

  return rawData.map((event) => ({
    name: event[0],
    tagline: event[1],
    description: event[2],
    datetime: event[3],
    location: event[4],
    branch: getBranchType(event[5]),
  })) as ACMEvent[];
};
