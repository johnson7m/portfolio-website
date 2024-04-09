import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import { Navbar } from './pages/Navbar'
import { About } from './pages/About'
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';

class App extends React.Component {
constructor(props){
  super(props)
  
}


render() {
  return (
    <div id="container">
      <Navbar></Navbar>
      <div className="flex-parent">
        <Home></Home>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
      </div>
    </div>
  )
}
}

export default App;
