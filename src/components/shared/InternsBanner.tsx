import { INTERNS_LIVE } from "@/config/internsConfig";
import Banner from "./Banner";

// Add to all pages except the intern page
export const InternsBannerSitewide = () => {
  if (!INTERNS_LIVE) return null;
  return (
    <Banner
      inputLink="/interns"
      inputText="Intern Applications Are Now Open · Apply by Feb 28"
      inputMobileText="Intern Applications Open!"
      inputColor="#91C9F2"
    />
  );
};

// Add to the intern page only
export const InternsBannerInternPage = () => {
  if (INTERNS_LIVE) return null;
  return (
    <Banner inputText="Applications have now closed." inputColor="#94a3b8" />
  );
};
