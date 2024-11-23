import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import BranchFAQ from "@/components/landing/body/FAQ/BranchFAQ";
import FAQ from "@/components/landing/body/FAQ/FAQ";
import ToggleFAQView from "@/components/landing/body/FAQ/ToggleFAQView";

export default async function Home() {
  return (
    <main>
      <div className="flex flex-col align-center">
        <Navbar />
        <FAQ />
        <Footer />
      </div>
    </main>
  );
}
