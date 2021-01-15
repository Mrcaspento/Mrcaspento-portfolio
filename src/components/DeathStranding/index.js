import React from "react";
import Weather from "../../assets/images/Weather.gif"


const WeatherDisplay =() => {

    return (
      <>
    <div>
      <img src={Weather} alt="Weather" className="card-img-top-img-fluid" />
    </div>
    
    </>
  );
}

export default WeatherDisplay;