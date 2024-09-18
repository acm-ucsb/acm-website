import icpcLogo from "@public/assets/branchImages/icpc.png";
import researchLogo from "@public/assets/branchImages/research.png";
import webdevLogo from "@public/assets/branchImages/webdev.png";
import { StaticImageData } from "next/image";

export enum BranchType {
  Webdev,
  Research,
  ICPC,
  Social,
  General,
}

export type Branch = {
  id: BranchType;
  name: string;
  img: StaticImageData;
  suffix: string;
  description: string;
  branchColors: string[]; // Save as hex codes
};

const branchData: Branch[] = [
  {
    id: BranchType.Webdev,
    name: "Web Dev Branch",
    img: webdevLogo,
    suffix: "webdev",
    description: "Full Stack and Beyond",
    branchColors: ["#1DAA2E", "#2DC439", "#1DAA2E"],
  },
  {
    id: BranchType.Research,
    name: "Research Branch",
    img: researchLogo,
    suffix: "research",
    description: "Solving the Halting Problem",
    branchColors: ["#D3A739", "#ECB941", "#D3A739"],
  },
  {
    id: BranchType.ICPC,
    name: "ICPC Branch",
    img: icpcLogo,
    suffix: "icpc",
    description: "Farmer John the Goat",
    branchColors: ["#B93016", "#E33C1E", "#B93016"],
  },
];

export default branchData;
