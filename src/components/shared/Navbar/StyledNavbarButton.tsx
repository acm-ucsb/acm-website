import { Button } from "@mui/material";

interface StyledNavbarButtonProps {
  label: string;
}

const StyledNavbarButton: React.FC<StyledNavbarButtonProps> = ({ label }) => {
  return (
    <Button
      sx={{
        color: "#000000",
        textTransform: "none",
        fontWeight: "bold",
        position: "relative",
        "&::after": {
          content: '""',
          position: "absolute",
          left: 0,
          bottom: 2,
          width: "100%",
          height: "3px",
          backgroundColor: "#1976d2",
          transform: "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.3s ease",
        },
        "&:hover::after": {
          transform: "scaleX(1)",
        },
      }}
    >
      {label}
    </Button>
  );
};

export default StyledNavbarButton;
