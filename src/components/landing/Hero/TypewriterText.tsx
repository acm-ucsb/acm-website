"use client";
import React from "react";
import Typewriter from "typewriter-effect";

const typewriterStrings: string[] = [
  "Computer Science",
  "Data Science",
  "Technology",
  "Machine Learning",
  "Algorithms",
  "Research",
  "Web/App Design",
];

const TypewriterText = () => {
  return (
    <div className="flex w-full">
      <Typewriter
        options={{
          wrapperClassName:
            "font-mono text-[#0868A0] text-5xl min-[900px]:text-[3.6rem]",
          cursorClassName:
            "font-mono text-[#0868A0] text-5xl min-[900px]:text-[3.6rem] animate-blink",
          strings: typewriterStrings,
          loop: true,
          autoStart: true,
        }}
      />
    </div>
  );
};

export default TypewriterText;
