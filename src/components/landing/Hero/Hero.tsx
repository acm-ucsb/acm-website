import { ArrowRightAlt } from "@mui/icons-material";
import { Box, Button, CardMedia, Typography } from "@mui/material";
import HeroStyles from "./Hero.module.css";
import TypewriterText from "./TypewriterText";

const Hero = () => {
  return (
    <Box
      sx={{
        paddingX: { xs: "2rem", md: "5rem" },
        paddingY: { xs: "2rem" },
        position: "relative",
      }}
    >
      {/* Content Container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Text Section */}
        <Box
          sx={{
            zIndex: 2,
            flex: 1,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <div className="flex flex-col min-h-60 pb-2 sm:px-5">
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                color: "#222",
                paddingBottom: "10px",
                fontSize: { xs: "3rem", md: "4rem" }, // Responsive font size
                lineHeight: { xs: "3rem", md: "5rem" }, // Responsive line height
              }}
            >
              UCSB&apos;s Premier <br /> Community Of All Things
            </Typography>

            <TypewriterText />
          </div>

          <Typography
            variant="body1"
            sx={{
              color: "gray",
              paddingY: "10px",
              fontSize: { xs: "0.875rem", md: "1rem" }, // Responsive font size
            }}
          >
            Welcome to the Association for Computing Machinery (ACM) Student
            Chapter at UCSB! We help students prepare for a career in
            technology.
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: "1rem",
              marginTop: "1.5rem",
              justifyContent: { xs: "center", md: "flex-start" }, // Center on mobile
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Button
              variant="contained"
              href="#events"
              sx={{
                backgroundColor: "#18A2F2",
                color: "white",
                fontWeight: "bold",
                borderRadius: "30px",
                padding: { xs: "0.5rem 1.5rem", md: "0.7rem 2.5rem" }, // Responsive padding
                textTransform: "none",
                fontSize: { xs: "0.875rem", md: "1rem" }, // Responsive font size
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
                padding: { xs: "0.5rem 1.5rem", md: "0.7rem 2.5rem" }, // Responsive padding
                textTransform: "none",
                fontSize: { xs: "0.875rem", md: "1rem" }, // Responsive font size
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
        </Box>

        {/* Image Section */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: { xs: "2rem", md: "0" }, // Add margin on mobile
            position: "relative",
          }}
        >
          <CardMedia
            component="img"
            src="/assets/ACM logo.png"
            alt="Hero Image"
            sx={{
              width: { xs: "0%", md: "90%" }, // Adjust the size of the image for different screen sizes
              maxWidth: "40rem",
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: { xs: "2rem", md: "3rem" }, // Adds space above the icon
          paddingTop: { xs: "10rem", md: "20rem" }, // Responsive padding
        }}
      >
        <div className={`${HeroStyles.arrow} ${HeroStyles.arrowfirst}`}></div>
        <div className={`${HeroStyles.arrow} ${HeroStyles.arrowsecond}`}></div>
      </Box>
    </Box>
  );
};

export default Hero;
