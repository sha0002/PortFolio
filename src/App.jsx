import React, { useState } from 'react'
import './App.css'
import './Responsive.css'
import Navbar from './Components/NavBar/Navbar'
import Banner_Wrapper from './Components/Banner_wrapper/Banner_Wrapper'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Project from './Components/Project/Project'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import FadeInSection from './Components/CheckAni/animate'
import DotGrid from './Components/DotGrid/DotGrid'
import LocationCardDemo from './Components/CheckAni/Demo'




function App() {


  return (
    <>
      <div>
        <Navbar />
        <div style={{ width: '100%', height: '700px', position: 'relative' }} >
          <DotGrid
            dotSize={5}
            gap={15}
            baseColor="#2F293A"
            activeColor="#5227FF"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
        {/* <Banner_Wrapper /> */}
        {/* <About /> */}
        <Skills />
        {/* <Project /> */}
        <LocationCardDemo />
        <Contact />
        <Footer />
        {/* <ProgressBars/> */}


      </div>

    </>
  )
}

export default App
