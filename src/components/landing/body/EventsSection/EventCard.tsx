"use client";
import React, { useState } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import type { ACMEvent } from "@public/data/events";
import formatDateTime from "../../../../util/formatDateTime";
import branchData from "@public/data/branchData";
import Image from "next/image";

const EventCard = ({ event }: { event: ACMEvent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const formattedDateTime = (datetime: string) => {
    return formatDateTime(datetime, "M/d 'at' h:mm a", "TBD");
  };

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div
      onMouseEnter={handleFlip}
      onMouseLeave={handleFlip}
      style={{
        perspective: "1000px", // Enable 3D perspective
        display: "inline-block",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "320px",
          height: "400px",
          transformStyle: "preserve-3d",
          transition: "transform 0.6s",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front of the Card */}
        <Card
          sx={{
            width: 320,
            height: 400,
            backgroundColor: "#ffffff",
            borderRadius: "4px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
            position: "absolute",
            backfaceVisibility: "hidden",
            cursor: "pointer",
            transition:
              "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.02)",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={branchData[event.branch].img}
            height={50}
            width={50}
            alt="Branch logo"
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
            }}
          />
          <CardContent sx={{ padding: "30px", flexGrow: 1 }}>
            <Typography
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold", marginBottom: "30px" }}
            >
              {event.name}
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              sx={{ marginBottom: "30px" }}
            >
              {event.tagline}
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", marginBottom: "4px" }}
            >
              When:{" "}
              <span style={{ fontWeight: "normal" }}>
                {formattedDateTime(event.datetime)}
              </span>
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              Where:{" "}
              <span style={{ fontWeight: "normal" }}>
                {event.location ?? "TBD"}
              </span>
            </Typography>
          </CardContent>
        </Card>

        {/* Back of the Card */}
        <Card
          sx={{
            width: 320,
            height: 400,
            borderRadius: "4px",
            backgroundColor: "#ffffff",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
            position: "absolute",
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            cursor: "pointer",
            transition:
              "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
            "&:hover": {
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          <Image
            src={branchData[event.branch].img}
            height={50}
            width={50}
            alt="Branch logo"
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
            }}
          />
          <CardContent
            sx={{
              padding: "30px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginBottom: "20px" }}
            >
              {event.name}
            </Typography>
            <Typography variant="body2">{event.description}</Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EventCard;
