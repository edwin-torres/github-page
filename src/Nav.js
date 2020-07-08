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
        <a
          className="link"
          href={process.env.PUBLIC_URL + "/EdwinTorres.pdf"}
          download
        >
          <img
            className="icon"
            src={process.env.PUBLIC_URL + "/WhiteCV2.png"}
            alt="github"
            height="25"
            width="25"
          />
        </a>

        <a
          className="link"
          href="https://github.com/edwin-torres"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="icon"
            src={process.env.PUBLIC_URL + "/images/github.png"}
            alt="github"
            height="25"
            width="25"
          />
        </a>
      </div>
       
      <ul className="nav-links">
        <Link style={navStyle} to="/home">
          <li>Home</li>
        </Link>
         
        <Link style={navStyle} to="/projects">
          <li>Cool_Stuff</li>
        </Link>
      </ul>
      

    </nav>
  );
}

export default Nav;
