"use client";
import React, { useState } from "react";
import type { ACMEvent } from "@public/data/events";
import { Typography } from "@mui/material";
import EventCard from "./EventCard";
import FilterTags from "./FilterTags";

const EventCards = ({ events }: { events: ACMEvent[] }) => {
  const [filter, setFilter] = useState(-1);

  return (
    <>
      <FilterTags setFilter={setFilter} />

      {events &&
      events?.filter((event) => event.branch == filter || filter == -1)
        .length ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 justify-center ">
          {events
            ?.filter((event) => event.branch == filter || filter == -1)
            ?.map((event, index) => {
              return <EventCard key={index} event={event} />;
            })}
        </div>
      ) : (
        <Typography>No Upcoming Events!</Typography>
      )}
    </>
  );
};

export default EventCards;
