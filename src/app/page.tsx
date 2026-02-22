import React from "react";
import Navbar from "../components/shared/Navbar/Navbar";
import { InternsBannerSitewide } from "../components/shared/InternsBanner";
import Hero from "../components/landing/Hero";
import AboutBlurb from "../components/landing/body/AboutBlurb";
import Branches from "../components/landing/body/BranchSection/Branches";
import Footer from "../components/shared/Footer/Footer";
import FAQ from "@/components/landing/body/FAQ/FAQ";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col align-center">
        <Navbar />
        <InternsBannerSitewide />
        <Hero />
        <hr className="border-t border-gray-200" />
        <AboutBlurb />
        <Branches />
        {/* <EventsSection /> */}
        <FAQ />
        <Footer />
      </div>
    </main>
  );
}
