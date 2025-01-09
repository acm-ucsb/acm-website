export type TeamMember = {
  name: string;
  position: string;
  picture: string;
  classOf?: string;
};

import HeroLogo from "../../public/assets/HeroLogo.png";
import RohanKumar from "../../public/assets/teamImages/RohanKumar.jpg";
import DavidWang from "../../public/assets/teamImages/DavidWang.jpg";
import ZeelPatel from "../../public/assets/teamImages/ZeelPatel.jpeg";
import AarushNarang from "../../public/assets/teamImages/AarushNarang.jpeg";
import JeffreyKeem from "../../public/assets/teamImages/JeffreyKeem.jpg";
import BobbyChavez from "../../public/assets/teamImages/JuanChavez.png";
import DonTran from "../../public/assets/teamImages/DonTran.jpg";
import AnitAnnadi from "../../public/assets/teamImages/AnitAnnadi.jpeg";
import JohnVu from "../../public/assets/teamImages/JohnVu.jpeg";

export const OfficerTeam: TeamMember[] = [
  {
    name: "Rohan Kumar",
    position: "Co-Head of Web Development",
    classOf: "2025",
    picture: RohanKumar.src,
  },
  {
    name: "David Wang",
    position: "Senior Advisor",
    classOf: "2025",
    picture: DavidWang.src,
  },
  {
    name: "Zeel Patel",
    position: "Secretary",
    classOf: "2026",
    picture: ZeelPatel.src,
  },
  {
    name: "Aarush Narang",
    position: "ACM Web Dev Website Developer",
    classOf: "2028",
    picture: AarushNarang.src,
  },
  {
    name: "Jeffrey Keem",
    position: "ACM Web Dev Website Developer",
    classOf: "2027",
    picture: JeffreyKeem.src,
  },
  {
    name: "Bobby Chavez",
    position: "ACM Web Dev Website Developer",
    classOf: "2027",
    picture: BobbyChavez.src,
  },
  {
    name: "Don Tran",
    position: "ACM Web Dev Website Developer",
    classOf: "2028",
    picture: DonTran.src,
  },
  {
    name: "Anit Annadi",
    position: "ACM Web Dev Website Developer",
    classOf: "2028",
    picture: AnitAnnadi.src,
  },
  {
    name: "John Vu",
    position: "ACM Web Dev Website Developer",
    classOf: "2027",
    picture: JohnVu.src,
  },
];

export const Professors: TeamMember[] = [
  {
    name: "Jane Doe",
    position: "Professor, Computer Science",
    picture: HeroLogo.src,
  },
];
