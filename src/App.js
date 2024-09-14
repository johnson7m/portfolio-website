import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; // Ensure useLocation and Router are imported
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { NavigationBar } from './pages/Navbar';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Footer } from './pages/Footer';
import ProjectDetails from './projects/ProjectDetails';
import ProjectApp from './projects/ProjectApp';

const AnimatedRoutes = () => {
  const location = useLocation(); // Get location from useLocation hook inside the Router

  return (
    <TransitionGroup id="main-content">
      <CSSTransition key={location.pathname} timeout={300} classNames="fade">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path='/projects/:projectId' element={<ProjectApp />}/>
          <Route path="/projects/:projectId/details" element={<ProjectDetails/>}/>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

const App = () => {
  return (
    <Router>
      <div id="container">
        <NavigationBar />
        <AnimatedRoutes/>
        <Footer />
      </div>
    </Router>
  );
};


window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

export default App;
