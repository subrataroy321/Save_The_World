import React from 'react';
import './Header.css'
import logo from './assets/logo.png'

const Header = () => {
    return (
        <header>
            <div className="logo-image">
                <a href="/"><img src={logo} alt="logo"/></a>
            </div>
            <nav>
                <div class="nav-wrapper">
                <ul id="nav-mobile" class="left hide-on-med-and-down">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header

