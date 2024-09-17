import { ArrowRightAlt } from "@mui/icons-material";
import { Box, Button, CardMedia, Grid, Typography } from "@mui/material";
import HeroStyles from "./Hero.module.css";
import TypewriterText from "./TypewriterText";

const Hero = () => {
  return (
    <Box sx={{ padding: "5rem", position: "relative" }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6} sx={{ zIndex: 2 }}>
          <div className="flex flex-col min-h-60 pb-2">
            <Typography
              variant="h2"
              sx={{ fontWeight: "bold", color: "#222", paddingBottom: "10px" }}
            >
              UCSB&apos;s Premier <br /> Community Of All Things
            </Typography>

            <TypewriterText />
          </div>

          <Typography
            variant="body1"
            sx={{ color: "gray", paddingBottom: "10px" }}
          >
            Welcome to the Association for Computing Machinery (ACM) Student
            Chapter at UCSB! We help students prepare for a career in
            technology.
          </Typography>

          <Box sx={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
            <Button
              variant="contained"
              href="#events"
              sx={{
                backgroundColor: "#18A2F2",
                color: "white",
                fontWeight: "bold",
                borderRadius: "30px",
                padding: "0.7rem 2.5rem",
                textTransform: "none",
                fontSize: "1rem",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                "&:hover": {
                  backgroundColor: "#0868A0",
                  boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)",
                },
              }}
              endIcon={<ArrowRightAlt />}
            >
              Events
            </Button>

            <Button
              variant="outlined"
              href="#about"
              sx={{
                borderColor: "#18A2F2",
                color: "#18A2F2",
                fontWeight: "bold",
                borderRadius: "30px",
                padding: "0.7rem 2.5rem",
                textTransform: "none",
                fontSize: "1rem",
                "&:hover": {
                  borderColor: "#0868A0",
                  color: "#0868A0",
                  backgroundColor: "rgba(0, 0, 0, 0.025)",
                },
              }}
            >
              Who We Are
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} sx={{ position: "relative" }}>
          {/* Placeholder Image */}
          <Box
            sx={{
              textAlign: "center",
              position: "absolute",
              top: "-12rem", // Adjust to control vertical overlap
              left: "4rem", // Adjust to control horizontal overlap
              zIndex: 1,
            }}
          >
            <CardMedia
              component="img"
              src="/assets/HeroLogo.png"
              alt="Hero Image"
              sx={{
                width: "120%",
                maxWidth: "40rem",
                margin: "0 auto",
              }}
            />
          </Box>
        </Grid>
      </Grid>

      {/* Centered Icon with Space Above */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center", // Center horizontally
          marginTop: "3rem", // Adds space above the icon
          paddingTop: "20rem",
        }}
      >
        <div className={`${HeroStyles.arrow} ${HeroStyles.arrowfirst}`}></div>
        <div className={`${HeroStyles.arrow} ${HeroStyles.arrowsecond}`}></div>
      </Box>
    </Box>
  );
};

export default Hero;
