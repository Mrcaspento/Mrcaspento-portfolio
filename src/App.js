import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Wrapper from './components/Wrapper/index';
import Footer from './components/Footer/index';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import './App.css';

function App() {
  return (
    <Router>
    <div>
      <NavBar />
      <Wrapper>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      </Wrapper>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
