import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600">ResumeHub</h1>
            </Link>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <Link to="/" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
              {isLoggedIn && <Link to="/upload" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Upload Resume</Link>}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {!isLoggedIn ? (
              <>
                <Link to="/login" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Login</Link>
                <Link to="/signup" className="bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium">Sign Up</Link>
              </>
            ) : (
              <button onClick={handleLogout} className="bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium">Logout</button>
            )}
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-indigo-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/about" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link to="/contact" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium">Contact</Link>
            {isLoggedIn && <Link to="/upload" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium">Upload Resume</Link>}
            {!isLoggedIn ? (
              <>
                <Link to="/login" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium">Login</Link>
                <Link to="/signup" className="block bg-indigo-600 text-white hover:bg-indigo-700 px-3 py-2 rounded-md text-base font-medium">Sign Up</Link>
              </>
            ) : (
              <button onClick={handleLogout} className="block w-full text-left bg-red-600 text-white hover:bg-red-700 px-3 py-2 rounded-md text-base font-medium">Logout</button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;