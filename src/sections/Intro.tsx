import React from "react";
import { motion } from "framer-motion";
export default function Intro() {
  return (
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
                  interfaces and brainstorming unique functionalities that stand
                  out.
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
                  Embracing challenges, I pour relentless effort into every line
                  of code and design element, creating impactful results through
                  sheer determination.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
