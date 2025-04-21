import React,{useEffect} from 'react';
import './Hero.css'
// import './index.css';
import { BsFillLaptopFill } from "react-icons/bs";
import {Link} from 'react-router-dom';
// import Contact from '../Contact/Contact';
// library of aos
import AOS from 'aos';
import 'aos/dist/aos.css';



function Hero() {

 useEffect(()=>{
               AOS.init({duration:1500});
           },[]);

    return (


        <div className='Hero_all'>
          {/* Enginner */}
         <h3 style={{
position:'absolute',
top:15,
left:10,
}} ><span style={{marginTop:40}}><BsFillLaptopFill /></span>< span style={{color:'#f3725b'}} >Ananya</span> Dev</h3> 
            <h1 data-aos="zoom-in" className='Hello_text'>Hello I'm Ananya <br></br><span className='software'>Software</span> Developer</h1>
       <p className='hero_p' data-aos="fade-right"
     data-aos-offset="0"
     data-aos-easing="ease-in-sine">
        A passionate developer skilled in both frontend and backend technologies. I create seamless web applications using React, Css, Express, Mysql, PHP and Node.js.....
                
                 Excited to tackle new challenges and collaborate on innovative projects. Let’s connect!
       </p>
      <div className='buts'>
        <a href="https://drive.google.com/file/d/1jgOEa3d1llinWNuV08Br3VsDztBdzG20/view?usp=sharing" target='blank'><button className='btn1'>My Resume</button></a>
        <a href="#contact" style={{smoth:'true',duration:500}}>
          <button className='btn2'>Connect with me</button>
        </a>     
         </div>
        </div>
    );
}

export default Hero;