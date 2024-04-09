import './App.css';
import React from 'react';
import { Navbar } from './Navbar'
import { About } from './About'
import { Projects } from './Projects';
import { Contact } from './Contact';
import { Home } from './Home';

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
