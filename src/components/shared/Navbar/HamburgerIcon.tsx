import { IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

interface HamburgerIconProps {
  handleDrawerToggle: () => void;
}

const HamburgerIcon = (props: HamburgerIconProps) => {
  const { handleDrawerToggle } = props;

  return (
    <div className="flex lg:hidden">
      <IconButton onClick={handleDrawerToggle}>
        <MenuIcon />
      </IconButton>
    </div>
  );
};

export default HamburgerIcon;
