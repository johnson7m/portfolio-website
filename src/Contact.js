import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMobilePhone,} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub,} from '@fortawesome/free-brands-svg-icons';
import React from 'react'

export class Contact extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <section id="contact">
                <h1>Contact</h1>
                <p style={{fontFamily: 'Poppins'}}>I look forward to working together! Please use the links below to contact me</p>
                <div id="footer" style={{textDecoration: 'none', textAlign: 'center', display: 'flex', justifyContent: 'center'}}>
                    <a style={{color: 'white'}} href="https://www.linkedin.com/in/matthew-johnson-59070628b?trk=people-guest_people_search-card" target='_blank'><FontAwesomeIcon style={{width: '2rem', height: '2rem', padding: '1rem'}}icon={faLinkedin}/></a>
                    <a style={{color: 'white'}} href="mailto: the.aether.dev@proton.me" target="_blank"><FontAwesomeIcon style={{width: '2rem', height: '2rem', padding: '1rem'}}icon={faEnvelope}/></a>
                    <a style={{color: 'white'}} href="https://github.com/johnson7m?tab=repositories"><FontAwesomeIcon style={{width: '2rem', height: '2rem', padding: '1rem'}}icon={faGithub}/></a>
                </div>
                <h3>Text/Call Anytime: (812) - 707 - 1086</h3>
            </section>
        )
    }
}