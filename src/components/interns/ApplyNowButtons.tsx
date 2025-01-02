import { Button, Box } from "@mui/material";

export const ApplyNowButtons = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "1rem",
        marginBottom: { xs: "1rem", md: "2rem" },
      }}
    >
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
        href="https://forms.gle/s5SSAPMMkk2oBL9V7"
      >
        Apply Now!
      </Button>
    </Box>
  );
};
