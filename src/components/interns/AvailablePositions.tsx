import React from "react";
import { Typography } from "@mui/material";
import { PositionCard } from "./PositionCard";

// Mocked data for available internship positions
const positionData = [
  {
    title: "Social Intern",
    description:
      "As an ACM social intern, you will be responsible for hosting 1-2 social events per quarter! You will have the opportunity to work with other interns/board members on planning activities and logistics for these socials!",
    img: "/images/webdev.png",
  },
  {
    title: "ICPC Co-Branch Head",
    description:
      "As an ACM ICPC branch head, you will be responsible for developing the technical interview part of the branch via workshops, mock interviews, and community-building.",
    img: "/images/research.png",
  },
  {
    title: "Sponsorships Intern",
    description:
      "As an ACM sponsorships intern, you’ll be responsible for helping raise money to run ACM! You will be collaborating with other branches to get sponsors for their events, and design the experience that sponsors have at our events.",
    img: "/images/icpc.png",
  },
  {
    title: "Treasury Intern",
    description:
      "As an ACM treasury intern, you’ll be responsible for handling matters related to recording, managing, and acquiring funding! You will get to have hands-on experience in requesting funds with Associated Students as well as handling reimbursements!",
    img: "/images/icpc.png",
  },
  {
    title: "Web Dev Branch Intern",
    description:
      "As an ACM web dev branch intern, you’ll either be responsible for helping plan and host some of our web dev workshops, or get hands-on experience managing and contributing to our website team!",
    img: "/images/icpc.png",
  },
  {
    title: "Marketing Intern",
    description:
      "As an ACM marketing intern, you might be responsible for developing and standardizing our design system, creating promotional content for our events, handling our social media, or building a discord bot to support our online community.",
    img: "/images/icpc.png",
  },
  {
    title: "Research Intern",
    description:
      "As an ACM research branch intern, you’ll be responsible for helping coordinate the logistics for research networking meetings and the research connect program.",
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
