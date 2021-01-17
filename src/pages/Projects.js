import React, { useState } from "react";
import BudgetTracker from "../components/BudgetTracker";
import WeatherDisplay from "../components/DeathStranding/index"
import FuelFinder from "../components/FuelFinder";
import BikiniBeach from "../components/Game";
import Header from "../components/Header/index";

const Projects = () => {

  const [runnerGame] = useState({
    title: "RunnerGame",
    repo: "https://github.com/Mrcaspento/Runner-Game",
    deployed: "https://dashboard.heroku.com/apps/blooming-spire-21723",
    info: "A  simiple PIXI.js game with collison and movement, that has a score that is saved in a mySql db for each user. The user has to login in or sign up to play first",
    target: "_blank"
  });
  const [offlineBudgeting] = useState({
    title: "OfflineBudgeting",
    repo: "https://github.com/Mrcaspento/OfflineBudgeting",
    deployed: "https://calm-castle-37595.herokuapp.com/",
    info: "first introduction into local storage and dynamically creating divs, this day planner saves notes and also takes in account the current time and date to help highlight task's that are either in the future,past, or present.",
    target: "_blank"
  });
  const [weatherApp] = useState({
    title: "DeathStrandingWeather",
    repo: "https://github.com/Mrcaspento/DeathStrandingWeather",
    deployed: "https://mrcaspento.github.io/DeathStrandingWeather",
    info: "A weather app that can be used to search any city in the world and check the weather and the weather for the next 15 hours. My first introduction in to API's.",
    target: "_blank"
  });
  const [fuelFinder] = useState({
    title: "FuelFinder",
    repo: "https://github.com/grantf12/Alternative_Fuel_Finder",
    deployed: "https://grantf12.github.io/Alternative_Fuel_Finder/",
    info: "A website tool to find the nearest gas , and Ev charging station that uses your location to create a location radius that you choose. Then Api will return results for the given location as well as a Map in a modal. Inside the modal users can scroll the results and find the detailed info they need. On a seperate tab users can see the traffic and construction that may impede the route to his/her/non-binary endpoint. ",
    target: "_blank"
  });


  return (
    <>
      <Header />
      <div>
        <div className="container-fluid bg-secondary">
          <h1 className=" h1 row justify-content-md-center text-white font-weight-bolder bg-transparent">Portfolio</h1>
        </div>
        <div className="row justify-content-md-center">
          <div className="row justify-content-md-center">
            <div className="col">
              <div className="card" id="" style={{ width: 640, height: 540 }}>
                <FuelFinder className="col" />
                <div className="card-body" id="fuelTitle">
                <h4 className="card-title">{fuelFinder.title}</h4>
                  <p className="card-text text-justify">{fuelFinder.info}</p>
                  <div className="cardButtons">
                    <a href={fuelFinder.repo} target={fuelFinder.target} className=" btn cardbtn btn-dark">GitHub Repo</a>
                    <a href={fuelFinder.deployed} target={fuelFinder.target} className="btn cardbtn btn-primary">App Deployed</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card bg-light" style={{ width: 700, hieght: 500 }}>
                <BudgetTracker />
                <div className="card-body">
                  <p className="card-text text-justify">{offlineBudgeting.info}</p>
                  <div className="cardButtons">
                    <a href={offlineBudgeting.repo}  target={offlineBudgeting.target} className="btn btn-dark">GitHub Repo</a>
                    <a href={offlineBudgeting.deployed}  target={offlineBudgeting.target} className="btn btn-primary">App Deployed</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card bg-light" style={{ width: 643, hieght: 500 }}>
                <BikiniBeach />
                <div className="card-body">
                  <p className="card-text text-justify">{runnerGame.info}</p>
                  <div className="cardButtons">
                    <a href={runnerGame.repo}  target={runnerGame.target} className="btn btn-dark">GitHub Repo</a>
                    <a href={runnerGame.deployed}   target={runnerGame.target} className="btn btn-primary">App Deployed</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card bg-light" style={{ width: 642, hieght: 500 }}>
                <WeatherDisplay />
                <div className="card-body">
                  <p className="card-text text-justify">{weatherApp.info}</p>
                  <div className="cardButtons">
                    <a href={weatherApp.repo}  target={weatherApp.target} className="btn btn-dark">GitHub Repo</a>
                    <a href={weatherApp.deployed}  target={weatherApp.target}className="btn btn-primary">App Deployed</a>
                  </div>
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