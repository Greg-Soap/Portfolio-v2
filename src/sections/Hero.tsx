import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
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
  );
}
