import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHomeClick = () => {
    setIsMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Navigation Bar with full background */}
      <nav className="fixed top-0 left-0 w-full z-50">
        {/* Main background layer */}
        <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-md border-b border-gray-700/50 -z-10"></div>
        
        {/* Animated gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-r ${
          isMenuOpen ? 'from-purple-900/20 to-pink-900/20' : 'from-cyan-900/20 to-blue-900/20'
        } opacity-0 transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'group-hover:opacity-50'} -z-10`}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 -z-10"></div>

        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-3 relative">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <NavLink 
              to="/" 
              className="flex items-center space-x-2 z-10"
              onClick={handleHomeClick}
            >
              <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                FUTURE<span className="text-white">DEV</span>
              </span>
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2 z-10">
              {['HOME', 'ABOUT', 'PROJECTS', 'CONTACT'].map((item) => (
                <NavLink
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className={({ isActive }) => 
                    `px-3 py-2 text-sm lg:text-base rounded-md transition-all duration-200 ${
                      isActive 
                        ? 'bg-gradient-to-r from-cyan-600/80 to-purple-600/80 text-white shadow-lg'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    }`
                  }
                  onClick={item === 'HOME' ? handleHomeClick : () => setIsMenuOpen(false)}
                >
                  {item}
                </NavLink>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md focus:outline-none relative z-10 group"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className={`absolute inset-0 rounded-md bg-gradient-to-r ${
                isMenuOpen ? 'from-pink-500/30 to-purple-500/30' : 'from-cyan-500/30 to-blue-500/30'
              } opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
              <FontAwesomeIcon 
                icon={isMenuOpen ? faTimes : faBars} 
                className={`text-xl ${
                  isMenuOpen ? 'text-pink-400' : 'text-cyan-400'
                } transition-colors duration-200`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu with full background */}
        <div className={`md:hidden fixed inset-0 transition-all duration-500 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Menu background layers */}
          <div className="absolute inset-0 bg-gray-900/95 backdrop-blur-lg -z-20"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-gray-900 to-pink-900/30 -z-20"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-10 -z-20"></div>

          <div className="container mx-auto px-6 py-8 h-full flex flex-col relative">
            <div className="flex justify-end z-10">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
                aria-label="Close menu"
              >
                <FontAwesomeIcon icon={faTimes} size="lg" />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center flex-1 space-y-8 z-10">
              {['HOME', 'ABOUT', 'PROJECTS', 'CONTACT'].map((item) => (
                <NavLink
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  onClick={item === 'HOME' ? handleHomeClick : () => setIsMenuOpen(false)}
                  className={({ isActive }) => 
                    `text-xl px-6 py-3 rounded-lg transition-all duration-200 w-full text-center ${
                      isActive
                        ? 'bg-gradient-to-r from-cyan-600/80 to-purple-600/80 text-white shadow-lg'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    }`
                  }
                >
                  {item}
                </NavLink>
              ))}
            </div>

            <div className="pb-8 text-center text-gray-500 text-sm z-10">
              © {new Date().getFullYear()} FUTURE DEV
            </div>
          </div>
        </div>
      </nav>

      {/* Padding spacer */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default NavBar;

