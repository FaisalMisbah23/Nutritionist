import "./App.css";
import Blogs from "./components/Blog";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Testimonals from "./components/Testimonals";

function Home() {
  return (
    <>
      {" "}
      <Hero />
      <Features />
      <Blogs />
      <Testimonals />
      <Pricing/>
    </>
  );
}

export default Home;
