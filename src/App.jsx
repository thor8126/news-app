// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewsList from './components/NewsList';
import ArticleDetail from './components/ArticleDetail';
import Navbar from './components/Navbar'; // Import the Navbar component
import axios from 'axios';

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines/sources?apiKey=9c42440d595145f986d3701de15fee0d');
        setNews(response.data.sources);
        console.log(response.data.sources);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<NewsList news={news} />} />
        <Route path="/article/:id" element={<ArticleDetail news={news} />} />
      </Routes>
    </Router>
  );
}

export default App;
