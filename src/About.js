import React , {useEffect} from "react";
import AHero from "./components/about/AHero";
import AContent from "./components/about/AContent";
import Achievement from "./components/about/Achievement";
import Contact from "./components/about/Contact";
import Story from "./components/about/Story";

const About = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);

    const scrollToHash = () => {
      if (window.location.hash) {
        const element = document.getElementById(window.location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    scrollToHash();

    window.addEventListener('hashchange', scrollToHash);

    return () => {
      window.removeEventListener('hashchange', scrollToHash);
    };
  }, []);

  return (
    <>
      <AHero id='top' />
      <AContent />
      <Story/>
      <Achievement/>
      <Contact/>
    </>
  );
};

export default About;
