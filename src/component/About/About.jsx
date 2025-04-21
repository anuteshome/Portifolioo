import React, { useEffect } from 'react';
import useScrollAnimation from './animationAbout.jsx'
import './About.css'
import Ananya from '../../assets/image2.jpg'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';
function About() {
    useEffect(()=>{
        AOS.init();
    },[]);
    return (
        <div>
           {/* <div className="design1"></div> */}
          
            <img className='About_image' src={Ananya} alt="Ananya" data-aos="flip-left" /><br />
            {/* <div className="design2"></div> */}
            <h1 className='About_title'>Who is <span className='software'>Ananya</span>?</h1>
            <p className='About_p' data-aos="fade-right"  data-aos-offset="0"
     data-aos-easing="ease-in-sine" >Hello👋 I'm Ananya Teshome
            I'm an enthusiastic software developer specializing in frontend development. I completed a comprehensive 12-month full-stack software engineering program at ALX, where I gained in-depth knowledge and hands-on experience in building responsive and engaging web applications.</p>
 <div className="footer_about">
             
               <div><a href="https://linkedin.com/in/ananya-teshome" target='blank'><li><FaLinkedin /></li></a></div> 
               <div>   <a href="https://github.com/anuteshome"  target='blank'><li><FaGithub /></li></a></div> 
                <div><a href="https://www.youtube.com/@anu-t995"  target='blank'><li><FaYoutube /></li></a></div>
            </div>
        </div>
    );
}

export default About;