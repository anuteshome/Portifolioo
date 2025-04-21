import React, { useState, useEffect } from 'react';
import './index.css';
import './App.css'
import About from './component/About/About'
import Contact from './component/Contact/Contact'
import Hero from './component/Heros/Hero'
import Nav from './component/Nav/nav'
import Project from './component/Projects/Project'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Add this import
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import Card from './component/Skills/skill';
function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
     {/* <Nav/> */}
     {/* <button onClick={toggleDarkMode}>
           {darkMode ? 'Light' : 'Dark'} 
        </button> */}
        <button style={{border:"none"}} onClick={toggleDarkMode} className="toggle-button">
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
      </button>
     <Hero/>
     <About/>
     <Card/>
     <Project/>
     <Contact/>
    </>
  )
}

export default App
