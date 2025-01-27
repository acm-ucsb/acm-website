import { google, sheets_v4 } from "googleapis";
import { ACMEvent } from "@public/data/events";
import { BranchFAQType, FAQType } from "@public/data/faq";
import { BranchType } from "@public/data/branchData";

import icpcLogo from "@public/assets/branchImages/icpc.png";
import researchLogo from "@public/assets/branchImages/research.png";
import webdevLogo from "@public/assets/branchImages/webdev.png";
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

const mockFAQData: FAQType[] = [
  {
    question: "What is ACM?",
    answer:
      "As a student chapter of the international Association of Computing Machinery, ACM at UCSB is the premier Computer Science student organization on campus. We host events, workshops, and competitions to help students learn more about computer science and technology. Regardless of your major or skill level, we invite you to join our community and share our passion for technology!",
  },
  {
    question: "What are ACM branches?",
    answer:
      "ACM has three branches: ICPC, Research, and Web Development. Each branch holds independent events to support its unique mission. General meetings are unattached to any branch and support the mission of the club as a whole.",
  },
  {
    question: "How do I join?",
    answer:
      "Check out our Linktree[https://linktr.ee/acm_ucsb] to join our Discord server, or get on our mailing list to stay up-to-date regarding our events.",
  },
  {
    question: "What is the ICPC branch?",
    answer:
      "ICPC, or the International Collegiate Programming Contest, is an algorithmic programming contest for college students. The ICPC branch at ACM aims to create a community of competitive programmers by hosting practice competitions and workshops. Additionally, it hosts tryouts for the ICPC regionals contest in November.",
  },
  {
    question: "What is the Research branch?",
    answer:
      "The Research branch of ACM at UCSB provides opportunities for undergraduate students to get involved in cutting-edge research at various UCSB labs. Through the 'Research Connect' program, students can be directly matched with open lab positions. The branch also hosts research panels, offering students a chance to network one-on-one with researchers and gain valuable insights into the world of academic and industry research.",
  },
  {
    question: "What is the Web Development branch?",
    answer:
      "The Web Development branch is a specialized division within our ACM chapter dedicated to web development. Our goal is to share expertise in full-stack development, including frameworks like React and Flask, with undergraduate students pursuing computer science. Watch for our upcoming website portfolio workshop and an exciting update to the former Coders SB project series!",
  },
  {
    question: "What happened to Coders SB?",
    answer:
      "Coders SB, now ACM at UCSB, was disbanded after the 2023-2024 academic year to reorganize as a student chapter of the Association of Computing Machinery.",
  },
  {
    question:
      "Do I need to be a computer science major or have experience in computer science to join?",
    answer:
      "Not in the slightest! We welcome students from all majors and backgrounds.",
  },
];

export const getFAQData = async () => {
  const rawFaqData = await getRawSheetData(SheetName.FAQs);
  if (!rawFaqData || !rawFaqData.length) return [];

  const [columnHeaders, ...faqData] = rawFaqData;
  return faqData.map((faq) => ({
    question: faq[0],
    answer: faq[1],
  })) as FAQType[];
};

/* 
  NOTE: temporary implementation for branch related stuff (definitely way to make reusable components 
  for branchCard data)
*/
const mockFAQBranchData: BranchFAQType[] = [
  {
    branch: "general",
    image: acmLogo.src,
    color: ["#18A2F2", "#18A2F2", "#18A2F2"],
    faqs: mockFAQData,
  },
  {
    branch: "icpc",
    image: icpcLogo.src,
    color: ["#B93016", "#E33C1E", "#B93016"],
    faqs: mockFAQData.slice(3, 4),
  },
  {
    branch: "research",
    image: researchLogo.src,
    color: ["#D3A739", "#ECB941", "#D3A739"],
    faqs: mockFAQData.slice(4, 5),
  },
  {
    branch: "webdev",
    image: webdevLogo.src,
    color: ["#1DAA2E", "#2DC439", "#1DAA2E"],
    faqs: mockFAQData.slice(5, 6),
  },
];

export const getFAQBranchData = async () => {
  return mockFAQBranchData;
};

/**
 * 
 * NGL I don't like this solution because accuracy really depends on that Google Sheet to be well-structured 
 * 
 * @param str string value
 * @returns element of type BranchType
 */
const getBranchType = (str : string) => {
  switch(str.toLowerCase()) {
    case "webdev":
      return BranchType.Webdev;
    case "research":
      return BranchType.Research;
    case "icpc":
      return BranchType.ICPC;
    case "build":
      return BranchType.Build;
    case "social":
      return BranchType.Social;
    default:
      return BranchType.General;
  }
}

export const getEventsData = async () => {
  const rawEventsData = await getRawSheetData(SheetName.Events);
  if (!rawEventsData || !rawEventsData.length) return [];

  const [columnHeaders, ...eventsData] = rawEventsData;

  return eventsData.map((event) => ({
    name: event[0],
    tagline: event[1],
    description: event[2],
    datetime: event[3],
    location: event[4],
    branch: getBranchType(event[5])
  })) as ACMEvent[];
};
