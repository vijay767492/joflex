import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import MovieList from './components/MovieList';
import Sidebar from './components/sidebar'; 

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  // Fetch movies from the backend
  const fetchMovies = async () => {
    try {
      const response = await axios.get('http://localhost:8080/thisAPI'); // Your Spring Boot API
      setMovies(response.data);
    } catch (error) {
      console.error('Error fetching movies:', error);
      setError('Could not fetch movies. Please try again later.');
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="App">
      <div className="layout">
        <Sidebar /> Sidebar component
        <div className="main-content">
          <h1>JOFLEX MOVIES</h1>
          {error && <p className="error">{error}</p>}
          <MovieList movies={movies} />
        </div>
      </div>
    </div>
  );
}

export default App;
