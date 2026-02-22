import { Typography, Box } from "@mui/material";
import { timelineItems } from "./InternTimelineData";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";

const InternTimeline = () => {
  return (
    <div style={{ width: "100%", padding: "20px 0 80px 0" }}>
      <section id="timeline" />
      <FadeInOnScroll>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", marginY: "64px", color: "black" }}
        >
          Timeline
        </Typography>
      </FadeInOnScroll>

      <Box sx={{ maxWidth: "900px", mx: "auto", px: 3, position: "relative" }}>
        {/* Vertical connecting line */}
        <Box
          sx={{
            position: "absolute",
            left: "44px",
            top: "20px",
            bottom: "20px",
            width: "2px",
            background: "linear-gradient(to bottom, #18A2F2, #253985)",
            zIndex: 0,
          }}
        />

        {timelineItems.map((item, index) => (
          <FadeInOnScroll key={index} delay={index * 120}>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 3,
                mb: index < timelineItems.length - 1 ? 3 : 0,
                position: "relative",
              }}
            >
              {/* Step number */}
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #18A2F2 0%, #253985 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  zIndex: 1,
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                  boxShadow: "0 0 0 4px white, 0 0 0 6px #dbeeff",
                }}
              >
                {index + 1}
              </Box>

              {/* Card */}
              <Box
                sx={{
                  flex: 1,
                  background: "white",
                  borderRadius: "14px",
                  padding: "1.25rem 1.5rem",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                  border: "1px solid #eef2f7",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: "#18A2F2",
                    fontWeight: "700",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    display: "block",
                    mb: 0.5,
                  }}
                >
                  {item.cardSubtitle}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#1a1a1a",
                    mb: 0.75,
                    fontSize: "1rem",
                  }}
                >
                  {item.cardTitle}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#666", lineHeight: 1.65 }}
                >
                  {item.cardDetailedText}
                </Typography>
              </Box>
            </Box>
          </FadeInOnScroll>
        ))}
      </Box>
    </div>
  );
};

export default InternTimeline;
