import React from 'react';
import headshot1 from './assets/headshot1.jpg'
import headshot2 from './assets/headshot2.png'

export class Home extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return( 
            <div id="home">
                <h1>My Portfolio</h1>
                <div className="home-grid">
                    <img className="home-div1 home-item" src={headshot2}></img>
                    <img className='home-div2 home-item' src={headshot1}></img>
                </div>
            </div>
        )
    }
}