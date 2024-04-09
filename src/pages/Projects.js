import React from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';
import project6 from '../assets/project6.png';
import project7 from '../assets/project7.png';
import project8 from '../assets/project8.png';
import project9 from '../assets/project9.png';
import project10 from '../assets/project10.png';
import project11 from '../assets/project11.png';
import project12 from '../assets/project12.png';
import project13 from '../assets/project13.png';
import project14 from '../assets/project14.png';
import project15 from '../assets/project15.png';


export class Projects extends React.Component {
    constructor(props) {
        super(props)
    }

    
    render() {
        return(
            <section id="projects" className="underline" style={{paddingBottom: '1rem'}}>
                <h1>Projects</h1>
                <p>Here is a grid to select which projects you'd like to learn more about. My favorite projects to make were the Cash Register and the Pokemon Search Index.</p>
                <div id="project-grid" className="parent">
                    <div className="div1 grid-item">
                        <p className="project-header">JavaScript Calculator (React)</p>
                        <a href="https://main.d14qa50mipb5gx.amplifyapp.com/" target="_blank" rel="noreferrer">
                            <img className="project-image" src={project1}></img>
                        </a>
                    </div>
                    <div className="div13 grid-item">
                        <p className="project-header">Drum Machine (React)</p>
                        <a href="https://main.d38e5uoqphku8l.amplifyapp.com/" target='_blank'rel="noreferrer">
                            <img className="project-image" src={project13}></img>
                        </a>
                    </div>
                    <div className="div10 grid-item">
                        <p className="project-header">25 + 5 Clock (React)</p>
                        <a href="https://main.d22e538so853bt.amplifyapp.com/" target='_blank'rel="noreferrer">
                            <img className='project-image' src={project10}></img>
                        </a>
                    </div>
                    <div className="div4 grid-item">
                        <p className="project-header">Markdown Previewer (React)</p>
                        <a href="https://main.d255j9osh5go8e.amplifyapp.com/" target="_blank" rel="noreferrer">
                            <img className="project-image" src={project4}></img>
                        </a>
                    </div>
                    <div className="div7 grid-item">
                        <p className="project-header">Random Quote Machine (React)</p>
                        <a href="https://main--aether-quote-machine.netlify.app/" target="_blank" rel="noreferrer">
                            <img className="project-image" src={project7}></img>
                        </a>
                    </div>
                    <div className="div2 grid-item">
                        <p className="project-header">Pokemon Search Index (Vanilla JS)</p>
                        <a href="https://aether-pokemon-search.netlify.app/" target="_blank" rel="noreferrer">
                            <img className="project-image" src={project2}></img>
                        </a>
                    </div>
                    <div className="div5 grid-item">
                        <p className="project-header">Cash Register (Vanilla JS)</p>
                        <a href='https://aether-cash-register.netlify.app/' target="_blank" rel="noreferrer">
                            <img className="project-image" src={project5}></img>
                        </a>
                    </div>
                    <div className="div8 grid-item">
                        <p className="project-header">Phone Number Validator (Vanilla JS)</p>
                        <a href="https://main--aether-phone-validator.netlify.app/" target="_blank" rel="noreferrer">
                            <img className="project-image" src={project8}></img>
                        </a>
                    </div>
                    <div className="div14 grid-item">
                        <p className='project-header'>Roman Numeral Converter (Vanilla JS)</p>
                        <a href="https://aether-roman-numeral-converter.netlify.app/" target="_blank" rel="noreferrer">
                            <img className="project-image" src={project14}></img>
                        </a>
                    </div>
                    <div className="div11 grid-item">
                        <p className='project-header'>Palindrome Checker (Vanilla JS)</p>
                        <a href="https://aether-palindrome-checker.netlify.app/" target="_blank" rel="noreferrer">
                            <img className="project-image" src={project11}></img>
                        </a>
                    </div>
                    <div className="div12 grid-item">
                        <p className='project-header'>Portfolio Page (the one you're currently browsing)</p>
                        <a href="https://github.com/johnson7m/portfolio-website" target="_blank" rel="noreferrer">
                            <img className='project-image' src={project12}></img>
                        </a>
                    </div>
                    <div className="div3 grid-item">
                        <p className='project-header'>Product Landing Page (HTML5/CSS)</p>
                        <a href="https://aether-product-landing-page.netlify.app/" target="_blank" rel="noreferrer">
                            <img className="project-image" src={project3}></img>
                        </a>
                    </div>
                    <div className="div6 grid-item">
                        <p className='project-header'>Docs Page (HTML5/CSS)</p>
                        <a href="https://main--aether-tech-docs.netlify.app/" target="_blank" rel="noreferrer">
                            <img className="project-image" src={project6}></img>
                        </a>
                    </div>
                    <div className="div9 grid-item">
                        <p className='project-header'>Tribute Page (HTML5/CSS)</p>
                        <a href="https://main--aether-tribute-page.netlify.app/" target='_blank' rel="noreferrer">
                            <img className="project-image" src={project9}></img>
                        </a>
                    </div>
                    <div className="div15 grid-item">
                        <p className='project-header'>Survey Form (HTML5/CSS)</p>
                        <a href="https://aether-survey.netlify.app/" target="_blank" rel="noreferrer">
                            <img className='project-image' src={project15}></img>
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}