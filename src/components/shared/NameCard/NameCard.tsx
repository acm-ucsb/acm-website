"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@mui/material";
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
            <div className="flex items-center gap-1 md:gap-2">
                <div>
                <Image 
                style={
                    {
                        "maskImage": "url(/assets/acmLogoMask.svg)",
                        "maskSize": "100%",
                        "maskPosition": "center",
                        "objectFit": "cover",
                        "height": "100px",
                        "width": "100px"
                    }
                }
                src={people.img} alt={people.name} width={100} height={100} />
                </div>
                <div>
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
                    <Typography>
                        {people.position}
                    </Typography>
                </div>
            </div>
        </div>
      ))}
    </div>
  );
};

export default NameCard;
