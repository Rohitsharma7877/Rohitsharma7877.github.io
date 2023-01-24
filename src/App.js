
import "./App.css"
import { AboutSection } from "./components/AboutSection"

import { ContactSection } from "./components/ContactSection"
import GithubStat from "./components/GithubSection"
import { HeroSection } from "./components/HeroSection"
import  Navbar  from "./components/Navbar"
import { ProjectsSection } from "./components/ProjectsSection"
import { SkillsSection } from "./components/SkillsSection"

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <GithubStat/>
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}

export default App