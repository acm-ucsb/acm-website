"use client";
import Typewriter from "typewriter-effect";

const typewriterStrings: string[] = [
  "Computer Science",
  "Machine Learning",
  "Algorithms",
  "CS Research",
  "Web/App Design",
];

const TypewriterText = () => {
  return (
    <div className="flex w-full">
      <Typewriter
        options={{
          wrapperClassName: "font-mono text-[#0868A0] text-5xl md:text-[4rem]", // Responsive font sizes
          cursorClassName:
            "font-mono text-[#0868A0] text-5xl md:text-[4rem] animate-blink", // Responsive cursor sizes
          strings: typewriterStrings,
          loop: true,
          autoStart: true,
        }}
      />
    </div>
  );
};

export default TypewriterText;
