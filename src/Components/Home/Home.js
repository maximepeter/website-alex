import React, {Component} from "react";
import HomeCard from "../HomeCard/HomeCard";
import "./Home.css";

class Home extends Component {
	generateRandomImages() {
		var imgList = []
		var max = 11;
		var min = 1;
		while (imgList.length < 6) {
			var randomIdx = Math.floor(Math.random() * (max - min) + min)
			if (!imgList.includes(randomIdx)) {
				imgList.push(randomIdx)
			}
		}
		return imgList;
	}
	render() {
		var imgList = this.generateRandomImages()
	  	return (
			<div className="home">
				<h2 style={{ textAlign: "center" }}>Au Hasard</h2>
				<div className="flex-div">
					<HomeCard id={imgList[0]} img={require("../../images/"+imgList[0]+"/img"+imgList[0]+".jpeg").default}/>
					<HomeCard id={imgList[1]} img={require("../../images/"+imgList[1]+"/img"+imgList[1]+".jpeg").default}/>
					<HomeCard id={imgList[2]} img={require("../../images/"+imgList[2]+"/img"+imgList[2]+".jpeg").default}/>
				</div>

				<div className="flex-div">
					<HomeCard id={imgList[3]} img={require("../../images/"+imgList[3]+"/img"+imgList[3]+".jpeg").default}/>
					<HomeCard id={imgList[4]} img={require("../../images/"+imgList[4]+"/img"+imgList[4]+".jpeg").default}/>
					<HomeCard id={imgList[5]} img={require("../../images/"+imgList[5]+"/img"+imgList[5]+".jpeg").default}/>
				</div>
				
			</div>
		);
	}
}
export default Home;
