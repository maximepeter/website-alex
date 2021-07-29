import "./Header.css";
import React, {Component} from "react";

class Header extends Component {
	render() {
	  	return (
			<div id="head">
			<img
				style={{
					height: "85%",
					marginTop: "0.5%",
				}}
				src={require('../../images/header.png').default}
				alt="head"
			/>
		</div>
		);
	}
}


export default Header;
