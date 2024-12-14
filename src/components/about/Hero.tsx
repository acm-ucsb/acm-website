import { Container, Typography } from "@mui/material";

import HeroStyles from "./Hero.module.css";
import React from "react";

export default function Hero() {
  function scrollDown() {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  }

  return (
    // Container to make top section full screen
    <div
      className="h-screen flex flex-col"
      style={{
        backgroundImage: `url('/assets/About Us background.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container className="grow" maxWidth="md">
        {/*Center content*/}
        <div className="h-[100%] flex flex-wrap justify-center content-center">
          <div
            className="h-fit"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              padding: "2rem",
              borderRadius: "2rem",
            }}
          >
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

            <Typography
              sx={{
                fontWeight: "bold",
              }}
            >
              ACM at UCSB is a student-run organization that aims to support
              students interested in Computer Science by fostering a community
              of individuals who seek to learn from each other. Specifically, we
              create a place for students to prepare for a career in CS through
              hands-on experience developing real-world projects; gain exposure
              to a wide range of career paths within technology; network with
              faculty, graduate students, and professionals; pursue competitive
              programming opportunities; and ultimately have fun following their
              passion.
            </Typography>
          </div>
        </div>
      </Container>
      <div
        onClick={scrollDown}
        className={`p-6 hover:cursor-pointer ${HeroStyles.arrow}`}
      ></div>
    </div>
  );
}
