import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">Ev-olution</div>

      <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <li><span className="nav-link">Home</span></li>
        <li><span className="nav-link">Explore</span></li>
        <li><span className="nav-link">About</span></li>
        <li><span className="nav-contact">Contact</span></li>
      </ul>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>
    </nav>
  );
};

export default Navbar;
