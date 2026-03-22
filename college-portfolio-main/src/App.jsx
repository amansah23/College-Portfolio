import React from 'react'
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Certifications from "./components/Certifications"
import University from "./components/University"
// import Achievements from "./components/Achievements"
import Resume from "./components/Resume"
import Footer from "./components/Footer"
import Navigation from './components/Navigation'
const App = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Skills />
      <Projects />
      <Certifications />
      <University />
      {/* <Achievements /> */}
      <Resume />
      <Footer />
    </>
  )
}

export default App
