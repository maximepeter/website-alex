import React, { Component } from "react";
import HomeCard from "../Home/HomeCard/HomeCard";
import "./Home.css";

class Home extends Component {
  generateRandomImages() {
    var imgList = [];
    var max = 11;
    var min = 1;
    while (imgList.length < 6) {
      var randomIdx = Math.floor(Math.random() * (max - min) + min);
      if (!imgList.includes(randomIdx)) {
        imgList.push(randomIdx);
      }
    }
    return imgList;
  }
  render() {
    var imgList = this.generateRandomImages();
    return (
      <div className="home">
        <div className="flex-div">
          <HomeCard id={imgList[0]} />
          <HomeCard id={imgList[1]} />
          <HomeCard id={imgList[2]} />
        </div>
        <div className="flex-div">
          <HomeCard id={imgList[3]} />
          <HomeCard id={imgList[4]} />
          <HomeCard id={imgList[5]} />
        </div>
      </div>
    );
  }
}
export default Home;
