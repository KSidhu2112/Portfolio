import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)
  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark')

  return (
    <header className="site-navbar">
      <div className="container">
        <div className="brand"><Link to="/" onClick={closeMenu}>K Sidhu</Link></div>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          
          <div className="mobile-menu-btn" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li><a href="/#Hero-page" onClick={closeMenu}>Home</a></li>
            <li><a href="/#about" onClick={closeMenu}>About</a></li>
            <li><a href="/#skills" onClick={closeMenu}>Skills</a></li>
            <li><a href="/#projects" onClick={closeMenu}>Projects</a></li>
            <li><Link to="/resume" onClick={closeMenu}>Resume</Link></li>
            <li><a href="/#achievements" onClick={closeMenu}>Achievements</a></li>
            <li><a href="/#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
