import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import BranchFAQ from "@/components/landing/body/FAQ/BranchFAQ";

export default async function Home() {
  return (
    <main>
      <div className="flex flex-col align-center">
        <Navbar />
        <BranchFAQ />
        <Footer />
      </div>
    </main>
  );
}
