import React, {useState, useEffect} from 'react';
import './style.css'
import {Link} from 'react-router-dom';
import About from '../../pages/About'
import Contact from '../../pages/Contact'
import Projects from '../../pages/Projects'


const NavBar = () => {
    const [click, setClick] =useState(false);
    const [button, setButton ] = useState( true );
    const [tab, setTab] =useState("home"); //by default the page will route to home

//funtion to handle the closing of the nav bar for the mobile
const handleClick = () => {
setClick(!click)
}

const closeMobileMenu = () => {
    setClick(false)
}
const showMenuButton = () => {
    if(window.innerWidth <= 960) {
        setButton(false) //if the screen is less the  it shows the button
    }else{
        setButton(true);
    }
};
useEffect(() => {
    showMenuButton();
})
window.addEventListener('resize', showMenuButton) //adding this for mobile responsive  and demonstration for class 

return(
    <>
      <nav className="navbar">
                <div className="navbar-container">
                    <div to="/" className="navbar-logo ">
                        Caspento<i className=" fas fa-leaf" />
                    </div>
                    
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> {/*Clicks cycle between the mobile menu X and Hamburger menu */}
                    </div>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                    <li className='nav-item'>
                        <Link to="/projects" className="nav-links" onClick={closeMobileMenu}>{tab === 'projects' &&
                        <Projects />}<h4>Projects</h4>
                    </Link>
                    </li>
                    
                    <li className='nav-item'>
                        <Link to="/about" className="nav-links" onClick={closeMobileMenu}>{tab === 'about' &&
                        <About /> } <h4>About</h4>
                    </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>{tab === 'contact' &&
                        <Contact />}<h4>Contact</h4>
                    </Link>
                    </li>
                  
                </ul>
                 {button}   {/*connect this button as a Popper to create event or either    */}
            </nav>
    </>
)


}
export default NavBar;