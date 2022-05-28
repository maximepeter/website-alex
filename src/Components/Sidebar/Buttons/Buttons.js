import React, { Component } from "react";
import "./Buttons.css";

class Buttons extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="buttons-list">
        <a className="icon series" href="/series">
          <div className="tooltip">Series</div>
          <span>
            <i className="fa gg-menu-grid-r"></i>
          </span>
        </a>
        <div className="social">
          <a
            className="icon instagram"
            href="https://www.instagram.com/alexp.art/"
          >
            <div className="tooltip">Instagram</div>
            <span>
              <i className="fa fa-instagram"></i>
            </span>
          </a>
          <a
            className="icon linkedin"
            href="https://www.linkedin.com/in/alexandre-peter-73b625143/"
          >
            <div className="tooltip">LinkedIn</div>
            <span>
              <i className="fa fa-linkedin"></i>
            </span>
          </a>
        </div>
      </div>
    );
  }
}

export default Buttons;
