import React, { useEffect } from "react"
import "./Header.css"
import logo from "./assets/logo.png"
import { Link } from "react-router-dom"
import M from "materialize-css"

const Header = (props) => {
  useEffect(() => {
    let elems = document.querySelectorAll(".dropdown-trigger")
    M.Dropdown.init(elems, { inDuration: 300, outDuration: 225 })
  })

  return (
    <header className="navi">
      <div className="logo-image">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <ul id="dropdown1" className="dropdown-content">
        {props.states.map((state, i) => {
          return (
            <Link key={i} to={{ pathname: `/${state.name}`, state: state }}>
              <li>{state.name}</li>
            </Link>
          )
        })}
      </ul>
      <nav>
        <div className="nav-wrapper cyan lighten-2">
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>

            <li>
              <a className="dropdown-trigger" href="#!" data-target="dropdown1">
                Change State
                <i className="material-icons right">arrow_drop_down</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
