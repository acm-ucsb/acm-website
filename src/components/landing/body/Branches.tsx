import { Typography } from "@mui/material";
import branch_data from "../../../../public/data/branch_data";
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
        <div className="flex flex-row flex-wrap gap-[10rem]">
          {branch_data.map((branch, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center m-6 gap-3"
              >
                <Image src={branch.img} alt={branch.name} width={300} />
                <Typography
                  variant="h6"
                  align="center"
                  gutterBottom
                  sx={{
                    fontWeight: "400",
                    color: "gray",
                  }}
                >
                  {branch.description}
                </Typography>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Branches;
