import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import MovieDetailsPage from './Pages/MovieDetailsPage';
import FavoritesPage from './Pages/FavoritesPage';
import Navbar from './Components/Navbar';
import ResultsPage from './Pages/ResultsPage';

function App() {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (movie) => {
    if (favorites.some((fav) => fav.imdbID === movie.imdbID)) {
      alert("This movie is already in your favorites!");
    } else {
      setFavorites((prev) => [...prev, movie]);
    }
  };
  

  const removeFromFavorites = (id) => {
    setFavorites((prev) => prev.filter((movie) => movie.imdbID !== id));
  };

  return (
    <Router>
      <Navbar favoritesCount={favorites.length} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/results' element={<ResultsPage addToFavorites={addToFavorites}/>}/>
        <Route path="/movie/:id" element={<MovieDetailsPage addToFavorites={addToFavorites} />} />
        <Route path="/favorites" element={<FavoritesPage favorites={favorites} removeFromFavorites={removeFromFavorites} />} />
      </Routes>
    </Router>
  );
}

export default App;
