import React from "react"
import "./App.css"
import { Link } from "react-router-dom"
import "./State"
import usMap from "./assets/us-map.png"

function App(props) {
  return (
    <div className="App">
      <div>
        <br />
        <br />
        <br />
        <div className="aboutDiv">
          <p>Here to help you help us save the world.</p>
          <p>
            With each day presents new challenges to our environment, making the
            impact of climate change felt around the globe. While solutions are
            needed at every level to produce a permanent response, Save The
            World provides an opportunity to connect with the organizations in
            your state working towards local solutions. We hope you'll join us
            to be informed, make a difference, and support others in their work.
            For us, for our future.
          </p>
        </div>
        <h2>Select Your State</h2>
        <div className="allStatesDiv">
          {props.states.map((state, i) => {
            return (
              <Link key={i} to={{ pathname: `/${state.name}`, state: state }}>
                {!state.map_image_url ? (
                  <div
                    className="stateDiv"
                    style={{ backgroundImage: `url(${usMap})` }}
                  >
                    {state.name}
                  </div>
                ) : (
                  <div
                    className="stateDiv"
                    style={{ backgroundImage: `url(${state.map_image_url})` }}
                  >
                    {state.name}
                  </div>
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
