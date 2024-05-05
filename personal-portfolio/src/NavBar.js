// NavBar.js
import React from 'react';
import styles from "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <a href="/" className="nav-link">Home</a>
      <a href="/about" className="nav-link">About</a>
      <a href="/services" className="nav-link">Experience</a>
      <a href="/contact" className="nav-link">Projects</a>
      <a href="/contact" className="nav-link">Contact</a>
    </nav>
  );
}

export default NavBar;
