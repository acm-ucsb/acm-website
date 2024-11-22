import { Container, Typography } from "@mui/material";

import HeroStyles from "./Hero.module.css";

export default function Hero() {
  function scrollDown() {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  }

  return (
    // Container to make top section full screen
    <div className="relative h-screen flex flex-col">
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
      <div
        onClick={scrollDown}
        className={`p-6 hover:cursor-pointer ${HeroStyles.arrow}`}
      ></div>
    </div>
  );
}
