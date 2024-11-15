"use client";
import { Button, CardMedia, useMediaQuery } from "@mui/material";

const ACMLogo = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Button
      href="/"
      disableRipple
      sx={{
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
          backgroundColor: "#fff",
        },
      }}
    >
      <CardMedia
        component="img"
        src={
          isMobile ? "/assets/ACM logo.png" : "/assets/ACM logo with text 2.png"
        }
        alt="ACM Logo"
        sx={{
          height: "110px",
          width: "auto",
          objectFit: "contain",
        }}
      />
    </Button>
  );
};

export default ACMLogo;
