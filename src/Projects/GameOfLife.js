import React, { useState, useRef, useEffect } from 'react';
import produce from 'immer';   //immutable grid object
 
import '../App.css';

//Ben Awad tutorial
//Here, I learned the difference between mutable and immutable objects and how to use "immer"
//https://www.youtube.com/watch?v=DvVt11mPuM0

const ROWS = 10;
const COLUMNS = 15;

const operations = [
  [0,-1], [0,1], [-1,0], [1,0], [1,1], [-1,-1], [-1,1], [1,-1]
];


function GameOfLife() {
 

  const [grid,setGrid] = useState(() => {return createRandomGrid();});

  let gridRef = useRef();
  gridRef.current = grid;


  function updateGrid(i,j){
        let newGrid = createNewGrid(  gridRef.current , i,j);
        setGrid(newGrid);
  }
     

  function animate () {
        let update = checkNeighbors(gridRef.current);
        setGrid(update);
  }

 let intervalRef = useRef();

useEffect(() => {
        //Loop
        let interval = setInterval(() => {
          animate();
        }, 750);
        intervalRef.current = interval;
},[]);

useEffect(() => {
   
        return () => {
      clearInterval(intervalRef.current);
        }

},[]); // I was getting an error when accessesing a different route


  return (
    <> 
      <div>
      <h1>Conway's Game of Life</h1>
              <div style = {{color: "NavajoWhite"}}>
              
                      <ul style = {{listStyle: "none", textAlign: "left", fontSize: "1.75rem"}}>
  
                       <li style = {{color: "#ff5100"}}>Rules: </li>   
                        <li>Any live cell with two or three live neighbors survives.</li>   
                        <li>Any dead cell with three live neighbors becomes a live cell.</li>   
                        <li>All other live cells die in the next generation. Similarly, all other dead cells stay dead.</li>
 
                       </ul>
              </div>

        </div>



      <div className ="btn"> 
              <button onClick = {() => {
                setGrid(  createRandomGrid() );
              }}>Restart</button>
      </div>

   {/* Here is the Grid */}
    <div className = "gol-grid-container">
              <div style  = {{
                display: "grid",
                gridTemplateColumns: `repeat(${COLUMNS},60px)`
              }}
          >
        {/* This creates the individual boxes */}
            {grid.map((row, i) =>  (
                
                      row.map((colo,j) => (
                        
                      <div key = {i-j}
                      style = {{
                        width: 60,
                        height: 60,
                        backgroundColor: grid[i][j] ? "#7FFFD4" : undefined,
                        border: "solid 1px sienna"
                      }}
                      onClick = {(e) => {         
                      updateGrid(i,j);
                      }}

                    >

                  </div>))))
              }

          </div>
          


    </div>
       
        
      <div style = {{color: "NavajoWhite"}}>
              
              <ul style = {{listStyle: "none", textAlign: "left", fontSize: "1.75rem"}}>
                <li> You can find more info   <a className = "link" href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank"  rel = "noopener noreferrer">here</a>. </li>
                <li> I used <a className = "link" href="https://www.youtube.com/watch?v=DvVt11mPuM0" target="_blank" rel = "noopener noreferrer"> this tutorial</a>  by Ben Awad.</li>

              </ul>
      </div>

    </> 


  );
}

export default GameOfLife;




// Grid 
function createRandomGrid() {
   
  let rowsArr = [];
 
 
  for(let i = 0; i < ROWS; i++){
           rowsArr.push(Array.from(Array(COLUMNS), () => {
             if(Math.random() < .5){
                 return 0;
             }else{
               return 1;
             }
           }));
  }
  return rowsArr;
 }




 
 function createNewGrid(prevGrid,i,j) {

  //We pass our current 'grid'. We can change the gridDraft anyway we want
  // immer 'produce' takes care of producing immutable grid 
   let newGrid = produce(prevGrid, gridDraft => {
     
     gridDraft[i][j] = gridDraft[i][j] ? 0:1;
 
   }); 
   
   return newGrid;
  }
 
 
 function checkNeighbors(grid){
 
   
     let nextGen = produce(grid, gridCopy => {
         for(let i = 0; i < ROWS; i++){
           for(let j = 0; j < COLUMNS; j++){
    //Neighbor computation
                   let aliveNeighbors = 0;
                   operations.forEach(([x,y]) => {
                             const  newI = i +x;
                             const newJ = j+y;
                               if(newI >= 0 && newJ >= 0 && newI < ROWS && newJ < COLUMNS){
                                     aliveNeighbors = aliveNeighbors + grid[newI][newJ];
                               }
 
                   } );
                   if(aliveNeighbors<2 || aliveNeighbors>3){
                //Neighbors Die
                     gridCopy[i][j] = 0;
                 }else if (grid[i][j]===0 && aliveNeighbors ===3){
                //Neighbors Resurect 
                   gridCopy[i][j]=1;
                 }
 
           }
     }
       });
    
 return nextGen;
 }