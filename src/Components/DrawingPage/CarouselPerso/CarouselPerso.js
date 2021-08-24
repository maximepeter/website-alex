import React, { Component } from "react";
import "./CarouselPerso.css";
import ReactDOM from "react-dom";
import $, { event } from "jquery";

class CarouselPerso extends Component {
  constructor(props) {
    super(props);
    this.myref = React.createRef();
    this.handleSlideChange = this.handleSlideChange.bind(this);
    this.state = {
      imgId: this.props.imgId,
      carouselState: "",
    };
  }

  componentDidMount() {
    document
      .getElementById("myCarousel")
      .addEventListener("slide", this.handleSlideChange);
    window.addEventListener("keydown", this.handleSlideChange);
    this.state.carouselState =
      document.getElementsByClassName("item active")[0].children[0].alt;
  }

  componentWillUnmount() {
    this.myref.removeEventListener("slide.bs.carousel", this.handleSlideChange);
  }

  handleSlideChange(event) {
    console.log("Test");
  }

  render() {
    var imgId = this.props.imgId;
    return (
      <div
        id="myCarousel"
        className="carousel slide"
        data-ride="carousel"
        ref={(node) => (this.myref = node)}
      >
        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <img
              src={
                process.env.PUBLIC_URL +
                "/images/" +
                imgId +
                "/img" +
                imgId +
                ".jpeg"
              }
              alt="First slide"
            />
          </div>

          <div className="item">
            <img
              src={
                process.env.PUBLIC_URL +
                "/images/" +
                imgId +
                "/img" +
                imgId +
                "hand.jpeg"
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
