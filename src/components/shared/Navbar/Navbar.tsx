import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
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
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold", color: "black" }}
        >
          ACM@UCSB
        </Typography>

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
