import React from "react";
import { getFAQData } from "@/apis/getSheetsData";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { convertTextToLinks } from "@/util/convertTextToLinks";

const FAQ = async () => {
  const faq = await getFAQData();

  return (
    <Container maxWidth="md" sx={{ marginBottom: "128px" }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          fontWeight: "bold",
          marginBottom: "64px",
          color: "black",
        }}
      >
        Frequently Asked Questions
      </Typography>

      {faq.map((item, index) => (
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
            }, // Remove the default accordion line
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
      ))}
    </Container>
  );
};

export default FAQ;
