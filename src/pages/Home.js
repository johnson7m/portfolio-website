import React from 'react';
import headshot1 from '../assets/headshot1.jpg'
import headshot2 from '../assets/headshot2.png'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

export const Home = () => {
    const navigate = useNavigate();

    const handleProjectsClick = () => {
        navigate('/projects');


    };

    const isMobile = window.innerWidth < 768;


    return (
        <motion.section
            id="home-section"
            initial={{ opacity: 0, y: 50}}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 0.8}}
        >   <div id="main-content"className='hero'> 
                <h1 className="hero-title fade-in-text">Welcome to the Aether</h1>
                <p className='hero-subtitle'>{isMobile ? 'Explore and collaborate' : 'Stay a while. Take a look around and reach out if you want to collaborate.'}</p>
                <Button variant="primary" onClick={handleProjectsClick}>View Projects</Button>
            </div>
        </motion.section>
    );
};