"use client";
import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
interface BannerProps {
  inputLink?: string;
  inputColor?: string;
  inputText?: string;
  inputMobileText?: string;
}

const Banner = ({ inputLink, inputColor, inputText, inputMobileText }: BannerProps) => {
  const text = inputText ?? "CHANGE MEEEEEE";
  const color = inputColor ?? "#91C9F2";
  const darkerColor = color + "120";

  const content = (
    <>
      {inputMobileText && (
        <h1 className="block min-[1080px]:hidden text-4xl font-bold text-white">{inputMobileText}</h1>
      )}
      <h1 className={`${inputMobileText ? "hidden min-[1080px]:block" : ""} text-4xl font-bold text-white`}>{text}</h1>
    </>
  );

  return (
    <>
      {inputLink && (
        <Button
          sx={{
            backgroundColor: color,
            textTransform: "none",
            "&:hover": {
              backgroundColor: darkerColor,
              boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)",
            },
            height: "10vh",
            width: "100%",
          }}
          href={inputLink}
        >
          {content}
        </Button>
      )}
      {!inputLink && (
        <Box
          sx={{
            backgroundColor: color,
            textTransform: "none",
            height: "10vh",
          }}
          className="flex flex-col items-center justify-center"
        >
          {content}
        </Box>
      )}
    </>
  );
};

export default Banner;
