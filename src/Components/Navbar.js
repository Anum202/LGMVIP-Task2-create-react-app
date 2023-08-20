import React from 'react';
import './Navbar.css';

const Navbar = ({ onClick }) => {
  return (
    <nav className="navbar">
      <div className="brand-name">Stylo - Where your style comes first </div>
      <button className="get-users-button" onClick={onClick}>
        Get Users
      </button>
    </nav>
  );
};

export default Navbar;
