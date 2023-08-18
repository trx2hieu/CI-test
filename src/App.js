import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortenedData, setShortenedData] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`https://api.shrtco.de/v2/shorten?url=${originalUrl}`);
      const data = response.data;

      if (data.ok) {
        setShortenedData(data.result);
      } else {
        setShortenedData(null);
      }
    } catch (error) {
      console.error(error);
      setShortenedData(null);
    }
  };

  return (
    <div className="container">
      <h1>URL Shortener</h1>
      <form className="shorten-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          placeholder="Enter your URL..."
        />
        <button type="submit">Shorten</button>
      </form>
      {shortenedData && (
        <div className="shortened-url">
          <p>Your shortened URL:</p>
          <a href={shortenedData.full_short_link} target="_blank" rel="noopener noreferrer">
            {shortenedData.full_short_link}
          </a>
        </div>
      )}
    </div>
  );
}

export default App;