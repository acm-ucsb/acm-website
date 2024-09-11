"use client";
import branch_data from "../../../../public/data/branch_data";
import Image from "next/image";

const Branches = () => {
  return (
    <section id="branches">
      <div className="flex flex-col items-center justify-center mb-48">
        <h1>Branches</h1>
        <div className="flex flex-row flex-wrap">
          {branch_data.map((branch, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center m-6"
              >
                <Image src={branch.img} alt={branch.name} width={300} />
                <p>{branch.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Branches;
