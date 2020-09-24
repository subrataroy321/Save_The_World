import React, { useEffect } from "react"
import "./App.css"
import M from "materialize-css"
// import {Link} from 'react-router-dom'
import "./State.css"

function State(props){
    console.log(props.location.state.nonprofits)
    useEffect(() => {
        let elem = document.querySelector(".carousel");
        let instance = M.Carousel.init(elem, {
            //fullWidth: true,
            indicators: true,
            numVisible: 4,
            duration: 1000
            }) 
        instance.next()
        const elems = document.querySelectorAll(".scrollspy");
        M.ScrollSpy.init(elems, { scrollOffset: 250 });
    })

  return (
    <div className="state-container">
      <div className="sspy col hide-on-small-only m3 l2">
        <ul className="section table-of-contents">
          <li>
            <a className="white-text" href="#info">Info</a>
          </li>
          <li>
            <a className="white-text" href="#actions">Actions</a>
          </li>
          <li>
            <a className="white-text" href="#donation">Donations</a>
          </li>
          <li>
            <a className="white-text" href="#volunteer">Volunteer Opportunities</a>
          </li>
        </ul>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
        <div className="carousel">
          <a className="carousel-item" href="#one!">
            <img
              src={props.location.state.landscape_background_url}
              alt="landscape"
            />
          </a>
          <a className="carousel-item" href="#two!">
            <img
              src={props.location.state.skyline_background_url}
              alt="skyline"
            />
          </a>
          <a className="carousel-item" href="#three!">
            <img
              src={props.location.state.landscape_background_url}
              alt="landscape"
            />
          </a>
          <a className="carousel-item" href="#four!">
            <img
              src={props.location.state.skyline_background_url}
              alt="skyline"
            />
          </a>
          <a className="carousel-item" href="#five!">
            <img
              src={props.location.state.landscape_background_url}
              alt="landscape"
            />
          </a>
          <a className="carousel-item" href="#six!">
            <img
              src={props.location.state.skyline_background_url}
              alt="skyline"
            />
          </a>
        </div>
       <div className="state-details">
        <div className="row">
          <div className="col s12 m9 l10">
            <div id="info" className="section scrollspy">
              <h1>{props.location.state.name}</h1>
              <p>{props.location.state.info}</p>
            </div>

            <div id="actions" className="section scrollspy">
              <h3>Here are some actions you can take</h3>

              <ul>
                {props.location.state.actions ? (
                  props.location.state.actions.map((action, i) => {
                    return (
                      <li key={i}>
                        <h4>{action.name}</h4>
                        <p>{action.details}</p>
                      </li>
                    )
                  })
                ) : (
                  <p>Coming Soon...</p>
                )}
              </ul>
            </div>
            <div id="donation" className="section scrollspy">
              <h3>Where you can donate</h3>

              <ul>
                {props.location.state.nonprofits ? (
                  props.location.state.nonprofits.map((org, i) => {
                    return (
                      <li key={i}>
                        <a
                          href={org.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <p>{org.name}</p>
                        </a>
                      </li>
                    )
                  })
                ) : (
                  <p>Coming Soon...</p>
                )}
              </ul>
            </div>
            <div id="volunteer" className="section scrollspy">
              <h3>Volunteer</h3>

              <ul>
                {props.location.state.volunteer ? (
                  props.location.state.volunteer.map((day, i) => {
                    return (
                      <li key={i}>
                        <p>{day}</p>
                      </li>
                    )
                  })
                ) : (
                  <p>Coming Soon...</p>
                )}
              </ul>
            </div>

            <div>
              <h3>Local Initiatives</h3>
              <ul>
                {props.location.state.localPrograms ? (
                  props.location.state.localPrograms.map((program, i) => {
                    return (
                      <li key={i}>
                        <a
                          href={program.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <p>{program.name}</p>
                        </a>
                      </li>
                    )
                  })
                ) : (
                  <p>Coming Soon...</p>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default State
