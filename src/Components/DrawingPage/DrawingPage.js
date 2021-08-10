import React, { Component } from "react";
import CarouselPerso from "./CarouselPerso/CarouselPerso";
import "./DrawingPage.css";

class DrawingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgId: undefined,
    };
  }
  getParams() {
    var urlParams;

    (window.onpopstate = function () {
      var match,
        pl = /\+/g, // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) {
          return decodeURIComponent(s.replace(pl, " "));
        },
        query = window.location.search.substring(1);

      urlParams = {};
      while ((match = search.exec(query)))
        urlParams[decode(match[1])] = decode(match[2]);
    })();
    return urlParams;
  }

  render() {
    var urlParams = this.getParams();
    this.state.imgId = urlParams["imgId"];
    var imgId = this.state.imgId;
    var jsonMetaData = require("../../images/" +
      imgId +
      "/metaData" +
      imgId +
      ".json");
    return (
      <div className="container">
        <div className="images-preview">
          <div className="preview" data-target="#myCarousel" data-slide-to="0">
            <img
              src={
                require("../../images/" + imgId + "/img" + imgId + ".jpeg")
                  .default
              }
              alt="preview 1"
              data-target="#myCarousel"
              data-slide-to="0"
            />
          </div>

          <div className="preview">
            <img
              src={
                require("../../images/" + imgId + "/img" + imgId + "hand.jpeg")
                  .default
              }
              alt="preview 2"
              data-target="#myCarousel"
              data-slide-to="1"
            />
          </div>
        </div>
        <CarouselPerso id="mycarousel" imgId={imgId} />

        <div className="description">
          <div className="draw-title">{jsonMetaData["drawName"]}</div>
          <div className="price">{jsonMetaData["price"] + " €"}</div>
          <div className="draw-type">Dessin original</div>
          <div className="size-techniques">
            <div className="size-gram-content">
              {jsonMetaData["width"] + " x " + jsonMetaData["height"] + " cm"}
            </div>
            <div className="size-gram-content">300g</div>
          </div>
          <div className="techniques">{jsonMetaData["techniques"]}</div>
        </div>
      </div>
    );
  }
}

export default DrawingPage;
