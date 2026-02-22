import { Branch } from "@public/data/branchData";
import React from "react";
import Image from "next/image";
import { Typography } from "@mui/material";

interface BranchCardProps {
  branch: Branch;
  index: number;
}

export function BranchCard({ branch, index }: BranchCardProps) {
  return (
    <div
      key={index}
      className="flex flex-col items-start gap-3 p-12 rounded-2xl h-full bg-white shadow-md transition-all duration-200 hover:shadow-xl"
      style={{ borderLeft: `6px solid ${branch.branchColors[0]}` }}
    >
      {/* Logo + right column (name + tagline) */}
      <div className="flex items-center gap-5">
        <Image src={branch.img} alt={branch.name} width={80} height={80} style={{ objectFit: "contain" }} />
        <div className="flex flex-col gap-1">
          <Typography variant="h4" sx={{ fontWeight: "700", color: "black", lineHeight: 1.2 }}>
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
          <Typography variant="body1" sx={{ color: "gray" }}>
            {branch.tagline}
          </Typography>
        </div>
      </div>
    </div>
  );
}
