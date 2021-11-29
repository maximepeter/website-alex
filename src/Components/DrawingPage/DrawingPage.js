import React, { Component } from "react";
import CarouselPerso from "./CarouselPerso/CarouselPerso";
import ReactDOM from "react-dom";
import "./DrawingPage.css";

class DrawingPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imgId: undefined,
		};
	}
	componentDidMount = () => {
		ReactDOM.findDOMNode(this).addEventListener(
			"slide.bs.carousel",
			this.handleSlideChange
		);
	};
	changeGreyImg() {
		if (this.state.carouselState === "First slide") {
			document.getElementById("preview-1").style.filter = "grayscale(80%)";
		} else {
			document.getElementById("preview-2").style.filter = "grayscale(80%)";
		}
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

	getNextAndPrevImg(imgId) {
		var maxImgId = 11;
		var prevId, nextId;
		if (imgId === 1) {
			prevId = maxImgId;
			nextId = imgId + 1;
		} else if (imgId === maxImgId) {
			prevId = imgId - 1;
			nextId = 1;
		} else {
			prevId = imgId - 1;
			nextId = imgId + 1;
		}
		return { prevId, nextId };
	}

	render() {
		var urlParams = this.getParams();
		var imgId = parseInt(urlParams["imgId"]);
		const jsonMetaData = require("../../drawingInformation/metaData" +
			imgId +
			".json");
		let ids = this.getNextAndPrevImg(imgId);
		let prevId = ids.prevId;
		let nextId = ids.nextId;
		console.log(prevId, nextId);
		let prevImgPath =
			process.env.PUBLIC_URL + "/images/" + prevId + "/img" + prevId + ".jpeg";
		let nextImgPath =
			process.env.PUBLIC_URL + "/images/" + nextId + "/img" + nextId + ".jpeg";
		let serieName = jsonMetaData["serie"];
		return (
			<div className="drawing-page">
				<div className="serie-title">{serieName}</div>
				<a className="return-arrow" href={"series?serie=" + serieName}>
					Back
				</a>
				<div className="content">
					<div className="left-content">
						<div className="preview">
							<img
								id="preview-1"
								src={
									process.env.PUBLIC_URL +
									"/images/" +
									imgId +
									"/img" +
									imgId +
									".jpeg"
								}
								alt="preview 1"
								data-target="#myCarousel"
								data-slide-to="0"
							/>
						</div>

						<div className="preview">
							<img
								id="preview-2"
								src={
									process.env.PUBLIC_URL +
									"/images/" +
									imgId +
									"/img" +
									imgId +
									"hand.jpeg"
								}
								alt="preview 2"
								data-target="#myCarousel"
								data-slide-to="1"
							/>
						</div>
						<div className="transition-img">
							<a
								className="arrow-prev"
								href={"draw?imgId=" + prevId}
								style={{
									background: "url(" + prevImgPath + ") center no-repeat",
									backgroundSize: "160px",
								}}
							/>
							<div className="transition-name">PREV</div>
						</div>
					</div>
					<CarouselPerso
						id="myCarousel"
						imgId={imgId}
						ref={(node) => (this.myCarousel = node)}
					/>
					<div className="right-content">
						<div className="draw-title">{jsonMetaData["drawName"]}</div>
						<div className="price">{jsonMetaData["price"] + " €"}</div>
						<div className="draw-type">Dessin original</div>
						<div className="size-techniques">
							<div className="size-gram-content">
								{jsonMetaData["width"] + " x " + jsonMetaData["height"] + " cm"}
							</div>
							<div className="size-gram-content">
								{jsonMetaData["grammage"]}
							</div>
						</div>
						<div className="techniques">{jsonMetaData["techniques"]}</div>
						<div className="transition-img">
							<div className="transition-name">NEXT</div>
							<a
								className="arrow-next"
								href={"draw?imgId=" + nextId}
								style={{
									background: "url(" + nextImgPath + ") center no-repeat",
									backgroundSize: "160px",
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default DrawingPage;
