// src/components/MovieCard.js
import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie, onFavorite }) {
  return (
    <div className="flex flex-col items-center justify-center bg-warmIvory shadow-md rounded-lg p-4 m-2 w-56 overflow-hidden">
      <Link to={`/movie/${movie.imdbID}`}>
        <img src={movie.Poster} alt={movie.Title} className='w-36 h-48 object-contain mb-2' />
        <h3 className='truncate font-semibold text-center mb-1 w-36 overflow-hidden whitespace-nowrap' >{movie.Title}</h3>
        <p>{movie.Year}</p>
      </Link>
      <button onClick={() => onFavorite(movie)} className='text-warmIvory bg-taupe py-1 px-3 rounded'>Add to Favorites</button>
    </div>
  );
}

export default MovieCard;
