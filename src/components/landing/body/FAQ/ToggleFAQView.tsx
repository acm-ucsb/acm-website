"use client";
import React, { useState } from "react";
import { Button, Box } from "@mui/material"; // Import MUI components

import FAQ from "./FAQ";
import BranchFAQ from "./BranchFAQ";
import { BranchFAQType, FAQType } from "@public/data/faq";

const ToggleFAQView = (props: {
  faq: FAQType[];
  branchfaq: BranchFAQType[];
}) => {
  const { faq, branchfaq } = props;
  const [showBranchFAQ, setShowBranchFAQ] = useState(false); // State to track which FAQ to show

  const toggleFAQ = () => {
    setShowBranchFAQ(!showBranchFAQ); // Toggle between true and false
  };

  return (
    <div>
      <Box display="flex" justifyContent="center" marginBottom={0}>
        <Button
          variant="contained"
          onClick={toggleFAQ}
          sx={{ backgroundColor: "#18A2F2" }}
        >
          Toggle FAQ View
        </Button>
      </Box>
      {showBranchFAQ ? <BranchFAQ branchfaq={branchfaq} /> : <FAQ faq={faq} />}
    </div>
  );
};

export default ToggleFAQView;
