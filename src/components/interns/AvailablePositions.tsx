import React from "react";
import { Typography } from "@mui/material";
import { PositionCard } from "./PositionCard";

// Mocked data for available internship positions
const positionData = [
  {
    title: "Web Development Intern",
    description:
      "Assist in building and maintaining websites with a focus on performance and accessibility.",
    img: "/images/webdev.png",
  },
  {
    title: "Research Intern",
    description:
      "Contribute to ongoing research projects and collaborate on innovative solutions.",
    img: "/images/research.png",
  },
  {
    title: "ICPC Preparation Intern",
    description:
      "Train and prepare for competitive programming contests with experienced mentors.",
    img: "/images/icpc.png",
  },
];

const AvailablePositions = () => {
  return (
    <section id="positions">
      <div className="flex flex-col items-center justify-center mb-24">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            marginY: "64px",
            color: "black",
          }}
        >
          Available Positions
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:px-[15rem] px-5">
          {positionData.map((position, index) => (
            <PositionCard key={index} position={position} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvailablePositions;
