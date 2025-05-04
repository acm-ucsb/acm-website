import icpcLogo from "@public/assets/branchImages/icpc.png";
import researchLogo from "@public/assets/branchImages/research.png";
import webdevLogo from "@public/assets/branchImages/webdev.png";
import industryLogo from "@public/assets/branchImages/industry.png";
import { StaticImageData } from "next/image";

export enum BranchType {
  Webdev,
  Research,
  ICPC,
  Industry,
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
  branchBannerColor: string;
};

const branchData: Branch[] = [
  {
    id: BranchType.Webdev,
    name: "Web Dev Branch",
    img: webdevLogo,
    suffix: "webdev",
    description:
      "The Web Development branch is a specialized division within our ACM chapter dedicated to web development. Our goal is to share expertise in full-stack development, including frameworks like React and Flask, with undergraduate students pursuing computer science. Watch for our upcoming website portfolio workshop and an exciting update to the former Coders SB project series!",
    branchColors: ["#1DAA2E", "#2DC439", "#1DAA2E"],
    branchBannerColor: "#81DC89",
  },
  {
    id: BranchType.Research,
    name: "Research Branch",
    img: researchLogo,
    suffix: "research",
    description:
      "The Research branch of ACM at UCSB provides opportunities for undergraduate students to get involved in cutting-edge research at various UCSB labs. Through the 'Research Connect' program, students can be directly matched with open lab positions. The branch also hosts research panels, offering students a chance to network one-on-one with researchers and gain valuable insights into the world of academic and industry research.",
    branchColors: ["#D3A739", "#ECB941", "#D3A739"],
    branchBannerColor: "#F3D58C",
  },
  {
    id: BranchType.ICPC,
    name: "ICPC Branch",
    img: icpcLogo,
    suffix: "icpc",
    description:
      "ICPC, or the International Collegiate Programming Contest, is an algorithmic programming contest for college students. The ICPC branch at ACM aims to create a community of competitive programmers by hosting practice competitions and workshops. Additionally, it hosts tryouts for the ICPC regionals contest in November.",
    branchColors: ["#B93016", "#E33C1E", "#B93016"],
    branchBannerColor: "#EF8A79",
  },
  {
    id: BranchType.Industry,
    name: "Industry Branch",
    img: industryLogo,
    suffix: "industry",
    description:
      "The Industry branch of ACM at UCSB bridges the gap between students and the tech world by offering real-world project experience with local startups, established companies, and nonprofits. Through ACM.Industry, students collaborate in teams to build full-stack products, gain mentorship from industry professionals, and develop skills in project management, design, and deployment. Stay tuned for recruitment cycles, new client partnerships, and opportunities to lead your own technical team.",
    branchColors: ["#087B90", "#0AA3BF", "#087B90"],
    branchBannerColor: "#B9E2DC",
  },
];

export default branchData;
