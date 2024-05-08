import React from 'react'
import Navbar from './Navbar'
import Home from './Components/home'
import About from './Components/About'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import {Toaster} from "react-hot-toast"

export default function App() {
  return (
     <>
      <div>
      <Navbar/>
     <Home/>
     <About/>
     <Projects/>
     <Contact/>
     <Footer/>
      </div>
      <Toaster />
     </>
  )
}
