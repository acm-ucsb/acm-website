"use client";
import React from "react";
import { Container } from "@mui/material";

import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import Hero from "@/components/about/Hero";
import MeetTheTeam from "@/components/about/MeetTheTeam";
import GetInvolve from "@/components/about/GetInvolve";

export default function Home() {
    return (
        <main>
            <div className="absolute w-[100%]">
                <Navbar />
            </div>
            <Hero />

            <div className="mt-12 flex flex-col align-center">
                <Container maxWidth="md">
                    <GetInvolve />
                    <MeetTheTeam />
                </Container>
            </div>
            <Footer />
        </main>
    );
}
