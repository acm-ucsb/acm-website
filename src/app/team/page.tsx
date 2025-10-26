"use client";
import React from "react";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import BranchNavigation from "@/components/team/BranchNavigation/BranchNavigation";
import BranchSection from "@/components/team/BranchSection/BranchSection";
import TeamCard from "@/components/team/Card/TeamCard";
import { Typography, Box } from "@mui/material";
import { CurrentTeam, Branches, getTeamMembersByBranch } from "@public/data/team";

export default function TeamPage() {
  const teamByBranch = getTeamMembersByBranch(CurrentTeam);

  const scrollToSection = (branchId: string) => {
    const element = document.getElementById(branchId.toLowerCase());
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };


  return (
    <main>
      <Navbar />
      <Box
        sx={{
          display: "flex",
        }}
      >
        <BranchNavigation
          onBranchClick={scrollToSection}
        />

        <Box
          sx={{
            flex: 1,
            padding: "40px 20px",
            marginLeft: { xs: 0, lg: "280px" }, 
            maxWidth: { xs: "100%", lg: "calc(100vw - 280px)" },
          }}
        >
          <Box sx={{ 
            marginBottom: "40px", 
            textAlign: "center",
            marginLeft: { xs: 0, lg: "-280px" }, 
            width: { xs: "100%", lg: "calc(100vw - 280px)" }, 
          }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: "black",
                marginBottom: "10px",
              }}
            >
              Meet the Team
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "#666",
              }}
            >
              {CurrentTeam.academicYear} Academic Year
            </Typography>
          </Box>

          {Branches.map((branch) => {
            const members = teamByBranch[branch.name] || [];
            return (
              <BranchSection
                key={branch.name}
                branch={branch}
                members={members}
              />
            );
          })}

          {CurrentTeam.professors.length > 0 && (
            <Box
              id="professors"
              sx={{
                marginBottom: "60px",
                scrollMarginTop: "80px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "30px",
                  padding: "20px 0",
                  marginLeft: { xs: "auto", lg: "calc(50% - 600px - 140px)" }, 
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    color: "#666",
                    margin: 0,
                  }}
                >
                  Faculty Advisors
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                  gap: "24px",
                  padding: "0 20px",
                  justifyContent: "center", 
                  maxWidth: "1200px", 
                  margin: "0 auto", 
                  marginLeft: { xs: "auto", lg: "calc(50% - 600px - 140px)" }, 
                }}
              >
                {CurrentTeam.professors.map((professor) => (
                  <TeamCard key={professor.name} member={professor} />
                ))}
              </Box>
            </Box>
          )}
        </Box>
      </Box>
      <Footer />
    </main>
  );
}
