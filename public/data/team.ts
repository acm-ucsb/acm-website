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
import RohilShah from "../../public/assets/teamImages/RohilShah.jpg";
import KanavArora from "../../public/assets/teamImages/KanavArora.jpg";
import EugeneWong from "../../public/assets/teamImages/EugeneWong.jpg";
import SamuelZhu from "../../public/assets/teamImages/SamuelZhu.jpeg";
import DenizLapsekili from "../../public/assets/teamImages/DenizLapsekili.jpeg";
import ShivaneDadi from "../../public/assets/teamImages/ShivaneDadi.jpg";
import RitamSaha from "../../public/assets/teamImages/RitamSaha.png";
import GaborSzita from "../../public/assets/teamImages/GaborSzita.jpg";
import KenThampiratwong from "../../public/assets/teamImages/KenThampiratwong.jpeg";
import OmarAboutaleb from "../../public/assets/teamImages/OmarAboutaleb.png";
import ZiadMatni from "../../public/assets/teamImages/ZiadMatni.jpeg";
import Hero from "@/components/landing/Hero";

export const OfficerTeam: TeamMember[] = [
  {
    name: "Rohil Shah",
    position: "Co-President",
    classOf: "2026",
    picture: RohilShah.src,
  },
  {
    name: "Kanav",
    position: "Co-President",
    classOf: "2026",
    picture: KanavArora.src,
  },
  {
    name: "Zeel Patel",
    position: "Secretary",
    classOf: "2026",
    picture: ZeelPatel.src,
  },
  {
    name: "Eugene Wong",
    position: "Treasurer",
    classOf: "2026",
    picture: EugeneWong.src,
  },
  {
    name: "David Wang",
    position: "Senior Advisor",
    classOf: "2025",
    picture: DavidWang.src,
  },
  {
    name: "Rohan Kumar",
    position: "Co-Head of Web Development",
    classOf: "2025",
    picture: RohanKumar.src,
  },
  {
    name: "Samuel Zhu",
    position: "Co-Head of Web Development",
    classOf: "2026",
    picture: SamuelZhu.src,
  },
  {
    name: "Wesley Hung",
    position: "ICPC Branch Head",
    classOf: "2026",
    picture: HeroLogo.src,
  },
  {
    name: "Ezra Furtado-Tiwari",
    position: "ICPC Branch Head",
    classOf: "2026",
    picture: HeroLogo.src,
  },
  {
    name: "Deniz Lapsekili",
    position: "Research Branch Head",
    classOf: "2027",
    picture: DenizLapsekili.src,
  },
  {
    name: "Edison Zhang",
    position: "Build Branch Head",
    classOf: "2026",
    picture: HeroLogo.src,
  },
  {
    name: "Jeremi Nuer",
    position: "Build Branch Head",
    classOf: "2026",
    picture: HeroLogo.src,
  },
  {
    name: "Jennifer Zhu",
    position: "Marketing Director",
    classOf: "2026",
    picture: HeroLogo.src,
  },
  {
    name: "Shivane Dadi",
    position: "Marketing Director",
    classOf: "2026",
    picture: ShivaneDadi.src,
  },
  {
    name: "Ritam Saha",
    position: "Social Chair",
    classOf: "2027",
    picture: RitamSaha.src,
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
  {
    name: "Gabor Szita",
    position: "ACM Web Dev Website Developer",
    classOf: "2028",
    picture: GaborSzita.src,
  },
  {
    name: "Ken Thampiratwong",
    position: "ACM Web Dev Website Developer",
    classOf: "2027",
    picture: KenThampiratwong.src,
  },
  {
    name: "Omar Aboutaleb",
    position: "ACM Web Dev Website Developer",
    classOf: "2028",
    picture: OmarAboutaleb.src,
  },
];

export const Professors: TeamMember[] = [
  {
    name: "Ziad Matni",
    position: "Professor, Computer Science",
    picture: ZiadMatni.src,
  },
];
