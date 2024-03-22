import React from "react";
import AHero from "./components/about/AHero";
import AContent from "./components/about/AContent";
import Achievement from "./components/about/Achievement";
import Contact from "./components/about/Contact";
import Story from "./components/about/Story";

const About = () => {
  return (
    <>
      <AHero />
      <AContent />
      <Story/>
      <Achievement/>
      <Contact/>
    </>
  );
};

export default About;
