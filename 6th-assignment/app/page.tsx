import Navbar from "./Components/Navbar/page";
import Hero from "./Components/Hero/page";
import About from "./Components/About/page";
import Skills from "./Components/Skills/page";
import Contact from "./Components/Contact/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}