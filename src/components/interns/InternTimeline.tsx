import { Chrono } from "react-chrono";
import { timelineItems } from "./InternTimelineData";

const InternTimeline = () => {
  return (
    <div style={{ width: "80%", margin: "0 auto", padding: "20px 0" }}>
      <Chrono
        items={timelineItems}
        theme={{
          primary: "#253985",
          secondary: "#ffffff",
          cardBgColor: "#fafafa",
          cardForeColor: "#333333",
          titleColor: "#253985",
          titleColorActive: "#ffffff",
        }}
        cardWidth={400}
        cardHeight={250}
        lineWidth={6}
        timelinePointDimension={24}
        fontSizes={{
          cardTitle: "1.5rem",
          cardSubtitle: "1.2rem",
          cardText: "1rem",
        }}
        mode="VERTICAL_ALTERNATING"
        disableToolbar
        enableBreakPoint={false}
        scrollable={true}
        classNames={{
          card: "custom-card-style",
        }}
        highlightCardsOnHover={true}
      />
      {/* Custom CSS styles */}
      <style>
        {`
          .custom-card-style {
            padding: 20px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          }
          .custom-card-style h1, .custom-card-style h2, .custom-card-style h3 {
            margin-bottom: 15px;
          }
          .custom-card-style p {
            margin: 0;
            line-height: 1.6;
          }
        `}
      </style>
    </div>
  );
};

export default InternTimeline;
