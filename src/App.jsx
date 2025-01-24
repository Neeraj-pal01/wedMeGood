import React from 'react'
import Navbar from './Component/Header/Navbar'
import Header from './Component/Header/Header'
import Home from './Component/Home/Home'
import Footer from './Component/Footer/Footer'
import { BrowserRouter as Router } from 'react-router-dom'

export default function App() {
  return (
    <>
    <Router>

    <Navbar/>
    <Header/>
    <Home/>
    <Footer/>
    </Router>
    </>
  )
}
