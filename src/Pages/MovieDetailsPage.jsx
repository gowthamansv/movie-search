import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../apiService';

function MovieDetailsPage({addToFavorites}) {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchMovie();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!movie) return <p>Loading...</p>;

  return (
    <div className="flex flex-col text-darkBrown p-6 mx-auto">
      <div className='flex flex-row gap-5' >
        <div>
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-[100%] h-auto rounded-lg mb-6 shadow-md"
          />
        </div>
        <div className='w-fit' ><h2 className="text-2xl font-semibold text-slateBlueGray mb-4">
          {movie.Title} ({movie.Year})
        </h2>
          <p className="text-lg text-darkBrown mb-2">
            <strong>Release Year:</strong> {movie.Year}
          </p>
          <p className="text-lg text-darkBrown mb-2">
            <strong>Genre:</strong> {movie.Genre}
          </p>
          <p className="text-lg text-darkBrown mb-2">
            <strong>Plot:</strong> {movie.Plot}
          </p>
          <p className="text-lg text-darkBrown mb-2">
            <strong>Cast:</strong> {movie.Actors}
          </p>
          <p className="text-lg text-darkBrown mb-4">
            <strong>IMDB Rating:</strong> {movie.imdbRating}
          </p></div></div>
      <button onClick={() => addToFavorites(movie)} className="w-fit bg-steelBlue text-warmIvory py-2 px-4 rounded-md hover:bg-slateBlueGray transition duration-300">
        Add to Favorites
      </button>
    </div>

  );
}

export default MovieDetailsPage;
