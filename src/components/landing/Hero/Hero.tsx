import { Grid, Typography, Button, Box, CardMedia } from "@mui/material";
import { ArrowRightAlt } from "@mui/icons-material";
import TypewriterText from "./TypewriterText";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Hero = () => {
  return (
    <Box sx={{ padding: "5rem", position: "relative" }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6} sx={{ zIndex: 2 }}>
          <div className="flex flex-col min-h-60">
            <Typography
              variant="h2"
              sx={{ fontWeight: "bold", color: "#222", paddingBottom: "10px" }}
            >
              UCSB&apos;s Premier <br /> Community of all things
            </Typography>

            <TypewriterText />
          </div>

          <Typography
            variant="body1"
            sx={{ color: "gray", paddingBottom: "10px" }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s
          </Typography>

          {/* TODO: Improve Button Styling */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#D65A31",
              color: "white",
              fontWeight: "bold",
              borderRadius: "30px",
              padding: "0.5rem 2rem",
            }}
            endIcon={<ArrowRightAlt />}
          >
            Get Involved
          </Button>
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
        <KeyboardArrowDownIcon
          sx={{
            color: "gray",
            fontSize: "5rem", // Adjust the size to make it bigger
            padding: "0.1rem", // Add some padding to create space around the icon
            borderRadius: "50%", // Make the background circular
            transition: "background-color 0.3s ease", // Smooth transition for the background color
            "&:hover": {
              backgroundColor: "#e0e0e0", // Light gray background on hover
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
