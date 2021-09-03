import React, { Component } from "react";
import HomeCard from "../Home/HomeCard/HomeCard";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serie: "All",
      imagesToDisplay: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      numberOfDraws: 16,
    };
  }
  changeSerieState(event, newState) {
    this.setState({
      serie: newState,
      imagesToDisplay: this.generateRandomIds(newState),
    });
  }
  generateRandomIds(serieName) {
    var listImgs = [];

    for (let i = 1; i <= this.state.numberOfDraws; i++) {
      if (serieName === "All") {
        listImgs.push(i);
        listImgs.sort((a, b) => 0.5 - Math.random());
      } else {
        if (
          require("../../drawingInformation/metaData" + i + ".json")[
            "serie"
          ] === serieName
        ) {
          listImgs.push(i);
        }
      }
    }
    return listImgs;
  }
  render() {
    const seriesNames = require("../../drawingInformation/series.json");
    return (
      <div className="home">
        <div className="series-container">
          <div className="current-serie-name">{this.state.serie}</div>
          <div className="series-header">
            <div
              className="serie-name"
              onClick={(event) => {
                this.changeSerieState(event, "All");
              }}
            >
              All
            </div>
            {[...Array(seriesNames.length)].map((value, index) => (
              <div
                className="serie-name"
                onClick={(event) => {
                  this.changeSerieState(event, seriesNames[index]["serieName"]);
                }}
              >
                {seriesNames[index]["serieName"]}
              </div>
            ))}
          </div>
        </div>
        <div className="draws">
          {[...Array(this.state.imagesToDisplay.length)].map((value, index) => (
            <HomeCard
              id={this.state.imagesToDisplay[index]}
              key={this.state.imagesToDisplay[index]}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default Home;
