"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@mui/material";
import acmLogoMask from "@public/assets/acmLogoMask.svg";
import { StaticImageData } from "next/image";

interface People {
  id: string;
  name: string;
  position: string;
  img: string | StaticImageData;
}

interface NameCardProps {
  people: People[];
  index: number;
}

const NameCard = ({ people, index }: NameCardProps) => {
  return (
    <div key={index} className="grid grid-cols-1 md:grid-cols-3">
      {people.map((people, index) => (
        <div
          key={index}
          className="m-1 flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <div
            style={{
              marginRight: "0.1rem",
            }}
          >
            <Image
              style={{
                maskImage: "url(/assets/acmLogoMask.svg)",
                maskSize: "100%",
                maskPosition: "center",
                objectFit: "cover",
                height: "100px",
                width: "100px",
              }}
              src={people.img}
              alt={people.name}
              width={100}
              height={100}
            />
          </div>
          <div>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "700",
                color: "black",
                fontSize: {
                  xs: "1.75rem",
                  sm: "1.75rem",
                  md: "2rem",
                  lg: "2.25rem",
                },
              }}
            >
              {people.name}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "500",
                color: "black",
                fontSize: {
                  xs: "1.75rem",
                  sm: "1.75rem",
                  md: "2rem",
                  lg: "2.25rem",
                },
              }}
            >
              {people.position}
            </Typography>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NameCard;
