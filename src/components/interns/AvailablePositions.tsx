"use client";
import React, { useState } from "react";
import { Typography, Box, Collapse } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";

interface AreaTileProps {
  title: string;
  tagline: string;
  accentColor: string;
  icon?: React.ReactNode;
  expandedDetail?: string;
}

const AreaTile = ({ title, tagline, accentColor, icon, expandedDetail }: AreaTileProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="bg-white rounded-lg shadow-sm p-4 flex flex-col gap-1 hover:shadow-md transition-shadow duration-200"
      style={{
        borderLeft: `4px solid ${accentColor}`,
        cursor: expandedDetail ? "pointer" : "default",
      }}
      onClick={() => expandedDetail && setExpanded(!expanded)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#1a1a1a" }}>
            {title}
          </Typography>
          {icon && <span className="flex items-center">{icon}</span>}
        </div>
        {expandedDetail && (
          <ExpandMoreIcon
            sx={{
              fontSize: "1.2rem",
              color: accentColor,
              transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.25s ease",
              flexShrink: 0,
            }}
          />
        )}
      </div>
      <Typography variant="body2" sx={{ color: "#666", lineHeight: 1.5 }}>
        {tagline}
      </Typography>
      <Collapse in={expanded}>
        <Typography
          variant="body2"
          sx={{
            color: "#444",
            lineHeight: 1.65,
            mt: 1,
            pt: 1,
            borderTop: `1px solid ${accentColor}30`,
          }}
        >
          {expandedDetail}
        </Typography>
      </Collapse>
    </div>
  );
};

const branches: AreaTileProps[] = [
  {
    title: "Dev",
    tagline: "A community for builders working on software projects together.",
    accentColor: "#1DAA2E",
    icon: <img src="/assets/branchImages/dev.png" alt="" style={{ width: 20, height: 20, objectFit: "contain" }} />,
    expandedDetail: "Help build and maintain the ACM website, contribute to open-source club projects, and join code reviews and standups with the dev team.",
  },
  {
    title: "ICPC",
    tagline: "Competitive programming, algorithms, and community outreach.",
    accentColor: "#B93016",
    icon: <img src="/assets/branchImages/icpc.png" alt="" style={{ width: 20, height: 20, objectFit: "contain" }} />,
    expandedDetail: "Help organize practice contests, assist with problem set creation, and support outreach to grow competitive programming at UCSB.",
  },
  {
    title: "Industry",
    tagline: "Industry connections, mentorship, and real-world projects.",
    accentColor: "#087B90",
    icon: <img src="/assets/branchImages/industry.png" alt="" style={{ width: 20, height: 20, objectFit: "contain" }} />,
    expandedDetail: "Support client project coordination, help manage timelines, and contribute to teams working on real company partnerships and real world solutions.",
  },
  {
    title: "Research",
    tagline: "Connecting students with CS research opportunities at UCSB.",
    accentColor: "#D3A739",
    icon: <img src="/assets/branchImages/research.png" alt="" style={{ width: 20, height: 20, objectFit: "contain" }} />,
    expandedDetail: "Help match students with lab openings through Research Connect, support research panels, and bridge undergrads with research opportunities.",
  },
];

const operations: AreaTileProps[] = [
  {
    title: "Marketing",
    tagline: "Brand, social media, and design for ACM's campus presence.",
    accentColor: "#EB459E",
    icon: <span style={{ fontSize: "1.1rem" }}>📢</span>,
    expandedDetail: "Create social media content, design graphics for events, and help shape ACM's visual identity and campus presence.",
  },
  {
    title: "Social",
    tagline: "Events and community moments that bring ACM together.",
    accentColor: "#9B59B6",
    icon: <span style={{ fontSize: "1.1rem" }}>🎉</span>,
    expandedDetail: "Plan and run community events, handle logistics, and help foster the culture and community that drives ACM to touch grass.",
  },
  {
    title: "Sponsorships",
    tagline: "Building industry relationships and securing club funding.",
    accentColor: "#0BBBCC",
    icon: <span style={{ fontSize: "1.1rem" }}>💼</span>,
    expandedDetail: "Reach out to companies, help draft partnership decks, and maintain relationships with our industry sponsors.",
  },
  {
    title: "Treasury",
    tagline: "Manage our budgets, reimbursements, and financial operations.",
    accentColor: "#1ABC9C",
    icon: <span style={{ fontSize: "1.1rem" }}>📊</span>,
    expandedDetail: "Track club expenses, help process reimbursements, and assist with budget management across all branches and teams.",
  },
];

const AvailablePositions = () => {
  return (
    <section id="positions">
      <div className="flex flex-col items-center mb-24">
        <FadeInOnScroll className="w-full">
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold", mt: "120px", mb: "64px", color: "black" }}
          >
            Where You&apos;ll Have Impact
          </Typography>
        </FadeInOnScroll>
        <FadeInOnScroll delay={100} className="w-full flex justify-center">
          <Typography
            variant="h6"
            align="center"
            sx={{
              color: "gray",
              fontWeight: "normal",
              mb: 6,
              maxWidth: "70%",
              lineHeight: 1.7,
              px: 2,
            }}
          >
            You&apos;ll have the chance to work across different parts of ACM —
            exploring branches and teams — before finding where you have the most
            impact.
          </Typography>
        </FadeInOnScroll>

        <div className="w-full max-w-5xl mx-auto px-6">
          {/* Branches */}
          <FadeInOnScroll delay={150}>
            <Typography
              variant="overline"
              sx={{
                fontWeight: "bold",
                color: "#253985",
                letterSpacing: "0.12em",
                display: "block",
                fontSize: "0.875rem",
                mb: 2,
              }}
            >
              Branches
            </Typography>
          </FadeInOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {branches.map((b, i) => (
              <FadeInOnScroll key={b.title} delay={i * 100}>
                <AreaTile {...b} />
              </FadeInOnScroll>
            ))}
          </div>

          {/* Operations */}
          <FadeInOnScroll>
            <Typography
              variant="overline"
              sx={{
                fontWeight: "bold",
                color: "#253985",
                letterSpacing: "0.12em",
                display: "block",
                fontSize: "0.875rem",
                mb: 2,
              }}
            >
              Operations
            </Typography>
          </FadeInOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {operations.map((o, i) => (
              <FadeInOnScroll key={o.title} delay={i * 100}>
                <AreaTile {...o} />
              </FadeInOnScroll>
            ))}
          </div>

          {/* Featured: Own Initiative */}
          <FadeInOnScroll delay={100}>
            <Box
              sx={{
                background: "linear-gradient(135deg, #18A2F2 0%, #253985 100%)",
                borderRadius: "16px",
                padding: { xs: "2rem 1.5rem", md: "2.5rem 2.5rem" },
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: "white", mb: 1.5 }}
              >
                Pitch Your Own Initiative
              </Typography>
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.88)",
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  maxWidth: "620px",
                }}
              >
                Not every good idea fits an existing box. As an intern, you&apos;ll
                have the chance to propose new initiatives — and the opportunity to
                grow them into branches or ongoing programs within ACM.
              </Typography>
            </Box>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
};

export default AvailablePositions;
