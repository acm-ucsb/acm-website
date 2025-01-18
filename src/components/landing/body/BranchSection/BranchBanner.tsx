import { Branch } from "@public/data/branchData";
import React from "react";
import Image from "next/image";
import { Typography } from "@mui/material";

interface BranchBanner {
  branch: Branch;
  index: number;
  id: string;
}

export function BranchBanner(props: BranchBanner) {
  const { branch, index, id } = props;
  return (
    <div
      key={index}
      id={id}
      className="flex flex-col h-[auto]"
      style={{
        backgroundImage: `linear-gradient(to left, ${branch.branchBannerColor}, #FFFFFF`,
      }}
    >
      <div className="flex justify-center mt-[2rem]">
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
          className="ml-auto"
        >
          acm.
          <span
            style={{
              backgroundImage: `linear-gradient(to right, ${branch.branchColors.join(", ")})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            {branch.suffix}
          </span>
        </Typography>
      </div>
      <div className="flex flex-grow">
        <div className="basis-1/4">
          <Image
            src={branch.img}
            alt={branch.name}
            className="ml-auto mb-auto min-w-[100px] w-[50%]"
          />
        </div>
        <div className="basis-3/4">
          <Typography
            variant="h6"
            sx={{
              color: "gray",
              padding: "5% 5% 10% 5%",
              maxWidth: "50rem",
              fontWeight: "100",
              textAlign: "left",
              fontSize: {
                xs: "0.875rem",
                sm: "1rem",
                md: "1.35rem",
              },
            }}
          >
            {branch.description}
          </Typography>
        </div>
      </div>
    </div>
  );
}
