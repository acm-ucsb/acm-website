import { Branch } from "@public/data/branchData";
import React from "react";
import Image from "next/image";
import { Typography } from "@mui/material";

interface BranchCardProps {
  branch: Branch;
  index: number;
}

export function BranchCard(props: BranchCardProps) {
  const { branch, index } = props;
  return (
    <div
      key={index}
      className="flex flex-col items-center justify-center m-6 gap-3 transition-transform duration-300 ease-in-out hover:scale-105"
    >
      <div className="flex items-center gap-1 md:gap-2">
        <Image src={branch.img} alt={branch.name} width={100} />
        <Typography
          variant="h4"
          sx={{
            fontWeight: "700",
            color: "black",
            fontSize: {
              xs: "1.75rem",
              sm: "1.75rem",
              md: "2rem",
              lg: "2.25rem",
            },
          }}
        >
          acm.
          <span
            style={{
              backgroundImage: `linear-gradient(to right, ${branch.branchColors.join(", ")})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            {branch.suffix}
          </span>
        </Typography>
      </div>
    </div>
  );
}
