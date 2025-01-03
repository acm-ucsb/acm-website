import { Container, Typography } from "@mui/material";
import Link from "next/link";

import branchData from "../../../public/data/branchData";
import { BranchCard } from "@/components/landing/body/BranchSection/BranchCard";
import React from "react";

export default function GetInvolve() {
  const Spacer = () => (
    <div
      style={{
        padding: "3rem",
      }}
    ></div>
  );

  return (
    <div>
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

        <Typography>
          The best way to get involved is to join our Discord server, where we
          post information about events in the announcements channel.
        </Typography>
      </Container>
      <Spacer />

      {/* Social Media Section */}
      <div className="mt-16">
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            marginBottom: "0.5rem",
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
              <img
                src="/social-media/instagram-icon.svg"
                style={{
                  height: "60px",
                  padding: "10px",
                }}
              ></img>
              {/* <Typography>Instagram</Typography> */}
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
              <img
                src="/social-media/discord-icon.svg"
                style={{
                  height: "60px",
                  padding: "10px",
                }}
              ></img>
              {/* <Typography>Discord</Typography> */}
            </div>
          </Link>
        </div>
      </div>
      <Spacer />

      <div className="mt-16">
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            marginBottom: "0.5rem",
          }}
        >
          Branches
        </Typography>
        <Typography align="center">Join our branches</Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2rem] md:gap-[5rem]">
          {branchData.map((branch, index) => (
            <BranchCard key={index} index={index} branch={branch} />
          ))}
        </div>
      </div>
      <Spacer />
    </div>
  );
}
