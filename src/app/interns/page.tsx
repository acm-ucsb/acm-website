"use client";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import { InternHeroSection } from "@/components/interns/InternHeroSection";
import AvailablePositions from "@/components/interns/AvailablePositions";
import { ApplyNowButtons } from "@/components/interns/ApplyNowButtons";
import InternTimeline from "@/components/interns/InternTimeline";
import { InternsBannerInternPage } from "@/components/shared/InternsBanner";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col align-center">
        <Navbar />
        <InternsBannerInternPage />
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
