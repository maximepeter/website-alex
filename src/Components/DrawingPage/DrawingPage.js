import React, {Component} from "react";
import Carousel from "react-bootstrap/Carousel";
import "./DrawingPage.css";

class DrawingPage extends Component {
	getParams() {
		var urlParams;
		(window.onpopstate = function () {
    		var match,
    		    pl     = /\+/g,  // Regex for replacing addition symbol with a space
    		    search = /([^&=]+)=?([^&]*)/g,
    		    decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
    		    query  = window.location.search.substring(1);

    		urlParams = {};
    		while (match = search.exec(query))
			urlParams[decode(match[1])] = decode(match[2]);
		})();
		return urlParams
	}
	render() {
		var urlParams = this.getParams();
		const imgId = urlParams["imgId"];
		var jsonMetaData = require('../../images/'+imgId+'/metaData'+imgId+'.json');
		console.log(jsonMetaData);
		return (
			<div id="container">
				<div id="carousel">
					<h1 style={{textAlign: "center"}}>{jsonMetaData["drawName"]}</h1>
					<Carousel
						style={{
							height: "400px",
							width: "400px",
							margin: "auto",
							marginTop: "5%",
							marginBottom: "5%",
						}}
					>
						<Carousel.Item>
							<img
								style={{ height: "400px" }}
								className="d-block w-100"
								src={require('../../images/'+imgId+'/img'+imgId+'.jpeg').default}
								alt="1"
							/>
						</Carousel.Item>

						<Carousel.Item>
							<img								
								className="d-block w-100"
								src={require('../../images/'+imgId+'/img'+imgId+'hand.jpeg').default}
								alt="2"
							/>
						</Carousel.Item>
					</Carousel>
				</div>
				<div id="description">
					<h4>Technique :</h4>
					<p>{jsonMetaData["techniques"]}</p>
					<h4>Taille :</h4>
					<p>{jsonMetaData["width"] + " x "+ jsonMetaData["height"] +" cm"}</p>
					<h4>Prix :</h4>
					<p>{jsonMetaData["price"] +  " €"}</p>
				</div>
			</div>
		);
	}
}

export default DrawingPage;
