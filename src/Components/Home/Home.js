import React, { Component } from "react";
import HomeCard from "../Home/HomeCard/HomeCard";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.numberOfDraws = 23;
    let urlSerie = this.getParams()["serie"]
      ? this.getParams()["serie"]
      : "All";

    this.state = {
      serie: urlSerie,
      imagesToDisplay: this.generateRandomIds(urlSerie),
    };
    console.log(this.state.imagesToDisplay);
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
  changeSerieState(event, newState) {
    this.setState({
      serie: newState,
      imagesToDisplay: this.generateRandomIds(newState),
    });
  }
  generateRandomIds(serieName) {
    var listImgs = [];

    for (let i = 1; i <= this.numberOfDraws; i++) {
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
          <div className="big-separator"></div>
          <div className="series-header">
            <div
              className="series-array-elmt"
              onClick={(event) => {
                this.changeSerieState(event, "All");
              }}
            >
              All
            </div>
            {[...Array(seriesNames.length)].map((value, index) => (
              <div className="series-array-elmt">
                <div className="vertical-separator"></div>
                <div
                  className="serie-name"
                  onClick={(event) => {
                    this.changeSerieState(
                      event,
                      seriesNames[index]["serieName"]
                    );
                  }}
                >
                  {seriesNames[index]["serieName"]}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="draws">
          {[...Array(this.state.imagesToDisplay.length)].map((value, index) => (
            <HomeCard id={this.state.imagesToDisplay[index]} key={index} />
          ))}
        </div>
      </div>
    );
  }
}
export default Home;
