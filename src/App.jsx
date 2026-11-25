
import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Training from "./sections/Training";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Training />
        <Contact />
      </main>
    </div>
  );
}

export default App;
