import { Contact } from "lucide-react";
import AboutSection from "./components/AboutSection";
import Header from "./components/Header";
import HeroSection from "./components/Herosection";
import ProjectsSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";

export default function Page() {
  return (
    <>
        <div>
          <Header />
          <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <Contact />
          </main>
        </div>
    </>
  )
}