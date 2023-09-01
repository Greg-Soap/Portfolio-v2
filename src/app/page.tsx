"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
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
    <>
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
              <a className="navbar-brand" href="#">
                {/* <img
                  className="img-fluid"
                  src="image/fungi_logo.png"
                  alt="fungi logo"
                /> */}
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
                      className="nav-link active"
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
      <section className="hero-area" id="hero-area">
        <div className="container">
          <div className="hero-content d-flex justify-content-center">
            <div className="row d-flex align-items-center justify-content-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.3 } }}
                className="col-xl-10 content-block"
              >
                <h1 className="hero-head">
                  <small>Hello, Im</small>Emmanuel <strong>Kingsley</strong>
                </h1>
                <p>
                  <span
                    className="typer"
                    id="main"
                    data-words="Full Stack Web Developer"
                    data-delay="100"
                    data-deletedelay="1000"
                  ></span>
                  <span className="cursor" data-owner="main"></span>
                </p>
                <div className="link-group"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section id="intro-section" className="intro-section section-block">
        <div className="container">
          <motion.div
            initial={{ y: "10vh", opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.2, duration: 0.5 },
            }}
            className="section-title"
          >
            <h2>Welcome to my World</h2>
            <p className="lead">
              Where creativity, dedication, and hard work come together to shape
              extraordinary digital experiences.
            </p>
          </motion.div>
          <div className="row">
            <motion.div
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              initial={{ y: "10vh", opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.2, duration: 0.5 },
              }}
              className="col-xl-4 col-lg-6"
            >
              <div className="item-wrapper">
                <div className="icon-box">
                  <i className="pe-7s-science"></i>
                </div>
                <div className="content-wrapper">
                  <h3>Creativity</h3>
                  <p>
                    I infuse every project with fresh ideas, crafting engaging
                    interfaces and brainstorming unique functionalities that
                    stand out.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              initial={{ y: "10vh", opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.4, duration: 0.5 },
              }}
              className="col-xl-4 col-lg-6"
            >
              <div className="item-wrapper">
                <div className="icon-box">
                  <i className="pe-7s-diamond"></i>
                </div>
                <div className="content-wrapper">
                  <h3>Dedication</h3>
                  <p>
                    I dive deep into each task, researching thoroughly and
                    persistently problem-solving to ensure outcomes that exceed
                    expectations.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              initial={{ y: "10vh", opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.6, duration: 0.5 },
              }}
              className="col-xl-4 col-lg-6"
            >
              <div className="item-wrapper">
                <div className="icon-box">
                  <i className="pe-7s-rocket"></i>
                </div>
                <div className="content-wrapper">
                  <h3>Hard Work</h3>
                  <p>
                    Embracing challenges, I pour relentless effort into every
                    line of code and design element, creating impactful results
                    through sheer determination.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <motion.section
        className="about-section section-block section-sep"
        id="about-section"
        initial={{ x: "-10vw", opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { delay: 0.2, duration: 0.5, ease: "easeOut" },
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6 image-block">
              <div
                className="img-wrapper about-img-wrap"
                data-tilt
                data-tilt-max="3"
              >
                <Image
                  className="about-img-1 img-fluid"
                  src="/image/file.jpeg"
                  alt="about image"
                  style={{ borderRadius: "12px" }}
                  width={508}
                  height={638}
                />
              </div>
            </div>
            <div className="col-xl-6 content-block">
              <h2>
                <span>About Me</span>Full Stack Web Developer
              </h2>
              <p>
                I&apos;m a Passionate full-stack web developer with 2 years of
                experience, proficient in crafting captivating web applications.
                I excel in front-end development using JavaScript, HTML, CSS,
                and React to breathe life into designs, while also leveraging
                back-end technologies like Node.js, MongoDB, Express, and
                AdonisJS for comprehensive solutions. An adept user of Framer
                Motion for adding engaging animations. Committed to innovation,
                I collaborate effectively and deliver exceptional solutions that
                align with business objectives.
              </p>

              <div className="personal-details row">
                <div className="col-md-6">
                  <ul className="personal-info">
                    <li>
                      <h4>Name</h4>
                      <p>Emmanuel G Kingsley</p>
                    </li>
                    <li>
                      <h4>Email</h4>
                      <p>emmanuelkingsley36@gmail.com</p>
                    </li>
                    <li>
                      <h4>Phone</h4>
                      <p>+234 80 3863 7218</p>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="personal-info">
                    <li>
                      <h4>Education</h4>
                      <p>Bachelors in Electrical/Electronic Engineering</p>
                    </li>
                    <li>
                      <h4>Freelance</h4>
                      <p>Available</p>
                    </li>
                  </ul>
                </div>
              </div>
              <a
                className="btn-main"
                href="/pdf/EmmanuelGkingsleyResume.pdf"
                download
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </motion.section>
      <section
        className="skill-section section-block section-sep"
        id="skill-section"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6 content-block">
              <h2>
                <span>My Skills</span>I&apos;m great in what I do and Im loving
                it
              </h2>
            </div>
            <div className="col-xl-6 progress-block">
              <div className="progress-wrapper">
                <h4>Javascript</h4>
                <p className="progress-value">84%</p>
                <div className="progress">
                  <motion.div
                    className="progress-bar"
                    role="progressbar"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "84%" }}
                  ></motion.div>
                </div>
              </div>
              <div className="progress-wrapper">
                <h4>React-js</h4>
                <p className="progress-value">90%</p>
                <div className="progress">
                  <motion.div
                    className="progress-bar"
                    role="progressbar"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "90%" }}
                  ></motion.div>
                </div>
              </div>
              <div className="progress-wrapper">
                <h4>Node-js</h4>
                <p className="progress-value">65%</p>
                <div className="progress">
                  <motion.div
                    className="progress-bar"
                    role="progressbar"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "65%" }}
                  ></motion.div>
                </div>
              </div>
              <div className="progress-wrapper">
                <h4>Database Management</h4>
                <p className="progress-value">80%</p>
                <div className="progress">
                  <motion.div
                    className="progress-bar"
                    role="progressbar"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "80%" }}
                  ></motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="service-section section-block section-sep"
        id="service-section"
      >
        <div className="container">
          <motion.div
            initial={{ y: "10vh", opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.2, duration: 0.5 },
            }}
            className="section-title"
          >
            <h2>Service</h2>
            <p className="lead"></p>
          </motion.div>
          <div className="row">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              viewport={{ once: true }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.1, duration: 0.5, ease: "easeOut" },
              }}
              className="col-xl-4 col-lg-6"
            >
              <div
                className="content-wrapper service-tilt"
                data-tilt
                data-tilt-max="15"
              >
                <div className="icon-box">
                  <i className="pe-7s-monitor"></i>
                </div>
                <h3>Custom Web Development</h3>
                <p>
                  I create personalized, visually appealing websites and dynamic
                  web applications, ensuring they are user-friendly and
                  responsive on all devices.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              viewport={{ once: true }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.5, ease: "easeOut" },
              }}
              className="col-xl-4 col-lg-6"
            >
              <div
                className="content-wrapper service-tilt"
                data-tilt
                data-tilt-max="15"
              >
                <div className="icon-box">
                  <i className="pe-7s-joy"></i>
                </div>
                <h3>Full-Stack Application Development</h3>
                <p>
                  From idea to deployment, I handle end-to-end web application
                  development, including both front-end design and back-end
                  functionality, using the latest technologies.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              viewport={{ once: true }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.3, duration: 0.5, ease: "easeOut" },
              }}
              className="col-xl-4 col-lg-6"
            >
              <div
                className="content-wrapper service-tilt"
                data-tilt
                data-tilt-max="15"
              >
                <div className="icon-box">
                  <i className="pe-7s-display2"></i>
                </div>
                <h3>Performance Optimization & Maintenance</h3>
                <p>
                  I enhance website speed, security, and scalability through
                  code optimization, database tuning, and ongoing maintenance to
                  ensure your site runs smoothly and securely.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section
        className="resume-section section-block section-sep"
        id="resume-section"
      >
        <div className="container">
          <motion.div
            initial={{ y: "10vh", opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.2, duration: 0.5 },
            }}
            className="section-title"
          >
            <h2>My Resume</h2>
            <p className="lead"></p>
          </motion.div>
          <div className="row">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: { delay: 0.2, duration: 0.5, ease: "easeInOut" },
              }}
              className="col-lg-6 education-block"
            >
              <h3>My Education</h3>
              <ul>
                <li className="d-flex align-items-start">
                  <div className="icon-block">
                    <div className="icon-box">
                      <i className="pe-7s-study"></i>
                    </div>
                  </div>
                  <div className="content-wrapper">
                    <h4>
                      Web Development <span> 2020</span>
                    </h4>
                    <h5>Free Coding Camp</h5>
                    {/* <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia mollit anim id est laborum.
                    </p> */}
                  </div>
                </li>
                <li className="d-flex align-items-start">
                  <div className="icon-block">
                    <div className="icon-box">
                      <i className="pe-7s-study"></i>
                    </div>
                  </div>
                  <div className="content-wrapper">
                    <h4>
                      Bachelor in Electrical/Electronics Engineering{" "}
                      <span> 2016-2023</span>
                    </h4>
                    <h5>University of Benin</h5>
                    {/* <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia mollit anim id est laborum.
                    </p> */}
                  </div>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: { delay: 0.4, duration: 0.5, ease: "easeInOut" },
              }}
              className="col-lg-6 education-block"
            >
              <h3>My Experience</h3>
              <ul>
                <li className="d-flex align-items-start">
                  <div className="icon-block">
                    <div className="icon-box">
                      <i className="pe-7s-portfolio"></i>
                    </div>
                  </div>
                  <div className="content-wrapper">
                    <h4>
                      Software Developer <span> 2023</span>
                    </h4>
                    <h5>Handiwokers Technologies</h5>
                    {/* <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia mollit anim id est laborum.
                    </p> */}
                  </div>
                </li>
                <li className="d-flex align-items-start">
                  <div className="icon-block">
                    <div className="icon-box">
                      <i className="pe-7s-portfolio"></i>
                    </div>
                  </div>
                  <div className="content-wrapper">
                    <h4>
                      Full Stack Developer <span> 2020-2023</span>
                    </h4>
                    <h5>Freelancer</h5>
                    {/* <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia mollit anim id est laborum.
                    </p> */}
                  </div>
                </li>
                <li className="d-flex align-items-start">
                  <div className="icon-block">
                    <div className="icon-box">
                      <i className="pe-7s-portfolio"></i>
                    </div>
                  </div>
                  <div className="content-wrapper">
                    <h4>
                      Frontend Developer <span> 2021-2022</span>
                    </h4>
                    <h5>Tryve Technologies</h5>
                    {/* <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia mollit anim id est laborum.
                    </p> */}
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      <section
        className="contact-section section-block section-sep"
        id="contact-section"
      >
        <div className="container">
          <motion.div
            initial={{ y: "10vh", opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.2, duration: 0.5 },
            }}
            className="section-title"
          >
            <h2>Get in Touch</h2>
            <p className="lead">
              If you have any questions or just want to chat about a cool
              project idea, I&apos;d love to hear from you! Whether you&apos;re
              a fellow developer, potential employer, or just someone who loves
              great design and coding, I&apos;m always open to new connections
              and collaborations. So, feel free to drop me a line anytime!
              Can&apos;t wait to hear from you soon.
            </p>
          </motion.div>
          <div className="row contact-options">
            <motion.div
              initial={{ y: "10vh", opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.6, duration: 0.5 },
              }}
              className="col-lg-4 d-flex justify-content-xxl-center align-items-xl-center"
            >
              <div className="icon-box">
                {" "}
                <i className="fab fa-linkedin"></i>
              </div>
              <div className="content-wrapper">
                <h4>
                  <a
                    target="_blank"
                    href="https://linkedin.com/in/emmanuel-kingsley-a41480205"
                  >
                    LinkedIn
                  </a>
                </h4>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: "10vh", opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.4, duration: 0.5 },
              }}
              className="col-lg-4 d-flex justify-content-xxl-center align-items-xl-center"
            >
              <div className="icon-box">
                <i className="fab fa-github"></i>
              </div>
              <div className="content-wrapper">
                <h4>
                  <a href="https://github.com/Greg-Soap" target="_blank">
                    Github
                  </a>
                </h4>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: "10vh", opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.8, duration: 0.5 },
              }}
              className="col-lg-4 d-flex justify-content-xxl-center align-items-xl-center"
            >
              <div className="icon-box">
                <i className="fab fa-whatsapp"></i>
              </div>
              <div className="content-wrapper">
                <h4>
                  <a href="https://wa.me/2348038637218" target="_blank">
                    Chat on Whatsapp
                  </a>
                </h4>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <footer className="site-footer" id="site-footer">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 text-center branding-block"></div>
          </div>
          <div className="back-to-top">
            <a href="#site-header">
              <i className="bi bi-box-arrow-up"></i>
            </a>
          </div>
          <div className="row footer-bottom">
            <div className="col-md-6">
              <p>
                All rights reserved &copy; 2023{" "}
                <strong>Emmanuel G Kingsley</strong>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
