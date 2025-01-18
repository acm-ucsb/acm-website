"use client";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { BranchBanner } from "./BranchBanner";
import branchData from "@public/data/branchData";

interface BranchCountdown {
  isNewBranch: boolean;
  releaseDate: Date;
  branchDataIndex: number;
}

export function BranchCountdown(props: BranchCountdown) {
  const { isNewBranch, releaseDate, branchDataIndex } = props;
  const releaseTime = releaseDate.getTime();
  const [remainingTime, setRemainingTime] = useState<number>(
    releaseTime - Date.now(),
  );
  const [isClient, setIsClient] = useState<boolean>(false); // run on client only or else react will complain due to conditionally rendering based on time-dependent API

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  const timeUnits = [
    { value: days, label: "Days" },
    { value: hours, label: "Hours" },
    { value: minutes, label: "Minutes" },
    { value: seconds, label: "Seconds" },
  ];

  useEffect(() => {
    setIsClient(true);

    const interval = setInterval(() => {
      setRemainingTime(releaseTime - Date.now());
    }, 1000);

    return () => clearInterval(interval);
  });

  return isClient && isNewBranch ? (
    remainingTime < 0 ? (
      <div className="mb-[2rem] md:mb-[5rem]">
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "black",
          }}
        >
          Introducing:
        </Typography>
        <BranchBanner
          branch={branchData[branchDataIndex]}
          id={branchData[branchDataIndex].name}
          index={branchDataIndex}
        />
      </div>
    ) : (
      <div
        className="flex flex-col mb-[2rem] md:mb-[5rem] pb-[2rem] md:pb-[5rem]"
        style={{
          backgroundImage: "linear-gradient(to right, #ffffff, #c0c0c0",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: "bold",
            marginY: "64px",
            color: "black",
          }}
        >
          New Branch Coming In...
        </Typography>
        <div className="flex">
          {timeUnits.map(({ value, label }) => (
            <div className="flex flex-col basis-1/4" key={label}>
              <Typography
                variant="h5"
                align="center"
                sx={{
                  marginY: "64px",
                  fontWeight: "normal",
                  color: "black",
                }}
              >
                {value}
              </Typography>
              <Typography
                variant="h6"
                align="center"
                sx={{
                  fontWeight: "lighter",
                  color: "black",
                }}
              >
                {label}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    )
  ) : null;
}
