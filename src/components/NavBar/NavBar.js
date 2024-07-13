import React, { useState, useEffect } from 'react';
import './NavBar.css';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth > 1070) {
            setIsMenuOpen(false);
        }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
}, []);
  
  return (
    <div className="navbar-container">
      <div className="menu-container">
        <button className="menu-button" onClick={toggleMenu}>
          <p className="click-text">{isMenuOpen ? '×' : '☰'}</p>
        </button>
      </div>
      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <a href="#home" className="nav-link" onClick={closeMenu}>Home</a>
        <a href="#experience" className="nav-link" onClick={closeMenu}>Experience</a>
        <a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a>
        <a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a>
        <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
      </nav>
      <hr className="line" />
    </div>
  );
}

export default NavBar;
