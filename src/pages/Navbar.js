import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef();
  const [coursesOpen, setCoursesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setShowNavbar(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path) => location.pathname === path;

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
    setMenuOpen(false);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`navbar ${showNavbar ? 'visible' : 'hidden'}`} ref={navRef}>
      <div className="navbar-container">
        <div className="logo-container">
          <span className="logo-text">SR Marbles & Granites</span>
        </div>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className={isActive('/') ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleLinkClick('/'); }}>Home</Link>
          <Link to="/collections" className={isActive('/collections') ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleLinkClick('/collections'); }}>Collections</Link>
          <Link to="/about" className={isActive('/about') ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleLinkClick('/about'); }}>About</Link>
          <Link to="/contact" className={isActive('/contact') ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleLinkClick('/contact'); }}>Contact Us</Link>
          <span className="close-menu" onClick={toggleMenu}>X</span>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className="dot-grid">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
