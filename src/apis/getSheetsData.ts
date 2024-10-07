import { google, sheets_v4 } from "googleapis";
import { ACMEvent } from "@public/data/events";
import { FAQ } from "@public/data/faq";
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

const mockFAQData: FAQ[] = [
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
  // TODO: Replace with backend
  return mockFAQData;

  // TODO: Uncomment when backend is fixed
  // const rawFaqData = await getRawSheetData(SheetName.FAQs);
  // if (!rawFaqData || !rawFaqData.length) return [];

  // const [columnHeaders, ...faqData] = rawFaqData;
  // return faqData.map((faq) => ({
  //   question: faq[0],
  //   answer: faq[1],
  // })) as FAQ[];
};

const mockEventsData: ACMEvent[] = [
  {
    name: "Web Dev Portfolio Website Workshop",
    tagline: "Learn how to build a portfolio website!",
    description:
      "This three part workshop series will take you from start to finish to develop an industry-quality portfolio website with no prior web dev experience required. We will provide a quickstart guide to build a Full-Stack app using modern developer tools, teach general good code practices, and go over the basics of styling. At the end, we will choose some winners for the best portfolios we see!",
    datetime: "2024-10-9 19:00:00",
    location: "ESB1001",
    branch: BranchType.Webdev,
  },
  {
    name: "ICPC Kickoff",
    tagline: "Learn competitive programming!",
    description:
      "Join us for the ICPC Kickoff Meeting! Whether you're a seasoned coder or new to competitive programming, this is the perfect opportunity to meet your teammates, learn about the competition structure, and get tips for success. We'll discuss our training plan, set goals for the season, and inspire each other to push our limits. Don’t miss out on the chance to kickstart an exciting journey into the world of programming contests!",
    datetime: "2024-10-14 19:00:00",
    location: "HFH 1104",
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
