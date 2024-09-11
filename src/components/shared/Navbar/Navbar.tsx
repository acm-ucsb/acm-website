import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  CardMedia,
} from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import Link from "next/link";
import StyledNavbarButton from "./StyledNavbarButton";

const Navbar = () => {
  const buttonLabels = {
    about: "About Us",
    branches: "Branches",
    events: "Events",
    faq: "FAQ",
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", boxShadow: "none" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <CardMedia
          component="img"
          src="/assets/ACM logo with text 2.png"
          alt="ACM Logo"
          sx={{
            height: "110px",
            width: "auto",
            objectFit: "contain",
          }}
        />

        <div className="flex align-trailing px-10 gap-[5rem]">
          {Object.entries(buttonLabels).map(([key, value]) => (
            <Link href={`/#${key}`} key={key}>
              <StyledNavbarButton label={value} key={key} />
            </Link>
          ))}

          {/* TODO: Implement color theme functionality */}
          <IconButton sx={{ marginLeft: "3rem" }}>
            <LightMode />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
