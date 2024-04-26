import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
        <li className="nav-item"><Link to="/category/electronics" className="nav-link">Electronics</Link></li>
        <li className="nav-item"><Link to="/category/clothing" className="nav-link">Clothing</Link></li>
        <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
