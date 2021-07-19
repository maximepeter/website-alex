import React, {Component} from "react";
import "./Sidebar.css";


class Sidebar extends Component {
	render() {
	  	return (
			<div id="nav-container">
				<div id="list">
					<p className="list-item"></p>
					<a href="home" className="pluslink">
						Home
					</a>
					<p className="list-item">
						<a href="draw" className="pluslink">
							Draws
						</a>
					</p>
					<p className="list-item">
						<a href="contact" className="pluslink">
							Contact
						</a>
					</p>
				</div>

				<div id="social">
					<div className="logo">
						<a href="https://www.instagram.com/alexp.art/">
							<img
								style={{ height: "100%" }}
								src="https://logo-logos.com/wp-content/uploads/2016/10/Instagram_logo_icon.png"
								alt="instagram"
							/>
						</a>
					</div>
					<div className="logo">
						<a href="https://www.linkedin.com/in/alexandre-peter-73b625143/">
							<img
								style={{ height: "100%" }}
								src="https://cdn.freebiesupply.com/logos/large/2x/linkedin-icon-logo-png-transparent.png"
								alt="linkedin"
							/>
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Sidebar;
