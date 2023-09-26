import React from "react";
import { motion } from "framer-motion";
export default function Contact() {
  return (
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
            If you have any questions or just want to chat about a cool project
            idea, I&apos;d love to hear from you! Whether you&apos;re a fellow
            developer, potential employer, or just someone who loves great
            design and coding, I&apos;m always open to new connections and
            collaborations. So, feel free to drop me a line anytime! Can&apos;t
            wait to hear from you soon.
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
  );
}
