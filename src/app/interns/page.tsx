"use client";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import dynamic from "next/dynamic";
import { Typography } from "@mui/material";
import { useEffect } from "react";

const InternTimeline = dynamic(() => import("@/components/InternTimeline"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <div className="flex flex-col align-center items-center">
        <Navbar />
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
          Intern Application Timeline
        </Typography>
        <InternTimeline />
        <Footer />
      </div>
    </main>
  );
}
