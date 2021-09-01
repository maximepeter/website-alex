import React, { Component } from "react";
import HomeCard from "../Home/HomeCard/HomeCard";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { serie: "All" };
  }
  changeSerieState(newState) {
    this.state.serie = newState;
    console.log(this.state.serie);
  }
  generateRandomIds(n) {
    const idxs = Array.from({ length: n }, (_, i) => i + 1).sort(
      (a, b) => 0.5 - Math.random()
    );
    return idxs;
  }
  render() {
    const numberOfDraws = 11;
    const listIds = this.generateRandomIds(numberOfDraws);
    const seriesNames = require("../../drawingInformation/series.json");
    console.log(this.state.serie);
    return (
      <div className="home">
        <div className="series-header">
          <div className="serie-name">{this.state.serie}</div>
          <div
            className="serie-name"
            onClick={() => this.changeSerieState("All")}
          >
            All
          </div>
          {[...Array(seriesNames.length)].map((value, index) => (
            <div
              className="serie-name"
              onClick={() =>
                this.changeSerieState(seriesNames[index]["serieName"])
              }
            >
              {seriesNames[index]["serieName"]}
            </div>
          ))}
        </div>
        <div className="draws">
          {[...Array(numberOfDraws)].map((value, index) => (
            <HomeCard id={listIds[index]} key={listIds[index]} />
          ))}
        </div>
      </div>
    );
  }
}
export default Home;
