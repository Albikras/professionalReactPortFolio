import React from "react";

const Buttons = () => {
  return (
    <div className="flex justify-center introButtons fix-less gap-3">
      <a href="#about" className="btn text-sm md:text-base w-auto">
        About Me
      </a>
      <a href="#contact" className="btn text-sm md:text-base w-auto">
        Contact Me
      </a>
    </div>
  );
};

export default Buttons;
