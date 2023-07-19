import React from "react";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import Expirence from "./components/expirence/Expirence";
import ContactMe from "./components/contact/ContactMe";
import AboutMe from "./components/aboutMe/AboutMe";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <AboutMe />
      <Expirence />
      <Portfolio />
      <ContactMe />
      <Footer />
    </>
  );
};

export default App;
