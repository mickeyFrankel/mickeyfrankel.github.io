import { Hero, TopBar } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Experience, Skills, Contact } from "./components/Sections";

export default function App() {
  return (
    <>
    <TopBar />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}
