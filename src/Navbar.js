import React from 'react';

export class Navbar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return  (
            <div id="navbar" className="flex">
                <ul id="navigation-links">
                    <li className="nav-text"><a className="nav-link" href="#home">Home</a></li>
                    <li className="nav-text"><a className="nav-link" href="#about-me">About Me</a></li>
                    <li className="nav-text"><a className="nav-link" href="#projects">Projects</a></li>
                    <li className="nav-text"><a className="nav-link" href="#contact">Contact</a></li>
                </ul>
            </div>
        )
    }
}