import React, { Component } from "react";
import "./CarouselPerso.css";

class CarouselPerso extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgId: this.props.imgId,
      carouselState: "",
    };
  }
  componentDidMount() {
    this.state.carouselState =
      document.getElementsByClassName("item active")[0].children[0].alt;
    console.log(this.state.carouselState);
  }
  eventHandler(event) {
    if (event.type == "fullscreenchange") {
    } else {
    }
  }
  render() {
    var imgId = this.props.imgId;
    return (
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <img
              src={
                require("../../../images/" + imgId + "/img" + imgId + ".jpeg")
                  .default
              }
              alt="First slide"
            />
          </div>

          <div className="item">
            <img
              src={
                require("../../../images/" +
                  imgId +
                  "/img" +
                  imgId +
                  "hand.jpeg").default
              }
              alt="Second slide"
            />
          </div>
        </div>

        <a
          className="left carousel-control"
          href="#myCarousel"
          role="button"
          data-slide="prev"
        >
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control"
          href="#myCarousel"
          role="button"
          data-slide="next"
        >
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default CarouselPerso;
