"use client";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
interface BannerProps {
  inputLink?: string;
  inputColor?: string;
  inputText?: string;
}

const Banner = ({ inputLink, inputColor, inputText }: BannerProps) => {
  const text = inputText ?? "CHANGE MEEEEEE";
  const color = inputColor ?? "#91C9F2";
  const darkerColor = color + "120";

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
          }}
          href={inputLink}
        >
          <h1 className="text-4xl font-bold text-white">{text}</h1>
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
          <h1 className="text-4xl font-bold text-white">{text}</h1>
        </Box>
      )}
    </>
  );
};

export default Banner;
