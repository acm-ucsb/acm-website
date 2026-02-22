"use client";
import React from "react";
import { ArrowRightAlt } from "@mui/icons-material";
import { Box, Button, CardMedia, Typography } from "@mui/material";
import TypewriterText from "./TypewriterText";

const Hero = () => {
  return (
    <Box
      sx={{
        paddingX: { xs: "2rem", md: "5rem" },
        paddingTop: "2rem",
        paddingBottom: { xs: "5rem", md: "20rem" },
        position: "relative",
        minHeight: { xs: "calc(100svh - 70px)", md: "auto" },
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Content Container — flex: 1 so it fills space above the arrow */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: { xs: "center", md: "flex-start" },
          paddingTop: { xs: 0, md: "2rem" },
        }}
      >
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
              textAlign: "left",
            }}
          >
            <div className="flex flex-col lg:min-h-60 pb-2">
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "bold",
                  color: "#222",
                  paddingBottom: "10px",
                  fontSize: { xs: "3.2rem", md: "4rem" },
                  lineHeight: { xs: "3rem", md: "5rem" },
                }}
              >
                UCSB&apos;s Premier Community Of All Things
              </Typography>

              <TypewriterText />
            </div>

            <Typography
              variant="body1"
              sx={{
                color: "gray",
                paddingY: "10px",
                fontSize: { xs: "1.1rem", md: "1rem" },
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
                flexDirection: { xs: "column", md: "row", lg: "row" },
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
                  padding: { xs: "0.5rem 1.5rem", md: "0.7rem 2.5rem" },
                  textTransform: "none",
                  fontSize: { xs: "0.875rem", md: "1rem" },
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  flex: { xs: 1, lg: "unset" },
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
                  padding: { xs: "0.5rem 1.5rem", md: "0.7rem 2.5rem" },
                  textTransform: "none",
                  fontSize: { xs: "0.875rem", md: "1rem" },
                  flex: { xs: 1, lg: "unset" },
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
              marginTop: { xs: "2rem", md: "0" },
              position: "relative",
            }}
          >
            <CardMedia
              component="img"
              src="/assets/ACM logo.png"
              alt="Hero Image"
              sx={{
                width: { xs: "0%", md: "80%" },
                maxWidth: "40rem",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
