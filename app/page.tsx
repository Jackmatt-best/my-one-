
import AboutSection from "./components/AboutSection";
import Header from "./components/Header";
import HeroSection from "./components/Herosection";
import ProjectsSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";

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
            <ContactSection />
            <Footer />
          </main>
        </div>
    </>
  )
}