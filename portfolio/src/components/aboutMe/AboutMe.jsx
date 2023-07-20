import React from "react";
import lbImg from "../../images/Myname.jpg";

import { FaAward } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { FaPython } from "react-icons/fa";

import "./aboutme.css";

const AboutMe = () => {
  return (
    <section id="about" className="flex flex-col items-center gap-2">
      <div className="flex flex-col items-center gap-2 fix-less">
        <h2>Learn</h2>
        <h1>About Me</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-2">
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={lbImg}
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laudantium vel et explicabo dolor alias, vitae eligendi nihil.
              Laudantium cum deserunt quod nihil alias iusto facere? Ab aliquid
              optio modi non voluptatibus voluptatum ipsa. Assumenda quisquam
              praesentium provident nihil at cum doloribus, dolor labore soluta
              odio? Autem vitae sunt, cumque mollitia, aliquam eligendi facere
              excepturi modi quas sint ex! Voluptatum libero repudiandae
              pariatur unde iusto dicta labore, ut delectus laudantium
              recusandae in, possimus nostrum tenetur magni dolore tempora nisi
              blanditiis provident.
            </p>
            <div className="flex justify-center">
              <a className="btn fix-less">Contact Me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
