import React from "react";
import EventCard from "./EventCard";

import { getEventsData } from "../../../../apis/getSheetsData";
import { Typography } from "@mui/material";
import { ACMEvent } from "@public/data/events";

const EventsSection = async () => {
  const events = await getEventsData();
  let validEvents: ACMEvent[] = [];
  events?.forEach((value) => {
    if (Date.parse(value.datetime) + 24 * 60 * 60 * 1000 < Date.now()) return;
    // we are also not interested in events that are more than 2 weeks out
    if (Date.parse(value.datetime) > Date.now() + 14 * 24 * 60 * 60 * 1000)
      return;
    validEvents.push(value);
  });
  validEvents.sort((a, b) => Date.parse(a.datetime) - Date.parse(b.datetime));

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
        {validEvents.length ? (
          validEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))
        ) : (
          <Typography>No Upcoming Events!</Typography>
        )}
      </div>
    </section>
  );
};

export default EventsSection;
