"use client";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Intro from "@/sections/Intro";
import Navbar from "@/sections/Navbar";
import Resume from "@/sections/Resume";
import Services from "@/sections/Services";
import Skills from "@/sections/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Intro />
      <About />
      <Skills />
      <Services />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}
