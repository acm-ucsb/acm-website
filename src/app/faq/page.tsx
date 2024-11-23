import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import ToggleFAQView from "@/components/landing/body/FAQ/ToggleFAQView";
import { getFAQBranchData, getFAQData } from "@/apis/getSheetsData";

export default async function Home() {

  // NOTE: data fetching is done here, not sure if this is desired structure
  const branchfaq = await getFAQBranchData();
  const faq = await getFAQData();

  return (
    <main>
      <div className="flex flex-col align-center">
        <Navbar />
        <ToggleFAQView faq={faq} branchfaq={branchfaq} />
        <Footer />
      </div>
    </main>
  );
}
