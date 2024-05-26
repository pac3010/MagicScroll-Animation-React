import { useState } from 'react'
import './App.css'
import Footer from './layouts/Footer'
import Navbar from './layouts/Navbar'
import LandingPage from './pages/LandingPage'

function App() {

  return (
    <>
    <Navbar />
     <LandingPage />
     <Footer />
    </>
  )
}

export default App
