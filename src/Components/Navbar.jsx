import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ favoritesCount }) {
  return (
    <nav className="navbar">
      <Link to="/"><h1 className='text-2xl text-warmIvory font-normal uppercase tracking-[0.5rem]'>Home</h1></Link>
      <div className="flex space-x-5 px-10 relative">
                    <Link to="/favorites"><button className='text-warmIvory bg-taupe py-1 px-3 rounded'>Favorites</button></Link>
                    <span className='absolute rounded-full leading-normal px-2 bg-warmIvory text-darkBrown h-6 w-6 -top-3 right-7'>{favoritesCount}</span>
                </div>
    </nav>
  );
}

export default Navbar;
