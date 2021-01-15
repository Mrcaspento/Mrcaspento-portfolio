import React from "react";


const Projects = () => {
  
    return(
  <>
 <div>
    <h1>Projects Page</h1>
    <div className="container-fluid bg-secondary">
    <h1 className=" h1 row justify-content-md-center text-white font-weight-bolder bg-transparent">Portfolio</h1>
  </div>
  
    <div className="row justify-content-md-center">
      <div className="row justify-content-md-center">
        <div className="col">
          <div className="card" style={{width: 300, height: 800 }}>
            <img src="../assets/images/Fuelfinder.gif" className="card-img-top img-fluid" alt="Fuel Finder" />
            <div className="card-body">
              <p className="card-text text-justify">A website tool to find the nearest gas , and Ev charging station that
                uses your location to create a location radius that you choose. Then Api will return results for the
                given location as well as a Map in a modal. Inside the modal users can scroll the results and find the
                detailed info they need. On a seperate tab users can see the traffic and construction that may impede
                the route to his/her/non-binary endpoint.</p> Deployed website in action <a
                href="https://grantf12.github.io/Alternative_Fuel_Finder/index.html"> Fuel Finder</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card bg-light" style={{width: 30 }}>
            <img src="../Deployed_Apps/Meme Day Scheduler.gif" className="card-img-top" alt="Day planner" />
            <div className="card-body">
              <p className="card-text text-justify">First introduction into local storage and dynamically creating divs, this day planner saves notes and also takes in account the current time and date to help highlight task's that are either in the future,past, or present.</p>Deployed website in action <a
                href="https://mrcaspento.github.io/PotatoManagment"> Day Planner</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-md-center">
        <div className="col justify-content-md-center">
          <div className="card" style={{width: 30}}>
            <img src="../Deployed_Apps/Weather.gif" className="card-img-top" alt="Weather app" />
            <div className="card-body">
              <p className="card-text">A weather app that can be used to search any city in the world and check the weather and the weather for the next 15 hours. My first introduction in to API's.</p>Deployed website in action <a
                href="https://mrcaspento.github.io/DeathStrandingWeather"> WeatherDashboard</a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card" style={{width: 30}}>
            <img src="../Deployed_Apps/Quiz.gif" className="card-img-top" alt="Quiz" />
            <div className="card-body">
              <p className="card-text">The quiz is dynamically created with javascript, I have a for loop that populates the
                questions and choices, as well as a loop for the questions and answers to be random each time its
                played,
                and after every time the user clicks next question.</p>Deployed website in action <a
                href="https://mrcaspento.github.io/NoHope/index.html">Json Quiz</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
);
  }

export default Projects;