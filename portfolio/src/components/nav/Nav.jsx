import React, { useState, useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineProject } from "react-icons/ai";
import { FaCog } from "react-icons/fa";
import { PiFootprintsFill } from "react-icons/pi";
import "./nav.css";

const Nav = () => {
  const [navbar, setNav] = useState("#home");

  const handleScroll = () => {
    const homeSection = document.getElementById("home");
    const aboutSection = document.getElementById("about");
    const experienceSection = document.getElementById("expirence");
    const portfolioSection = document.getElementById("portfolio");
    const contactSection = document.getElementById("contact");
    const footerSection = document.getElementById("footer");

    const sections = [
      { section: homeSection, id: "#home" },
      { section: aboutSection, id: "#about" },
      { section: experienceSection, id: "#expirence" },
      { section: portfolioSection, id: "#projects" },
      { section: contactSection, id: "#contact" },
      { section: footerSection, id: "#footer" },
    ];

    const scrollTop = window.scrollY + 100;
    const activeSection = sections.find(({ section }) => {
      if (section) {
        const { offsetTop, offsetHeight } = section;
        return scrollTop >= offsetTop && scrollTop < offsetTop + offsetHeight;
      }
      return false;
    });

    if (activeSection) {
      setNav(activeSection.id);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className="fixed left-0 h-full flex-col bg-gray-800 text-white p-4 fix-less hidden md:flex">
      <a
        href="#home"
        onClick={() => setNav("#home")}
        className={`nav-link ${navbar === "#home" ? "active" : ""}`}
      >
        <AiOutlineHome className="text-5xl" />
      </a>
      <a
        href="#about"
        onClick={() => setNav("#about")}
        className={`nav-link ${navbar === "#about" ? "active" : ""}`}
      >
        <AiOutlineUser className="text-5xl" />
      </a>
      <a
        href="#expirence"
        onClick={() => setNav("#expirence")}
        className={`nav-link ${navbar === "#expirence" ? "active" : ""}`}
      >
        <FaCog className="text-5xl" />
      </a>
      <a
        href="#portfolio"
        onClick={() => setNav("#projects")}
        className={`nav-link ${navbar === "#projects" ? "active" : ""}`}
      >
        <AiOutlineProject className="text-5xl" />
      </a>
      <a
        href="#contact"
        onClick={() => setNav("#contact")}
        className={`nav-link ${navbar === "#contact" ? "active" : ""}`}
      >
        <AiFillMessage className="text-5xl" />
      </a>
      <a
        href="#footer"
        onClick={() => setNav("#contact")}
        className={`nav-link ${navbar === "#contact" ? "active" : ""}`}
      >
        <PiFootprintsFill className="text-5xl" />
      </a>
    </nav>
  );
};

export default Nav;
