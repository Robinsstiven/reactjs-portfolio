import Navbar from "./components/NavBar/navbar";
import Hero from "./components/Hero/hero";
import Skills from "./components/skills/skills";
import Portfolio from "./components/Portfolio/portfolio"
import Contact from "./components/Contact/contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
