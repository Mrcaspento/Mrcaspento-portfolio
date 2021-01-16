import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/index';
import Wrapper from './components/Wrapper/index';
import Footer from './components/Footer/index';
import Header from './components/Header/index';
import Projects from './pages/Projects';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact"
import './App.css';



const App = () => {

const[navPage, setNavPage] = useState('home')

const clickHome = () =>{
  setNavPage('home')
}
const clickProjects = () => {
  setNavPage("projects")
}
const clickContact = () => {
  setNavPage("contact")
}
const clickAbout = () => {
  setNavPage("about")
}

  return (
    <BrowserRouter>
    <Wrapper>
        <Header />
        < NavBar SetHomePage={clickHome}SetAboutPage={clickAbout} SetProjectsPage={clickProjects} SetContactPage={clickContact} />
          {navPage === "home" && < Home />}
          {navPage === "about" && < About />}
          {navPage === "projects" && < Projects />}
          {navPage ==="contact" && < Contact />}
      </Wrapper>
      < Footer />
  </BrowserRouter>
  );
    }

export default App;
