import React from "react";
import { Typography, Box } from "@mui/material";

interface Position {
  title: string;
  description: string;
  img: string;
}

interface PositionCardProps {
  position: Position;
}

export function PositionCard(props: PositionCardProps) {
  const { position } = props;
  return (
    <div className="flex flex-col items-start justify-start p-4 gap-2 transition-transform duration-300 ease-in-out hover:scale-105 rounded-lg shadow-lg bg-white h-auto">
      <Typography
        variant="h6"
        component="div"
        sx={{ color: "#1e3a8a", fontWeight: "bold", margin: "9px" }}
      >
        {position.title}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          textAlign: "left",
          color: "gray",
          fontSize: "0.9rem",
          paddingX: "10px",
        }}
      >
        {position.description}
      </Typography>
    </div>
  );
}
