import React, {Component} from "react";
import { Link } from "react-router-dom";
import HomeCard from "../HomeCard/HomeCard";
import "./Home.css";
import img1 from "../../images/img1.jpeg";
import img2 from "../../images/img2.jpeg";
import img3 from "../../images/img3.jpeg";
import img4 from "../../images/img4.jpeg";
import img5 from "../../images/img5.jpeg";
import img6 from "../../images/img6.jpeg";

class Home extends Component {
	render() {
	  	return (
			<div className="home">
				<h2 style={{ textAlign: "center" }}>Au Hasard</h2>
				<div className="flex-div">
					<HomeCard id={'1'} img={img1}/>
					<HomeCard id={'2'} img={img2}/>
					<HomeCard id={'3'} img={img3}/>
				</div>

				<div className="flex-div">
					<HomeCard id={'4'} img={img4}/>
					<HomeCard id={'5'} img={img5}/>
					<HomeCard id={'6'} img={img6}/>
				</div>
				
			</div>
		);
	}
}
export default Home;
