"use client";
import Typewriter from "typewriter-effect";

const TypewriterText = () => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString("Computer Science").start();
      }}
      options={{
        wrapperClassName: "font-mono py-10 text-6xl rounded-md text-green-600",
        cursorClassName:
          "font-mono py-10 text-6xl rounded-md text-black-600 font-thin",
      }}
    />
  );
};

export default TypewriterText;
