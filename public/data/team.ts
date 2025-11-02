export type TeamMember = {
  name: string;
  position: string;
  picture: string;
  classOf?: string;
  branch?: string;
};

export type BranchInfo = {
  name: string;
  color: string;
  icon: string;
  order: number;
};

export type TeamYear = {
  academicYear: string;
  officers: TeamMember[];
  professors: TeamMember[];
};

// import HeroLogo from "@public/assets/HeroLogo.png";

// Branch Images
import BoardIcon from "@public/assets/ACM logo.png";
import ICPCIcon from "@public/assets/branchImages/icpc.png";
import ResearchIcon from "@public/assets/branchImages/research.png";
import WebDevIcon from "@public/assets/branchImages/dev.png";
import IndustryIcon from "@public/assets/branchImages/industry.png";
// import MarketingIcon from "@public/assets/ACM logo.png";

// Professor Images
import ZiadMatni from "@public/assets/teamImages/ZiadMatni.png";
import DanielLokshtanov from "@public/assets/teamImages/DanielLokshtanov.png";
import LingqiYan from "@public/assets/teamImages/LingqiYan.png";

// Team Images - 2024-2025
// import RohanKumar from "@public/assets/teamImages/2024-2025/RohanKumar.jpg";
// import DavidWang from "@public/assets/teamImages/2024-2025/DavidWang.jpg";
// import ZeelPatel from "@public/assets/teamImages/2024-2025/ZeelPatel.jpeg";
// // import AarushNarang from "@public/assets/teamImages/2024-2025/AarushNarang.jpeg";
// import JeffreyKeem from "@public/assets/teamImages/2024-2025/JeffreyKeem.jpg";
// import BobbyChavez from "@public/assets/teamImages/2024-2025/JuanChavez.png";
// // import DonTran from "@public/assets/teamImages/2024-2025/DonTran.jpg";
// import AnitAnnadi from "@public/assets/teamImages/2024-2025/AnitAnnadi.jpeg";
// // import JohnVu from "@public/assets/teamImages/2024-2025/JohnVu.jpeg";
// import RohilShah from "@public/assets/teamImages/2024-2025/RohilShah.jpg";
// import KanavArora from "@public/assets/teamImages/2024-2025/KanavArora.jpg";
// // import EugeneWong from "@public/assets/teamImages/2024-2025/EugeneWong.jpg";
// import SamuelZhu from "@public/assets/teamImages/2024-2025/SamuelZhu.jpeg";
// // import DenizLapsekili from "@public/assets/teamImages/2024-2025/DenizLapsekili.jpeg";
// // import ShivaneDadi from "@public/assets/teamImages/2024-2025/ShivaneDadi.jpg";
// import RitamSaha from "@public/assets/teamImages/2024-2025/RitamSaha.png";
// import GaborSzita from "@public/assets/teamImages/2024-2025/GaborSzita.jpg";
// // import KenThampiratwong from "@public/assets/teamImages/2024-2025/KenThampiratwong.jpeg";
// import OmarAboutaleb from "@public/assets/teamImages/2024-2025/OmarAboutaleb.png";
// import KarenaLai from "@public/assets/teamImages/2024-2025/KarenaLai.png";

// Team Images - 2025-2026
import ShivaneDadi from "@public/assets/teamImages/2025-2026/ShivaneDadi.jpg";
import JiamingLiu from "@public/assets/teamImages/2025-2026/JiamingLiu.jpg";
import HenryZhao from "@public/assets/teamImages/2025-2026/HenryZhao.jpg";
import DonTran from "@public/assets/teamImages/2025-2026/DonTran.jpg";
import HubertGuan from "@public/assets/teamImages/2025-2026/HubertGuan.jpeg";
import AmanDesai from "@public/assets/teamImages/2025-2026/AmanDesai.jpg";
import DanielCui from "@public/assets/teamImages/2025-2026/DanielCui.jpg";
import GurneetBains from "@public/assets/teamImages/2025-2026/GurneetBains.jpeg";
import AbielaSarrieddine from "@public/assets/teamImages/2025-2026/AbielaSarrieddine.jpeg";
import SachitMadaan from "@public/assets/teamImages/2025-2026/SachitMadaan.jpeg";
import AnikaChoudhary from "@public/assets/teamImages/2025-2026/AnikaChoudhary.jpeg";
import DivyaSubramonian from "@public/assets/teamImages/2025-2026/DivyaSubramonian.jpg";
import AditSuman from "@public/assets/teamImages/2025-2026/AditSuman.jpeg";
import KelvinJou from "@public/assets/teamImages/2025-2026/KelvinJou.png";
import ShreyaChati from "@public/assets/teamImages/2025-2026/ShreyaChati.jpg";
import EzraDurtadoTiwari from "@public/assets/teamImages/2025-2026/EzraFurtado-Tiwari.jpg";
import JohnVu from "@public/assets/teamImages/2025-2026/JohnVu.jpeg";
import AarushNarang from "@public/assets/teamImages/2025-2026/AarushNarang.jpeg";
import JuliannaFlores from "@public/assets/teamImages/2025-2026/JuliannaFlores.jpg";
import LukeHerbelin from "@public/assets/teamImages/2025-2026/LukeHerbelin.jpeg";
import MitulMarimuthu from "@public/assets/teamImages/2025-2026/MitulMarimuthu.jpeg";
import DhruvPatel from "@public/assets/teamImages/2025-2026/DhruvPatel.jpeg";
import AryanVashishta from "@public/assets/teamImages/2025-2026/AryanVashishta.jpeg";
import DemiraThaker from "@public/assets/teamImages/2025-2026/DemiraThaker.jpg";
import EugeneWong from "@public/assets/teamImages/2025-2026/EugeneWong.jpg";
import TylerLe from "@public/assets/teamImages/2025-2026/TylerLe.png";
import SanjanaBhupathi from "@public/assets/teamImages/2025-2026/SanjanaBhupathi.png";
import MaitriAllani from "@public/assets/teamImages/2025-2026/MaitriAllani.jpg";
import KenThampiratwong from "@public/assets/teamImages/2025-2026/KenThampiratwong.jpg";
import AryanGautam from "@public/assets/teamImages/2025-2026/AryanGautam.jpeg";

export const Branches: BranchInfo[] = [
  {
    name: "Board",
    color: "#60a5fa", // Lighter blue from ACM logo
    icon: BoardIcon.src,
    order: 1,
  },
  {
    name: "Industry",
    color: "#2f6c7c", // Darker teal-blue from logo
    icon: IndustryIcon.src,
    order: 2,
  },
  {
    name: "Development",
    color: "#16a34a", // Green
    icon: WebDevIcon.src,
    order: 3,
  },
  {
    name: "ICPC",
    color: "#dc2626", // Red
    icon: ICPCIcon.src,
    order: 4,
  },
  {
    name: "Research",
    color: "#eab308", // Yellow
    icon: ResearchIcon.src,
    order: 5,
  },
  // {
  //   name: "Marketing",
  //   color: "#ea580c", // Orange
  //   icon: MarketingIcon.src,
  //   order: 6,
  // },
];

// current year
export const CurrentTeam: TeamYear = {
  academicYear: "2025-2026",
  officers: [
    {
      name: "Eugene Wong",
      position: "Co-President",
      classOf: "2026",
      branch: "Board",
      picture: EugeneWong.src,
    },
    {
      name: "Jiaming Liu",
      position: "Vice President",
      classOf: "2027",
      branch: "Board",
      picture: JiamingLiu.src,
    },
    {
      name: "Aryan Vashishta",
      position: "Treasury Officer",
      classOf: "2028",
      branch: "Board",
      picture: AryanVashishta.src,
    },
    {
      name: "Tyler Le",
      position: "Treasury Officer",
      classOf: "2028",
      branch: "Board",
      picture: TylerLe.src,
    },
    {
      name: "Demira Thaker",
      position: "Marketing Director",
      classOf: "2027",
      branch: "Board",
      picture: DemiraThaker.src,
    },
    {
      name: "Shivane Dadi",
      position: "Marketing Director",
      classOf: "2026",
      branch: "Board",
      picture: ShivaneDadi.src,
    },
    {
      name: "Gurneet Bains",
      position: "Marketing Officer",
      classOf: "2028",
      branch: "Board",
      picture: GurneetBains.src,
    },
    {
      name: "Maitri Allani",
      position: "Marketing Officer",
      classOf: "2028",
      branch: "Board",
      picture: MaitriAllani.src,
    },
    {
      name: "Abiela Sarrieddine",
      position: "Social Director",
      classOf: "2028",
      branch: "Board",
      picture: AbielaSarrieddine.src,
    },
    {
      name: "Henry Zhao",
      position: "Social Director",
      classOf: "2028",
      branch: "Board",
      picture: HenryZhao.src,
    },
    {
      name: "Anika Choudhary",
      position: "Sponsorships Director",
      classOf: "2028",
      branch: "Board",
      picture: AnikaChoudhary.src,
    },
    {
      name: "Divya Subramonian",
      position: "Sponsorships Director",
      classOf: "2027",
      branch: "Board",
      picture: DivyaSubramonian.src,
    },
    {
      name: "Shreya Chati",
      position: "Social Officer",
      classOf: "2028",
      branch: "Board",
      picture: ShreyaChati.src,
    },
    {
      name: "Aarush Narang",
      position: "Co-President",
      classOf: "2028",
      branch: "Development",
      picture: AarushNarang.src,
    },
    {
      name: "John Vu",
      position: "Co-President",
      classOf: "2027",
      branch: "Development",
      picture: JohnVu.src,
    },
    {
      name: "Don Tran",
      position: "Co-Vice President",
      classOf: "2028",
      branch: "Development",
      picture: DonTran.src,
    },
    {
      name: "Ken Thampiratwong",
      position: "Co-Vice President",
      classOf: "2027",
      branch: "Development",
      picture: KenThampiratwong.src,
    },
    {
      name: "Mitul Marimuthu",
      position: "Officer",
      classOf: "2028",
      branch: "Development",
      picture: MitulMarimuthu.src,
    },
    {
      name: "Dhruv Patel",
      position: "Officer",
      classOf: "2027",
      branch: "Development",
      picture: DhruvPatel.src,
    },
    {
      name: "Daniel Cui",
      position: "Officer",
      classOf: "2028",
      branch: "Development",
      picture: DanielCui.src,
    },
    {
      name: "Hubert Guan",
      position: "Co-President",
      classOf: "2028",
      branch: "Research",
      picture: HubertGuan.src,
    },
    {
      name: "Adit Suman",
      position: "Co-President",
      classOf: "2026",
      branch: "Research",
      picture: AditSuman.src,
    },
    {
      name: "Kelvin Jou",
      position: "Officer",
      classOf: "2028",
      branch: "Research",
      picture: KelvinJou.src,
    },
    {
      name: "Aryan Gautam",
      position: "Officer",
      classOf: "2028",
      branch: "Research",
      picture: AryanGautam.src,
    },
    {
      name: "Luke Herbelin",
      position: "Officer",
      classOf: "2028",
      branch: "Research",
      picture: LukeHerbelin.src,
    },
    {
      name: "Aman Desai",
      position: "President",
      classOf: "2027",
      branch: "Industry",
      picture: AmanDesai.src,
    },
    {
      name: "Sachit Madaan",
      position: "Outreach Director",
      classOf: "2028",
      branch: "Industry",
      picture: SachitMadaan.src,
    },
    {
      name: "Julianna Flores",
      position: "Marketing Director",
      classOf: "2027",
      branch: "Industry",
      picture: JuliannaFlores.src,
    },
    {
      name: "Sanjana Bhupathi",
      position: "Marketing Co-President",
      classOf: "2028",
      branch: "Industry",
      picture: SanjanaBhupathi.src,
    },
    {
      name: "Ezra Durtado-Tiwari",
      position: "President",
      classOf: "2028",
      branch: "ICPC",
      picture: EzraDurtadoTiwari.src,
    },
  ],
  professors: [
    {
      name: "Ziad Matni",
      position: "Professor, Computer Science",
      picture: ZiadMatni.src,
    },
    {
      name: "Daniel Lokshtanov",
      position: "Professor & Vice Chair, Computer Science",
      picture: DanielLokshtanov.src,
    },
    {
      name: "Lingqi Yan",
      position: "Associate Professor, Computer Science",
      picture: LingqiYan.src,
    },
  ],
};

// Archive: 2024-2025 Academic Year
// export const Team2024_2025: TeamYear = {
//   academicYear: "2024-2025",
//   officers: [
//     {
//       name: "Rohil Shah",
//       position: "Co-President",
//       classOf: "2026",
//       picture: RohilShah.src,
//     },
//     {
//       name: "Kanav Arora",
//       position: "Co-President",
//       classOf: "2026",
//       picture: KanavArora.src,
//     },
//     {
//       name: "Zeel Patel",
//       position: "Secretary",
//       classOf: "2026",
//       picture: ZeelPatel.src,
//     },
//     {
//       name: "Eugene Wong",
//       position: "Treasurer",
//       classOf: "2026",
//       picture: EugeneWong.src,
//     },
//     {
//       name: "David Wang",
//       position: "Senior Advisor",
//       classOf: "2025",
//       picture: DavidWang.src,
//     },
//     {
//       name: "Rohan Kumar",
//       position: "Co-Head of Web Development",
//       classOf: "2025",
//       picture: RohanKumar.src,
//     },
//     {
//       name: "Samuel Zhu",
//       position: "Co-Head of Web Development",
//       classOf: "2026",
//       picture: SamuelZhu.src,
//     },
//     {
//       name: "Wesley Hung",
//       position: "ICPC Branch Head",
//       classOf: "2025",
//       picture: HeroLogo.src,
//     },
//     {
//       name: "Ezra Furtado-Tiwari",
//       position: "ICPC Branch Head",
//       classOf: "2028",
//       picture: HeroLogo.src,
//     },
//     {
//       name: "Deniz Lapsekili",
//       position: "Research Branch Head",
//       classOf: "2027",
//       picture: DenizLapsekili.src,
//     },
//     {
//       name: "Edison Zhang",
//       position: "Build Branch Head",
//       classOf: "2025",
//       picture: HeroLogo.src,
//     },
//     {
//       name: "Jeremi Nuer",
//       position: "Build Branch Head",
//       classOf: "2026",
//       picture: HeroLogo.src,
//     },
//     {
//       name: "Jennifer Zhu",
//       position: "Marketing Director",
//       classOf: "2026",
//       picture: HeroLogo.src,
//     },
//     {
//       name: "Shivane Dadi",
//       position: "Marketing Director",
//       classOf: "2026",
//       picture: ShivaneDadi.src,
//     },
//     {
//       name: "Ritam Saha",
//       position: "Social Chair",
//       classOf: "2027",
//       picture: RitamSaha.src,
//     },
//     {
//       name: "Aarush Narang",
//       position: "ACM Web Dev Website Developer",
//       classOf: "2028",
//       picture: AarushNarang.src,
//     },
//     {
//       name: "Jeffrey Keem",
//       position: "ACM Web Dev Website Developer",
//       classOf: "2027",
//       picture: JeffreyKeem.src,
//     },
//     {
//       name: "Bobby Chavez",
//       position: "ACM Web Dev Website Developer",
//       classOf: "2027",
//       picture: BobbyChavez.src,
//     },
//     {
//       name: "Don Tran",
//       position: "ACM Web Dev Website Developer",
//       classOf: "2028",
//       picture: DonTran.src,
//     },
//     {
//       name: "Anit Annadi",
//       position: "ACM Web Dev Website Developer",
//       classOf: "2028",
//       picture: AnitAnnadi.src,
//     },
//     {
//       name: "John Vu",
//       position: "ACM Web Dev Website Developer",
//       classOf: "2027",
//       picture: JohnVu.src,
//     },
//     {
//       name: "Gabor Szita",
//       position: "ACM Web Dev Website Developer",
//       classOf: "2028",
//       picture: GaborSzita.src,
//     },
//     {
//       name: "Ken Thampiratwong",
//       position: "ACM Web Dev Website Developer",
//       classOf: "2027",
//       picture: KenThampiratwong.src,
//     },
//     {
//       name: "Omar Aboutaleb",
//       position: "ACM Web Dev Website Developer",
//       classOf: "2028",
//       picture: OmarAboutaleb.src,
//     },
//     {
//       name: "Karena Lai",
//       position: "ACM Web Dev Website Developer",
//       classOf: "2027",
//       picture: KarenaLai.src,
//     },
//   ],
//   professors: [
//     {
//       name: "Ziad Matni",
//       position: "Professor, Computer Science",
//       picture: ZiadMatni.src,
//     },
//     {
//       name: "Daniel Lokshtanov",
//       position: "Professor & Vice Chair, Computer Science",
//       picture: DanielLokshtanov.src,
//     },
//     {
//       name: "Lingqi Yan",
//       position: "Associate Professor, Computer Science",
//       picture: LingqiYan.src,
//     },
//   ],
// };

// Group team members by branch
export const getTeamMembersByBranch = (
  team: TeamYear,
): Record<string, TeamMember[]> => {
  const grouped: Record<string, TeamMember[]> = {};

  Branches.forEach((branch) => {
    grouped[branch.name] = [];
  });

  team.officers.forEach((member) => {
    if (member.branch && grouped[member.branch]) {
      grouped[member.branch].push(member);
    }
  });

  return grouped;
};
