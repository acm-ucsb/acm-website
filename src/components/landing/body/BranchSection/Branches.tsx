import { BranchCard } from "./BranchCard";
import { Typography } from "@mui/material";
import branchData from "../../../../../public/data/branchData";

const Branches = () => {
  return (
    <section id="branches">
      <div className="flex flex-col items-center justify-center mb-24">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            marginY: "64px",
            color: "black",
          }}
        >
          Branches
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2rem] md:gap-[5rem]">
          {branchData.map((branch, index) => (
            <BranchCard key={index} index={index} branch={branch} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Branches;
