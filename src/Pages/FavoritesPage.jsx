import React from 'react';

function FavoritesPage({ favorites, removeFromFavorites }) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-2xl m-10 font-normal uppercase tracking-[0.5rem]'>Your Favorites</h1>
      {favorites.length === 0 ? (
        <p className='text-sm mb-10 font-normal uppercase tracking-[0.5rem]'>No favorite movies added yet.</p>
      ) : (
        <div className="flex flex-row flex-wrap px-24 gap-2 m-10">
          {favorites.map((movie) => (
            <div key={movie.imdbID} className="flex flex-col items-center justify-center bg-warmIvory shadow-md rounded-lg p-4 m-2 w-56 overflow-hidden">
              <img src={movie.Poster} alt={movie.Title} className='w-36 h-48 object-contain mb-2' />
              <div className='flex flex-col items-center' >
                <h3 className='truncate font-semibold text-center mb-1 w-36 overflow-hidden whitespace-nowrap'>{movie.Title}</h3>
                <p className='truncate font-semibold text-center mb-1 w-36 overflow-hidden whitespace-nowrap'>{movie.Year}</p>
                <button onClick={() => removeFromFavorites(movie.imdbID)} className='text-warmIvory bg-taupe py-1 px-3 rounded'>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;
