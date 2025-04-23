import React from "react";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import TeamCard from "@/components/team/Card/TeamCard";
import { Typography } from "@mui/material";
import { OfficerTeam, OtherTeamMembers, Professors } from "@public/data/team";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col align-center">
        <Navbar />
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "black",
            marginTop: "30px",
          }}
        >
          Meet the Team
        </Typography>
        <section className="flex flex-col px-14">
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
              fontWeight: "bold",
              marginTop: "30px",
              marginBottom: "10px",
              color: "black",
            }}
          >
            Officers
          </Typography>
          <div className="flex flex-wrap justify-center">
            {[...OfficerTeam, ...OtherTeamMembers].map((officer) => (
              <TeamCard key={officer.name} member={officer} />
            ))}
          </div>
        </section>
        <section className="flex flex-col px-14">
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
              fontWeight: "bold",
              marginTop: "30px",
              marginBottom: "10px",
              color: "black",
            }}
          >
            Professors
          </Typography>
          <div className="flex flex-wrap justify-center">
            {Professors.map((professor) => (
              <TeamCard key={professor.name} member={professor} />
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
