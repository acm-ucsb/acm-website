import { Typography } from "@mui/material";
import branchData from "../../../../public/data/branchData";
import Image from "next/image";

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
        <div className="flex gap-[2rem] md:gap-[5rem]">
          {branchData.map((branch, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center m-6 gap-3 transition-transform duration-300 ease-in-out hover:scale-105"
              >
                <div className="flex items-center gap-1 md:gap-2">
                  <Image src={branch.img} alt={branch.name} width={100} />
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "700",
                      color: "black",
                      fontSize: {
                        xs: "1.75rem",
                        sm: "1.75rem",
                        md: "2rem",
                        lg: "2.25rem",
                      },
                    }}
                  >
                    acm.
                    <span
                      style={{
                        backgroundImage: `linear-gradient(to right, ${branch.branchColors.join(", ")})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        display: "inline-block",
                      }}
                    >
                      {branch.suffix}
                    </span>
                  </Typography>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Branches;
