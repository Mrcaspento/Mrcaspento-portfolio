import React from "react";
import Hello from '../../assets/images/Hello-there.gif'

import './style.css'


const CardImage =() => {

    return (
      <>
    <div>
      <img src={Hello} alt="obiwon" id="Jedi" />
    </div>
  
    </>
  );
}

export default CardImage;