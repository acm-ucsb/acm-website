import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import NameCard from "@/components/shared/NameCard/NameCard";
import Hero from "@public/assets/HeroLogo.png";
import React from "react";
import { Container, Typography } from "@mui/material";
import branchData from "../../../public/data/branchData";
import { BranchCard } from "@/components/landing/body/BranchSection/BranchCard";
import { Box } from "@mui/material";
import PageStyles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const fake_data = [
    [
      {
        id: "1",
        name: "Foo Bar",
        position: "Board",
        img: Hero,
      },
      {
        id: "2",
        name: "Sam Shu",
        position: "Board",
        img: "/assets/test1.avif",
      },
      {
        id: "2",
        name: "Sam Shu",
        position: "Board",
        img: "/assets/test1.avif",
      },
    ],
    [
      {
        id: "1",
        name: "Foo Bar",
        position: "Board",
        img: Hero,
      },
    ],
  ];

  return (
    <main>
      {/*Container to make top section full screen */}
      <div className="relative h-screen flex flex-col">
        <Navbar />
        <Container className="grow" maxWidth="md">
          {/*Center content*/}
          <div className="h-[100%] flex flex-wrap justify-center content-center">
            <div className="h-fit">
              <div className="pb-[16vh]">
                <Typography
                  variant="h2"
                  align="center"
                  sx={{
                    fontSize: "1.75rem",
                    marginBottom: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  What is ACM?
                </Typography>

                <Typography>
                  ACM is a student-run Computer Science organization at UCSB. We
                  do web development, research, and competitive programming.
                </Typography>
              </div>
            </div>
          </div>
        </Container>
        <div className={`${PageStyles.arrow}`}></div>
      </div>

      <div className="mt-12 flex flex-col align-center">
        <Container maxWidth="md">
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontSize: "1.75rem",
              marginBottom: "1rem",
              fontWeight: "bold",
            }}
          >
            How can I get involved?
          </Typography>

          <Typography>
            The best way to get involved is to join our Discord server, where we
            post information about events in the announcements channel.
          </Typography>

          <br></br>

          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              marginBottom: "0.5rem",
            }}
          >
            Social Media
          </Typography>

          <Typography>Follow us on Instagram and join our Discord!</Typography>

          <div
            style={{
              display: "flex",
              gap: "2%",
            }}
          >
            <Link href={"https://www.instagram.com/acm.ucsb"}>
              <div
                style={{
                  display: "grid",
                  placeItems: "center",
                }}
                className="duration-300 ease-in-out hover:scale-105"
              >
                <img
                  src="/social-media/Instagram_Glyph_Gradient.svg"
                  style={{
                    height: "60px",
                    padding: "10px",
                  }}
                ></img>
                <Typography>Instagram</Typography>
              </div>
            </Link>
            <Link href={"https://discord.com/invite/p6rcUUjWaU"}>
              <div
                style={{
                  display: "grid",
                  placeItems: "center",
                }}
                className="duration-300 ease-in-out hover:scale-105"
              >
                <img
                  src="/social-media/discord-mark-blue.svg"
                  style={{
                    height: "60px",
                    padding: "10px",
                  }}
                ></img>
                <Typography>Discord</Typography>
              </div>
            </Link>
          </div>
          <div
            style={{
              height: "3rem",
            }}
          ></div>
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontSize: "1.75rem",
              marginBottom: "1rem",
              fontWeight: "bold",
            }}
          >
            Branches
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[2rem] md:gap-[5rem]">
            {branchData.map((branch, index) => (
              <BranchCard key={index} index={index} branch={branch} />
            ))}
          </div>
          <div
            style={{
              height: "3rem",
            }}
          ></div>
          <div>
            <Typography
              variant="h2"
              align="center"
              sx={{
                fontSize: "1.75rem",
                marginBottom: "1rem",
                fontWeight: "bold",
              }}
            >
              Meet Our Team
            </Typography>
            {fake_data.map((people, index) => (
              <NameCard key={index} people={people} index={index}></NameCard>
            ))}
          </div>
        </Container>
      </div>
      <Footer />
    </main>
  );
}
