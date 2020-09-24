
import React, {useEffect} from 'react'
import './App.css'
import M from "materialize-css"
// import {Link} from 'react-router-dom'
import './State.css';


function State(props){
    console.log(props.location.state.nonprofits)
    useEffect(() => {
        let elem = document.querySelector(".carousel");
        console.log(elem)
        let instance = M.Carousel.init(elem, {
            fullWidth: true,
            indicators: true,
            numVisible: 1,
            duration: 10000
            }) 
        instance.next()
    })
    

    return(

        <div>
            <h1>This is our nav bar</h1>
            <div className="carousel">
                <a className="carousel-item" href="#one!"><img src={props.location.state.landscape_background_url} alt="landscape" /></a>
                <a className="carousel-item" href="#two!"><img src={props.location.state.skyline_background_url} alt="skyline" /></a>
                <a className="carousel-item" href="#three!"><img src={props.location.state.landscape_background_url} alt="landscape" /></a>
                <a className="carousel-item" href="#four!"><img src={props.location.state.skyline_background_url} alt="skyline" /></a>
                <a className="carousel-item" href="#five!"><img src={props.location.state.landscape_background_url} alt="landscape" /></a>
                <a className="carousel-item" href="#six!"><img src={props.location.state.skyline_background_url} alt="skyline" /></a>
            </div>

        <div className="state-details">
      
            <h1>{props.location.state.name}</h1>
            <p>{props.location.state.info}</p>
            <h1>Here are some actions you can take</h1>
            
            <ul>
                {props.location.state.actions  
                    ? props.location.state.actions.map((action, i) =>{
                        return <li key={i}>{action}</li>})
                        : <p>Coming Soon...</p>}
            </ul>
            
            <h1>Where you can donate</h1>
            
            <ul>
            {props.location.state.nonprofits 
                    ? props.location.state.nonprofits.map((org, i) =>{
                        return <li key={i}><a href = {org.website} target="_blank" rel="noopener noreferrer">{org.name}</a></li>})
                        : <p>Coming Soon...</p>}
            </ul>
            
            <h1>Volunteer</h1>
            
            <ul>
            {props.location.state.volunteer 
                    ? props.location.state.volunteer.map((day, i) =>{
                        return <li key={i}>{day}</li>})
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