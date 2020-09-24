import React from 'react';
import './Header.css'
import logo from './assets/logo.png'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <header>
            <div className="logo-image">
                <a href="/"><img src={logo} alt="logo"/></a>
            </div>
            <nav class="navbar navbar-light bg-info">
                <a class="navbar-brand" href="/">Home</a>
                <a class="navbar-brand" href="/about">About</a>

                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Select State
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            {props.states.map((state, i) => {
                                return (
                                <Link key={i} to={{pathname: `/${state.name}`, state: state}}>
                                    <a class="dropdown-item" >{state.name}</a>
                                </Link>
                                )
                            })}
                        </div>
                    </div>
            </nav>
        </header>
    )
}

export default Header

