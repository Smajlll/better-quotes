import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    
    const url = 'https://thingproxy.freeboard.io/fetch/https://zenquotes.io/api/quotes';
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
      <h1>Better Quotes</h1>     
      </div> 

      <div className='center_qoute'>
      <h2>{quote}</h2>
      <h4>{author}</h4>
      </div>

      <div className='bottom'>
        <button onClick={() => window.location.reload(false)}>New quote, pretty please.</button>
      </div>
    </div>
  );
}

export default App;
