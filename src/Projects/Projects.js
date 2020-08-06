import React from "react";

import { Link } from "react-router-dom";

import "../App.css";

function Projects() {
  const navStyle = {
    color: "blue",
    fontSize: "2rem",
    textAlign: "center",
    listStyle: "none",
  };
  return (
    <div>
     <br></br> <br></br>
      <div>
        <div className="grid-container">
          <div className="Card">
            <Link style={navStyle} to="/projects/cost">
              <li>Cost Matrix</li>
            </Link>

            <a
              className="link-card"
              href="https://github.com/edwin-torres/github-page/blob/master/src/Projects/CostMatrix.js"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="btn-card">
                <button>Code</button>
              </div>
            </a>
          </div>

          <div className="Card">
            <Link style={navStyle} to="/projects/genalg">
              <li>Genetic Algorithm</li>
            </Link>

            <a
              className="link-card"
              href="https://github.com/edwin-torres/github-page/blob/master/src/Projects/GeneticAlgorithm.js"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="btn-card">
                <button>Code</button>
              </div>
            </a>
          </div>

          <div className="Card">
            <Link style={navStyle} to="/projects/chaos">
              <li>Chaos</li>
            </Link>
            <a
              className="link-card"
              href="https://github.com/edwin-torres/github-page/blob/master/src/Projects/ChaosTriangle.js"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="btn-card">
                <button>Code</button>
              </div>
            </a>
          </div>

          <div className="Card">
            <Link style={navStyle} to="/projects/bubble">
              <li>Bubble Sort</li>
            </Link>
            <a
              className="link-card"
              href="https://github.com/edwin-torres/github-page/blob/master/src/Projects/Bubble.js"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="btn-card">
                <button>Code</button>
              </div>
            </a>
          </div>

          <div className="Card">
            <Link style={navStyle} to="/projects/breakout">
              <li>Breakout Game</li>
            </Link>
            <a
              className="link-card"
              href="https://github.com/edwin-torres/github-page/blob/master/src/Projects/BreakoutGame.js"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="btn-card">
                <button>Code</button>
              </div>
            </a>
          </div>

          <div className="Card">
            <Link style={navStyle} to="/projects/gol">
              <li>Game of Life</li>
            </Link>
            <a
              className="link-card"
              href="https://github.com/edwin-torres/github-page/blob/master/src/Projects/GameOfLife.js"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="btn-card">
                <button>Code</button>
              </div>
            </a>
          </div>

          <div className="Card">
            <Link style={navStyle} to="/projects/pokemon">
              <li>Catch a Pokemon</li>
            </Link>

            <a
              className="link-card"
              href="https://github.com/edwin-torres/github-page/blob/master/src/Projects/RandomPokemon.js"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="btn-card">
                <button>Code</button>
              </div>
            </a>
          </div>

          <div className="Card">
            <Link style={navStyle} to="/projects/sine">
              <li>Sine Function</li>
            </Link>
            <a
              className="link-card"
              href="https://github.com/edwin-torres/github-page/blob/master/src/Projects/Sine.js"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="btn-card">
                <button>Code</button>
              </div>
            </a>
          </div>

          <div className="Card">
            <Link style={navStyle} to="/projects/curve">
              <li>Curve Approximation</li>
            </Link>
            <a
              className="link-card"
              href="https://github.com/edwin-torres/github-page/blob/master/src/Projects/DrawCurve.js"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="btn-card">
                <button>Code</button>
              </div>
            </a>
          </div>




        </div>
      </div>
    </div>
  );
}

export default Projects;
