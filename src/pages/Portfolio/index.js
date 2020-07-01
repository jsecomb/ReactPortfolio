import React from "react";
import "./style.css"
import Project from "../../components/Project";

function Portfolio() {

    return(
        <>
        <br/>
        <h1 id="h1">Selected Projects</h1>
        {projects.map(item => (
        <Project project={item} key={item.name}/>)   
        )}
        </>
    )
}

export default Portfolio;

const projects = [
    {
    name: "Bestimator",
    deployedLink: "https://the-bestimator.herokuapp.com/",
    githubLink: "https://github.com/jsecomb/Bestimator",
    screenshot: "https://i.imgur.com/smgkQev.png?2",
    description: "Bestimator is a full stack quiz game that allows players to estimate physical values from images and compete on a leaderboard. Users can create an account with a unique username and password, play five questions daily, instantly see the rank and accuracy of their estimates, improve their scores to climb the leaderboard, and compete with others to see who is the BESTimator! App uses Sequelize, Node, Handlebars, Passport and is written using the MVC (model, view, controller) template."
    },
    {
    name: "RouteWeather",
    deployedLink: "https://jsecomb.github.io/GroupProject1/",
    githubLink: "https://github.com/jsecomb/GroupProject1",
    screenshot: "https://i.imgur.com/0hw70Su.png?2",
    description: "RouteWeather provides weather forecast information at each point along a journey at the time the user is expected to arrive at that point. The user inputs an origin, destination, departure time and a route map is generated showing time-calibrated weather information for positions along the route. This project required coordinating the responses of multiple interconnected APIs (Google Directions, OpenWeather and Google JS Map) and provided experience in the documentation of more complicated APIs among other challenges."
    },
    {
    name: "Budget Tracker",
    deployedLink: "https://infallible-poitras-57d199.netlify.app/",
    githubLink: "https://github.com/jsecomb/Homework18",
    screenshot: "https://i.imgur.com/fZXAOAN.png?1",
    description: "This is a front-end budget tracker app built using React. The user can submit expenses (consisting of an amount($), description, and date) which are then displayed and summed in a table and a line graph below. The project served required me to build React UI components, manage & access component state, and respond to user events. Implementing the line graph also involved learning how to integrate charts.js into React."
    },
    {
    name: "Fitness Tracker",
    deployedLink: "https://sheltered-bastion-09801.herokuapp.com/",
    githubLink: "https://github.com/jsecomb/Homework-17",
    screenshot: "https://i.imgur.com/23ZPSOc.png?1",
    description: "Full-stack fitness tracker App built with node.js utilizing MongoDB. The App allows the user to view, create and track daily workouts. The user inputs the name, type, weight, sets, reps, and duration of each exercise and adds that exercise to a given workout (a workout represents all the exercises done on a day). A stats page shows charts that break down the exercises done each day by duration and total pounds lifted (for resistance exercises). There is also a button that allows the user to clear the database."
    },
    {
    name: "Danger Dogs",
    deployedLink: "https://secret-journey-11983.herokuapp.com/",
    githubLink: "https://github.com/jsecomb/DangerDogs",
    screenshot: "https://i.imgur.com/dbR0IBo.png?2",
    description: "Danger Dogs is an app that lets users input the names of hot dogs they'd like to eat, taste each hot dog, and then throw the hot dog away. It uses MySQL, Node, Express, Handlebars and an ORM to allow the user to add, update, delete and view hot dogs in the database. The app was written using the MVC design pattern."
    },
    {
    name: "WebWeather",
    deployedLink: "https://jsecomb.github.io/Homework6/",
    githubLink: "https://github.com/jsecomb/Homework6",
    screenshot: "https://i.imgur.com/c73J4pr.png?1",
    description: "WebWeather is a weather app that pulls weather data from the Openweather API. When the user enters a location, current weather conditions for that location, as well as a five day forecast are rendered. Each search is also added to a search history section that includes buttons that can be clicked to re-search previously searched locations. The project was a good introduction to click listeners, API calls, converting to/from unix dates, and creating html dynamically with JQuery."
    },
    {
    name: "Obscure Capitals Quiz",
    deployedLink: "https://jsecomb.github.io/Homework4/",
    githubLink: "https://github.com/jsecomb/Homework4",
    screenshot: "https://i.imgur.com/MP0jIoU.png?2",
    description: "This is a timed code quiz with multiple-choice questions. When the user clicks a start button the quiz begins and a countdown timer initializes. If an answer is answered incorrectly, time is subtracted from the clock. When all the questions have been answered or the clock reaches 0, the user is shown their score and is able to save his/her initials. This project was a good introduction to methods, more complex 'if' statements, building a timer function, and storing/retreiving values from local storage."
    },
];

