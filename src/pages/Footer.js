import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const Footer = () => {
  return (
    <footer className="text-black mt-5 p-4 text-center">
      <Container>
        <Row>
          <Col>
            <p>&copy; {new Date().getFullYear()} Matthew C. Johnson. All Rights Reserved.</p>
            <p>
              <a href="https://github.com/johnson7m" target="_blank" rel="noopener noreferrer" className="text-black">
                GitHub
              </a>|   
              <a href="https://linkedin.com/in/matthew-johnson-59070628b/" target="_blank" rel="noopener noreferrer" className="text-black ml-3">
                 LinkedIn
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
