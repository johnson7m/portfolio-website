import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';

export const NavigationBar = () => {
    const [navbarScrolled, setNavbarScrolled] = useState(false);
    const [navbarExpanded, setNavbarExpanded] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setNavbarScrolled(true);
        } else {
            setNavbarScrolled(false);
        }
    };

    // Handle window resize to collapse the navbar on desktop view
    const handleResize = () => {
        if (window.innerWidth >= 992) {
            setNavbarExpanded(false); // Collapse the navbar if in desktop view
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize); // Listen for window resize
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize); // Clean up the resize listener
        };
    }, []);

    return (
        <Navbar 
            expand="lg" 
            fixed="top" 
            expanded={navbarExpanded}
            onToggle={() => setNavbarExpanded(!navbarExpanded)}
            className={`custom-navbar ${(navbarScrolled || navbarExpanded) ? 'scrolled-navbar' : ''}`}>
            <Container>
                <Navbar.Brand 
                    as={Link} 
                    to="/" 
                    className={`navbar-brand ${navbarExpanded ? 'brand-center' : ''}`}>
                    My Portfolio
                </Navbar.Brand>
                <Navbar.Toggle className="custom-toggler" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-center">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
