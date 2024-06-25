import React, { useState } from 'react';
import './About.css';
import { Route, Routes, Link } from 'react-router-dom'; // Import Route, Routes, and Link
import About from './About';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      
      <div className="top">
      <h2>Better Quotes</h2>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`menu ${isMenuOpen ? "open" : "closed"}`}>
      {isMenuOpen && (
        <div className="menu-content">
         <Link to="/">Home page</Link>
         <Link to="/about">About this site</Link>
    </div>
  )}
  </div>
      </div>

      <div className='center_qoute'>
        <h2>About this site</h2>
        <p>Hey, I'm Smajl, and I made this site. The principle is pretty simple, just get a quote and the author from an API and render it as a React component.</p>
        <p>The site is made for HackClub Arcade, which is a "challenge" for the summer to make some applications, websites etc.</p>
        <p>Hope you like it! 😉</p>
      </div>

    </div>
  );
}

export default function plsJustRouteThis() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

