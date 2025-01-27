import React from 'react'
import Navbar from './Component/Header/Navbar'
import Header from './Component/Header/Header'
import Home from './Component/Home/Home'
import Footer from './Component/Footer/Footer'
import Venues from './Component/Venues/Venues'
import Gallery from './Component/Gallery/Gallery'
import Contact from './Component/Contact/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Component/About/About'
import Login from './Component/Login/Login'


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Venues" element={<Venues />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login/>} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
