import React from "react";
import { motion } from "framer-motion";
export default function Skills() {
  return (
    <section
      className="skill-section section-block section-sep"
      id="skill-section"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 content-block">
            <h2>
              <span>My Skills</span>I&apos;m great in what I do and Im loving it
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
  );
}
