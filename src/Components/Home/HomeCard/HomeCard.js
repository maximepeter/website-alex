import React, { Component } from "react";
import "./HomeCard.css";

class HomeCard extends Component {
  render() {
    var imgId = this.props.id;
    var relativeDrawPath = "/images/" + imgId + "/img" + imgId + ".jpeg";
    var drawName = require("../../../drawingInformation/metaData" +
      imgId +
      ".json")["drawName"];
    return (
      <div className="flex-div">
        <div className="card">
          <img
            className="card-img"
            src={process.env.PUBLIC_URL + relativeDrawPath}
            alt="item 11"
          />
          <a href={"draw?imgId=" + imgId} className="pluslink">
            <div className="image__overlay image__overlay--primary">
              <div className="image__title">{drawName}</div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}
export default HomeCard;
