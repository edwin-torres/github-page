import React, { useRef, useEffect } from "react";
import * as dat from "dat.gui";

import "../App.css";

const wave = {
  y: window.innerHeight / 3.5,
  period: 0.01,
  amplitude: -175,
  shift: 0.001,
};

function Sine() {
  const requestRef = useRef();
  const guiRef = useRef();

  useEffect(() => {
    play();
    console.log("Sine MOUNTED");

    return () => {
      cancelAnimationFrame(requestRef.current);

      wave.y = window.innerHeight / 3.5;

      wave.period = 0.01;
      wave.amplitude = -175;

      guiRef.current.destroy();

      console.log("Sine UNMONUNTED");
    };
  });

  let canvas = useRef();

  const play = () => {
    const gui = new dat.GUI();
    const waveFolder = gui.addFolder("WaveControls");

    waveFolder.add(wave, "y", 0, window.innerHeight);
    waveFolder.add(wave, "period", -0.01, 0.01);
    waveFolder.add(wave, "amplitude", -300, 300);
    waveFolder.open();

    guiRef.current = gui;

    const cxt = canvas.current.getContext("2d");
    canvas.current.width = window.innerWidth;
    canvas.current.height = window.innerHeight * 0.75;

    function draw() {
      requestRef.current = requestAnimationFrame(draw);

      cxt.fillStyle = "rgba(0,0,0,0.1)";
      cxt.fillRect(0, 0, canvas.current.width, canvas.current.height);
      cxt.beginPath();
      cxt.moveTo(0, canvas.current.height / 2);

      for (let i = 0; i < canvas.current.width; i++) {
        cxt.lineTo(
          i,
          wave.y + wave.amplitude * Math.sin(wave.period * i + wave.shift)
        );
      }

      cxt.strokeStyle = "hsl(200,50%,100%)";

      cxt.stroke();

      wave.shift += 0.01;
    }

    draw();
  };

  return (
    <div>
      <div>
        <h1>Sine Function</h1>
        <div style={{ color: "NavajoWhite" }}>
          <ul
            style={{
              listStyle: "none",
              textAlign: "left",
              fontSize: "1.75rem",
            }}
          >
            <li> Use the sliders to manipulate the function. </li>
          </ul>
        </div>
      </div>

      <canvas
        style={{
          size: "100%",
          border: "10px solid black",
        }}
        ref={canvas}
      />
    </div>
  );
}

export default Sine;
