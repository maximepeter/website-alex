import React, { Component } from "react";
import HomeCard from "../Home/HomeCard/HomeCard";
import "./Home.css";

class Home extends Component {
  generateRandomIds(n) {
    const idxs = Array.from({ length: n }, (_, i) => i + 1).sort(
      (a, b) => 0.5 - Math.random()
    );
    return idxs;
  }
  render() {
    const numberOfDraws = 11;
    const listIds = this.generateRandomIds(numberOfDraws);
    return (
      <div className="home">
        {[...Array(numberOfDraws)].map((value, index) => (
          <HomeCard id={listIds[index]} key={listIds[index]} />
        ))}
      </div>
    );
  }
}
export default Home;
