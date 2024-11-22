import { Typography } from "@mui/material";

import HeroLogo from "@public/assets/HeroLogo.png";
import NameCard from "@/components/shared/NameCard/NameCard";

export default function MeetTheTeam() {
  const fake_data = [
    [
      {
        id: "1",
        name: "Foo Bar",
        position: "Board",
        img: HeroLogo,
      },
      {
        id: "2",
        name: "Sam Shu",
        position: "Board",
        img: "/assets/test1.avif",
      },
      {
        id: "2",
        name: "Sam Shu",
        position: "Board",
        img: "/assets/test1.avif",
      },
    ],
    [
      {
        id: "1",
        name: "Foo Bar",
        position: "Board",
        img: HeroLogo,
      },
    ],
  ];

  return (
    <div>
      <Typography
        variant="h2"
        align="center"
        sx={{
          fontSize: "1.75rem",
          marginBottom: "1rem",
          fontWeight: "bold",
        }}
      >
        Meet Our Team
      </Typography>
      <div className="mt-12 grid gap-12">
        {fake_data.map((people, index) => (
          <NameCard key={index} people={people} index={index}></NameCard>
        ))}
      </div>
    </div>
  );
}
