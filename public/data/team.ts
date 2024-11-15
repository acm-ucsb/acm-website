export type TeamMember = {
  name: string;
  position: string;
  picture: string;
  classOf?: string;
};

import HeroLogo from "../../public/assets/HeroLogo.png";

export const OfficerTeam: TeamMember[] = [
  {
    name: "John Doe",
    position: "Software Engineer",
    classOf: "2020",
    picture: HeroLogo.src,
  },
];
export const Professors: TeamMember[] = [
  {
    name: "Jane Doe",
    position: "Professor, Computer Science",
    picture: HeroLogo.src,
  },
];
