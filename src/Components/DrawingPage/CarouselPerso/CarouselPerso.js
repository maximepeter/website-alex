import React, { Component } from "react";
import "./CarouselPerso.css";

class CarouselPerso extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgId: this.props.imgId,
    };
  }
  render() {
    var imgId = this.props.imgId;
    return (
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
          <div class="item active">
            <img
              src={
                require("../../../images/" + imgId + "/img" + imgId + ".jpeg")
                  .default
              }
              alt="First slide"
            />
          </div>

          <div class="item">
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
          class="left carousel-control"
          href="#myCarousel"
          role="button"
          data-slide="prev"
        >
          <span
            class="glyphicon glyphicon-chevron-left"
            aria-hidden="true"
          ></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="right carousel-control"
          href="#myCarousel"
          role="button"
          data-slide="next"
        >
          <span
            class="glyphicon glyphicon-chevron-right"
            aria-hidden="true"
          ></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default CarouselPerso;
