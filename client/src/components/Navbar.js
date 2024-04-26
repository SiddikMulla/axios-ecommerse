import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item"><a href="/">Home</a></li>
        <li className="nav-item"><a href="/category/electronics">Electronics</a></li>
        <li className="nav-item"><a href="/category/clothing">Clothing</a></li>
        <li className="nav-item"><a href="/login">Login</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
