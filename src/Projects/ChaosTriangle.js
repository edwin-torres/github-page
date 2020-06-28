import React, { useRef, useEffect} from 'react';
 
import '../App.css';

function Chaos() {

  useEffect(() => {
    //requestRef.current = requestAnimationFrame(draw);
    return () => {
      
      clearInterval(intervalRef.current);
    }
  }); // I was getting an error when accessesing a different route


    


let canvas = useRef(); 



const play = () => {
              
                      let ctx = canvas.current.getContext("2d");

        
                                            
                    canvas.current.width = window.innerWidth;
                    canvas.current.height = .80*window.innerHeight;
                    
                  
                    /////////Three Vertices//////
                    let point1 = {
                        x: canvas.current.width/2,
                        y: canvas.current.height/10
                    }
                    let point2= {
                        x: canvas.current.width/2-(6*canvas.current.height/10)/(Math.sqrt(3)),
                        y: 7*canvas.current.height/10
                    }
                    let point3 = {
                        x: canvas.current.width/2+(6*canvas.current.height/10)/(Math.sqrt(3)),
                        y: 7*canvas.current.height/10
                    }
                    let pointArr = [point1,point2,point3];
    




                    ///////////Triangle//////////////
                    ctx.beginPath();
                    ctx.moveTo(point1.x,point1.y);
                    ctx.lineTo(point2.x,point2.y);
                    ctx.lineTo(point3.x,point3.y);
                    ctx.closePath();
                    ctx.strokeStyle = "#ff5100";
                    ctx.lineWidth = 5;
                    ctx.stroke();
                    ctx.closePath();               

                    //////Points/////////
                    function drawCircle(x,y){
                        ctx.beginPath();
                        ctx.arc(x, y,4, 0, 2 * Math.PI);
                        ctx.fillStyle = 'white';
                        ctx.fill();
                    }

                function drawRandomPoint(){

                    let heightOfTriagle = point2.y - point1.y;
                    let H = Math.random()*heightOfTriagle;
                    let newY = point1.y + H;
                    let h = newY - point1.y;
                    let newX = point3.x * Math.random();

                    while(newX<(point1.x-h/(Math.sqrt(3))) || newX>(point1.x+h/(Math.sqrt(3))) ){
                        newX = point3.x * Math.random();
                    }
                
                    drawCircle(newX,newY);
                    
                    return [newX,newY]
            }

            function pickRandomVertex(){
                let vertex = pointArr[Math.floor(Math.random()*pointArr.length)];
                return vertex;
            }
       
            function  MidPoint(x1,y1,x2,y2) {
                                let firstX = x1;
                                let firstY = y1;
                                let secondX = x2;
                                let secondY = y2;

                                return [(firstX+secondX)/2,(firstY+secondY)/2];
            }
            
            let flag = 0;
            let drawArray = [];//Points insdie Triangle

            function simulation(firstPoint){
                    
                    ///////////pushing to draw array///////////////
                    drawArray.push(firstPoint);
                    let x1= firstPoint[0];
                    let y1 = firstPoint[1];

                    let vertex = pickRandomVertex();         
                    let x2 = vertex.x;
                    let y2 = vertex.y;

                    let newPoint =  MidPoint(x1,y1,x2,y2);
                    drawArray.push(newPoint);
                   
            
                        while(flag !== 3500){
                        flag++;
                        simulation(newPoint);
                     }       
            }

            let pointInside = drawRandomPoint();
            simulation(pointInside);

            let index = 0;

            ////////Draw Points/////////
            let interval = setInterval(function(){

            drawCircle(drawArray[index][0], drawArray[index][1]);
            index = index + 2;//points repeat
            console.log("Hello");

            if (index > 3500) {
               
                 clearInterval(interval);
            }

            },25);
            intervalRef.current = interval;
}
let intervalRef = useRef(null);
function stop(){
  clearInterval(intervalRef.current);
}
  return (
      
        <div>
        <div>
            <h1>Chaos Game</h1>
            <div className ="btn">
            <button onClick = {() => {
                play();
             
            }} >Start Chaos</button>
              <button onClick = {() => {
                stop();
             
            }} >Stop</button>

        </div>


        </div>
  

        <div style = {{color: "NavajoWhite"}}>
              
              <ul style = {{listStyle: "none", textAlign: "left", fontSize: "1.75rem"}}>
                <li> I made this after watching <a className = "link" href="https://www.youtube.com/watch?v=IGlGvSXkRGI" target="_blank"  rel = "noopener noreferrer"> this video</a>.</li>
                <li> You can find more information here: <a className = "link" href="https://en.wikipedia.org/wiki/Chaos_game" target="_blank" rel = "noopener noreferrer"> Chaos game</a>. </li>
              </ul>
        </div>
 
        

      <canvas
        style={{
          size: "100%",
          border: "10px solid black",
        }}
        ref={canvas}
        width= "1"
        height= "1"
      />
  
    </div>
 
  );
}

export default Chaos;


 