import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import type { ACMEvent } from "@public/data/events";
import formatDateTime from "../../../../util/formatDateTime";
import branchData from "@public/data/branchData";
import Image from "next/image";
type EventHandlerProps = {
  setFilter: React.Dispatch<React.SetStateAction<number>>; // Setter for filter state
};

const FilterTags = ({ setFilter }: EventHandlerProps) => {
  const [activeFilter, setActiveFilter] = useState(-1);
  const handleFilter = (branchItem: number) => {
    setActiveFilter(branchItem);
    setFilter(branchItem);
  };

  return (
    <section className="flex flex-row flex-wrap items-center justify-center mb-8">
      <Card
        sx={{
          borderRadius: "4px",
          backgroundColor: activeFilter === -1 ? "#f0f0f0" : "#ffffff",
          transform: activeFilter === -1 ? "scale(1.05)" : "scale(1.0)",
          boxShadow:
            activeFilter === -1
              ? "0 4px 20px rgba(0, 0, 0, 0.2)"
              : "0 2px 10px rgba(0, 0, 0, 0.08)",
          m: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          padding: 2,
          minWidth: 100,
          fontWeight: "bold",
          cursor: "pointer",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
          },
        }}
        className="cursor-pointer"
        onClick={() => handleFilter(-1)}
      >
        all
      </Card>
      {branchData.map((branchItem) => (
        <div key={branchItem.id} onClick={() => handleFilter(branchItem.id)}>
          {" "}
          <Card
            sx={{
              borderRadius: "4px",
              m: 2,
              backgroundColor:
                activeFilter === branchItem.id ? "#f0f0f0" : "#ffffff",
              transform:
                activeFilter === branchItem.id ? "scale(1.05)" : "scale(1.0)",
              boxShadow:
                activeFilter === branchItem.id
                  ? "0 4px 20px rgba(0, 0, 0, 0.2)"
                  : "0 2px 10px rgba(0, 0, 0, 0.08)",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              transition:
                "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              padding: 2,
              minWidth: 200,
              fontWeight: "bold",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
              },
            }}
            className="cursor-pointer"
          >
            acm.
            <span
              style={{
                color: branchItem.branchColors[2],
              }}
            >
              {branchItem.suffix}
            </span>
          </Card>
        </div>
      ))}
    </section>
  );
};

export default FilterTags;
