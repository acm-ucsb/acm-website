import { BranchType } from "./branchData";

export type ACMEvent = {
  name: string;
  tagline: string;
  description: string;
  datetime: string;
  location: string;
  branch: BranchType;
};
