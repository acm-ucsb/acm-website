import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import StyledNavbarButton from "./StyledNavbarButton";

const Navbar = () => {
  const buttonLabels = ["Branches", "Events", "About Us", "FAQ"];

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
          {buttonLabels.map((label, index) => (
            <StyledNavbarButton label={label} key={index} />
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
