import React, {useEffect} from 'react'
import StatsSection from'../components/counting/count'
import Image from '../Image/Image'
import './Home.css'
import {Link} from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'





const Home = () => {

  useEffect(()=>{
    Aos.init({duration:3000});
},[])
  return (
    <div className="home">

      <div className="carosual">
          <img src={Image.head_x1} alt="" srcset="" />
        <div className="carosualText">
          <h1 data-aos="fade-up">we don’t just provide services</h1>
          <h1 data-aos="fade-up">We create Experience</h1>
            <Link to="/contactus">
            <button className='carousalButton' data-aos="fade-up">Contact Us</button>
            </Link>  
        </div>
      </div>
      
      <div className="about-us">
        <div className="about-us-content" data-aos="fade-right">
          <h1 className='headding'>Why you choose us?</h1>
          <p className='pharagraph'>
           Welcome to Dandy Salon, where over 12 years of experience meet exceptional style and service. We specialize in creating unforgettable bridal and groom looks that reflect your unique personality, along with offering trendy and timeless unisex haircuts for everyone. What sets us apart is our commitment to perfection, personalized attention to detail, and a passion for making every client feel confident and beautiful. At Dandy, we don’t just provide services; we craft experiences that leave a lasting impression. Come visit us and discover the difference.
          </p>   
          <Link to="/About">   
          <button className="about-us-button">More About Us</button>
          </Link> 
        </div>
        <div className="about-us-Images" data-aos="zoom-in">
          <img src={Image.b1} className="about-us-Images1" alt="Couple 1" />
          <img src={Image.b2} className="about-us-Images2" alt="Couple 2" />
          <img src={Image.b3} className="about-us-Images3" alt="Couple 2" />
       
        </div>
      </div>

      <h3>Little things matter most</h3>

    <div className="services">
      <div className="service-card">
          <h4>Professional tools</h4>
          <p>
            Curabitur sed facilisis dolor, non congue ligula. Maecenas imperdiet ante eget hendrerit posuere.
          </p>
      </div>
      <div className="service-card">
          <h4>Quality products</h4>
          <p>
            Curabitur sed facilisis dolor, non congue ligula. Maecenas imperdiet ante eget hendrerit posuere.
          </p>
      </div>
      <div className="service-card">
          <h4>We even dry hair</h4>
          <p>
            Curabitur sed facilisis dolor, non congue ligula. Maecenas imperdiet ante eget hendrerit posuere.
          </p>
      </div>
      <div className="service-card">
          <h4>Hair washing</h4>
          <p>
            Curabitur sed facilisis dolor, non congue ligula. Maecenas imperdiet ante eget hendrerit posuere.
          </p>
      </div>
      <div className="service-card">
          <h4>Comfortable seats</h4>
          <p>
            Curabitur sed facilisis dolor, non congue ligula. Maecenas imperdiet ante eget hendrerit posuere.
          </p>
      </div>
    </div>
    
  </div>
    

  )
}

export default Home

