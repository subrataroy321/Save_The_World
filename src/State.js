import React from 'react';
import './App.css';
// import {Link} from 'react-router-dom'

function State(props){
    console.log(props)
    return(
        <div>
            <h1>This is our nav bar</h1>

           <h1>{props.location.state}</h1>

        </div>

    )


}


export default State