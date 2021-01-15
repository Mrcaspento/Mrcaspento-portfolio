import React from "react";
import Hello from '../../assets/images/Hello-there.gif'
import Profile from '../../assets/images/Profile.jpg'
import './style.css'


const CardImage =() => {

    return (
      <>
    <div>
      <img src={Hello} alt="obiwon" id="Jedi" />
    </div>
    <div>
      <img  src={Profile} alt="me" id="BeachMe" />
    </div>
    </>
  );
}

export default CardImage;