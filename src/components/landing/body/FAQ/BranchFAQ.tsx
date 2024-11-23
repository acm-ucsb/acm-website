import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { convertTextToLinks } from "@/util/convertTextToLinks";

const BranchFAQ = (props: {branchfaq: any}) => {
  const { branchfaq } = props;

  const renderFAQAccordion = (item, index) => (
    <Accordion
      key={index}
      sx={{
        marginBottom: "16px",
        borderRadius: "8px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.15)",
        },
        "&:before": {
          display: "none",
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "primary.main" }} />}
        aria-controls={`faq-content-${index}`}
        id={`faq-header-${index}`}
        sx={{
          backgroundColor: "background.default",
          borderBottom: "1px solid",
          borderColor: "divider",
          padding: "12px 24px",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          "&.Mui-expanded": {
            minHeight: "48px",
          },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "500",
            color: "text.primary",
            textAlign: "center",
            width: "100%",
          }}
        >
          {item.question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          backgroundColor: "background.paper",
          padding: "16px 24px",
        }}
      >
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", lineHeight: 1.6 }}
        >
          {convertTextToLinks(item.answer)}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );

  

  const renderBranchAccordion = (branch, branch_index) => (
    <Accordion
      key={branch_index}
      sx={{
        marginBottom: "16px",
        borderRadius: "8px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.15)",
        },
        "&:before": {
          display: "none",
        },
      }}
    >
      <AccordionSummary
        expandIcon={null}
        aria-controls={`branch-faq-content-${branch_index}`}
        id={`branch-faq-header-${branch_index}`}
        sx={{
          backgroundColor: "background.default",
          borderBottom: "1px solid",
          borderColor: "divider",
          padding: "12px 24px",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          "&.Mui-expanded": {
            minHeight: "48px",
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={branch.image}
            alt={branch.branch}
            style={{ width: "62px", height: "62px", marginRight: "16px" }}
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: "700",
              color: "text.primary",
              textAlign: "center",
              fontSize: 27,
            }}
          >
            acm.
            <span
              style={{
                backgroundImage: `linear-gradient(to right, ${branch.color.join(", ")})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              {branch.branch}
            </span>
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          backgroundColor: "background.paper",
          padding: "16px 24px",
        }}
      >
        {branch.faqs.map(renderFAQAccordion)}
      </AccordionDetails>
    </Accordion>
  );

  return (
    <section id="faq">
      <Container maxWidth="md" sx={{ marginBottom: "128px" }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            marginY: "64px",
            color: "black",
          }}
        >
          Frequently Asked Questions
        </Typography>

        {branchfaq.map(renderBranchAccordion)}
      </Container>
    </section>
  );
};

export default BranchFAQ;