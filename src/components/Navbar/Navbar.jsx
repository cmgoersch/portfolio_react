import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav>
      <div className="menu">
        <button id="burger-menu" onClick={openMenu}>☰</button>
        <ul id="menu-items">
          <li><Link to="/">Back to the bubbles</Link></li>
          <li><Link to="/about">About me</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/cv">CV</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div 
          id="overlay-menu" 
          style={{ display: menuOpen ? 'flex' : 'none' }}
        >
          <button id="close-menu" onClick={closeMenu}>✖</button>
          <ul>
            <li><Link to="/" onClick={closeMenu}>Back to the bubbles</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About me</Link></li>
            <li><Link to="/portfolio" onClick={closeMenu}>Portfolio</Link></li>
            <li><Link to="/cv" onClick={closeMenu}>CV</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
