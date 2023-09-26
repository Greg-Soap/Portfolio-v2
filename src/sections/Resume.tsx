import React from "react";
import { motion } from "framer-motion";
export default function Resume() {
  return (
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
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
