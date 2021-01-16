import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  
    return (
      <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
      <div>
          <ul className="navbar-nav">
              <li className="nav-item">
              <Link className={"nav-link active nav-link"} onClick={props.SetAboutHome} > Home</Link>
              </li>
              <li className="nav-item">
                  <Link onClick={props.SetAboutPage} className={"nav-link active nav-link"}>About Me</Link>
              </li>
              <li className="nav-item">
                  <Link onClick={props.SetProjectsPage} className={"nav-link active nav-link"}>Projects</Link>
              </li>
              <li className="nav-item">
                  <Link onClick={props.SetContactPage} className={"nav-link active nav-link"}>Contact me</Link>
              </li>
          </ul>
      </div>
  </nav>
    )
  }


export default NavBar;