import { Container, Typography } from "@mui/material";
import Link from "next/link";

import branchData from "../../../public/data/branchData";
import { BranchCard } from "@/components/landing/body/BranchSection/BranchCard";
import React from "react";
import Image from "next/image";

export default function GetInvolve() {
  return (
    <div className="space-y-40">
      <Container maxWidth="md">
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontSize: "1.75rem",
            marginBottom: "1rem",
            fontWeight: "bold",
          }}
        >
          How can I get involved?
        </Typography>

        <Typography align="center">
          The best way to get involved is to join our Discord server, where we
          post information about events in the announcements channel!
        </Typography>
      </Container>

      {/* Social Media Section */}
      <div className="mt-16">
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontSize: "1.75rem",
            marginBottom: "1rem",
            fontWeight: "bold",
          }}
        >
          Social Media
        </Typography>

        <Typography align="center">
          Follow us on Instagram and join our Discord!
        </Typography>

        <div
          className="flex gap-4 mt-4"
          style={{
            justifyContent: "center",
          }}
        >
          <Link target="_blank" href={"https://www.instagram.com/acm.ucsb"}>
            <div
              style={{
                display: "grid",
                placeItems: "center",
              }}
              className="duration-300 ease-in-out hover:scale-105"
            >
              <Image
                src="/social-media/instagram-icon.svg"
                width={60}
                height={60}
                style={{
                  height: "60px",
                  padding: "10px",
                }}
                alt="Instagram icon"
              ></Image>
            </div>
          </Link>
          <Link target="_blank" href={"https://discord.com/invite/p6rcUUjWaU"}>
            <div
              style={{
                display: "grid",
                placeItems: "center",
              }}
              className="duration-300 ease-in-out hover:scale-105"
            >
              <Image
                src="/social-media/discord-icon.svg"
                width={60}
                height={60}
                style={{
                  height: "60px",
                  padding: "10px",
                }}
                alt="Discord icon"
              ></Image>
            </div>
          </Link>
        </div>
      </div>

      <div className="mt-16">
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontSize: "1.75rem",
            marginBottom: "1rem",
            fontWeight: "bold",
          }}
        >
          Branches
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] md:gap-[5rem]">
          {branchData.map((branch, index) => (
            <BranchCard key={index} index={index} branch={branch} />
          ))}
        </div>
      </div>
    </div>
  );
}
