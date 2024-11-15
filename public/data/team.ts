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
  {
    name: "John Doe 1",
    position: "Software Engineer",
    classOf: "2020",
    picture: HeroLogo.src,
  },
  {
    name: "John Doe 2",
    position: "Software Engineer",
    classOf: "2020",
    picture: HeroLogo.src,
  },
  {
    name: "John Doe 3",
    position: "Software Engineer",
    classOf: "2020",
    picture: HeroLogo.src,
  },
  {
    name: "John Doe 4",
    position: "Software Engineer",
    classOf: "2020",
    picture: HeroLogo.src,
  },
  {
    name: "John Doe 5",
    position: "Software Engineer",
    classOf: "2020",
    picture: HeroLogo.src,
  },
  {
    name: "John Doe 6",
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
