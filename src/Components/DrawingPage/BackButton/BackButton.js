import React, { Component } from "react";
import "./BackButton.css";

class BackButton extends Component {
  render() {
    return (
      <div className="back-button-wrapper">
        <a className="icon back" href="/series">
          <div className="tooltip">Back</div>
          <span>
            <i className="fa gg-arrow-left-r"></i>
          </span>
        </a>
      </div>
    );
  }
}

export default BackButton;
