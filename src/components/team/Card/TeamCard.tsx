import React from "react";
import {
  Card,
  CardContent,
  Typography,
  //   CardActions,
  //   Button,
} from "@mui/material";
import { TeamMember } from "@public/data/team";
import Image from "next/image";

const TeamCard = ({ member }: { member: TeamMember }) => {
  return (
    <Card
      sx={{
        width: 350,
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
        m: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <CardContent sx={{ padding: "20px", flexGrow: 1 }}>
        <Typography
          variant="h5"
          component="div"
          sx={{ color: "#1e3a8a", fontWeight: "bold", marginBottom: "8px" }}
        >
          {member.name}
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{ marginBottom: "20px", fontWeight: "500" }}
        >
          {member.position}
          {member.classOf ? `, Class of ${member.classOf}` : ""}
        </Typography>

        <Image
          src={member.picture}
          alt={`${member.name} picture`}
          width={150}
          height={150}
          layout="responsive"
        />
      </CardContent>
    </Card>
  );
};

export default TeamCard;
