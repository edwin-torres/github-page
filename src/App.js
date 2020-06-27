import React from 'react';
import Nav from './Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router >
    <div className = "App">
              <Nav />
              <Switch>
                    <Route path = "/" exact component = {Home} />
                  
                  
                   
              </Switch>
    </div>
</Router>
  );
}



const Home = () => (
  <div>
    <div style = {{marginTop:"1.5%"}}>
   
    <p>My names is Edwin.  I'm a <em>Dreamer</em> learning to code. </p>
    <p>I also teach math at Laredo College. </p>

    </div>
  
    </div>

);

export default App;
