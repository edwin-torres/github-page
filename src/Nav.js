import React from "react";

import "./App.css";

import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white",
  };

  return (
    <nav>
        <div>
          <a className = "link" href="https://github.com/edwin-torres" target="_blank"  rel = "noopener noreferrer">    <img className = "github" src={process.env.PUBLIC_URL + '/images/github.png'} alt = "github" height = "25" width = "25" /> </a> 
   
         </div>

      <ul className="nav-links">
        <Link style={navStyle} to="/home">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>
        <Link style={navStyle} to="/projects">
          <li>Cool Stuff</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;

export function ProjectNav() {
  const navStyle = {
    color: "white",
  };

  return (
    <nav className="projects-nav">
      <h3>ProjectNav</h3>

      <ul className="nav-links">
        <Link style={navStyle} to="/">
          <li>Home</li>
        </Link>

        <Link style={navStyle} to="/projects/shop">
          <li>Shop</li>
        </Link>
        <Link style={navStyle} to="/pokemon">
          <li>Pokemon</li>
        </Link>
        <Link style={navStyle} to="/projects/breakout">
          <li>breakout</li>
        </Link>
        <Link style={navStyle} to="/projects">
          <li>Projects</li>
        </Link>
      </ul>
    </nav>
  );
}
