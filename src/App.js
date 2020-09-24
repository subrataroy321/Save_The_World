import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import './State';

function App(props) {
  return (
    <div className='App'>
      <div>
        <h2>About Us</h2>
        <p>Here to help you help us save the world.</p>
        <p>With each day presents new challenges to our environment, making the impact of climate change felt around the globe. While solutions are needed at every level to produce a permanent response, Save The World provides an opportunity to connect with the organizations in your state working towards local solutions. We hope you'll join us to be informed, make a difference, and support others in their work. For us, for our future.</p>
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
