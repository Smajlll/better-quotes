import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {

    const url = 'https://thingproxy.freeboard.io/fetch/https://zenquotes.io/api/quotes/keyword=happiness';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setQuote(data[0].q);
        setAuthor(data[0].a);
      })
      .catch(error => console.error('Error fetching quote:', error));
  }, []);

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
        <a href="/">Home page</a>
        <a href="/about">About this site</a>
    </div>
  )}
  </div>
      </div>

      <div className='center_qoute'>
      <h2><bold>{quote}</bold></h2>
      <h4>{author}</h4>
      </div>

      <div className='bottom'>
        <button onClick={() => window.location.reload(false)}>New quote, pretty please.</button>
      </div>
    </div>
  );
}

export default App;
