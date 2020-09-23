import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'


const states = ['Texas', 'Colorado', 'Georgia']

function App() {
  return (
    <div>
      <header>
        <h1>Save the World!</h1>
      </header>
      <h2>About Us</h2>
      <p>Here to help you help us save the world.</p>
      <h2>States</h2>
      <ul>
        {states.map((state, i) => {
          return <li><Link key={i} to={`/${state}`}>{state}</Link></li>
        })}
      </ul>
    </div>
  );
}

export default App;
