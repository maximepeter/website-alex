import React, { Component } from "react";
import "./Sidebar.css";

class Sidebar extends Component {
  render() {
    return (
      <div id="nav-container">
        <div id="logo-alex">
          <a href="/">
            <img
              src={require("../..//images/logo.png").default}
              style={{ cursor: "pointer" }}
              alt="Website logo"
            />
          </a>
        </div>
        <div id="list">
          <a href="/series" className="pluslink">
            <div className="list-item">
              <div className="item-title">Series</div>
              <div className="arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </div>
            </div>
          </a>
          <a href="contact" className="pluslink">
            <div className="list-item">
              <div className="item-title">Contact</div>
              <div className="arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </div>
            </div>
          </a>
        </div>
        <div className="social">
          <div className="logo">
            <a href="https://www.instagram.com/alexp.art/">
              <img
                className="social-logo-image"
                src={require("../../images/instagramIcon.png").default}
                alt="instagram"
              />
            </a>
          </div>
          <div className="logo">
            <a href="https://www.linkedin.com/in/alexandre-peter-73b625143/">
              <img
                className="social-logo-image"
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
