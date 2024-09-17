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
    <Typewriter
      options={{
        wrapperClassName: "font-mono py-10 text-6xl rounded-md text-[#0868A0]",
        cursorClassName:
          "font-mono py-10 text-6xl rounded-md text-black-600 font-thin animate-blink text-[#0868A0]",
        strings: typewriterStrings,
        loop: true,
        autoStart: true,
      }}
    />
  );
};

export default TypewriterText;
