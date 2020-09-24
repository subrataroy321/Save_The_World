import React from 'react';
import './State.css';

function State(props){
    console.log(props.location.state.nonprofits)
    return(
        <div className="state-details">
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
        
        </div>

    )


}


export default State