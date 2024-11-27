import React,{useState,useEffect} from "react";
import EventCards from "./EventSectionBody";
import { getEventsData } from "../../../../apis/getSheetsData";
import { Typography } from "@mui/material";
import FilterTags from "./FilterTags";

const EventsSection = async () => {

  const events = await getEventsData(); // Fetch data

  return (
    <section
      id="events"
      className="flex flex-col items-center justify-start mb-36 h-full"
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
        Events
      </Typography>
        <EventCards events = {events}>

        </EventCards>
     
    </section>
  );
};

export default EventsSection;