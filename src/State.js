
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
        const elems = document.querySelectorAll(".scrollspy");
        M.ScrollSpy.init(elems, { scrollOffset: 0 });
    })
    

    return(

        <div>
            
            <div class="col hide-on-small-only m3 l2">
            <ul class="section table-of-contents">
                <li><a href="#info">Info</a></li>
                <li><a href="#actions">Actions</a></li>
                <li><a href="#donation">Donations</a></li>
                <li><a href="#volunteer">Volunteer Opportunities</a></li>
            </ul>
            </div>
        
        <div className="state-details">
            <div className="carousel">
                <a className="carousel-item" href="#one!"><img src={props.location.state.landscape_background_url} alt="landscape" /></a>
                <a className="carousel-item" href="#two!"><img src={props.location.state.skyline_background_url} alt="skyline" /></a>
                <a className="carousel-item" href="#three!"><img src={props.location.state.landscape_background_url} alt="landscape" /></a>
                <a className="carousel-item" href="#four!"><img src={props.location.state.skyline_background_url} alt="skyline" /></a>
                <a className="carousel-item" href="#five!"><img src={props.location.state.landscape_background_url} alt="landscape" /></a>
                <a className="carousel-item" href="#six!"><img src={props.location.state.skyline_background_url} alt="skyline" /></a>
            </div>
        

            <div class="row">
                <div class="col s12 m9 l10">

                    <div id="info" class="section scrollspy">
                        <h1>{props.location.state.name}</h1>
                        <p>{props.location.state.info}</p> 
                    </div>

                    <div id="actions" class="section scrollspy">
                        <h1>Here are some actions you can take</h1>
                
                        <ul>
                            {props.location.state.actions  
                                ? props.location.state.actions.map((action, i) =>{
                                    return <li key={i}>{action}</li>})
                                    : <p>Coming Soon...</p>}
                        </ul>
                    </div>
                    <div id="donation" class="section scrollspy"></div>
                        <h1>Where you can donate</h1>
                    
                        <ul>
                        {props.location.state.nonprofits 
                                ? props.location.state.nonprofits.map((org, i) =>{
                                    return <li key={i}><a href = {org.website} target="_blank" rel="noopener noreferrer">{org.name}</a></li>})
                                    : <p>Coming Soon...</p>}
                        </ul>
                    </div>
                    <div id="volunteer" class="section scrollspy">
                        <h1>Volunteer</h1>
                        
                        <ul>
                        {props.location.state.volunteer 
                                ? props.location.state.volunteer.map((day, i) =>{
                                    return <li key={i}>{day}</li>})
                                    : <p>Coming Soon...</p>}
                        </ul>
                    </div>

                </div>

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


export default State;