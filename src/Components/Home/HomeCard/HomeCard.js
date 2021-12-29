import React, { Component } from "react";
import "./HomeCard.css";
import { BlobServiceClient } from "@azure/storage-blob";

class HomeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: null,
    };
  }
  render() {
    var imgId = this.props.id;
    // var drawName =
    //   "https://stgimgalex.blob.core.windows.net/img-infos/metaData" +
    //   imgId +
    //   ".json";
    const account = "stgimgalex";
    const containerName = "img-infos";
    const blobName = "metaData" + this.props.id + ".json";
    var test = null;

    async function blobToString(blob) {
      const fileReader = new FileReader();
      return new Promise((resolve, reject) => {
        fileReader.onloadend = (ev) => {
          resolve(ev.target.result);
        };
        fileReader.onerror = reject;
        fileReader.readAsText(blob);
      });
    }
    async function download() {
      const blobServiceClient = new BlobServiceClient(
        `https://${account}.blob.core.windows.net`
      );
      const containerClient =
        blobServiceClient.getContainerClient(containerName);
      const blobClient = containerClient.getBlobClient(blobName);
      const downloadBlockBlobResponse = await blobClient.download();
      const downloaded = await blobToString(
        await downloadBlockBlobResponse.blobBody
      );
      // console.log("Downloaded blob content", downloaded);
      test = downloaded;
    }
    console.log(test);
    download();
    download().then((res) => {
      var drawName = res;
      console.log(drawName);
    });
    return (
      <div className="flex-div">
        <div className="card">
          <img
            className="card-img"
            src={
              "https://stgimgalex.blob.core.windows.net/thubnails/img" +
              imgId +
              ".jpeg"
            }
            alt={"item " + imgId}
          />
          <a href={"draw?imgId=" + imgId} className="pluslink">
            <div className="image__overlay image__overlay--primary">
              <div className="image__title">{this.state.test}</div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}
export default HomeCard;
