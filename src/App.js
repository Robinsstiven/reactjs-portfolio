import Navbar from "./components/NavBar/navbar";
import Hero from "./components/Hero/hero";
import Skills from "./components/skills/skills";
import Portfolio from "./components/Portfolio/portfolio"
import Contact from "./components/Contact/contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
