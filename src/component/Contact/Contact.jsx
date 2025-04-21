import React, { useRef ,useEffect} from "react";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa"; // Corrected import
import emailjs from "@emailjs/browser";
import "./Contact.css";
// library of aos
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {

   useEffect(()=>{
               AOS.init({duration:1500});
           },[]);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sj6bljv", // Replace with your EmailJS Service ID
        "template_acwl5jd", // Replace with your EmailJS Template ID
        form.current,
        "DwoGYK2IIvLESeIi4" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          // alert("Message sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send message. Try again.");
        }
      );

    e.target.reset(); // Reset form after submission
  };



  return (
    <div data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000">
      <h1 id="contact" className="Contact_title">
        Get In <span className="software">Touch</span>
      </h1>
      <form ref={form} className="form" onSubmit={sendEmail}>
        <label className="label">Name:</label><br />
        <input className="input" type="text" name="user_name" placeholder="Enter your name ...." required /><br />

        <label className="label">Email:</label><br />
        <input className="input" type="email" name="user_email" placeholder="Enter your email ....." required /><br />

        <label className="label">Message:</label><br />
        <textarea className="textarea" name="message" placeholder="Enter your message here ....." required />

        <button type="submit" className="btn_send">Send</button>
      </form>

      <div className="footer">
        <div>
          <a href="https://linkedin.com/in/ananya-teshome" target="_blank" rel="noopener noreferrer" style={{color:"#333333"}}>
            <FaLinkedin />
          </a>
        </div>
        <div>
          <a href="https://github.com/anuteshome" target="_blank" rel="noopener noreferrer" style={{color:"#333333"}}>
            <FaGithub />
          </a>
        </div>
        <div>
          <a href="https://www.youtube.com/@anu-t995" target="_blank" rel="noopener noreferrer" style={{color:"#333333"}}>
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;