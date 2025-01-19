import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import FAQ from "@/components/landing/body/FAQ/FAQ";

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
