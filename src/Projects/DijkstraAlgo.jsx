//I obtained this code from
//https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/

let stepsArray = [];
let tempStep = {
  currentId: 0,
  updateId: 0,
  updateTo: 0,
};

// A Javascript program for Dijkstra's single
// source shortest path algorithm.
// The program is for adjacency matrix
// representation of the graph
let V = 7;

// A utility function to find the
// vertex with minimum distance
// value, from the set of vertices
// not yet included in shortest
// path tree
function minDistance(dist, sptSet) {
  // Initialize min value
  let min = Number.MAX_VALUE;
  let min_index = -1;

  for (let v = 0; v < V; v++) {
    if (sptSet[v] === false && dist[v] <= min) {
      min = dist[v];
      min_index = v;
    }
  }
  return min_index;
}

// Funtion that implements Dijkstra's
// single source shortest path algorithm
// for a graph represented using adjacency
// matrix representation
function dijkstra(graph, src) {
  let dist = new Array(V);
  let sptSet = new Array(V);

  // Initialize all distances as
  // INFINITE and stpSet[] as false
  for (let i = 0; i < V; i++) {
    dist[i] = Number.MAX_VALUE;
    sptSet[i] = false;
  }

  // Distance of source vertex
  // from itself is always 0
  dist[src] = 0;

  // Find shortest path for all vertices
  for (let count = 0; count < V - 1; count++) {
    // Pick the minimum distance vertex
    // from the set of vertices not yet
    // processed. u is always equal to
    // src in first iteration.
    let u = minDistance(dist, sptSet);

    // Mark the picked vertex as processed
    sptSet[u] = true;

    // Update dist value of the adjacent
    // vertices of the picked vertex.
    for (let v = 0; v < V; v++) {
      // Update dist[v] only if is not in
      // sptSet, there is an edge from u
      // to v, and total weight of path
      // from src to v through u is smaller
      // than current value of dist[v]
      if (
        !sptSet[v] &&
        graph[u][v] !== 0 &&
        dist[u] !== Number.MAX_VALUE &&
        dist[u] + graph[u][v] < dist[v]
      ) {
        dist[v] = dist[u] + graph[u][v];

        tempStep = {
          currentId: u + 1,
          updateId: v + 1,
          updateTo: dist[v],
        };

        stepsArray.push(tempStep);
      }
    }
  }
}

const Algorithm = (graph) => {
  dijkstra(graph, 0);

  return stepsArray;
};

export default Algorithm;
export const hMultiplier = 0.7;

export const distance = (x1, y1, x2, y2) => {
  const xDist = x2 - x1;
  const yDist = y2 - y1;

  return (Math.floor(Math.sqrt(xDist * xDist + yDist * yDist) / 20) % 15) + 1;
};

export const nodeDistance = (firstNode, secondNode) => {
 
  return distance(firstNode.x, firstNode.y, secondNode.x, secondNode.y);
};

export const midPoint = (a, b) => {
  return (a + b) / 2;
};

export const initialNodeCosts = [
  {
    name: "A",
    id: 1,
    cost: 0,
  },
  {
    name: "B",
    id: 2,
    cost: 9999,
  },
  {
    name: "C",
    id: 3,
    cost: 9999,
  },
  {
    name: "D",
    id: 4,
    cost: 9999,
  },
  {
    name: "E",
    id: 5,
    cost: 9999,
  },
  {
    name: "F",
    id: 6,
    cost: 9999,
  },
  {
    name: "G",
    id: 7,
    cost: 9999,
  },
];
