import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col align-center">
        <Navbar />

        {/* STUB PAGE */}
        <h1 className="justify-self-center">STUB PAGE</h1>
        {/* replace this ^ with an actual page */}

        <Footer />
      </div>
    </main>
  );
}
