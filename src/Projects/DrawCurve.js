import React, { useRef, useEffect} from "react";

import "../App.css";

let info = [];
let trapezoidInfo = [];

function Curve() {
  let canvas = useRef();
  let heigtRef = useRef();
  let approxLengthRef = useRef();
  let approxAreaRef = useRef();

  useEffect(() => {
    play();
    console.log("Approximation MOUNTED");

    return () => {
      clear();
      console.log("Approximation UNMONUNTED");
    };
  });

  const play = () => {
    const cxt = canvas.current.getContext("2d");
    canvas.current.width = window.innerWidth * 0.75;

    canvas.current.height = window.innerHeight * 0.5;
    heigtRef.current = canvas.current.height;
    window.addEventListener("resize", function () {
      canvas.current.width = window.innerWidth * 0.75;
      canvas.current.height = window.innerHeight * 0.5;
      heigtRef.current = canvas.current.height;
    });

    //variables
    let painting = false;

    //Eventlisteners

    canvas.current.addEventListener("mousedown", startPainting);
    function startPainting() {
      painting = true;
    }

    canvas.current.addEventListener("mouseup", endPainting);
    function endPainting() {
      painting = false;
      cxt.beginPath();
    }
    canvas.current.addEventListener("mousemove", drawCurve);

    function drawCurve(e) {
      if (!painting) {
        return;
      }
      cxt.lineWidth = 5;
      cxt.lineCap = "round";

      let relativeX = e.clientX - canvas.current.offsetLeft;
      let relativeY = e.clientY - canvas.current.offsetTop;

      info.push(relativeX);
      info.push(relativeY);

      cxt.lineTo(relativeX, relativeY);
      cxt.strokeStyle = "#DC143C";
      cxt.stroke();
    }
  };

  function drawApproximateLength() {
    const cxt = canvas.current.getContext("2d");
    cxt.font = "15px Arial";
    cxt.fillStyle = "NavajoWhite";
    if (info.length === 0) {
      cxt.fillText("Please draw something on the canvas.", 8, 20);
    } else {
      cxt.fillText("Approximate Length: " + approxLengthRef.current, 8, 20);
    }
  }

  function drawApproximateArea() {
    const cxt = canvas.current.getContext("2d");
    cxt.font = "15px Arial";
    cxt.fillStyle = "NavajoWhite";
    if (info.length === 0) {
      cxt.fillText(
        "Please draw something on the canvas.",
        canvas.current.width - 295,
        20
      );
    } else {
      cxt.fillText(
        "Approximate Area: " + approxAreaRef.current,
        canvas.current.width - 195,
        20
      );
    }
  }

  function drawLines(x1, y1, x2, y2) {
    const cxt = canvas.current.getContext("2d");

    cxt.beginPath();
    cxt.lineWidth = 3;

    cxt.moveTo(x1, y1);
    cxt.lineTo(x2, y2);
    cxt.strokeStyle = "Cyan";
    cxt.stroke();
  }

  function clear() {
    info = [];
    trapezoidInfo = [];
    const cxt = canvas.current.getContext("2d");
    cxt.beginPath();
    cxt.strokeStyle = "#DC143C";
    cxt.clearRect(0, 0, canvas.current.width, canvas.current.height);
  }

  function drawCurve(infoArray) {
    const cxt = canvas.current.getContext("2d");
    cxt.clearRect(0, 0, canvas.current.width, canvas.current.height);

    cxt.lineWidth = 5;
    cxt.lineCap = "round";

    cxt.beginPath();
    cxt.moveTo(info[0], info[1]);
    for (let i = 2; i <= infoArray.length - 2; i = i + 2) {
      cxt.lineTo(info[i], info[i + 1]);
    }
    cxt.strokeStyle = "#DC143C";
    cxt.stroke();
  }

  function approximate(Lines) {
    if (info.length === 0) {
      return;
    }

    trapezoidInfo = [];
    let sum = 0;
    drawCurve(info);
    let end = info.length - 1;
    let mid = 0;

    if (((end - 1) / 2) % 2 === 1) {
      mid = Math.floor((end - 1) * 0.5) - 1;
    } else {
      mid = Math.floor((end - 1) * 0.5);
    }

    let howMany = Lines;
    let pass = Math.log2(howMany) - 1;

    for (let i = 1; i <= pass; i++) {
      if ((mid / 2) % 2 === 0) {
        mid = mid / 2;
      } else {
        mid = mid / 2 - 1;
      }
    }

    drawLines(info[0], info[1], info[mid], info[mid + 1]);
    trapezoidInfo.push(info[0]);
    trapezoidInfo.push(info[1]);

    sum = sum + distanceTwoPoints(info[0], info[1], info[mid], info[mid + 1]);

    let numLines = Math.pow(2, pass + 1) - 2;
    for (let i = 1; i <= numLines; i++) {
      drawLines(
        info[i * mid],
        info[i * mid + 1],
        info[(i + 1) * mid],
        info[(i + 1) * mid + 1]
      );
      sum =
        sum +
        distanceTwoPoints(
          info[i * mid],
          info[i * mid + 1],
          info[(i + 1) * mid],
          info[(i + 1) * mid + 1]
        );

      trapezoidInfo.push(info[i * mid]);
      trapezoidInfo.push(info[i * mid + 1]);
    }
    drawLines(
      info[(numLines + 1) * mid],
      info[(numLines + 1) * mid + 1],
      info[info.length - 2],
      info[info.length - 1]
    );

    trapezoidInfo.push(info[(numLines + 1) * mid]);
    trapezoidInfo.push(info[(numLines + 1) * mid + 1]);
    trapezoidInfo.push(info[info.length - 2]);
    trapezoidInfo.push(info[info.length - 1]);

    sum =
      sum +
      distanceTwoPoints(
        info[(numLines + 1) * mid],
        info[(numLines + 1) * mid + 1],
        info[info.length - 2],
        info[info.length - 1]
      );

    approxLengthRef.current = Math.floor(sum);

    let total = distanceTwoPoints(info[0], info[1], info[2], info[3]);

    for (let i = 2; i <= info.length - 4; i = i + 2) {
      total =
        total +
        distanceTwoPoints(info[i], info[i + 1], info[i + 2], info[i + 3]);
    }

    pass++;
  }

  function distanceTwoPoints(x1, y1, x2, y2) {
    let hor = Math.abs(x2 - x1);
    let ver = Math.abs(y2 - y1);

    return Math.sqrt(hor * hor + ver * ver);
  }

  function drawTrapezoid(num) {
    if (info.length === 0) {
      return;
    }

    approximate(num);
    let area = 0;

    for (let i = 0; i <= trapezoidInfo.length - 2; i = i + 2) {
      drawLines(
        trapezoidInfo[i],
        trapezoidInfo[i + 1],
        trapezoidInfo[i],
        heigtRef.current
      );
      if (i !== trapezoidInfo.length - 2) {
        area =
          area +
          0.5 *
            Math.abs(trapezoidInfo[i] - trapezoidInfo[i + 2]) *
            (Math.abs(trapezoidInfo[i + 1] - heigtRef.current) +
              Math.abs(trapezoidInfo[i + 3] - heigtRef.current));
      }
    }

    approxAreaRef.current = Math.floor(area);
  }

  return (
    <div>
      <div>
        <h1>Curve Approximation</h1>
        <div className="grid-container">
          <div className="Card">
            <h2>Approximate Length</h2>
            <div className="btn-card">
              <button
                onClick={() => {
                  approximate(4);
                  drawApproximateLength();
                }}
              >
                4 Lines
              </button>
              <button
                onClick={() => {
                  approximate(8);
                  drawApproximateLength();
                }}
              >
                8 Lines
              </button>
              <button
                onClick={() => {
                  approximate(16);
                  drawApproximateLength();
                }}
              >
                16 Lines
              </button>
              <button
                onClick={() => {
                  approximate(32);
                  drawApproximateLength();
                }}
              >
                32 Lines
              </button>
            </div>
          </div>
          <div className="Card">
            <h2>Approximate Area Under Curve</h2>

            <div className="btn-card">
              <button
                onClick={() => {
                  drawTrapezoid(4);
                  drawApproximateArea();
                }}
              >
                4 Trapezoids
              </button>
              <button
                onClick={() => {
                  drawTrapezoid(8);
                  drawApproximateArea();
                }}
              >
                8 Trapezoids
              </button>
              <button
                onClick={() => {
                  drawTrapezoid(16);
                  drawApproximateArea();
                }}
              >
                16 Trapezoids
              </button>
              <button
                onClick={() => {
                  drawTrapezoid(32);
                  drawApproximateArea();
                }}
              >
                32 Trapezoids
              </button>
            </div>
          </div>
        </div>

        <div className="btn">
          <button
            onClick={() => {
              clear();
            }}
          >
            Draw Different Curve
          </button>
        </div>

        <div style={{ color: "NavajoWhite" }}>
          <ul
            style={{
              listStyle: "none",
              textAlign: "left",
              fontSize: "1.75rem",
            }}
          >
            <li>
              Use the mouse to draw a curve. Then, approximate its length or
              area.{" "}
            </li>
            <li>For better performance, draw the curve slowly. </li>
          </ul>
        </div>
      </div>

      <canvas
        style={{
          size: "100%",
          border: "10px solid grey",
        }}
        ref={canvas}
      />
    </div>
  );
}

export default Curve;
