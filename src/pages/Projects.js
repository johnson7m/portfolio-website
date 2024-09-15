import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, Modal } from 'react-bootstrap';
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


export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleShowModal = (project) => {
      setSelectedProject(project);
    };
  
    const handleCloseModal = () => {
      setSelectedProject(null);
    };


    const projectList = [
      { title: "JavaScript Calculator", description: "A simple calculator built with JavaScript", link: "https://main--aether-javascript-calculator.netlify.app/", image: project1 },
      { title: "Markdown Previewer", description: "A real-time markdown preview app", link: "https://main.d255j9osh5go8e.amplifyapp.com/", image: project4},
      { title: "Random Quote Machine", description: "Generates random quotes using an API", link: "https://main--aether-quote-machine.netlify.app/", image: project7 },
      { title: "25 + 5 Clock", description: "Workflow timer", link: "https://main.d22e538so853bt.amplifyapp.com/", image: project10 },
      { title: "Drum Machine", description: "Virtual drum machine", link: "https://main.d38e5uoqphku8l.amplifyapp.com/", image: project13 },
      { title: "Pokemon Search Index", description: "Pokemon Search App using Vanilla JS", link: "https://aether-pokemon-search.netlify.app", image: project2 },
      { title: "Cash Register", description: "Cash Register Emmulator", link: "https://aether-cash-register.netlify.app/", image: project5 },
      { title: "Phone Number Validator", description: "Phone number validation", link: "https://main--aether-phone-validator.netlify.app/", image: project8 },
      { title: "Palindrome Checker", description: "Palindrome checker", link: "https://aether-palindrome-checker.netlify.app/", image: project11 },
      { title: "Roman Numeral Converter", description: "Converts roman numerals to actual numbers", link: "https://aether-roman-numeral-converter.netlify.app/", image: project14 },
      { title: "Product Landing Page", description: "Mock product page", link: "https://aether-product-landing-page.netlify.app/" , image: project3 },
      { title: "Technical Documents", description: "Technical Documents", link: "https://main--aether-tech-docs.netlify.app/", image: project6 },
      { title: "Tribute Page", description: "Tribute page dedicated to a Magic card", link: "https://main--aether-tribute-page.netlify.app/", image: project9 },
      { title: "Mock Business Page", description: "Business page mock up", link: "https://coalition-technologies-skills-test.netlify.app/#section1", image: project12 },
      { title: "Survey Form", description: "Fun survey form project", link: "https://aether-survey.netlify.app/", image: project15 },
      // Add more projects here
    ];
  
    return (
      <Container id="main-content" className="my-5">
        <h1 className="text-center mb-4">My Projects</h1>
        <Row className='justify-content-center'>
          {projectList.map((project, index) => (
            <Col key={index} sm={12} md={6} lg={4} className="d-flex align-items-stretch">
              <Card className="mb-4 card-hover" onClick={() => handleShowModal(project)}>
                <Card.Img variant="top" src={project.image} alt={project.title} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {selectedProject && (
            <Modal show={true} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedProject.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{selectedProject.description}</p>
                    <Button variant="primary" href={selectedProject.link}>Visit Project</Button>
                </Modal.Body>
            </Modal>
        )}
      </Container>
    );
  };
