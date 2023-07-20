import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Socials = () => {
  return (
    <div className="flex justify-center gap-3 text-2xl fix-less">
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Albikras?tab=repositories" target="_blank">
        <BsGithub />
      </a>
      <a href="https://www.instagram.com/albikrasniqi1/" target="_blank">
        <BsInstagram />
      </a>
    </div>
  );
};

export default Socials;
