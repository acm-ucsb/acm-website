"use client";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import { InternHeroSection } from "@/components/interns/InternHeroSection";
import dynamic from "next/dynamic";
import { Typography } from "@mui/material";
import AvailablePositions from "@/components/interns/AvailablePositions";
import { ApplyNowButtons } from "@/components/interns/ApplyNowButtons";
import Banner from "@/components/shared/Banner";

const InternTimeline = dynamic(
  () => import("@/components/interns/InternTimeline"),
  {
    ssr: false,
  },
);

export default function Home() {
  return (
    <main>
      <div className="flex flex-col align-center">
        <Navbar />
        <Banner inputLink="/apply" inputText="We Are Hiring! Apply Here" />

        <div className="flex flex-col align-center items-center">
          <InternHeroSection />

          <AvailablePositions />

          <InternTimeline />

          <ApplyNowButtons />
        </div>

        <Footer />
      </div>
    </main>
  );
}
