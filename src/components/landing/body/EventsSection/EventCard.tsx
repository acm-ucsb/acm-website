"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Modal,
  Box,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
//import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import type { ACMEvent } from "@public/data/events";
import formatDateTime from "../../../../util/formatDateTime";
import branchData from "@public/data/branchData";
import { format, parse } from "date-fns";

const EventCard = ({ event }: { event: ACMEvent }) => {
  const [open, setOpen] = useState(false); //controls open or closed state of popup
  const branch = branchData[event.branch];
  const date = new Date(event.datetime);

  const monthDay = format(date, "MMM d").toUpperCase(); // "MAY 12"
  const month = format(date, "MMM"); // "May"
  const day = format(date, "d"); // "12"
  const weekday = format(date, "EEE").toUpperCase(); // "TUES"
  const startTime = format(date, "h:mm a"); // "3:00 PM"

  //const timeRange = format(date, "h:mm a");

  return (
    <>
      <Card
        onClick={() => setOpen(true)}
        sx={{
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          boxShadow: "0 2px 12px rgba(0, 0, 0, 0.08)",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "220px",
          cursor: "pointer",
          transition: "box-shadow 0.2s ease",
          "&:hover": {
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.12)",
          },
        }}
      >
        <CardContent sx={{ padding: 0 }}>
          {/* Date header */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "8px",
              marginBottom: "16px",
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", fontSize: "1.6rem", color: "#111" }}
            >
              {month} <span style={{ fontWeight: "bold" }}>{day}</span>
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "#999",
                fontWeight: 500,
                fontSize: "0.75rem",
                letterSpacing: "0.05em",
              }}
            >
              {weekday}
            </Typography>
          </div>

          {/* Event name — colored by branch */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: branch.branchColors[2], // use branch accent color
              marginBottom: "6px",
              fontSize: "1rem",
              lineHeight: 1.3,
            }}
          >
            {event.name}
          </Typography>

          {/* Location */}
          <Typography
            variant="body2"
            sx={{ color: "#444", marginBottom: "2px" }}
          >
            {event.location ?? "TBD"}
          </Typography>

          {/* Time */}
          <Typography variant="body2" sx={{ color: "#444" }}>
            {startTime}
          </Typography>
        </CardContent>
      </Card>

      <Modal
        open={open} // shows when open === true
        onClose={() => setOpen(false)} // closes on backdrop click or Escape key
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        {/* Box is the actual white popup card centered on screen */}
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: "16px",
            padding: "32px",
            width: "90%",
            maxWidth: "480px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
            position: "relative", // needed so the X button can be positioned absolute inside it
            outline: "none", // removes the default focus ring MUI adds to modals
          }}
        >
          {/* X button — positioned in the top-right corner of the popup */}
          <IconButton
            onClick={() => setOpen(false)} // clicking X closes the popup
            sx={{
              position: "absolute",
              top: "12px",
              right: "12px",
              color: "#888",
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Everything below is the popup content */}

          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "8px",
              marginBottom: "12px",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#111" }}>
              {month} {day}
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "#999", fontWeight: 500, letterSpacing: "0.05em" }}
            >
              {weekday}
            </Typography>
          </div>

          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: branch.branchColors[2],
              marginBottom: "16px",
            }}
          >
            {event.name}
          </Typography>

          {/* Description only appears in the popup, not on the card */}
          <Typography
            variant="body1"
            sx={{ color: "#444", marginBottom: "20px", lineHeight: 1.6 }}
          >
            {event.description ?? "No description available."}
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "#666", marginBottom: "4px" }}
          >
            📍 {event.location ?? "TBD"}
          </Typography>
          <Typography variant="body2" sx={{ color: "#666" }}>
            🕐 {startTime}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default EventCard;
