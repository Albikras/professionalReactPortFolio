import React from "react";

const Buttons = () => {
  return (
    <div className="flex justify-center introButtons fix-less gap-3">
      <a href="/about" className="btn">
        About Me
      </a>
      <a href="/contact" className="btn btn-primary">
        Contact Me
      </a>
    </div>
  );
};

export default Buttons;
