"use client";
import { CardMedia, useMediaQuery } from "@mui/material";

const ACMLogo = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
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
  );
};

export default ACMLogo;
