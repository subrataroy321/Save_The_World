import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import './State';
import usMap from './assets/us-map.png'

function App(props) {
  return (
    <div className='App'>
      <div>
        <br/>
        <br/>
        <br/>
        <p>Here to help you help us save the world.</p>
        <h2>Select Your State</h2>
        <div className="allStatesDiv">
          {props.states.map((state, i) => {
            return (
              <Link key={i} to={{pathname: `/${state.name}`, state: state}}>
                {
                !state.map_image_url
                ?
                <div className="stateDiv" style={{ backgroundImage: `url(${usMap})`}}>
                  {state.name}
                </div>
                :
                <div className="stateDiv" style={{ backgroundImage: `url(${state.map_image_url})`}}>
                  {state.name}
                </div>
                }
              </Link>
              )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
