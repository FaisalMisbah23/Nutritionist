import {useEffect} from 'react'
import "./App.css";
import Blogs from "./components/Blog";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Testimonals from "./components/Testimonals";

function Home() {

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
      {" "}
      <Hero id='top' />
      <Features />
      <Blogs />
      <Testimonals />
      <Pricing/>
    </>
  );
}

export default Home;
