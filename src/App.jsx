import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skill from "./components/Skill";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div id="skill">
        <Skill />
      </div>
      <div id="experience">
      <Experience />
      </div>
      <Projects />
      <Contact />
      
      
      
    </>
  );
}

export default App;
