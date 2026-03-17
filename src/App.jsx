import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import './index.css'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Resume from './components/Resume'
import ResumePage from './components/ResumePage'

const Portfolio = () => (
  <div>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Resume />
    <Achievements />
    <Contact />
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
