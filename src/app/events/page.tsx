import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import EventsSection from "@/components/landing/body/EventsSection/EventsSection";
export default function Home() {
  return (
    <main>
      <div className="flex flex-col align-center">
        <Navbar />

        <EventsSection></EventsSection>

        <Footer />
      </div>
    </main>
  );
}
