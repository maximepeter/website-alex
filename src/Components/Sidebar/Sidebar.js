import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
	return (
		<div id="nav-container">
			<nav>
				<ul className="list-group">
					<li className="list-group-item list-group-item-action list-group-item-warning">
						<Link to="/">Home</Link>
					</li>
					<li className="list-group-item list-group-item-action list-group-item-warning">
						<Link to="/draw">Draws</Link>
					</li>
					<li className="list-group-item list-group-item-action list-group-item-warning">
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Sidebar;
