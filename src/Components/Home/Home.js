import React, { Component } from "react";
import HomeCard from "../Home/HomeCard/HomeCard";
import Button from "../Global/Button/Button";
import { downloadFromBlob } from "../../utils.js";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    let urlSerie = this.getParams()["serie"]
      ? this.getParams()["serie"]
      : "All";
    this.numberOfDraws = 23;
    this.state = {
      serie: urlSerie,
      series: [
        {
          serieName: "lizards",
          numberOfDraws: 0,
          drawIds: [],
        },
        {
          serieName: "monkeys",
          numberOfDraws: 0,
          drawIds: [],
        },
      ],
      imagesToDisplay: [],
    };
  }

  async componentDidMount() {
    async function calculateNumberOfDraws(arr) {
      return arr.map((x) => x["numberOfDraws"]).reduce((x, y) => x + y);
    }
    const blobName = "series.json";

    downloadFromBlob(blobName).then((res) => {
      const jsonResult = JSON.parse(res);
      calculateNumberOfDraws(jsonResult).then((n) => {
        this.setState({ numberOfDraws: n });
      });
      this.setState({
        series: jsonResult,
      });
      this.setState({
        imagesToDisplay: this.generateIds(this.state.serie, 23),
      });
    });
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
    var nbDraws = 0;
    this.setState({ serie: newState });
    for (let i = 0; i < this.state.series.length; i++) {
      if (this.state.series[i]["serieName"] === newState) {
        nbDraws = this.state.series[i]["numberOfDraws"];
        this.setState({
          imagesToDisplay: this.generateIds(newState, nbDraws),
        });
      } else {
        this.setState({
          imagesToDisplay: this.generateIds(newState, this.state.numberOfDraws),
        });
      }
    }
  }

  generateIds(serieName, numberOfDraws) {
    if (serieName === "All") {
      var listImgs = [];
      for (let i = 1; i <= numberOfDraws; i++) {
        listImgs.push(i);
        listImgs.sort((a, b) => 0.5 - Math.random());
      }
      return listImgs;
    } else {
      for (let i = 0; i < this.state.series.length; i++) {
        if (serieName === this.state.series[i]["serieName"]) {
          return this.state.series[i]["drawIds"];
        }
      }
    }
  }

  render() {
    console.log(this.state.imagesToDisplay);
    return (
      <div className="home">
        <div className="series-container">
          <div className="current-serie-name">{this.state.serie}</div>
          <div className="series-header">
            <div
              className="series-array-elmt"
              onClick={(event) => {
                this.changeSerieState(event, "All");
              }}
            >
              <Button text="all" />
            </div>
            {[...Array(this.state.series.length)].map((value, index) => (
              <div className="series-array-elmt" key={index}>
                <div className="vertical-separator"></div>
                <div
                  className="serie-name"
                  onClick={(event) => {
                    this.changeSerieState(
                      event,
                      this.state.series[index]["serieName"]
                    );
                  }}
                >
                  <Button text={this.state.series[index]["serieName"]} />
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
