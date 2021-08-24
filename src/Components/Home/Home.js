import React, { Component } from "react";
import { nativeTouchData } from "react-dom/cjs/react-dom-test-utils.production.min";
import HomeCard from "../Home/HomeCard/HomeCard";
import "./Home.css";

class Home extends Component {
  generateRandomImages(n) {
    var imgList = [];
    var max = 11;
    var min = 1;
    while (imgList.length < n) {
      var randomIdx = Math.floor(Math.random() * (max - min) + min);
      if (!imgList.includes(randomIdx)) {
        imgList.push(randomIdx);
      }
    }
    return imgList;
  }
  render() {
    const numberOfDraws = 11;
    var imgList = this.generateRandomImages(6);
    console.log(
      [Array(numberOfDraws)].map((value, index) => (
        <HomeCard id={index + 1} key={index} />
      ))
    );
    return (
      <div className="home">
        {[...Array(numberOfDraws)].map((value, index) => (
          <HomeCard id={index + 1} key={index} />
        ))}
      </div>
    );
  }
}
export default Home;
