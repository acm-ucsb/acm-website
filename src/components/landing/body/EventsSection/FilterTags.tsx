"use client";
import React, { useState } from "react";
import branchData from "@public/data/branchData";

type EventHandlerProps = {
  setFilter: React.Dispatch<React.SetStateAction<number>>;
};

const FilterTags = ({ setFilter }: EventHandlerProps) => {
  const [activeFilter, setActiveFilter] = useState(-1);

  const handleFilter = (id: number) => {
    setActiveFilter(id);
    setFilter(id);
  };

  const pillStyle = (isActive: boolean, color: string) => ({
    borderRadius: "999px",
    border: `2px solid ${color}`,
    backgroundColor: isActive ? color : "transparent",
    padding: "6px 20px",
    fontWeight: 600,
    fontSize: "0.9rem",
    color: isActive ? "#ffffff" : color,
    cursor: "pointer",
    transition: "all 0.2s ease",
    whiteSpace: "nowrap" as const,
  });

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "12px",
        alignItems: "center",
        marginBottom: "32px",
      }}
    >
      {/* All button */}
      <button
        onClick={() => handleFilter(-1)}
        style={pillStyle(activeFilter === -1, "#888888")}
      >
        All
      </button>

      {/* Branch buttons */}
      {branchData.map((branch) => (
        <button
          key={branch.id}
          onClick={() => handleFilter(branch.id)}
          style={pillStyle(activeFilter === branch.id, branch.branchColors[2])}
        >
          {branch.suffix}
        </button>
      ))}
    </div>
  );
};

export default FilterTags;
