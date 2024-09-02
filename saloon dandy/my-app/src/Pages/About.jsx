import React,{useState, useEffect, useRef} from 'react'
import Image from '../Image/Image'
import '../Pages/About.css'
import AOS from 'aos'
import 'aos/dist/aos.css'


const About = () => {
    useEffect(()=>{
        AOS.init({duration:3000});
    },[])
    
        

  return (
    <div classNameName='about'>
        <div className="welcome">
             <img src={Image.Aboutbg} className='BackgroundImage'/>
            <div className="contain">
                <h3>Welcome</h3>
                <h1><p>We are  a group of Experts</p>  </h1>
            </div>
        </div>
    <h2 className='playball-regular' data-aos="zoom-out-down">More than 12 years of Experience </h2>
   
    <div className="vision-mission " hidden="hidden">
        <div className="vision" data-aos="fade-down-right">
             <h2>Our Vision</h2>
                <p>Rovide exceptional beauty and grooming services by utilizing the 
                    latest technology and modern equipment. We are committed to delivering high-quality, 
                    personalized experiences through our team of highly qualified and skilled professionals. 
                    Our goal is to enhance the beauty and confidence of our clients, ensuring they leave our 
                    salon feeling rejuvenated and satisfied</p>
                </div>
                <div className="mission" data-aos="fade-down-left">
                    <h2>Our Mission</h2>
                    <p>Our vision at Salon Dandy is to be the leading salon in Sri Lanka, 
                      renowned for providing the best salon services through the use of 
                      cutting-edge technology and modern equipment. We aspire to set the 
                      standard in the beauty industry by continuously enhancing our services 
                      and ensuring our clients experience unparalleled satisfaction and confidence</p>
                </div>
            </div>
        
    

    
    <div className="aboutSandya">
            <div className="sandayImage" data-aos="fade-right">
                <img src={Image.Sandya} alt="Sandya Bandara"/>
            </div>
            <div className="sandya-info" data-aos="fade-left">
                <h1>Sandya Bandara</h1>
                    <p>When you look beautiful, you truly feel beautiful and that feeling is the 
                      most important thing to any girl. Sandya
                      Bandara, a makeup artist with more than 10 years of experience working with 
                      creative bridal designs ranging from
                      Kandian, Indian to Western. Working with all the lovely bride's along with her 
                      NVQ Qualification Sandya, is always
                      motivated to do fresh, flawless make overs which drives a signature style of her 
                      own that is feminine and natural.
                      Being recognized as one of the most talented bridal dressers/ Make-up artists In 
                      Sri Lanka, Sandya is invited to host
                      many Bridal related programs such as Subasiri, Nugasewana, in Popular Sri Lankan 
                      TV channels. If you are looking
                      for a committed, reliable and a friendly beautician to make you stand out of the 
                      crowd and be transformed in to your
                      best selves, Sandya Bandara of Salon Dandy is the best choice.
                    </p>          
            </div>
    </div>
    

  
   
            <div className="companyStory" >
                <div className="storyText" data-aos="fade-right">
                    <h1>Our Story</h1>
                    <p>Our journey began over 12 years ago, fueled by a passion for style and fashion. From our modest beginnings, we've evolved into a team of dedicated experts, committed to curating exceptional service and unforgettable experiences. With each year, we blend innovation with elegance, crafting moments that inspire and delight. Our mission is to transform every client interaction into a memorable event, driven by creativity and a relentless pursuit of excellence. Join us as we continue to redefine the essence of style and sophistication.</p>
                </div>
                <div className="story-image" data-aos="fade-left">
                    <img src={Image.saloon} className='story-image1' alt="Our Story"/>
                </div>
            </div>
        </div>
        
  
  )
}

export default About
