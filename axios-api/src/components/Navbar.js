import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
const Navbar = () => {
  return (
    <div>
    <nav className="navbar">
      <div className="logo">
        <img src="/api.png" alt="logo" />
        <a href="/">Api Posts</a>
      </div>
      <ul className="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/posts">Posts</Link></li>
      </ul>
     </nav>
    </div>
  );
}

export default Navbar
