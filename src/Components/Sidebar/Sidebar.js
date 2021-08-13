import React, { Component } from "react";
import "./Sidebar.css";

class Sidebar extends Component {
  render() {
    return (
      <div id="nav-container">
        <div id="logo-alex">
          <img src={require("../../images/logo.png").default} />
        </div>
        <div id="list">
          <a href="/" className="pluslink">
            <div className="list-item">
              <div className="item-title">HOME</div>
              <div className="arrow">
                <img src={require("../../images/arrow.png").default} />
              </div>
            </div>
          </a>
          <a href="contact" className="pluslink">
            <div className="list-item">
              <div className="item-title">CONTACT</div>
              <div className="arrow">
                <img src={require("../../images/arrow.png").default} />
              </div>
            </div>
          </a>
        </div>

        <div id="social">
          <div className="logo">
            <a href="https://www.instagram.com/alexp.art/">
              <img
                style={{ height: "50%" }}
                src={require("../../images/instagramIcon.png").default}
                alt="instagram"
              />
            </a>
          </div>
          <div className="logo">
            <a href="https://www.linkedin.com/in/alexandre-peter-73b625143/">
              <img
                style={{ height: "50%" }}
                src={require("../../images/linkedInIcon.png").default}
                alt="linkedin"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
