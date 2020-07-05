import React, { useState, useEffect } from "react";

import "../App.css";

const ROWS = 5;
const COLUMNS = 8;

let randomNumbers = []; ////////////////////Check this array..
let rowsArr = []; //Grid
let matrix = []; //Stores the Cost
let path = []; //Stores the Path
let colorArr = []; //Grid Colors
let pathToSquare = []; //Path to arrive at a square

function Cost() {
  const [grid, setGrid] = useState(() => {
    return createRandomGrid();
  });

  const [colors, setColors] = useState(() => {
    return squareColor();
  });

  useEffect(() => {
    console.log("Cost Mounted");

    return () => {
      console.log("Cost Unmounted");
    };
  }, []);

  return (
    <>
      <div>
        <h1>Cost Matrix</h1>
      </div>

      <div style={{ color: "NavajoWhite" }}>
        <ul
          style={{ listStyle: "none", textAlign: "left", fontSize: "1.55rem" }}
        >
          <li>
            {" "}
            The first position is [0][0]. Movement is restricted to Right or
            Down.{" "}
            <span role="img" aria-label="right-arrow">
              ➡️
            </span>{" "}
            <span role="img" aria-label="right-arrow">
              ⬇️
            </span>{" "}
          </li>
          <li>
            <strong>
              <em>Price</em>{" "}
            </strong>{" "}
            represents the cost for stepping on a square. For instance, it costs{" "}
            {grid[1][3]} to step on [1][3].
          </li>
          <br></br>
          <li>
            {" "}
            <strong>Total</strong> represents the total cost to arrive at a
            square by following the <em>most expensive </em>possible path.
          </li>

          <li>Ex: </li>
          <li>
            Total to arrive at [0][1] is {matrix[0][1]} = {grid[0][0]} +{" "}
            {grid[0][1]}.{" "}
          </li>
          <li>
            Total to arrive at [1][1] is {matrix[1][1]} = {grid[0][0]} +{" "}
            {maxValue(grid[0][1], grid[1][0])} + {grid[1][1]}.{" "}
          </li>
          <li style={{ textAlign: "center" }}>
            {" "}
            Click on a squre to get its path.{" "}
          </li>
        </ul>
      </div>

      {/* Here is the Grid */}
      <div className="gol-grid-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${COLUMNS},85px)`,
          }}
        >
          {/* This creates the individual boxes */}
          {grid.map((row, i) =>
            row.map((colo, j) => (
              <div
                key={i - j}
                style={{
                  width: 85,
                  height: 85,
                  backgroundColor: colors[i][j],
                  border: "solid 1px sienna",
                  color: "Black",
                }}
                onClick={(e) => {
                  getPath(i, j);

                  setColors(() => {
                    return squareColor();
                  });
                }}
              >
                [{i}] [{j}]<br></br>
                <strong>
                  <em>Price:</em>{" "}
                </strong>
                {grid[i][j]}
                <br></br>
                <br></br>
                <strong>Total: {matrix[i][j]}</strong>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="btn">
        <button
          onClick={() => {
            setGrid(createRandomGrid());
            window.location.reload();
          }}
        >
          Change Values
        </button>
      </div>
    </>
  );
}

export default Cost;

// Grid
function createRandomGrid() {
  rowsArr = [];
  randomNumbers = [];

  for (let i = 0; i < ROWS; i++) {
    rowsArr.push(
      Array.from(Array(COLUMNS), () => {
        return Math.floor(Math.random() * 25) + 1;
      })
    );
  }

  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLUMNS; j++) {
      randomNumbers.push(rowsArr[i][j]);
    }
  }

  calculateCost(rowsArr);

  return rowsArr;
}

function squareColor() {
  colorArr = [];

  for (let i = 0; i < ROWS; i++) {
    colorArr.push(
      Array.from(Array(COLUMNS), () => {
        return "#E0FFFF";
      })
    );
  }

  if (pathToSquare !== null) {
    pathToSquare.forEach(function (ele) {
      colorArr[ele[0]][ele[1]] = "#008080";
    });
  }

  return colorArr;
}

function maxValue(x, y) {
  return x > y ? x : y;
}

function calculateCost(price) {
  matrix = [];

  for (let i = 0; i < ROWS; i++) {
    matrix.push(
      Array.from(Array(COLUMNS), () => {
        return 0;
      })
    );
  }

  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLUMNS; j++) {
      if (i > 0 && j > 0) {
        matrix[i][j] =
          maxValue(matrix[i][j - 1], matrix[i - 1][j]) + price[i][j];
      } else {
        if (i > 0) {
          matrix[i][j] = matrix[i - 1][j] + price[i][j];
        } else {
          if (j > 0) {
            matrix[i][j] = matrix[i][j - 1] + price[i][j];
          } else {
            if (i === 0 && j === 0) {
              matrix[i][j] = price[i][j];
            }
          }
        }
      }
    }
  }

  createPath(matrix);
}

function createPath(matrix) {
  path = [];

  for (let i = 0; i < ROWS; i++) {
    path.push(
      Array.from(Array(COLUMNS), () => {
        return [0, 0];
      })
    );
  }

  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLUMNS; j++) {
      if (i > 0 && j > 0) {
        if (matrix[i - 1][j] < matrix[i][j - 1]) {
          path[i][j] = [i, j - 1];
        } else {
          path[i][j] = [i - 1, j];
        }
      } else {
        if (i > 0) {
          path[i][j] = [i - 1, j];
        } else {
          if (j > 0) {
            path[i][j] = [i, j - 1];
          } else {
            if (i === 0 && j === 0) {
              path[i][j] = [0, 0];
            }
          }
        }
      }
    }
  }
}

function getPath(i, j) {
  pathToSquare = [];

  pathToSquare.push([i, j]);

  let sum = i + j;

  for (let k = 0; k < sum; k++) {
    pathToSquare.push([path[i][j][0], path[i][j][1]]);
    i = pathToSquare[k + 1][0];
    j = pathToSquare[k + 1][1];
  }
}
