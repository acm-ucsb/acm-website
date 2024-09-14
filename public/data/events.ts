import { BranchType } from "./branch_data";

export type ACMEvent = {
  name: string;
  tagline: string;
  description: string;
  datetime: string;
  location: string;
  branch: BranchType;
};
