"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { TeamMember, BranchInfo } from "@public/data/team";
import TeamCard from "../Card/TeamCard";
import Image from "next/image";

interface BranchSectionProps {
  branch: BranchInfo;
  members: TeamMember[];
}

const BranchSection: React.FC<BranchSectionProps> = ({ branch, members }) => {
  if (members.length === 0) {
    return null;
  }

  return (
    <Box
      id={branch.name.toLowerCase()}
      sx={{
        marginBottom: "60px",
        scrollMarginTop: "80px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          marginBottom: "30px",
          padding: "20px 0",
          marginLeft: { xs: "auto", lg: "calc(50% - 600px - 140px)" },
        }}
      >
        <Image
          src={branch.icon}
          alt={`${branch.name} icon`}
          width={112}
          height={112}
          style={{
            marginRight: "16px",
          }}
        />
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: branch.color,
            margin: 0,
          }}
        >
          ACM {branch.name}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "24px",
          padding: "0 20px",
          justifyContent: "center",
          maxWidth: "1200px",
          margin: "0 auto",
          marginLeft: { xs: "auto", lg: "calc(50% - 600px - 140px)" },
        }}
      >
        {members.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </Box>
    </Box>
  );
};

export default BranchSection;
