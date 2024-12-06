import React, { useState } from 'react'
import './App.css'
import './Responsive.css'
import Navbar from './Components/NavBar/Navbar'
import { Outlet } from 'react-router-dom'
import Banner_Wrapper from './Components/Banner_wrapper/Banner_Wrapper'



function App() {

  return (
    <>
      <Navbar />
      {/* <Banner_Wrapper /> */}
      <Outlet />
    </>
  )
}

export default App
