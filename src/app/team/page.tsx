import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import TeamCard from "@/components/team/Card/TeamCard";
import { Typography } from "@mui/material";
import { OfficerTeam, Professors } from "@public/data/team";

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
          }}
        >
          Meet the Team
        </Typography>
        <section>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
              fontWeight: "bold",
              marginY: "20px",
              color: "black",
            }}
          >
            Officers
          </Typography>
          {OfficerTeam.map((officer) => (
            <TeamCard key={officer.name} member={officer} />
          ))}
        </section>
        <section>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
              fontWeight: "bold",
              marginY: "20px",
              color: "black",
            }}
          >
            Professors
          </Typography>
          {Professors.map((professor) => (
            <TeamCard key={professor.name} member={professor} />
          ))}
        </section>

        <Footer />
      </div>
    </main>
  );
}
