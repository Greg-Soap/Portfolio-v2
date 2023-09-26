import React from "react";
import { motion } from "framer-motion";
export default function Services() {
  return (
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
          <h2>Services</h2>
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
                web applications, ensuring they are user-friendly and responsive
                on all devices.
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
                I enhance website speed, security, and scalability through code
                optimization, database tuning, and ongoing maintenance to ensure
                your site runs smoothly and securely.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
