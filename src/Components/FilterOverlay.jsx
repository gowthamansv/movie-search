// src/components/FilterOverlay.js
import React, { useState } from 'react';

function FilterOverlay({ onApply, onClose , setPage }) {
  const [type, setType] = useState('');
  const [year, setYear] = useState('');

  const handleApply = () => {
    onApply({ type, year });
    onClose();
    setPage(1);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-taupe bg-opacity-80 flex justify-center items-center text-white">
  <div className="bg-warmIvory p-8 rounded-lg w-80">
    <h2 className="text-xl font-semibold mb-4">Filter Movies</h2>
    <select
      onChange={(e) => setType(e.target.value)}
      value={type}
      className="w-full p-2 mb-4 bg-tan rounded-md focus:outline-none focus:border-none placeholder:text-white"
    >
      <option value="">All</option>
      <option value="movie">Movie</option>
      <option value="series">Series</option>
      <option value="episode">Episode</option>
    </select>
    <input
      type="text"
      placeholder="Year"
      value={year}
      onChange={(e) => setYear(e.target.value)}
      className="w-full p-2 mb-4 bg-tan rounded-md focus:outline-none focus:border-none placeholder:text-white"
    />
    <div className="flex justify-between">
      <button
        onClick={handleApply}
        className="bg-slateBlueGray text-warmIvory py-2 px-4 rounded-md hover:bg-steelBlue transition duration-300"
      >
        Apply
      </button>
      <button
        onClick={onClose}
        className="bg-slateBlueGray text-warmIvory py-2 px-4 rounded-md hover:bg-steelBlue transition duration-300"
      >
        Cancel
      </button>
    </div>
  </div>
</div>

  );
}

export default FilterOverlay;
