import React, { useState } from 'react'
import './App.css'
import './Responsive.css'
import Navbar from './Components/NavBar/Navbar'
import Banner_Wrapper from './Components/Banner_wrapper/Banner_Wrapper'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Project from './Components/Project/Project'
import Contact from './Components/Contact/Contact'
// import ProgressBars from './Components/ProgressBar/Progressbar'




function App() {

  return (
    <>
      <div>
        <Navbar />
        <Banner_Wrapper />
        <About />
        <Skills />
        <Project />
        <Contact />
        {/* <ProgressBars/> */}
      </div>

    </>
  )
}

export default App
