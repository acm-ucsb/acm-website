"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { Branches } from "@public/data/team";
import Image from "next/image";

interface BranchNavigationProps {
  onBranchClick: (branchId: string) => void;
}

const BranchNavigation: React.FC<BranchNavigationProps> = ({
  onBranchClick,
}) => {
  return (
    <Box
      sx={{
        width: "280px", 
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
        borderRight: "1px solid #e0e0e0",
        padding: "32px 0 20px 0",
        position: "sticky", 
        top: 64, 
        left: 0, 
        height: "calc(100vh - 64px)",
        overflowY: "auto",
        display: { xs: "none", lg: "block" }, 
        zIndex: 1, 
      }}
    >
      <Box sx={{ padding: "0 20px" }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#333",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          ACM Branches
        </Typography>
        
        {Branches.map((branch) => (
          <Box
            key={branch.name}
            onClick={() => onBranchClick(branch.name)}
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "12px 16px",
              marginBottom: "8px",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "all 0.2s ease-in-out",
              backgroundColor: "transparent",
              color: "#333",
              "&:hover": {
                backgroundColor: "#e3f2fd",
                transform: "translateX(4px)",
                "& .branch-icon": {
                  transform: "scale(1.2)",
                },
                "& .branch-text": {
                  transform: "scale(1.1)",
                  fontWeight: "600",
                },
              },
            }}
          >
            <Image
              src={branch.icon}
              alt={`${branch.name} icon`}
              width={48}
              height={48}
              className="branch-icon"
              style={{
                marginRight: "12px",
                filter: "none", 
                transition: "transform 0.2s ease-in-out",
              }}
            />
            <Typography
              variant="body1"
              className="branch-text"
              sx={{
                fontWeight: "500",
                fontSize: "14px",
                transition: "all 0.2s ease-in-out",
              }}
            >
              {branch.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default BranchNavigation;
