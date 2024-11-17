import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import React from "react";
import { Container, Typography } from "@mui/material";
import branchData from "../../../public/data/branchData";
import { BranchCard } from "@/components/landing/body/BranchSection/BranchCard";
import { Box } from "@mui/material";
import PageStyles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col align-center">
        <Container maxWidth="md">
          <Navbar />

          {/* STUB PAGE */}
          <Typography variant="h1" align="center" sx={{
            fontSize: "2rem",
            fontWeight: "bold"
          }}>About Us</Typography>

          <div style={{
            margin: "2%",
          }}>

<Typography
          variant="h2"
          align="center"
          sx={{
            fontSize: "1.75rem",
            marginBottom: "1rem",
            fontWeight: "bold"
          }}
        >
          What is ACM?
        </Typography>

        <Typography>
          ACM is a student-run Computer Science organization at UCSB. We do web development, research, and competitive programming.
        </Typography>

        <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: { xs: "2rem", md: "5rem" }, // Adds space above the icon
          paddingTop: { xs: "20rem", md: "30rem" }, // Responsive padding
        }}
      >
        <div className={`${PageStyles.arrow} ${PageStyles.arrowsecond}`}></div>
        <div className={`${PageStyles.arrow} ${PageStyles.arrowfirst}`}></div>
      </Box>

<br />

        <Typography
          variant="h2"
          align="center"
          sx={{
            fontSize: "1.75rem",
            marginBottom: "1rem",
            fontWeight: "bold"
          }}
        >
          How can I get involved?
        </Typography>

        <Typography>
          The best way to get involved is to join our Discord server, where we post information about events in the announcements channel.
        </Typography>

        <br></br>

          <Typography variant="h3" sx={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            marginBottom: "0.5rem"
          }}>Social Media</Typography>

          <Typography>
            Follow us on Instagram and join our Discord!
          </Typography>
          <div style={{
            display: "flex",
            gap: "2%"
          }}>
            <div style={{
              display: "grid",
              placeItems: "center"
            }}>
          <img src="/social-media/Instagram_Glyph_Gradient.svg" style={{
            height: "60px",
            padding: "10px"
          }}></img>
          <Typography>
            Instagram
          </Typography>
          </div>
            <div style={{
              display: "grid",
              placeItems: "center"
            }}>
<img src="/social-media/discord-mark-blue.svg" style={{
            height: "60px",
            padding: "10px"
          }}></img>
          <Typography>
            Discord
          </Typography></div>
          </div>


<br></br>
<Typography variant="h3" sx={{
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}>Branches</Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[2rem] md:gap-[5rem]">
          {branchData.map((branch, index) => (
            <BranchCard key={index} index={index} branch={branch} />
          ))}
        </div>
          </div>

          <Footer />
        </Container>
      </div>
    </main>
  );
}
