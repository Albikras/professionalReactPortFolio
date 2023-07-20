import React from "react";

import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 fix">
      <div className="flex flex-wrap justify-evenly fix-less">
        <a href="https://linkedin.com" target="_blank">
          <BsLinkedin className="text-6xl" />
        </a>
        <a href="https://github.com/Albikras?tab=repositories" target="_blank">
          <BsGithub className="text-6xl" />
        </a>
        <a href="https://www.instagram.com/albikrasniqi1/" target="_blank">
          <BsInstagram className="text-6xl" />
        </a>
      </div>

      <div className="text-center fix-less">
        <small>&copy; Albi Krasniqi</small>
      </div>
    </footer>
  );
};

export default Footer;
