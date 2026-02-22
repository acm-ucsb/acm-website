import React from "react";
import { Box, Typography } from "@mui/material";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";

const pillars = [
  {
    icon: <ExploreOutlinedIcon sx={{ fontSize: "2rem", color: "#18A2F2" }} />,
    title: "Explore Your Interests",
    description:
      "Discover what excites you in tech — from the practical to theoretical, and beyond.",
  },
  {
    icon: <BuildOutlinedIcon sx={{ fontSize: "2rem", color: "#18A2F2" }} />,
    title: "Hands-on Projects",
    description:
      "Build real-world experience through full-stack development and collaborative project series.",
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: "2rem", color: "#18A2F2" }} />,
    title: "Career Preparation",
    description:
      "Gain exposure to diverse career paths in tech through workshops, projects, and mentorship.",
  },
  {
    icon: <PeopleOutlineIcon sx={{ fontSize: "2rem", color: "#18A2F2" }} />,
    title: "Community & Network",
    description:
      "Join a strong network of students, faculty, and professionals who support each other's growth.",
  },
];

const AboutBlurb = () => {
  return (
    <section id="about" className="scroll-mt-36">
      <div className="w-full max-w-5xl mx-auto px-6 pb-16">
        {/* Heading + intro */}
        <FadeInOnScroll>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "black", marginY: "64px" }}
          >
            Our Mission
          </Typography>
          <Typography variant="h6" sx={{ color: "gray", fontWeight: "normal" }}>
            ACM at UCSB is a student-run organization that fosters a community
            for students passionate about Computer Science — helping them build
            real-world skills, explore career paths, and have fun following
            their passion.
          </Typography>
        </FadeInOnScroll>

        {/* Pillar cards */}
        <Box
          sx={{
            display: "grid",
            mt: 8,
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
            gap: 3,
            width: "100%",
          }}
        >
          {pillars.map(({ icon, title, description }, i) => (
            <FadeInOnScroll key={title} delay={i * 80} className="h-full">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.5,
                  p: 4,
                  height: "100%",
                  borderRadius: "16px",
                  backgroundColor: "#fff",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
                  borderTop: "5px solid #18A2F2",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 8px 32px rgba(24,162,242,0.25)",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 48,
                    height: 48,
                    borderRadius: "12px",
                    backgroundColor: "#EFF8FF",
                    mb: 0.5,
                  }}
                >
                  {icon}
                </Box>
                <Typography
                  sx={{ fontWeight: "700", fontSize: "1.1rem", color: "black" }}
                >
                  {title}
                </Typography>
                <Typography
                  sx={{ color: "gray", fontSize: "0.95rem", lineHeight: 1.6 }}
                >
                  {description}
                </Typography>
              </Box>
            </FadeInOnScroll>
          ))}
        </Box>
      </div>
    </section>
  );
};

export default AboutBlurb;
