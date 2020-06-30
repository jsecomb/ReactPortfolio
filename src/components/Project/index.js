import React from "react";
import "./style.css";

function Project() {
  return (
    <div className="container"> 
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-4">
          <div className="textContainer">
            <a href="https://the-bestimator.herokuapp.com/" className="portfolioLink">Bestimator</a>
            <br/><br/> 
            <p>Bestimator is a full stack quiz game that allows players to estimate physical values from images and
              compete on a leaderboard. Users can create an account with a unique username and password, play five questions daily, instantly see the rank and accuracy of their estimates, improve their scores to climb the leaderboard, and compete with others to see who is the BESTimator! App uses Sequelize, Node, Handlebars, Passport and is written using the MVC (model, view, controller) template.</p>
              <a href="https://github.com/jsecomb/Bestimator" className="githubLink"> Bestimator Github Repository</a>
          </div>
        </div>
        <div className="col-sm-12 col-md-8">
          <a href="https://the-bestimator.herokuapp.com/">
            <img className="img-fluid bioImage" src="https://i.imgur.com/smgkQev.png?2" alt="Bestimator App"></img>
          </a>
        </div>    
      </div>
    </div>
  );
}

export default Project;
