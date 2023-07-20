import React from "react";
import lbImg from "../../images/Myname.jpg";
import Socials from "./Socials";

import "./header.css";
import Buttons from "./Buttons";

const Header = () => {
  return (
    <div
      id="home"
      className="intro-img flex flex-wrap justify-center text-center gap-3 min-h-screen fix"
    >
      <div className="flex justify-center flex-col bg-gray-900 rounded-3xl fix-less gap-5 w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl">Hello I'm</h2>
        <h1 className="text-4xl sm:text-5xl md:text-6xl">Albi Krasniqi</h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl">
          Fullstack Developer
        </h2>
        <div className="flex flex-wrap justify-evenly">
          <Buttons />
        </div>
        <div className="flex flex-col flex-wrap items-center">
          <div className="flex justify-center">
            <img
              src={lbImg}
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl imgHover"
            ></img>
          </div>
          <Socials />
          <a href="#contact" className="text-lg sm:text-xl md:text-2xl">
            Scroll Down
          </a>
          <h2 className="text-lg sm:text-xl md:text-2xl">
            Or you can scroll or use the navigation bar
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
