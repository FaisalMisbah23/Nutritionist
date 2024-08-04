import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Footer from "./components/Footer";
import Team from "./Team";
import Process from "./Process";
import Prices from "./Prices";
import Blogs from "./Blogs";
import Contact from "./Contact";

function App() {
  return (
    <Router> {/* Wrap your entire application with the Router component */}

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/process" element={<Process />} />
        <Route path="/pricing" element={<Prices />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
