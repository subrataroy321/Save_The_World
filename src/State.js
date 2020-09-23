import React from 'react';
import './App.css';
// import {Link} from 'react-router-dom'

function State(props){
    console.log(props.location.state.nonprofits)
    return(
        <div>
            <h1>This is our nav bar</h1>

           <h1>{props.location.state.name}</h1>
            <p>{props.location.state.info}</p>
            <h1>Here are some actions you can take</h1>
            
            <ul>
                {props.location.state.actions  
                    ? props.location.state.actions.map(action =>{
                        return <li>{action}</li>})
                        : <p>Coming Soon...</p>}
            </ul>
            
            <h1>Where you can donate</h1>
            
            <ul>
            {props.location.state.nonprofits 
                    ? props.location.state.nonprofits.map(org =>{
                        return <li><a href = {org.website} target="_blank">{org.name}</a></li>})
                        : <p>Coming Soon...</p>}
            </ul>
            
            <h1>Volunteer</h1>
            
            <ul>
            {props.location.state.volunteer 
                    ? props.location.state.volunteer.map(day =>{
                        return <li>{day}</li>})
                        : <p>Coming Soon...</p>}
            </ul>
        
            <h1>Local Initiatives</h1>
            <ul>
            {props.location.state.localPrograms 
                    ? props.location.state.localPrograms.map((program, i) =>{
                        return <li key={i}><a href = {program.website} target="_blank" rel="noopener noreferrer">{program.name}</a></li>})
                        : <p>Coming Soon...</p>}
            </ul>
        </div>

    )


}


export default State