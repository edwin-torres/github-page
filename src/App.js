import React from 'react';
import Nav from './Nav';
import About from './About';
import Projects from './Projects/Projects';
import Breakout from './Projects/BreakoutGame';
import Chaos from './Projects/ChaosTriangle';
import Bubble from './Projects/Bubble';
import GameOfLife from './Projects/GameOfLife';

import {HashRouter  as Router, Switch, Route, Redirect} from 'react-router-dom';
 
import './App.css';

function App() {
  return (
    <Router >
    <div className = "App">
              <Nav />
      
              <Switch>
              <Redirect
              exact
              from="/"
              to="/home"            
            />
                    <Route path = "/home" exact component = {Home} />
                    <Route path = "/about"  exact component = {About} />
                        <Route path = "/projects" exact component = {Projects} />
                        <Route path = "/projects/breakout" exact component = {Breakout} />
                        <Route path = "/projects/chaos" exact component = {Chaos} />
                        <Route path = "/projects/bubble" exact component = {Bubble} />
                        <Route path = "/projects/gol" exact component = {GameOfLife} />
                  
                   
              </Switch>
    </div>
</Router>
  );
}



const Home = () => (
  <div>
    <div style = {{marginTop:"1.5%"}}>
   
    <img src={process.env.PUBLIC_URL + '/images/Edwin.jpg'} className = "responsive"  alt = "me"/> 
    <p>My names is Edwin.  I'm a <em>Dreamer</em> learning to code. </p>
    <p>I also teach math at Laredo College. </p>

    </div>
  
    </div>

);

export default App;
