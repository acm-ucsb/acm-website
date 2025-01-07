"use client";
import { AppBar, Toolbar, Drawer } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import ACMLogo from "./ACMLogo";
import StyledNavbarButton from "./StyledNavbarButton";
import HamburgerIcon from "./HamburgerIcon";
import { ButtonLabels } from "./ButtonLabels";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Toggle the drawer
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "white",
        boxShadow: "1px 1px 3px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <ACMLogo />

        <div className="flex items-center">
          {/* Desktop Navigation - hidden on screens smaller than 'lg' (1024px) */}
          <div className="hidden lg:flex gap-20">
            {ButtonLabels.map(({ key, buttonLabelString, routingLink }) => (
              <Link href={routingLink} key={key}>
                <StyledNavbarButton label={buttonLabelString} />
              </Link>
            ))}
          </div>

          <HamburgerIcon handleDrawerToggle={handleDrawerToggle} />
        </div>

        {/* Drawer for Mobile and Tablet Navigation */}
        <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
          <div className="w-64 p-4 flex flex-col items-center gap-[1rem]">
            <ACMLogo />
            <br />
            {ButtonLabels.map(({ key, buttonLabelString, routingLink }) => (
              <Link href={routingLink} key={key} onClick={handleDrawerToggle}>
                <StyledNavbarButton label={buttonLabelString} />
              </Link>
            ))}
          </div>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
