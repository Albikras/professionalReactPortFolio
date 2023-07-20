import React from "react";

import blackjack from "../../images/blakcJackWebpage.png";
import bookApp from "../../images/bookflix.png";
import pokemon from "../../images/pokemon.png";
import plan from "../../images/daily.png";
import quiz from "../../images/quiz.png";
import blog from "../../images/blog.png";

const data = [
  {
    id: 1,
    image: blackjack,
    altimg: "application image",
    title: "Blackjack Webpage",
    github: "https://github.com/Nick-JDA/Blackjack-Webpage",
    liveApp: "https://nick-jda.github.io/Blackjack-Webpage/",
  },
  {
    id: 2,
    image: bookApp,
    title: "BookFlix",
    altimg: "application image",
    github: "https://github.com/JohnDavidSmith/Book-Database",
    liveApp: "https://stormy-atoll-29529-b51ffbbd6de0.herokuapp.com/",
  },
  {
    id: 3,
    image: pokemon,
    altimg: "application image",
    title: "Pokemon Battleground",
    github: "https://github.com/Douped/pokeBattleGround",
    liveApp: "https://radiant-peak-95315-846b2c46030b.herokuapp.com/",
  },
  {
    id: 4,
    image: plan,
    altimg: "application image",
    title: "Daily Planner",
    github: "https://github.com/Albikras/DailyPlanner",
    liveApp: "https://albikras.github.io/DailyPlanner/",
  },
  {
    id: 5,
    image: quiz,
    altimg: "application image",
    title: "Quiz",
    github: "https://github.com/Albikras/Quiz",
    liveApp: "https://albikras.github.io/Quiz/",
  },
  {
    id: 6,
    image: blog,
    altimg: "application image",
    title: "Tech Blog",
    github: "https://github.com/Albikras/Blog",
    liveApp: "https://blogtech1287-5a4305b591eb.herokuapp.com/",
    customStyle: {
      width: "100%",
    },
  },
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="flex flex-wrap justify-center min-h-screen"
    >
      <div className="flex flex-wrap flex-col text-center w-full fix">
        <h2 className="text-3xl">Skills I Have</h2>
        <h1 className="text-4xl">My Expirence</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 fix">
        {data.map(({ id, image, altimage, title, github, liveApp }) => {
          return (
            <article
              key={id}
              className="text-center bg-gray-900 fix-less rounded-2xl imgHover"
            >
              <h1 className="text-4xl fix-less">{title}</h1>
              <div>
                <img
                  src={image}
                  alt={altimage}
                  className="w-full h-48 object-cover rounded-md"
                ></img>
              </div>
              <div className="flex justify-center space-x-2 fix">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={liveApp} className="btn">
                  Live App
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
