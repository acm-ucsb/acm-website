"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@mui/material";
import { StaticImageData } from "next/image";

export interface People {
  name: string;
  position: string;
  img: string | StaticImageData;
  branch?: string;
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
          <div className="flex items-start gap-4 w-full">
            <div className="flex-shrink-0">
              <Image
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  height: "100px",
                  width: "100px",
                  minWidth: "100px",
                }}
                src={people.img}
                alt={people.name}
                width={100}
                height={100}
              />
            </div>
            <div className="flex-1 min-w-0">
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  marginBottom: "0.5rem",
                }}
              >
                {people.name}
              </Typography>
              <Typography>{people.position}</Typography>
              {people.branch && (
                <Typography
                  sx={{
                    fontSize: "0.875rem",
                    color: "text.secondary",
                  }}
                >
                  {people.branch}
                </Typography>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NameCard;
