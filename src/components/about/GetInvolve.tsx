import { Typography } from "@mui/material";
import Link from "next/link";

import branchData from "../../../public/data/branchData";
import { BranchCard } from "@/components/landing/body/BranchSection/BranchCard";

export default function GetInvolve() {
    return (
        <>
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

            <br></br>

            <Typography
                variant="h3"
                sx={{
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                    marginBottom: "0.5rem",
                }}
            >
                Social Media
            </Typography>

            <Typography>Follow us on Instagram and join our Discord!</Typography>

            <div
                style={{
                    display: "flex",
                    gap: "2%",
                }}
            >
                <Link href={"https://www.instagram.com/acm.ucsb"}>
                    <div
                        style={{
                            display: "grid",
                            placeItems: "center",
                        }}
                        className="duration-300 ease-in-out hover:scale-105"
                    >
                        <img
                            src="/social-media/Instagram_Glyph_Gradient.svg"
                            style={{
                                height: "60px",
                                padding: "10px",
                            }}
                        ></img>
                        <Typography>Instagram</Typography>
                    </div>
                </Link>
                <Link href={"https://discord.com/invite/p6rcUUjWaU"}>
                    <div
                        style={{
                            display: "grid",
                            placeItems: "center",
                        }}
                        className="duration-300 ease-in-out hover:scale-105"
                    >
                        <img
                            src="/social-media/discord-mark-blue.svg"
                            style={{
                                height: "60px",
                                padding: "10px",
                            }}
                        ></img>
                        <Typography>Discord</Typography>
                    </div>
                </Link>
            </div>
            <div
                style={{
                    height: "3rem",
                }}
            ></div>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[2rem] md:gap-[5rem]">
                {branchData.map((branch, index) => (
                    <BranchCard key={index} index={index} branch={branch} />
                ))}
            </div>
            <div
                style={{
                    height: "3rem",
                }}
            ></div>
        </>
    );
}