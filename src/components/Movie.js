import React from 'react';

const Movie = ({ movie }) => {
  // If the movie has a poster, construct the URL based on the static resources
  const posterUrl = movie.poster
    ? `http://localhost:8080/${movie.poster}`
    : 'https://via.placeholder.com/200x300?text=No+Image+Available'; // Placeholder image

  return (
    <div className="movie">
      {/* Use the constructed poster URL */}
      <img
        src={posterUrl}
        alt={movie.moviename}
      />
      <h2>{movie.moviename}</h2>
      <p>Genre: {movie.moviegenre}</p>
      <p>Rating: {movie.rating}</p>
      <p>Release Date: {movie.releaseDate}</p>
    </div>
  );
};

export default Movie;
