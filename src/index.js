import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import State from './State';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom'
const states = ['Texas', 'Colorado', 'Georgia']

ReactDOM.render(
  <Router>
    <Route exact path= '/' render= {props => (<App states={states}/>)}/>
    <Route path='/:state' component= {State} />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
