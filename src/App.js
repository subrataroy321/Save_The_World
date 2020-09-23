import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import './State';
import logo from './assets/logo.png'



function App(props) {
  return (
    <div className='App'>
      <header>
      <nav>
        <div class="nav-wrapper">
          <ul id="nav-mobile" class="left hide-on-med-and-down">
            <li><a href="/">Home</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
          </ul>
        </div>
      </nav>
      </header>
      <div>
        <div>
          <img className="logo-image" src={logo} alt="logo"/>
        </div>
        <h2>About Us</h2>
        <p>Here to help you help us save the world.</p>
        <h2>Select Your State</h2>
        <div className="allStatesDiv">
          {props.states.map((state, i) => {
            return (
              <Link key={i} to={{pathname: `/${state.name}`, state: state}}>
                <div className="stateDiv" style={{ backgroundImage: `url(https://cdn.civil.services/us-states/maps/${state.name.toLowerCase()}-large.png)`}}>
                  {state.name}
                </div>
              </Link>
              )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
