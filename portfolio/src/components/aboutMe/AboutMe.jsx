import React from "react";
import headshot from "../../images/headshot.JPG";

import { FaAward } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { FaPython } from "react-icons/fa";

import "./aboutme.css";

const AboutMe = () => {
  return (
    <section id="about" className="flex flex-col items-center gap-2">
      <div className="flex flex-col items-center gap-2 fix-less">
        <h2 className="text-3xl">Learn</h2>
        <h1 className="text-4xl">About Me</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-2">
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={headshot}
            className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 imgHover bg-gray-900 rounded-full"
            alt="Albi Krasniqi"
          />
        </div>
        <div className="w-full md:w-2/3">
          <div className="flex flex-wrap gap-2 justify-evenly">
            <div className="flex flex-col bg-gray-900 text-center items-center rounded-xl border-2 fix-less box p-4">
              <FaAward className="text-2xl" />
              <h1>Schooling</h1>
              <p>U of T Coding Bootcamp</p>
            </div>
            <div className="flex flex-col bg-gray-900 text-center items-center rounded-xl border-2 fix-less box p-4">
              <MdWork className="text-2xl" />
              <h1>Work Experience</h1>
              <p>Fine Dining Server</p>
            </div>
            <div className="flex flex-col bg-gray-900 text-center items-center rounded-xl border-2 fix-less box p-4">
              <FaPython className="text-2xl" />
              <h1>Future Languages</h1>
              <p>Python</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 p-4">
            <p>
              Hi There, I'm Albi a 23 year old passionate coder located in the wonderful city of St.Catharines.  Ever since my first coding class in highschool I've always been hooked on coding and enjoyed making little projects here and there for fun.  I later decided to make use of this small hobbie that turned into a passion by going to the university of toronto coding bootcamp to aquire my certificate in the world of coding.  Currently i have been studying python as the bootcamp covered a lot of javascript in depth and i wanted to branch out and see how my coding abilities wiill do when dealing with an OOP.  During my education I worked as a fine dining server which gave me many invaluable expirences such as, customer service, instilling a strong work ethic into myself, helping me with my adaptability, teamwork, and a keen eye for detail,  these are qualities I try to bring to ever project I work on.  My hobbies now lie in coding and video games, I am very use to working in front of a screen for long periods of time.  I love coding it is definatly a passion of mine and I hope I can continue my exhilarating journey in the industry.   
            </p>
            <div className="flex justify-center">
              <a href="#contact" className="btn fix-less">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
