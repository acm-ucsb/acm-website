import icpc_img from "./branch_images/icpc_img.png";
import research_img from "./branch_images/research_img.png";
import web_dev_img from "./branch_images/web_dev_img.png";
import { StaticImageData } from "next/image";

export enum BranchType {
  Webdev,
  Research,
  ICPC,
  Social,
  General,
}

type Branch = {
  id: BranchType;
  name: string;
  img: StaticImageData;
  description: string;
};

// This is to be updated until we have a backend to pull this data from
const branch_data: Branch[] = [
  {
    id: BranchType.Webdev,
    name: "Web Dev Branch",
    img: web_dev_img,
    description: "Full Stack and Beyond",
  },
  {
    id: BranchType.Research,
    name: "Research Branch",
    img: research_img,
    description: "Solving the halting problem",
  },
  {
    id: BranchType.ICPC,
    name: "ICPC Branch",
    img: icpc_img,
    description: "Farmer John the Goat",
  },
];

export default branch_data;
