import React from 'react';
 
import './App.css';

import {Link} from 'react-router-dom';

function Nav() {
        const navStyle = {
                    color: 'white'
        };


  return (
    <nav>
        <h3>LOGO</h3>
     
            <ul className = "nav-links">
            <Link style = {navStyle} to = "/home">
                            <li >Home</li>
                    </Link>
  
            </ul>

    </nav>
  );
}

export default Nav;


export function ProjectNav() {
        const navStyle = {
                    color: 'white'
        };


  return (
    <nav className = "projects-nav">
        <h3>ProjectNav</h3>
     
            <ul className = "nav-links">
            <Link style = {navStyle} to = "/">
                            <li >Home</li>
                    </Link>

                    <Link style = {navStyle} to = "/projects/shop">
                            <li >Shop</li>
                    </Link>
                    <Link style = {navStyle} to = "/pokemon">
                            <li >Pokemon</li>
                    </Link>
                    <Link style = {navStyle} to = "/projects/breakout">
                            <li >breakout</li>
                    </Link>
                    <Link style = {navStyle} to = "/projects">
                            <li >Projects</li>
                    </Link>
            
            </ul>

    </nav>
  );
}