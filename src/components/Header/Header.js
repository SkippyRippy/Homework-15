import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header">
    <div className="title">Gotta Catch Them All!</div>
    <div className="scores">
      Score: {props.score} Highscore: {props.highscore}
    </div>
  </div>
);

export default Header;