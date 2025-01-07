import Navbar from "../components/shared/Navbar/Navbar";
import Hero from "../components/landing/Hero";
import AboutBlurb from "../components/landing/body/AboutBlurb";
import Branches from "../components/landing/body/BranchSection/Branches";
import EventsSection from "../components/landing/body/EventsSection/EventsSection";
import Footer from "../components/shared/Footer/Footer";
import BranchFAQ from "@/components/landing/body/FAQ/BranchFAQ";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col align-center">
        <Navbar />
        <Hero />
        <AboutBlurb />
        <Branches />
        <EventsSection />
        <BranchFAQ />
        <Footer />
      </div>
    </main>
  );
}
