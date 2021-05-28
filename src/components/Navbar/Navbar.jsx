import React from 'react';

function Navbar() {
    return (
        <nav>
            <a href="#" className="logo">
                Software Developer
            </a>

            <input className="menu-btn" type="checkbox" />
            <label className="menu-icon" for="menu-btn">
                <span className="nav-icon"></span>
            </label>

            <ul className="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#hobbies">Hobbies</a></li>
                <li><a href="#social">Contact</a></li>
            </ul>
            <a href="https://www.inverse.com/innovation/drone-ballet-to-track-penguins/amp" target="blank" className="Hey">Check out this interesting article!</a>
        </nav>
    )
}

export default Navbar