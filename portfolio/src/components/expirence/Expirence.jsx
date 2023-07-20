import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import Download from "./Download";

const Expirence = () => {
  return (
    <section id="expirence" className="flex flex-wrap justify-center fix">
      <div className="flex flex-wrap flex-col text-center w-full fix">
        <h2>Skills I Have</h2>
        <h1>My Expirence</h1>
      </div>
      <div className="flex flex-wrap w-full justify-evenly gap-3">
        <div className="flex flex-wrap w-full md:w-1/3 justify-center gap-4 fix bg-gray-900 rounded-3xl imgHover">
          <h2 className="w-full text-center">Frontend</h2>
          <div className="flex flex-wrap gap-8 justify-evenly">
            <article className="flex flex-wrap basis-1/3 justify-start gap-2">
              <div className="flex flex-wrap flex-col">
                <BsPatchCheckFill className="text-4xl" />
                <div>
                  <h4>HTML</h4>
                  <p>Intermediate</p>
                </div>
              </div>
            </article>
            <article className="flex flex-wrap basis-1/3 justify-start gap-2">
              <div className="flex flex-wrap flex-col">
                <BsPatchCheckFill className="text-4xl" />
                <div>
                  <h4>CSS</h4>
                  <p>Intermediate</p>
                </div>
              </div>
            </article>
            <article className="flex flex-wrap basis-1/3 justify-start gap-2">
              <div className="flex flex-wrap flex-col">
                <BsPatchCheckFill className="text-4xl" />
                <div>
                  <h4>Bootstrap</h4>
                  <p>Intermediate</p>
                </div>
              </div>
            </article>
            <article className="flex flex-wrap basis-1/3 justify-start gap-2">
              <div className="flex flex-wrap flex-col">
                <BsPatchCheckFill className="text-4xl" />
                <div>
                  <h4>JavaScript</h4>
                  <p>Intermediate</p>
                </div>
              </div>
            </article>
            <article className="flex flex-wrap basis-1/3 justify-start gap-2">
              <div className="flex flex-wrap flex-col">
                <BsPatchCheckFill className="text-4xl" />
                <div>
                  <div>
                    <h4>React</h4>
                    <p>Intermediate</p>
                  </div>
                </div>
              </div>
            </article>
            <article className="flex flex-wrap basis-1/3 justify-start gap-2">
              <div className="flex flex-wrap flex-col">
                <BsPatchCheckFill className="text-4xl" />
                <div>
                  <h4>Tailwind</h4>
                  <p>Intermediate</p>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div className="flex flex-wrap w-full md:w-1/3 justify-center gap-4 fix bg-gray-900 rounded-3xl imgHover  mt-4 md:mt-0">
          <h2 className="w-full text-center">Backend</h2>
          <div className="flex flex-wrap gap-8 justify-evenly">
            <article className="flex flex-wrap basis-1/3 justify-start gap-2">
              <div className="flex flex-wrap flex-col">
                <BsPatchCheckFill className="text-4xl" />
                <div>
                  <h4>Node JS</h4>
                  <p>Intermediate</p>
                </div>
              </div>
            </article>
            <article className="flex flex-wrap basis-1/3 justify-start gap-2">
              <div className="flex flex-wrap flex-col">
                <BsPatchCheckFill className="text-4xl" />
                <div>
                  <h4>MongoDB</h4>
                  <p>Intermediate</p>
                </div>
              </div>
            </article>
            <article className="flex flex-wrap basis-1/3 justify-start gap-2">
              <div className="flex flex-wrap flex-col">
                <BsPatchCheckFill className="text-4xl" />
                <div>
                  <h4>Express JS</h4>
                  <p>Intermediate</p>
                </div>
              </div>
            </article>
            <article className="flex flex-wrap basis-1/3 justify-start gap-2">
              <div className="flex flex-wrap flex-col">
                <BsPatchCheckFill className="text-4xl" />
                <div>
                  <h4>Java</h4>
                  <p>Basic</p>
                </div>
              </div>
            </article>
            <article className="flex flex-wrap basis-1/3 justify-start gap-2">
              <div className="flex flex-wrap flex-col">
                <BsPatchCheckFill className="text-4xl" />
                <div>
                  <h4>MySQL</h4>
                  <p>Intermediate</p>
                </div>
              </div>
            </article>
            <article className="flex flex-wrap basis-1/3 justify-start gap-2">
              <div className="flex flex-wrap flex-col">
                <BsPatchCheckFill className="text-4xl" />
                <div>
                  <h4>Python</h4>
                  <p>Basic</p>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div className="flex flex-wrap w-full justify-center">
          <Download />
        </div>
      </div>
    </section>
  );
};

export default Expirence;
