import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
export default function Navbar() {
  const [colorChange, setColorChange] = useState(false);

  const handleScroll = () => {
    const heroSection = document.getElementById("hero-area");
    const aboutSection = document.getElementById("intro-section");

    if (heroSection && aboutSection) {
      const scrollPosition = window.scrollY;
      const heroSectionTop = heroSection.offsetTop;
      const aboutSectionTop = aboutSection.offsetTop;

      if (
        scrollPosition >= heroSectionTop &&
        scrollPosition < aboutSectionTop
      ) {
        setColorChange(false);
      } else {
        setColorChange(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.header className="site-header" id="site-header">
        <motion.nav
          initial={{ y: "-100vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
          exit={{ y: -1000, transition: { duration: 0.7 } }}
          className={`navbar navbar-expand-xl ${colorChange && "fixed-top"}`}
          id="site-navbar"
        >
          <div className="container">
            <a className="navbar-brand" href="/">
              EGK
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <i className="bi bi-list"></i>
              </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-current="page"
                    href="#site-header"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about-section">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact-section">
                    Contact
                  </a>
                </li>
              </ul>
              <ul className="list-inline nav-social">
                <li className="list-inline-item">
                  <a href="https://wa.me/2348038637218" target="_blank">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://linkedin.com/in/emmanuel-kingsley-a41480205"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://github.com/Greg-Soap" target="_blank">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </motion.nav>
      </motion.header>
    </AnimatePresence>
  );
}
