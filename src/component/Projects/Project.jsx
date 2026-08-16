import React,{useEffect} from 'react';
import './Project.css'
// library of aos
import AOS from 'aos';
import 'aos/dist/aos.css';

// images
import sabroso from '../../assets/sab.png'
import Devlivery from '../../assets/Delivery.png'
import Book from '../../assets/Book.png'
import AK from '../../assets/AK.png'
import Apple from '../../assets/Apple.png'
import Kuriftu from "../../assets/kuriftu.png"
import Velkap from "../../assets/Velkap.png"
import ZenQr from "../../assets/Zenqr.png"

// icon

import { FaGithub } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";


function Project() {
      useEffect(()=>{
             AOS.init({duration:1500});
         },[]);
    return (
        <div className='Projects'>
<div className="project1">
<h1 className='project_title'>Project</h1>
<div className="grid">
    <div className="img">
    <img className='img1' src={Kuriftu} alt="" data-aos="zoom-in-up"  />
    </div>
<div className="discription" data-aos="zoom-in-up">
<h1 className='head'>Kuriftu Rewards</h1>
<p>Kuriftu Rewards is a smart membership & loyalty program designed to elevate your stay.
Earn points on bookings, dining, and spa — and redeem for exclusive perks.
AI recommends personalized experiences based on your preferences.
Get VIP benefits through Silver, Gold, and Platinum tiers.
Our 24/7 chatbot, Kuri, helps with bookings, rewards, and instant support.
Join today and let your loyalty unlock luxury with Kuriftu.</p>
            <div className='buttons'><a href="https://github.com/anuteshome/Kuriftu_Resort" target='blank'><button className='btn3'><FaGithub /> &nbsp;View on Github</button> </a>
          <a href="https://kuriftuloyality.netlify.app/" target='blank'> <button className='btn4'>Live</button></a>  </div> 
            <div className='stack'>            
            <p> <FaCheckCircle />&nbsp;React</p>
            <p><FaCheckCircle />&nbsp;React Hooks</p>
             <p><FaCheckCircle />&nbsp;Supabase</p>
            <p><FaCheckCircle />&nbsp;Tailwind Css</p>
            </div>
</div>
</div>
           
            
</div>

<div className="project2">
<div className="grid">
    <div className='images'>
    <img className='img1' src={Velkap} alt="" data-aos="zoom-in-up" />               
            </div>
            <div className='disc' data-aos="zoom-in-up">
            <h1 className='head'>Velkap</h1>
<div>
  <p>
    <strong>Velkap</strong> is a real estate investment and property management
    platform. I contributed to both backend and frontend development, with a
    strong focus on financial and investment logic,
    Developed ash flow and retention calculations,
    Implemented investment and return calculations,
    Built financial business logic and APIs,
    Integrated backend services with the frontend,
    Worked with investment and property data
  </p>
</div>
            <div className='buttons'> <a  disabled ><button className='btn3'><FaGithub /> &nbsp;View on Github</button> </a> 
            <a href="https://velkap.com/" target='blank'><button className='btn4'>Live</button></a></div>   
            <div className='stack'>     
           <p> <FaCheckCircle />&nbsp; Laravel</p>
            <p><FaCheckCircle />&nbsp;Next.js </p>
            {/* <p>Css</p> */}
            <p > <FaCheckCircle />&nbsp;MySQL</p>
             <p > <FaCheckCircle />&nbsp;REST APIs</p>
            </div>  
            </div>
            </div>
        
</div>
<div className="project1">
{/* <h1 className='project_title'>Project</h1> */}
<div className="grid">
    <div className="img">
    <img className='img1' src={sabroso} alt="" data-aos="zoom-in-up"  />
    </div>
<div className="discription" data-aos="zoom-in-up">
<h1 className='head'>Sabroso Recipe Finder</h1>
            <p>Sabroso is a vibrant culinary platform designed to connect food enthusiasts with an array of delicious recipes and cooking tips. The site offers a user-friendly interface where visitors can explore diverse cuisines, discover seasonal ingredients, and share their own culinary creations. With a focus on community engagement, Sabroso encourages users to interact through comments and recipe ratings, fostering a love for cooking. Whether you're a novice or a seasoned chef, Sabroso provides inspiration and resources to elevate your culinary skills.</p>
            <div className='buttons'><a href="https://github.com/anuteshome/Sabroso" target='blank'><button className='btn3'><FaGithub /> &nbsp;View on Github</button> </a>
          <a href="https://sabrosoo.netlify.app/" target='blank'> <button className='btn4'>Live</button></a>  </div> 
            <div className='stack'>            
            <p> <FaCheckCircle />&nbsp;React</p>
            <p><FaCheckCircle />&nbsp;Hooks</p>
            <p><FaCheckCircle />&nbsp;Css</p>
            </div>
</div>
</div>
           
            
</div>
<div className="project3">
<div className="grid">
<div>
<img className='img1' src={ZenQr} alt="" data-aos="zoom-in-up" />
</div>
<div data-aos="zoom-in-up">
<h1 className='head'>ZenQr</h1>
<p>ZenQr is a dynamic menu management platform designed to streamline the restaurant experience for both owners and customers. With ZenQr, restaurant owners can effortlessly create and update their menus, ensuring that customers always have access to the latest offerings. The platform's intuitive interface allows for easy navigation and customization, making it simple to manage daily specials, seasonal items, and pricing. Whether you're running a cozy cafe or a bustling bistro, ZenQr provides the tools you need to showcase your cuisine and enhance your customers' dining experience.</p>
            <div className='buttons'><a href="https://github.com/anuteshome/ZenQr " target='blank'><button className='btn3'><FaGithub /> &nbsp;View on Github</button> </a>
           <a href="https://bistroqr.vercel.app/" target='_blank'> <button className='btn4'>Live</button></a></div> 
           <div className='stack'>  
            <p ><FaCheckCircle />&nbsp; Typescript</p>
         <p><FaCheckCircle />&nbsp; NextJs</p>
            <p><FaCheckCircle />&nbsp;Tailwind</p>
            <p><FaCheckCircle />&nbsp;Subasbase</p>
            
            </div>
</div>   
</div>
</div>

<div className="project4">
<div className="grid">
<div>
<img className='img1' src={AK} alt="" data-aos="zoom-in-up" />
</div>
<div data-aos="zoom-in-up">
<h1 className='head'>MK</h1>
<p>Welcome to AK, where innovative design meets sustainable living.  We transform spaces through functional solutions, ensuring every detail reflects our clients' unique visions. Join us in shaping the future of architecture with creativity and practicality at the forefront. Explore our services, including consulting, building, and designing, and let’s bring your dream project to life.</p>
            <div className='buttons'> <a href="https://github.com/anuteshome/Mekane_Selam_Web" target='blank'><button className='btn3'><FaGithub /> &nbsp;View on Github</button> </a> 
           <a href="mekaneselam.vercel.app"target='blank'><button className='btn4'>Live</button></a>
           </div> 
           <div className='stack'>  
            <p> <FaCheckCircle />&nbsp;Html-5</p>
            <p><FaCheckCircle />&nbsp;Css</p>
            <p ><FaCheckCircle />&nbsp; Responsiveness</p>
            </div>
</div>

</div>

            
</div>

<div className="project5">
    <div className="grid">
        <div>
        <img className='img1' src={Apple} alt="" data-aos="zoom-in-up" />
        </div>
        <div data-aos="zoom-in-up">
        <h1 className='head'>Apple</h1>
<p>Welcome to the Apple Website, your gateway to innovative technology and premium products. Explore our range of cutting-edge devices, including the powerful MacBook Pro, the versatile iPhone 11 Pro, and the stylish Apple Watch with its Always-On Retina display. Discover exceptional audio with AirPods Pro and enjoy seamless integration across all your devices. With features like monthly payment options and trade-in programs, accessing the latest technology has never been easier.</p>
           <div className='buttons'> <a href="https://anuapple.netlify.app/#" target='blank'><button className='btn3'><FaGithub /> &nbsp;View on Github</button> </a>
         <a href="https://anuapple.netlify.app/#" target='blank'> <button className='btn4'>Live</button></a>  
           </div> 
           <div className='stack'>  
            <p><FaCheckCircle />&nbsp; Html-5</p>
            <p><FaCheckCircle />&nbsp;Css</p>
            <p ><FaCheckCircle />&nbsp; Responsiveness</p>
            </div>
        </div>
    </div>
            
</div>
          
        </div>
    );
}

export default Project;