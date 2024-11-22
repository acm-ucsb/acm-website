export type FAQ = {
  question: string;
  answer: string;
};

export type BranchFAQ = {
  branch: string;
  faqs: FAQ[];
};
