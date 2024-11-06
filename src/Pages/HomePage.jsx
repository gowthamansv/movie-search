import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate('/results', { state: { query } });
    }
  };
  

  return (
    <div className='home h-screen flex flex-col justify-center items-center'>
      <h1 className='text-2xl mb-10 font-normal uppercase tracking-[0.5rem]'>Movie Search</h1>
      <form onSubmit={handleSearch} className='border rounded-md py-3 px-10 mb-10'>
        <input
          className='focus:outline-none bg-transparent text-black placeholder:text-black placeholder:tracking-widest'
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className='border py-1 px-3 rounded-sm bg-slateBlueGray hover:bg-steelBlue bg-opacity-80' type="submit">Search</button>
      </form>
    </div>
  );
}

export default HomePage;
