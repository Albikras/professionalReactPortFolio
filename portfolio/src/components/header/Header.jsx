import React from "react";
import lbImg from "../../images/Myname.jpg";

import "./header.css";
import Buttons from "./Buttons";

const Header = () => {
  return (
    <div className="intro-img flex flex-wrap justify-center text-center fix gap-3">
      <div className="flex justify-center flex-col bg-purple-900 rounded-3xl fix-less gap-5">
        <h2 className="fix-alot">Hello I'm</h2>
        <h1 className="fix-alot">Albi Krasniqi</h1>
        <h2 className="fix-alot">Fullstack Developer</h2>
        <Buttons />
        <div>
          <div>
            <img
              src={lbImg}
              className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl imgHover"
            ></img>
          </div>
          <h2 className="fix-less">
            Or you can scroll or use the navigation bar
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
