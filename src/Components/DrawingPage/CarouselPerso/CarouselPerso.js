import React, { Component } from "react";
import "./CarouselPerso.css";

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

  componentDidMount() {}

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
          className="carousel-control-prev"
          href="#myCarousel"
          role="button"
          data-slide="prev"
        >
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
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
