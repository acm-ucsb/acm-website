import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import Link from "next/link";
import { Typography } from "@mui/material";
import branchData from "@public/data/branchData";
import { BranchBanner } from "@/components/landing/body/BranchSection/BranchBanner";
import { BranchCard } from "@/components/landing/body/BranchSection/BranchCard";
import { BranchCountdown } from "@/components/landing/body/BranchSection/BranchCountdown";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col align-center">
        <Navbar />
        <div className="flex flex-col items-center justify-center mb-[5rem]">
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{
              fontWeight: "bold",
              marginY: "64px",
              color: "black",
            }}
          >
            Branches
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "gray",
              paddingBottom: "40px",
              maxWidth: "50rem",
              fontWeight: "100",
              textAlign: "center",
            }}
          >
            ACM has four branches: ICPC, Research, Web Development, and
            Industry. Each branch holds independent events to support its unique
            mission.
          </Typography>
          <div className="flex flex-wrap justify-center gap-[2rem] md:gap-[5rem] mb-[7rem]">
            {branchData.map((branch, index) => (
              <Link href={`#${branch.name}`} key={index}>
                <BranchCard index={index} branch={branch} />
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-[2rem] md:gap-[5rem] w-screen">
            {branchData.map((branch, index) => (
              <BranchBanner
                key={index}
                id={branch.name}
                index={index}
                branch={branch}
              />
            ))}
          </div>
        </div>
        <BranchCountdown
          isNewBranch={false} // turn on and off component
          releaseDate={new Date("2024-11-23T00:00:00")} // date when branch will be revealed
          branchDataIndex={1} // index in array of branchData
        />
        <Footer />
      </div>
    </main>
  );
}
