import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
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
              experience, proficient in crafting captivating web applications. I
              excel in front-end development using JavaScript, HTML, CSS, and
              React to breathe life into designs, while also leveraging back-end
              technologies like Node.js, MongoDB, Express, and AdonisJS for
              comprehensive solutions. An adept user of Framer Motion for adding
              engaging animations. Committed to innovation, I collaborate
              effectively and deliver exceptional solutions that align with
              business objectives.
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
  );
}
