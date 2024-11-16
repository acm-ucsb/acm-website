import { Button, Box } from "@mui/material";

export const ApplyNowButtons = () => {
  return (
    <Box sx={{ display: "flex", gap: "1rem" }}>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#18A2F2",
          color: "white",
          fontWeight: "bold",
          borderRadius: "30px",
          padding: { xs: "0.5rem 1.5rem", md: "0.7rem 2.5rem" },
          textTransform: "none",
          fontSize: { xs: "0.875rem", md: "1rem" },
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          "&:hover": {
            backgroundColor: "#0868A0",
            boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)",
          },
        }}
      >
        Apply Now
      </Button>
      <Button
        variant="outlined"
        href="#timeline"
        sx={{
          backgroundColor: "white",
          color: "#18A2F2",
          borderColor: "#18A2F2",
          fontWeight: "bold",
          borderRadius: "30px",
          padding: { xs: "0.5rem 1.5rem", md: "0.7rem 2.5rem" },
          textTransform: "none",
          fontSize: { xs: "0.875rem", md: "1rem" },
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          "&:hover": {
            backgroundColor: "#f0f8ff", // Light blue background on hover
            boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)",
          },
        }}
      >
        Learn More
      </Button>
    </Box>
  );
};
