import { Typography } from "@mui/material";

import NameCard from "@/components/shared/NameCard/NameCard";
import { OfficerTeam } from "@public/data/team";
import { useEffect, useState } from "react";
import React from "react";
import { People } from "@/components/shared/NameCard/NameCard";

export default function MeetTheTeam() {
  const [data, setData] = useState<[People[]]>([[]]);
  useEffect(() => {
    let idxCounter = 0;
    const dat: [People[]] = [[]];
    let arr: People[] = [];
    OfficerTeam.forEach((elem) => {
      arr.push({
        name: elem.name,
        position: elem.position,
        img: elem.picture,
      });
      if (idxCounter == 2) {
        dat.push(arr);
        arr = [];
        idxCounter = 0;
      } else {
        idxCounter++;
      }
    });
    if (arr.length > 0) {
      dat.push(arr);
    }
    setData(dat);
  }, []);

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
        {data.map((people, index) => (
          <NameCard key={index} people={people} index={index}></NameCard>
        ))}
      </div>
    </div>
  );
}
