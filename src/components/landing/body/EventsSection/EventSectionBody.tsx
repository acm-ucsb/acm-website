"use client";
import React, { useState } from "react";
import type { ACMEvent } from "@public/data/events";
import { Typography } from "@mui/material";
import EventCard from "./EventCard";
import FilterTags from "./FilterTags";

const MOCK_EVENTS: ACMEvent[] = [
  {
    name: "Internship Panel",
    tagline: "Learn the basics of React",
    description:
      "A panel of 5 industry professionals will share their insights on landing internships and succeeding in the tech industry.",
    datetime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
    location: "ESB 1001",
    branch: 3,
  },
  {
    name: "Research Colloquium",
    tagline: "Latest in Research at UCSB",
    description:
      "Join us for a talk on recent breakthroughs in large language models and their applications.",
    datetime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
    location: "ENGR II 1519",
    branch: 1,
  },
  {
    name: "ICPC Practice",
    tagline: "Weekly competitive programming",
    description:
      "Sharpen your problem solving skills with this week's competitive programming problem set.",
    datetime: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    location: "HFH 1132",
    branch: 2,
  },
];

const EventCards = ({ events }: { events: ACMEvent[] }) => {
  const [filter, setFilter] = useState(-1);
  const activeEvents = MOCK_EVENTS;

  const filtered = activeEvents.filter(
    (event) => event.branch === filter || filter === -1,
  );

  return (
    <>
      <div className="flex flex-row items-center gap-8 mb-8 pt-16">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "black",
              whiteSpace: "nowrap",
              marginBottom: 4,
            }}
          >
            Events
          </Typography>
        </div>
        <FilterTags setFilter={setFilter} />
      </div>

      {filtered.length ? ( // this shows the hardcoded events for now
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {filtered.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      ) : (
        <Typography>No Upcoming Events!</Typography>
      )}

      {/*
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
      )}*/}
    </>
  );
};

export default EventCards;
