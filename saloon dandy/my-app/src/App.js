import React from 'react'
import { BrowserRouter, Routes , Route, Router } from "react-router-dom";
import Home from '../src/Pages/Home';
import Services from './Pages/Services';
import Gallery from './Pages/Gallery';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navbar from './components/Navbar';
import './index.css'


export default function App() {
  return (
    <div className='App'>
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path='/Contact' element={<Contact/>}/>
       
       
      </Routes>
    </BrowserRouter>
        
    </div>
  )
}
