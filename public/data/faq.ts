export type FAQType = {
  question: string;
  answer: string;
};

// NOTE: Temp data structure for branch related faqs
export type BranchFAQType = {
  branch: string;
  image: string;
  color: string[];
  faqs: FAQType[];
};
