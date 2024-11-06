import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { searchMovies } from '../apiService';
import MovieCard from '../Components/MovieCard';
import FilterOverlay from '../Components/FilterOverlay';

function ResultsPage({ addToFavorites }) {
  const location = useLocation();
  const [query, setQuery] = useState(location.state?.query || '');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({ type: '', year: '' });
  const [showFilterOverlay, setShowFilterOverlay] = useState(false);

  useEffect(() => {
    if (query) {
      fetchMovies();
    }
  }, [query, page, filter]);

  const fetchMovies = async () => {
    try {
      const data = await searchMovies(query, page, filter.type, filter.year);
      setMovies(data.Search || []);  // Safely set to an empty array if no results are found
      setError('');
    } catch (err) {
      setError(err.message);
    }
  };
  

  const handleApplyFilter = (newFilter) => {
    setFilter(newFilter);
  };

  const handleNextPage = () => setPage((prevPage) => prevPage + 1);
  const handlePreviousPage = () => setPage((prevPage) => Math.max(prevPage - 1, 1));

  return (
    <div className='results h-screen flex flex-col items-center'>
      <h1 className='text-2xl m-10 font-normal uppercase tracking-[0.5rem]'>Search Results</h1>
      <button className='border py-1 px-3 rounded-sm bg-slateBlueGray hover:bg-steelBlue bg-opacity-80 mb-4' onClick={() => setShowFilterOverlay(true)}>
        Filter
      </button>
      {error && <p>{error}</p>}
      <div className="flex flex-row flex-wrap px-24 gap-2 m-10">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} onFavorite={addToFavorites} />
        ))}
      </div>
      {showFilterOverlay && (
        <FilterOverlay onApply={handleApplyFilter} onClose={() => setShowFilterOverlay(false)} setPage={setPage} />
      )}
      <div className="pb-10">
        <button onClick={handlePreviousPage} disabled={page === 1} className='hover:bg-darkBrown hover:bg-opacity-50 px-2 m-1 py-0 rounded-full'>
        &lt;
        </button>
        <span>Page {page}</span>
        <button onClick={handleNextPage} disabled={movies.length < 10} className='hover:bg-darkBrown hover:bg-opacity-50 px-2 m-1 py-0 rounded-full' >
        &gt;
        </button>
      </div>
    </div>
  );
}

export default ResultsPage;
