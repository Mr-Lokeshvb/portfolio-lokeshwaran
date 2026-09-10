import React from 'react'
import './App.css'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechnicalSkills from './components/TechnicalSkills'
import Services from './components/Services'
import Projects from './components/Projects'
// import RealWorldSolutions from './components/RealWorldSolutions'
// import ContentCreator from './components/ContentCreator'
// import Internships from './components/Internships'
import WorkExperience from "./components/WorkExperience";
import Leadership from './components/Leadership'
import Certificates from './components/Certificates'
import SoftSkills from './components/SoftSkills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <TechnicalSkills />
      <Services />
      {/* <RealWorldSolutions
        projects={portfolioData.realWorldProjects}
        section={portfolioData.realWorldSection}
      /> */}
      <WorkExperience />
      <Projects />
      <Leadership />
      <Certificates />
      <SoftSkills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
