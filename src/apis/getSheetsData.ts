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
    name: "Winter Project Series Week 2: Team Formation and Project Scoping",
    tagline: "Get started with your project ideas!",
    description:
      "In this session, we'll focus on team formation and refining your project idea. Based on interest form results, teams of 3-5 members will be formed. Teams will then discuss their goals and start defining their Minimum Viable Product (MVP). You'll also work on drafting user stories and wireframes for your project. This is the perfect time to refine your project proposal!",
    datetime: "2025-1-15 19:00:00",
    location: "ESB 1001",
    branch: BranchType.Webdev,
  },
  {
    name: "Winter Project Series Week 3: Technical Foundations",
    tagline: "Set up your tech stack and start coding!",
    description:
      "This session will help you lay the technical foundation for your project. We’ll cover choosing the right tech stack, an introduction to Git/GitHub, and how to use these tools for collaborative coding. Teams will also begin building their project backlogs and setting up their GitHub repositories. Get ready to start working on your MVP!",
    datetime: "2025-1-22 19:00:00",
    location: "ESB 1001",
    branch: BranchType.Webdev,
  },
  {
    name: "Winter Project Series Week 4: Office Hours (Zoom)",
    tagline: "Get feedback and advice on your project!",
    description:
      "Join us for an office hours session where you'll show off how your MVP prototype is coming along. Get feedback on your project proposal and feature backlog, and ask officers for general advice and tips on improving your project. This is a great chance to get targeted help on the areas you're struggling with!",
    datetime: "2025-1-29 19:00:00",
    location: "Online (Zoom)",
    branch: BranchType.Webdev,
  },
  {
    name: "Winter Project Series Week 5: Functional Prototype",
    tagline: "Showcase your first working feature!",
    description:
      "This week, you’ll present your functional prototype, showcasing at least one working feature of your MVP. In mini groups, you’ll receive feedback on your prototype's functionality and user experience. You’ll also meet with officers to discuss how to further establish your MVP and focus your development efforts.",
    datetime: "2025-2-5 19:00:00",
    location: "TBD",
    branch: BranchType.Webdev,
  },
  {
    name: "Winter Project Series Week 6: Midpoint Showcase",
    tagline: "Present your progress and get feedback!",
    description:
      "It's time to showcase your progress! Each team will present their MVP prototype in a live demo (timeboxed to 3 minutes). This is your opportunity to show what you've built, get feedback, and share your lessons learned. Make sure your project is ready for a beta release!",
    datetime: "2025-2-12 19:00:00",
    location: "TBD",
    branch: BranchType.Webdev,
  },
  {
    name: "Winter Project Series Week 7: Office Hours (Zoom)",
    tagline: "Final feedback before beta release!",
    description:
      "Join us for another office hours session to get last-minute feedback on your MVP prototype. Ask for advice on refining your product and preparing for the beta release. Officers will be available to offer guidance and answer your project-related questions!",
    datetime: "2025-2-19 19:00:00",
    location: "Online (Zoom)",
    branch: BranchType.Webdev,
  },
  {
    name: "Winter Project Series Week 8: Final Development and Testing",
    tagline: "Polish your project and prepare for the final showcase!",
    description:
      "In this session, teams will focus on finalizing their project, fixing bugs, and preparing for the final showcase. Officers will be available for 1:1 guidance as you finish up your MVP and get your presentation ready. By the end of the week, you'll be ready to release your project and demo it to the community!",
    datetime: "2025-2-26 19:00:00",
    location: "TBD",
    branch: BranchType.Webdev,
  },
  {
    name: "Winter Project Series Week 9: Project Showcase and Wrap-Up",
    tagline: "Present your project and celebrate your hard work!",
    description:
      "The final event of the Winter Project Series! Teams will present their completed projects, including a live demo, lessons learned, and future improvements. This is a time to showcase your hard work and celebrate your success. We’ll also reflect on the experience and provide feedback for future workshops. Certificates and prizes will be awarded!",
    datetime: "2025-3-5 19:00:00",
    location: "TBD",
    branch: BranchType.Webdev,
  },

  {
    name: "Undergraduate Research Panel",
    tagline: "Learn how to secure an undergraduate research position!",
    description:
      "You are invited to participate in UCSB ACM’s Undergraduate research panel, where you will get the chance to speak with undergraduate students working in labs and actively publishing for international journals. You will learn the tips and tricks for applications to independent professors and to the ERSP (Early Research Scholars Program). This is the best opportunity to learn about the application process and to edit your resume to boost your chances.",
    datetime: "2025-1-23 19:00:00",
    location: "TBD",
    branch: BranchType.Research,
  },

  {
    name: "LeetCode Workshop #1",
    tagline: "Start your journey with LeetCode!",
    description:
      "Welcome to the first workshop of the LeetCode series! In this session, we'll introduce the platform, discuss strategies for approaching problems, and get you started with your first coding challenges. You'll have the opportunity to collaborate with peers, ask questions, and start building your problem-solving skills.",
    datetime: "2025-1-27 19:00:00",
    location: "TBD",
    branch: BranchType.ICPC,
  },
  {
    name: "LeetCode Workshop #2",
    tagline: "Build your coding fundamentals!",
    description:
      "In this session, we’ll focus on reinforcing your coding fundamentals. We will discuss common patterns and techniques used to solve a wide variety of problems on LeetCode. Work on problems that help solidify your understanding of essential data structures and algorithms.",
    datetime: "2025-2-3 19:00:00",
    location: "TBD",
    branch: BranchType.ICPC,
  },
  {
    name: "LeetCode Workshop #3",
    tagline: "Level up your problem-solving skills!",
    description:
      "Join us for the third workshop in the LeetCode series! This session will challenge you to tackle problems that require critical thinking and creative solutions. You’ll practice a mix of difficulty levels and focus on optimizing your approach to improve efficiency in both time and space.",
    datetime: "2025-2-10 19:00:00",
    location: "TBD",
    branch: BranchType.ICPC,
  },
  {
    name: "LeetCode Workshop #4",
    tagline: "Sharpen your algorithmic thinking!",
    description:
      "In this session, we will continue to strengthen your algorithmic thinking. We’ll explore a variety of problem types that require advanced techniques to solve. Expect to challenge yourself with problems that test your understanding of both common and complex algorithms.",
    datetime: "2025-2-17 19:00:00",
    location: "TBD",
    branch: BranchType.ICPC,
  },
  {
    name: "LeetCode Workshop #5",
    tagline: "Master advanced problem-solving techniques!",
    description:
      "This workshop will dive into more advanced problem-solving techniques and strategies. You’ll learn how to identify the most efficient ways to approach and solve complex LeetCode problems. This session will push your skills to the next level and prepare you for tougher coding challenges.",
    datetime: "2025-2-24 19:00:00",
    location: "TBD",
    branch: BranchType.ICPC,
  },
  {
    name: "LeetCode Workshop #6",
    tagline: "Prepare for coding interviews!",
    description:
      "In this session, we'll simulate coding interview conditions to help you prepare for real-life technical interviews. You'll solve problems under timed conditions, followed by peer and mentor feedback. This is a great opportunity to practice your interview skills and refine your problem-solving techniques.",
    datetime: "2025-3-3 19:00:00",
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
