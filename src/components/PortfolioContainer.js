import React, { Component } from "react";
import NavBar from "./NavBar";
import Home from "../pages/Home";
import About from '../pages/About';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';


class Portfolio extends Component {

state = {
    currentPage: 'Home'
};

handlePageChange = page => {
    this.setState({ currentPage: page});
};

pages = [
    "Home",
    "Projects",
    "About",
    "Contact"
];

renderPage = () => {
    switch(this.state.currentPage) {
        case "Home" :
          return <Home/>;
        case "Projects": 
          return <Projects/>;
        case "About": 
          return <About/>;
        case "Contact": 
          return <Contact/>;
        default:
            return <Home/>;
    }
};
renderPage = () => {
    
}

}