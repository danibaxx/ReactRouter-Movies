import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MovieList from './MovieList';

const MovieCard = () => {
    const [movies, setMovies] = useState([])
  return(
    <div className="movie-list">
      <MovieList />
      <p>Hi, from MovieCard</p>
      {movies.map(movie => (
        <MovieInfo key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

const MovieInfo = ({ movie }) => {
  const { title, director, metascore, stars } = movie;
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="save-wrapper">
        <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>
        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
        </div>
        <div className="save-button">Save</div>
      </div>
    </Link>

  );
}
export default MovieCard;


