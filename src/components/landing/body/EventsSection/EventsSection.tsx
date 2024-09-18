import React from "react";
import EventCard from "./EventCard";

import { getEventsData } from "../../../../apis/getSheetsData";
import { Typography } from "@mui/material";

const EventsSection = async () => {
  const events = await getEventsData();

  return (
    <section
      id="events"
      className="flex flex-col items-center justify-center mb-36"
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontWeight: "bold",
          marginY: "64px",
          color: "black",
        }}
      >
        Upcoming Events
      </Typography>
      <div className="flex flex-row flex-wrap justify-center">
        {events && events.length ? (
          events?.map((event, index) => <EventCard key={index} event={event} />)
        ) : (
          <Typography>No Upcoming Events!</Typography>
        )}
      </div>
    </section>
  );
};

export default EventsSection;
