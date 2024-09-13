import { Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "next/link";

export const ScrollDownButton = ({
  href,
  paddingTopRem,
}: {
  href: string;
  paddingTopRem: number;
}) => {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        justifyContent: "center",
        paddingTop: `${paddingTopRem}rem`,
      }}
    >
      <Link href={`/#${href}`} id={href}>
        <KeyboardArrowDownIcon
          sx={{
            color: "gray",
            fontSize: "5rem",
            fontWeight: "100",
            padding: "0.1rem",
            borderRadius: "50%",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "#f7f7f7",
            },
          }}
        />
      </Link>
    </Box>
  );
};
