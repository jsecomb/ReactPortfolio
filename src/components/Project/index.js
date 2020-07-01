import React from "react";
import "./style.css";

function Project(props) {
 
  return (
    <div className="container"> 
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-4">
          <div className="textContainer">
            <a href={props.project.deployedLink} className="portfolioLink">{props.project.name}</a>
            <br/><br/> 
            <p>{props.project.description}</p>
              <a href={props.project.githubLink} className="githubLink"> {props.project.name} Github Repository</a>
          </div>
        </div>
        <div className="col-sm-12 col-md-8">
          <a href={props.project.deployedLink}>
            <img className="img-fluid bioImage" src={props.project.screenshot} alt={props.project.name}></img>
          </a>
        </div>    
      </div>
    </div>
  );
}

export default Project;
