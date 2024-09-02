import React from 'react'
import Image from '../Image/Image'
import { Link } from 'react-router-dom'
import Home from '../Pages/Home';
import Services from '../Pages/Services';
import Gallery from '../Pages/Gallery';
import About from '../Pages/About';
import './Navbar.css'

const Navbar = () => {
  
  return (
    

        <nav className="navbar" data-navbar>

            <div className="logoarea">
                
                <img
                  src={Image.GoldLogo}
                  width="170"
                  height="auto"
                  alt="Dandy Logo"
              />
               </div>
            

          <ul className="navbar-list ">
            <li className="navbar-item">
              <Link to="/" className="navbar-link active">
                <div className="separator"></div>

                <span className="span">Home</span>
              </Link>
            </li>

            <li className="navbar-item">
              <Link to="/About" className="navbar-link">
                <div className="separator"></div>

                <span className="span">About</span>
              </Link>
            </li>

            <li className="navbar-item">
              <Link to="/Services" className="navbar-link">
                <div className="separator"></div>

                <span className="span">Services</span>
              </Link>
            </li>

            <li className="navbar-item">
              <Link to="/Gallery" className="navbar-link ">
                <div className="separator"></div>

                <span className="span">Gallary</span>
              </Link>
            </li>

            <li className="navbar-item">
              <Link to="/contact" className="navbar-link">
                <div className="separator"></div>

                <span className="span">Contact Us</span>
              </Link>
            </li>
          </ul>

          
        </nav>
       
  )
}

export default Navbar
