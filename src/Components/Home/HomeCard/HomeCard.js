import React, { Component } from "react";
import "./HomeCard.css";
import { downloadFromBlob } from "../../../utils.js";

class HomeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      metadata: {
        drawName: "",
        grammage: "",
        height: "",
        price: "",
        serie: "",
        serieName: "",
        techniques: "",
        width: "",
      },
    };
  }
  async componentDidMount() {
    downloadFromBlob("metaData" + this.props.id + ".json").then((res) => {
      this.setState({ metadata: JSON.parse(res) });
    });
  }

  async componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      console.log("Different");
      downloadFromBlob("metaData" + this.props.id + ".json").then((res) => {
        this.setState({ metadata: JSON.parse(res) });
      });
    }
  }
  render() {
    console.log(this.state);

    return (
      <div className="flex-div">
        <div className="card">
          <img
            className="card-img"
            src={
              "https://stgimgalex.blob.core.windows.net/thubnails/img" +
              this.props.id +
              ".jpeg"
            }
            alt={"item " + this.props.id}
          />
          <a href={"draw?imgId=" + this.props.id} className="pluslink">
            <div className="image__overlay image__overlay--primary">
              <div className="image__title">
                {this.state.metadata["drawName"]}
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}
export default HomeCard;
