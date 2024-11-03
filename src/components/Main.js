import NavBar from "./NavBar.js";
import Hero from "./Hero.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Skills } from "./Skills.js";
import Projects from "./Projects.js";
import Footer from "./Footer.jsx";

const Main = () => {
  return (
    <div className="Main">
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default Main;
