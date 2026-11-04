import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Artwork from "../components/Artwork";
import About from "../components/About";
import Contact from "../components/Contact";
import Divider from "../components/Divider";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Divider />
        <Projects />
        <About />
        <Artwork />
        <Contact />
      </main>
    </>
  );
}
