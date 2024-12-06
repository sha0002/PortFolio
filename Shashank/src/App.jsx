import React, { useState } from 'react'
import './App.css'
import './Responsive.css'
import Navbar from './Components/NavBar/Navbar'
import { Outlet } from 'react-router-dom'


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
