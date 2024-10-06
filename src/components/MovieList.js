import React from 'react';
import Movie from './Movie';


function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.length === 0 ? (
        <p>No movies available.</p>
      ) : (
        movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))
      )}
    </div>
  );
}

export default MovieList;
