import React from "react";
import { BranchCard } from "./BranchCard";
import { Typography } from "@mui/material";
import branchData from "../../../../../public/data/branchData";

const Branches = () => {
  return (
    <section id="branches">
      <div className="w-full max-w-5xl mx-auto px-6 mb-24">
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            marginTop: "64px",
            marginBottom: "20px",
            color: "black",
          }}
        >
          Branches
        </Typography>
        <Typography variant="h6" sx={{ color: "gray", mb: "48px" }}>
          ACM at UCSB consists of 4 communities that each focus on a specific
          area of tech.
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {branchData.map((branch, index) => (
            <BranchCard key={branch.id} index={index} branch={branch} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Branches;
