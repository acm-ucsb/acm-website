"use client";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import {Chrono} from "react-chrono";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col align-center items-center">
        <Navbar />
        <h1>
          Timeline
        </h1>
        <Chrono
          items={[
            {
              cardTitle: "Dunkirk",
              url: "http://www.history.com",
              cardDetailedText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel lectus eget ex convallis dictum. Nulla ac magna sed erat porta tincidunt. Sed at nulla auctor, vestibulum magna sed, convallis ex. Nulla facilisi. In hac habitasse platea dictumst. Sed quis nulla auctor, vestibulum magna sed, convallis ex. Nulla facilisi. In hac habitasse platea dictumst.",
            },
            {
              cardTitle: "Dunkirk",
              url: "http://www.history.com",
              cardDetailedText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel lectus eget ex convallis dictum. Nulla ac magna sed erat porta tincidunt. Sed at nulla auctor, vestibulum magna sed, convallis ex. Nulla facilisi. In hac habitasse platea dictumst. Sed quis nulla auctor, vestibulum magna sed, convallis ex. Nulla facilisi. In hac habitasse platea dictumst.",
            },
            {
              cardTitle: "Dunkirk",
              url: "http://www.history.com",
              cardDetailedText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel lectus eget ex convallis dictum. Nulla ac magna sed erat porta tincidunt. Sed at nulla auctor, vestibulum magna sed, convallis ex. Nulla facilisi. In hac habitasse platea dictumst. Sed quis nulla auctor, vestibulum magna sed, convallis ex. Nulla facilisi. In hac habitasse platea dictumst.",
            },
          ]}
          theme={{
            primary: 'red',
            secondary: 'blue',
            cardBgColor: 'yellow',
            titleColor: 'black',
            titleColorActive: 'red',
          }}
          disableToolbar = {true}
          mode="VERTICAL_ALTERNATING"
        />

        <Footer />
      </div>  
    </main>
  );
}
