import React, { useRef, useEffect, useState } from "react";
import produce from "immer";
import Algorithm, {
  hMultiplier,
  distance,
  nodeDistance,
  midPoint,
  initialNodeCosts,
} from "./DijkstraAlgo";
import "../App.css";

const DijkstraVisualization = () => {
  const stepsRef = useRef();
  const stepNumberRef = useRef();

  let [visibility, setVisibility] = useState("visible"); //button

  const heightRef = useRef();
  const widthRef = useRef();
  const nodeRadius = 20;

  let canvas = useRef();

  const contextRef = useRef();
  const [isDrawing, setIsDrawing] = useState(false);

  heightRef.current = window.innerHeight;
  widthRef.current = window.innerWidth;

  const NodeA = {
    name: "A",
    id: 1,
    x: widthRef.current * 0.1,
    y: heightRef.current * 0.5 * hMultiplier,
    connected: [
      [
        2,
        distance(
          widthRef.current * 0.05,
          heightRef.current * 0.5,
          widthRef.current * 0.15,
          heightRef.current * 0.25
        ),
      ],
      [
        3,
        distance(
          widthRef.current * 0.05,
          heightRef.current * 0.5,
          widthRef.current * 0.15,
          heightRef.current * 0.75
        ),
      ],
    ],
  };

  const NodeB = {
    name: "B",
    id: 2,
    x: widthRef.current * 0.2,
    y: heightRef.current * 0.25 * hMultiplier,
    connected: [
      [
        1,
        distance(
          widthRef.current * 0.05,
          heightRef.current * 0.5,
          widthRef.current * 0.15,
          heightRef.current * 0.25
        ),
      ],
      [
        3,
        distance(
          widthRef.current * 0.15,
          heightRef.current * 0.25,
          widthRef.current * 0.15,
          heightRef.current * 0.75
        ),
      ],
      [
        4,
        distance(
          widthRef.current * 0.15,
          heightRef.current * 0.25,
          widthRef.current * 0.3,
          heightRef.current * 0.5
        ),
      ],
      [
        5,
        distance(
          widthRef.current * 0.15,
          heightRef.current * 0.25,
          widthRef.current * 0.45,
          heightRef.current * 0.25
        ),
      ],
    ],
  };

  const NodeC = {
    name: "C",
    id: 3,
    x: widthRef.current * 0.2,
    y: heightRef.current * 0.75 * hMultiplier,
    connected: [
      [
        1,
        distance(
          widthRef.current * 0.05,
          heightRef.current * 0.5,
          widthRef.current * 0.15,
          heightRef.current * 0.75
        ),
      ],
      [
        2,
        distance(
          widthRef.current * 0.15,
          heightRef.current * 0.25,
          widthRef.current * 0.15,
          heightRef.current * 0.75
        ),
      ],
      [
        4,
        distance(
          widthRef.current * 0.15,
          heightRef.current * 0.75,
          widthRef.current * 0.3,
          heightRef.current * 0.5
        ),
      ],
      [
        6,
        distance(
          widthRef.current * 0.15,
          heightRef.current * 0.75,
          widthRef.current * 0.45,
          heightRef.current * 0.75
        ),
      ],
    ],
  };

  const NodeD = {
    name: "D",
    id: 4,
    x: widthRef.current * 0.33,
    y: heightRef.current * 0.5 * hMultiplier,
    connected: [
      [
        2,
        distance(
          widthRef.current * 0.15,
          heightRef.current * 0.25,
          widthRef.current * 0.3,
          heightRef.current * 0.5
        ),
      ],
      [
        3,
        distance(
          widthRef.current * 0.15,
          heightRef.current * 0.75,
          widthRef.current * 0.3,
          heightRef.current * 0.5
        ),
      ],
      [
        5,
        distance(
          widthRef.current * 0.3,
          heightRef.current * 0.5,
          widthRef.current * 0.45,
          heightRef.current * 0.25
        ),
      ],
      [
        6,
        distance(
          widthRef.current * 0.3,
          heightRef.current * 0.5,
          widthRef.current * 0.45,
          heightRef.current * 0.75
        ),
      ],
    ],
  };

  const NodeE = {
    name: "E",
    id: 5,
    x: widthRef.current * 0.45,
    y: heightRef.current * 0.25 * hMultiplier,
    connected: [
      [
        2,
        distance(
          widthRef.current * 0.15,
          heightRef.current * 0.25,
          widthRef.current * 0.45,
          heightRef.current * 0.25
        ),
      ],
      [
        4,
        distance(
          widthRef.current * 0.3,
          heightRef.current * 0.5,
          widthRef.current * 0.45,
          heightRef.current * 0.25
        ),
      ],
      [
        6,
        distance(
          widthRef.current * 0.45,
          heightRef.current * 0.25,
          widthRef.current * 0.45,
          heightRef.current * 0.75
        ),
      ],
      [
        7,
        distance(
          widthRef.current * 0.45,
          heightRef.current * 0.25,
          widthRef.current * 0.65 * 0.95,
          heightRef.current * 0.5
        ),
      ],
    ],
  };

  const NodeF = {
    name: "F",
    id: 6,
    x: widthRef.current * 0.45,
    y: heightRef.current * 0.75 * hMultiplier,
    connected: [
      [
        3,
        distance(
          widthRef.current * 0.15,
          heightRef.current * 0.75,
          widthRef.current * 0.45,
          heightRef.current * 0.75
        ),
      ],
      [
        4,
        distance(
          widthRef.current * 0.3,
          heightRef.current * 0.5,
          widthRef.current * 0.45,
          heightRef.current * 0.75
        ),
      ],
      [
        5,
        distance(
          widthRef.current * 0.45,
          heightRef.current * 0.25,
          widthRef.current * 0.45,
          heightRef.current * 0.75
        ),
      ],
      [
        7,
        distance(
          widthRef.current * 0.45,
          heightRef.current * 0.75,
          widthRef.current * 0.65 * 0.95,
          heightRef.current * 0.5
        ),
      ],
    ],
  };

  const NodeG = {
    name: "G",
    id: 7,
    x: widthRef.current * 0.65 * 0.95,
    y: heightRef.current * 0.5 * hMultiplier,
    connected: [
      [
        5,
        distance(
          widthRef.current * 0.45,
          heightRef.current * 0.25,
          widthRef.current * 0.65 * 0.95,
          heightRef.current * 0.5
        ),
      ],
      [
        6,
        distance(
          widthRef.current * 0.45,
          heightRef.current * 0.75,
          widthRef.current * 0.65 * 0.95,
          heightRef.current * 0.5
        ),
      ],
    ],
  };

  const Nodes = [NodeA, NodeB, NodeC, NodeD, NodeE, NodeF, NodeG];
  const [nodes, updateNodes] = useState(Nodes);
  const nodesReference = useRef();

  const nodeCosts = initialNodeCosts;
  const edgeAB = {
    //                      NodeA.x   NodeB.x
    x: midPoint(nodes[0].x, nodes[1].x),
    y: midPoint(nodes[0].y, nodes[1].y),
    //    NodeA.connected[0][1]
    cost: nodes[0].connected[0][1],
  };

  const edgeAC = {
    //                      NodeA.x   NodeB.x
    x: midPoint(nodes[0].x, nodes[2].x),
    y: midPoint(nodes[0].y, nodes[2].y),
    cost: nodes[0].connected[1][1],
  };

  const edgeBC = {
    //                      NodeB.x   NodeC.x
    x: midPoint(nodes[1].x, nodes[2].x),
    y: midPoint(nodes[1].y, nodes[2].y),
    cost: nodes[1].connected[1][1],
  };

  const edgeBD = {
    //                      NodeB.x   NodeD.x
    x: midPoint(nodes[1].x, nodes[3].x),
    y: midPoint(nodes[1].y, nodes[3].y),
    cost: nodes[1].connected[2][1],
  };

  const edgeBE = {
    x: midPoint(nodes[1].x, nodes[4].x),
    y: midPoint(nodes[1].y, nodes[4].y),
    cost: nodes[1].connected[3][1],
  };

  const edgeCD = {
    x: midPoint(nodes[2].x, nodes[3].x),
    y: midPoint(nodes[2].y, nodes[3].y),
    cost: nodes[2].connected[2][1],
  };

  const edgeCF = {
    x: midPoint(nodes[2].x, nodes[5].x),
    y: midPoint(nodes[2].y, nodes[5].y),
    cost: nodes[2].connected[3][1],
  };

  const edgeDE = {
    x: midPoint(nodes[3].x, nodes[4].x),
    y: midPoint(nodes[3].y, nodes[4].y),
    cost: nodes[3].connected[2][1],
  };

  const edgeDF = {
    x: midPoint(nodes[3].x, nodes[5].x),
    y: midPoint(nodes[3].y, nodes[5].y),
    cost: nodes[3].connected[3][1],
  };

  const edgeEF = {
    x: midPoint(nodes[4].x, nodes[5].x),
    y: midPoint(nodes[4].y, nodes[5].y),
    cost: nodes[4].connected[2][1],
  };

  const edgeEG = {
    x: midPoint(nodes[4].x, nodes[6].x),
    y: midPoint(nodes[4].y, nodes[6].y),
    cost: nodes[4].connected[3][1],
  };

  const edgeFG = {
    x: midPoint(nodes[5].x, nodes[6].x),
    y: midPoint(nodes[5].y, nodes[6].y),
    cost: nodes[5].connected[3][1],
  };

  const edges = [
    edgeAB,
    edgeAC,
    edgeBC,
    edgeBD,
    edgeBE,
    edgeCD,
    edgeCF,
    edgeDE,
    edgeDF,
    edgeEF,
    edgeEG,
    edgeFG,
  ];

  const matrix = [
    [0, edgeAB.cost, edgeAC.cost, 0, 0, 0, 0], //A
    [edgeAB.cost, 0, edgeBC.cost, edgeBD.cost, edgeBE.cost, 0, 0], //B
    [edgeAC.cost, edgeBC.cost, 0, edgeCD.cost, 0, edgeCF.cost, 0], //C
    [0, edgeBD.cost, edgeCD.cost, 0, edgeDE.cost, edgeDF.cost, 0], //D
    [0, edgeBE.cost, 0, edgeDE.cost, 0, edgeEF.cost, edgeEG.cost], //E
    [0, 0, edgeCF.cost, edgeDF.cost, edgeEF.cost, 0, edgeFG.cost], //F
    [0, 0, 0, 0, edgeEG.cost, edgeFG.cost, 0], //G
  ];

  useEffect(() => {
    const cxt = canvas.current.getContext("2d");

    canvas.current.width = window.innerWidth * 0.8;

    canvas.current.height = window.innerHeight * hMultiplier;

    cxt.lineCap = "round";
    cxt.strokeStyle = "blue";

    contextRef.current = cxt;

    drawNodes();
    edges.forEach((edge) => {
      text(edge.x, edge.y, edge.cost);
    });
    nodes.forEach((node) => {
      text(node.x, node.y, node.name);
    });
  }, []);

  const startDrawing = () => {
    setIsDrawing(true);
  };
  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };
  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;

    contextRef.current.clearRect(
      0,
      0,
      canvas.current.width,
      canvas.current.height
    );

    nodes.forEach((node) => {
      if (
        offsetX < node.x + nodeRadius &&
        offsetX > node.x - nodeRadius &&
        offsetY > node.y - nodeRadius &&
        offsetY < node.y + nodeRadius
      ) {
        nodesReference.current = nodes;

        let temp = produce(nodesReference.current, (nodeDraft) => {
          nodeDraft[node.id - 1].x = offsetX;
          nodeDraft[node.id - 1].y = offsetY;

          nodeDraft.forEach((element) => {
            element.connected.forEach((item) => {
              item[1] = nodeDistance(element, nodeDraft[item[0] - 1]);
            });
          });
        });

        updateNodes(temp);
      }
    });

    drawNodes();

    edges.forEach((edge) => {
      text(edge.x, edge.y, edge.cost);
    });
    nodes.forEach((node) => {
      text(node.x, node.y, node.name);
    });
  };

  const drawNodes = () => {
    nodes.forEach((element) => {
      drawCircle(element.x, element.y);

      element.connected.forEach((connection) => {
        connectNodes(element, nodes[connection[0] - 1]);
      });
    });
  };

  const drawCircle = (x, y) => {
    contextRef.current.beginPath();
    contextRef.current.arc(x, y, nodeRadius, 0, 2 * Math.PI);
    contextRef.current.fillStyle = "Sienna";
    contextRef.current.fill();
  };

  const text = (x, y, cost, color) => {
    if (typeof color === "undefined") {
      contextRef.current.font = "900 30px Arial";
      contextRef.current.fillStyle = "#7FFFD4";

      contextRef.current.textAlign = "center";
      contextRef.current.fillText(`${cost}`, x, y);
    } else {
      contextRef.current.font = "800 25px Arial";
      contextRef.current.fillStyle = color;

      contextRef.current.textAlign = "center";
      contextRef.current.fillText(`${cost}`, x, y);
    }
  };

  const connectNodes = (nodeA, nodeB, color) => {
    if (typeof color === "undefined") {
      contextRef.current.beginPath();
      contextRef.current.moveTo(nodeA["x"], nodeA["y"]);
      contextRef.current.lineTo(nodeB["x"], nodeB["y"]);
      contextRef.current.strokeStyle = "Sienna";
      contextRef.current.lineWidth = 5;
      contextRef.current.stroke();

      contextRef.current.closePath();
    } else {
      contextRef.current.beginPath();
      contextRef.current.moveTo(nodeA["x"], nodeA["y"]);
      contextRef.current.lineTo(nodeB["x"], nodeB["y"]);
      contextRef.current.strokeStyle = color;
      contextRef.current.lineWidth = 5;
      contextRef.current.stroke();
      contextRef.current.closePath();
    }
  };

  const colorNode = (node, color) => {
    contextRef.current.beginPath();
    contextRef.current.arc(node.x, node.y, nodeRadius, 0, 2 * Math.PI);
    contextRef.current.fillStyle = color;
    contextRef.current.fill();
    text(node.x, node.y, node.name);
  };

  let steps = [];
  const refreshButton = visibility === "visible" ? "hidden" : "visible";

  return (
    <div>
      <div style={{ color: "NavajoWhite" }}>
        <ul
          style={{
            listStyle: "none",
            textAlign: "left",
            fontSize: "1.5rem",
          }}
        >
          <li>
            {" "}
            This is a visualization of{" "}
            <a
              className="link"
              href="https://en.wikipedia.org/wiki/Dijkstra's_algorithm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dijkstra's algorithm
            </a>
            . Node A is the source node.
          </li>
          <li>
            Use the mouse to move the nodes and update the cost of an edge.
            Values range from 1-15.
          </li>
          <li>
            The Distance Values represent the distance from a node to the source
            node by taking the shortest path.
          </li>

          <li>9999 represensts the ∞ symbol. </li>
          <li>
            The current node of this color{" "}
            <span style={{ color: "DarkGreen", fontSize: "2rem" }}>
              {" "}
              &#x25CF;{" "}
            </span>{" "}
            is updating the node of this color{" "}
            <span style={{ color: "GoldenRod", fontSize: "2rem" }}>
              &#x25CF;{" "}
            </span>
            .{" "}
          </li>
        </ul>
      </div>

      <div className="btn">
        <button
          style={{ visibility: `${visibility}` }}
          onClick={() => {
            steps = Algorithm(matrix);
            stepsRef.current = steps;
            stepNumberRef.current = 0;

            nodes.forEach((node) => {
              text(
                node.x,
                node.y - 35,
                `Distance: ${nodeCosts[node.id - 1].cost}`,
                "NavajoWhite"
              );
            });
            setVisibility("hidden");
          }}
        >
          START
        </button>

        <button
          onClick={() => {
            if (stepNumberRef.current > stepsRef.current.length - 1) {
              text(
                widthRef.current * 0.1,
                heightRef.current * 0.1 * hMultiplier,
                "Finished!"
              );

              return;
            } else {
              contextRef.current.clearRect(
                0,
                0,
                canvas.current.width,
                canvas.current.height
              );

              drawNodes();

              colorNode(
                nodes[stepsRef.current[stepNumberRef.current].currentId - 1],
                "DarkGreen"
              );
              connectNodes(
                nodes[stepsRef.current[stepNumberRef.current].currentId - 1],
                nodes[stepsRef.current[stepNumberRef.current].updateId - 1],
                "Teal"
              );
              colorNode(
                nodes[stepsRef.current[stepNumberRef.current].updateId - 1],
                "GoldenRod"
              );
              edges.forEach((edge) => {
                text(edge.x, edge.y, edge.cost);
              });
              nodes.forEach((node) => {
                text(node.x, node.y, node.name);
              });
              nodeCosts[
                stepsRef.current[stepNumberRef.current].updateId - 1
              ].cost = stepsRef.current[stepNumberRef.current].updateTo;
              nodes.forEach((node) => {
                text(
                  node.x,
                  node.y - 35,
                  `Distance: ${nodeCosts[node.id - 1].cost}`,
                  "NavajoWhite"
                );
              });

              stepNumberRef.current = stepNumberRef.current + 1;
            }
          }}
        >
          NEXT
        </button>

        <button
          style={{ visibility: `${refreshButton}` }}
          onClick={() => {
            window.location.reload();
          }}
        >
          Refresh
        </button>
      </div>

      <canvas
        style={{
          size: "100%",
          border: "10px solid grey",
        }}
        ref={canvas}
        onMouseDown={(e) => {
          startDrawing(e);
        }}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
      />
    </div>
  );
};

export default DijkstraVisualization;
