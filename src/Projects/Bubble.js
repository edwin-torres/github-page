import React, { useState, useRef, useEffect } from "react";
import "../App.css";

const ROWS = 35;
const COLUMNS = 5;

function Bubble() {
  const [grid, setGrid] = useState(() => {
    return randomBubbleGrid();
  });

  let gridRef = useRef();
  gridRef.current = grid;

  let indexRef = useRef(0);
  let arr = randomNumbers;
  let iRef = useRef(0);

  let counterRef = useRef(0);
  let intervalRef = useRef();

  useEffect(() => {
    console.log("BUBBLE MONUNTED");
    return () => {
      console.log("RN at UNMOUNT", randomNumbers);
      randomNumbers = [];
      clearInterval(intervalRef.current);
      console.log("BUBBLE UNMONUNTED");
    };
  }, []);

  function play() {
    console.log(randomNumbers);
    let limit = ROWS - 2;
    let flag = -1;

    let intervalObj = setInterval(() => {
      iRef.current = iRef.current % ROWS;
      flag++;

      if (!isSorted(arr)) {
        if (comparison(arr[iRef.current], arr[iRef.current + 1])) {
          swapMember(arr, iRef.current, iRef.current + 1);

          setGrid(createNewBubble(arr));
        }
      }

      if (flag < limit) {
        iRef.current++;
      } else {
        flag = -1;
        limit--;
        iRef.current = 0;
      }

      if (isSorted(arr)) {
        clearInterval(intervalObj);
      }

      indexRef.current++;
      counterRef.current++;

      if (counterRef.current === ROWS * ROWS) {
        clearInterval(intervalObj);
      }
    }, 25);

    intervalRef.current = intervalObj;
  }

  return (
    <>
      <div>
        <h1>Bubble Sort</h1>
      </div>

      <div className="btn">
        <button
          onClick={() => {
            play();
          }}
        >
          Sort!
        </button>

        <button
          onClick={() => {
            clearInterval(intervalRef.current);
            window.location.reload();
          }}
        >
          Refresh
        </button>
      </div>

      {/* Here is the Grid */}
      <div className="gol-grid-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${COLUMNS},20px)`,
          }}
        >
          {/* This creates the individual boxes */}
          {grid.map((row, i) =>
            row.map((colo, j) => (
              <div
                key={i - j}
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: grid[i][j] ? "#7FFFD4" : undefined,
                  border: "solid 1px sienna",
                }}
              ></div>
            ))
          )}
        </div>
      </div>

      <div style={{ color: "NavajoWhite" }}>
        <ul
          style={{ listStyle: "none", textAlign: "left", fontSize: "1.75rem" }}
        >
          <li>
            {" "}
            This is a visualization of the{" "}
            <a
              className="link"
              href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bubble Sort
            </a>{" "}
            algorithm.{" "}
          </li>
          <li> With luck, you'll be able to see some bubbles go up. </li>
        </ul>
      </div>
    </>
  );
}

export default Bubble;

function createRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function createRandomLenghts(arr) {
  let randomNum;
  for (let j = 0; j < ROWS; j++) {
    randomNum = createRandomValue(1, COLUMNS + 1);
    while (j > 0 && arr[j - 1] === randomNum) {
      randomNum = createRandomValue(1, COLUMNS);
    }

    arr.push(randomNum);
  }
}

function comparison(a, b) {
  return a > b ? true : false;
}

function swapMember(arr, x, y) {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
  return arr;
}

function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

let randomNumbers = [];

function randomBubbleGrid() {
  let rowsArr = [];

  createRandomLenghts(randomNumbers);

  for (let i = 0; i < ROWS; i++) {
    let length = randomNumbers[i];

    let counter = 0;

    rowsArr.push(
      Array.from(Array(COLUMNS), () => {
        if (counter < length) {
          counter++;
          return 1;
        } else {
          return 0;
        }
      })
    );
  }
  return rowsArr;
}

function createNewBubble(arr) {
  let rowsArr = [];

  for (let i = 0; i < ROWS; i++) {
    let length = arr[i];
    let counter = 0;

    rowsArr.push(
      Array.from(Array(COLUMNS), () => {
        if (counter < length) {
          counter++;
          return 1;
        } else {
          return 0;
        }
      })
    );
  }
  return rowsArr;
}
