import React from "react";
import Typewriter from "typewriter-effect";

const type = [
  "Front-end developer",
  "Open Source Contributor",
]

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: type,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
