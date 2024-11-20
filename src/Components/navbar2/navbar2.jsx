import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h2>Overview</h2>
        <input type="text" placeholder="Search" className="search-bar" />
      </div>
      <div className="navbar-right">
        <span>🔔</span>
        <span>📅</span>
        <span>👤 Kamisato Aya</span>
      </div>
    </div>
  );
};

export default Navbar;
