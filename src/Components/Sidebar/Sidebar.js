import React, { Component } from "react";
import "./Sidebar.css";
import Buttons from "./Buttons/Buttons";
class Sidebar extends Component {
  render() {
    return (
      <div id="nav-container">
        <div id="logo-alex">
          <a href="/">
            <img
              src={require("../..//images/newLogo.png").default}
              style={{ cursor: "pointer" }}
              alt="Website logo"
            />
          </a>
        </div>
        <Buttons />
      </div>
    );
  }
}

export default Sidebar;
