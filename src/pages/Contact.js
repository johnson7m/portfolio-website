import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMobilePhone,} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub,} from '@fortawesome/free-brands-svg-icons';
import React from 'react'
import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import { a } from 'framer-motion/client';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // EmailJS ID's
        const serviceID = 'service_zfyswlf';
        const templateID = 'template_30884xd';
        const userID = 'YXSg7WWB0YQ4Kxhpo'

        emailjs.send(serviceID, templateID, formData, userID)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
                setFormData({ name : '', email: '', message: ''});
            })
            .catch((err) => {
                console.error('FAILED...', err);
                alert('Failed to send the message. Please try again.');
            });
    };
        return(
            <Container id="main-content" className="contact-page">
                <h2 className="text-center mb-4">Contact Me</h2>
                <p className='text-center mb-4'>I look forward to working together! Please use this form to contact me.</p>

                <Form onSubmit={handleSubmit} className='contact-form'>
                    <Form.Group controlId="formName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            id="email"
                            placeholder='Enter your email'
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            />
                    </Form.Group>

                    <Form.Group controlId="formMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                            as="textarea"
                            id="message"
                            rows={4}
                            placeholder="Enter your message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            />
                    </Form.Group>
                    
                    <Button variant='primary' type="submit" className='mt-3'>
                        Send message
                    </Button>
                </Form>
                <div  style={{textDecoration: 'none', marginTop: '30px', textAlign: 'center', display: 'flex', justifyContent: 'center'}}>
                    <a style={{color: 'black'}} href="https://www.linkedin.com/in/matthew-johnson-59070628b?trk=people-guest_people_search-card" target='_blank'><FontAwesomeIcon style={{width: '2rem', height: '2rem', padding: '1rem'}}icon={faLinkedin}/></a>
                    <a style={{color: 'black'}} href="mailto: the.aether.dev@proton.me" target="_blank"><FontAwesomeIcon style={{width: '2rem', height: '2rem', padding: '1rem'}}icon={faEnvelope}/></a>
                    <a style={{color: 'black'}} href="https://github.com/johnson7m?tab=repositories"><FontAwesomeIcon style={{width: '2rem', height: '2rem', padding: '1rem'}}icon={faGithub}/></a>
                </div>
            </Container>
        )
}