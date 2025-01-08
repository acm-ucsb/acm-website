export type TeamMember = {
  name: string;
  position: string;
  picture: string;
  classOf?: string;
};

import HeroLogo from "../../public/assets/HeroLogo.png";

export const OfficerTeam: TeamMember[] = [
  {
    name: "Rohan Kumar",
    position: "Co-Head of Web Development",
    classOf: "2025",
    picture: HeroLogo.src, // TODO: add picture from form - currently no access
  },
  {
    name: "David Wang",
    position: "Senior Advisor",
    classOf: "2025",
    picture: HeroLogo.src, // TODO: add picture from form - currently no access
  },
  {
    name: "Zeel Patel",
    position: "Secretary",
    classOf: "2026",
    picture: HeroLogo.src, // TODO: add picture from form - currently no access
  },
  {
    name: "Aarush Narang",
    position: "ACM Web Dev Website Developer",
    classOf: "2028",
    picture: HeroLogo.src, // TODO: add picture from form - currently no access
  },
  {
    name: "Jeffrey Keem",
    position: "ACM Web Dev Website Developer",
    classOf: "2027",
    picture: HeroLogo.src, // TODO: add picture from form - currently no access
  },
  {
    name: "Bobby Chavez",
    position: "ACM Web Dev Website Developer",
    classOf: "2027",
    picture: HeroLogo.src, // TODO: add picture from form - currently no access
  },
  {
    name: "Don Tran",
    position: "ACM Web Dev Website Developer",
    classOf: "2028",
    picture: HeroLogo.src, // TODO: add picture from form - currently no access
  },
  {
    name: "Anit Annadi",
    position: "ACM Web Dev Website Developer",
    classOf: "2028",
    picture: HeroLogo.src, // TODO: add picture from form - currently no access
  },
  {
    name: "John Vu",
    position: "ACM Web Dev Website Developer",
    classOf: "2027",
    picture: HeroLogo.src, // TODO: add picture from form - currently no access
  },
];

export const Professors: TeamMember[] = [
  {
    name: "Jane Doe",
    position: "Professor, Computer Science",
    picture: HeroLogo.src,
  },
];
