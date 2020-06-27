import React from 'react';
 
import {Link} from 'react-router-dom';
 
import '../App.css';

function Projects() {
    const navStyle = {
        color: 'blue',
        fontSize:'2rem',
        textAlign:'center',
        listStyle:'none'
        
};
  return (
    <div>
      <h1 >Below is my free time</h1>
      <div>
          
      <div className="grid-container">
     
    
  

    <div className = "Card">
 
    <Link style = {navStyle} to = "/projects/breakout">
                            <li >Breakout Game</li>
    </Link>
    </div>

    
    <div className = "Card">
 
    <Link style = {navStyle} to = "/projects/chaos">
                            <li >Chaos</li>
    </Link>
    </div>
    
  
   
     
            
            
            </div>
      </div>
 

     
    </div>
  );
}

export default Projects;