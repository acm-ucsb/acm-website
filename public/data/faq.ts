export type FAQ = {
  question: string;
  answer: string;
};

// NOTE: Temp data structure for branch related faqs
export type BranchFAQ = {
  branch: string;
  image: string;
  color: string[];
  faqs: FAQ[];
};
