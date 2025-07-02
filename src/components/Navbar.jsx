import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
      isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
    }`;

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-shrink-0">
          <NavLink to="/" className="text-white text-2xl font-bold">
            Online Library
          </NavLink>
        </div>
        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {/* Desktop links */}
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <NavLink to="/" className={linkClasses}>
              Home
            </NavLink>
            <NavLink to="/books" className={linkClasses}>
              Browse Books
            </NavLink>
            <NavLink to="/add-book" className={linkClasses}>
              Add Book
            </NavLink>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-2">
          <NavLink to="/" className={linkClasses} onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/books" className={linkClasses} onClick={() => setMenuOpen(false)}>
            Browse Books
          </NavLink>
          <NavLink to="/add-book" className={linkClasses} onClick={() => setMenuOpen(false)}>
            Add Book
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;