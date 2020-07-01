import React from "react";
import "./style.css";

function Header() {
  return (
    <div className="jumbotron">
      <div className="nav_container">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="home">About Me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="portfolio">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
