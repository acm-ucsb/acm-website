import React from "react";
import { Typography, Box, Chip, Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";

const highlights = [
  { icon: <PeopleOutlineIcon />, label: "Talented CS community" },
  { icon: <LightbulbOutlinedIcon />, label: "Propose your own initiatives" },
  { icon: <BuildOutlinedIcon />, label: "Hands-on experience" },
  { icon: <SchoolOutlinedIcon />, label: "Big/Little mentorship" },
  { icon: <TrendingUpIcon />, label: "Real-world club impact" },
];

const taglines = [
  "Get hands-on experience across the club.",
  "Bring your own ideas to the table.",
  "Build your path to leadership.",
];

const fadeIn = (delay: string) => ({
  animation: "heroFadeIn 0.6s ease forwards",
  animationDelay: delay,
  opacity: 0,
  "@keyframes heroFadeIn": {
    from: { opacity: 0, transform: "translateY(18px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
});

export const InternHeroSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "calc(100vh - 5vh)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        px: { xs: 4, md: 8 },
        background:
          "radial-gradient(ellipse at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 55%), linear-gradient(135deg, #253985 0%, #18A2F2 100%)",
      }}
    >
      {/* Two-column content */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 6, lg: 12 },
          py: 8,
        }}
      >
        {/* Left: text */}
        <Box
          sx={{
            flex: 1,
            maxWidth: { lg: "560px" },
            display: "flex",
            flexDirection: "column",
            gap: 3,
            alignItems: { xs: "center", lg: "flex-start" },
          }}
        >
          <Chip
            label="ACM @ UCSB · Winter 2026"
            sx={{
              backgroundColor: "rgba(24,162,242,0.15)",
              color: "#7dd3fc",
              fontWeight: "600",
              fontSize: "0.8rem",
              border: "1px solid rgba(24,162,242,0.35)",
              ...fadeIn("0s"),
            }}
          />
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              color: "white",
              lineHeight: 1.15,
              textAlign: { xs: "center", lg: "left" },
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              ...fadeIn("0.15s"),
            }}
          >
            Join ACM
            <br />
            as an Intern!
          </Typography>

          {/* Punchy taglines */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
              alignItems: { xs: "center", lg: "flex-start" },
              ...fadeIn("0.3s"),
            }}
          >
            {taglines.map((line) => (
              <Box
                key={line}
                sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
              >
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    backgroundColor: "#18A2F2",
                    flexShrink: 0,
                  }}
                />
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.92)",
                    fontWeight: "400",
                    fontSize: "1rem",
                    lineHeight: 1.6,
                  }}
                >
                  {line}
                </Typography>
              </Box>
            ))}
          </Box>

          <Button
            variant="contained"
            href="https://forms.gle/KHcjx1gyV6JGQCeFA"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: "white",
              color: "#253985",
              fontWeight: "bold",
              borderRadius: "30px",
              padding: { xs: "0.5rem 1.5rem", md: "0.7rem 2.5rem" },
              textTransform: "none",
              fontSize: "1rem",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
              alignSelf: { xs: "center", lg: "flex-start" },
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.88)",
                boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
              },
              ...fadeIn("0.4s"),
            }}
          >
            Apply Now
          </Button>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.35)",
              fontSize: "0.85rem",
              textAlign: { xs: "center", lg: "left" },
              ...fadeIn("0.45s"),
            }}
          >
            Applications close March 3rd · Decisions announced Spring Break
          </Typography>
        </Box>

        {/* Right: glassmorphism highlights card */}
        <Box
          sx={{
            width: { xs: "90%", sm: "480px", lg: "360px" },
            background: "rgba(255,255,255,0.07)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderRadius: "20px",
            padding: "2rem",
            border: "1px solid rgba(255,255,255,0.12)",
            display: "flex",
            flexDirection: "column",
            gap: 2.5,
            flexShrink: 0,
            ...fadeIn("0.2s"),
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: "rgba(255, 255, 255, 0.84)",
              fontWeight: "600",
              letterSpacing: "0.15em",
            }}
          >
            What you&apos;ll get
          </Typography>
          {highlights.map(({ icon, label }) => (
            <Box
              key={label}
              sx={{ display: "flex", alignItems: "center", gap: 2 }}
            >
              <Box
                sx={{
                  color: "white",
                  backgroundColor: "rgba(255,255,255,0.15)",
                  borderRadius: "10px",
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  border: "1px solid rgba(255,255,255,0.25)",
                }}
              >
                {icon}
              </Box>
              <Typography
                sx={{
                  fontWeight: "400",
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "1rem",
                }}
              >
                {label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Scroll arrow */}
      <Box
        component="button"
        onClick={() =>
          document
            .getElementById("positions")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        sx={{
          display: "flex",
          justifyContent: "center",
          pb: 6,
          color: "rgba(255,255,255,0.75)",
          animation:
            "bounce 2s infinite 0.6s, heroFadeIn 0.6s ease forwards 0.55s",
          opacity: 0,
          background: "none",
          border: "none",
          cursor: "pointer",
          "&:hover": { color: "white" },
          "@keyframes heroFadeIn": {
            from: { opacity: 0, transform: "translateY(18px)" },
            to: { opacity: 1, transform: "translateY(0)" },
          },
          "@keyframes bounce": {
            "0%, 100%": { transform: "translateY(0)", animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)" },
            "50%": { transform: "translateY(-14px)", animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)" },
          },
        }}
      >
        <KeyboardArrowDownIcon sx={{ fontSize: "3.5rem" }} />
      </Box>
    </Box>
  );
};
