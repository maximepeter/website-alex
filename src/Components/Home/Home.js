import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export const Home = () => (
	<div className="home">
		<h2 style={{ textAlign: "center" }}>Au Hasard</h2>
		<div className="flex-div">
			<div className="tuile">
				<div className="card">
					<img
						style={{ height: "200px" }}
						className="card-img-top"
						src="https://picsum.photos/200/900"
						alt="item 11"
					/>
					<div className="card-body">
						<h5 className="card-title">
							<Link to="/draw">Dessin 1</Link>
						</h5>
					</div>
				</div>
			</div>
			<div className="tuile">
				<div className="card">
					<img
						style={{ height: "200px" }}
						className="card-img-top"
						src="https://picsum.photos/200/800"
						alt="item 12"
					/>
					<div className="card-body">
						<h5 className="card-title">
							<Link to="/draw">Dessin 2</Link>
						</h5>
					</div>
				</div>
			</div>
			<div className="tuile">
				<div className="card">
					<img
						style={{ height: "200px" }}
						className="card-img-top"
						src="https://picsum.photos/200/700"
						alt="item 13"
					/>
					<div className="card-body">
						<h5 className="card-title">
							<Link to="/draw">Dessin 3</Link>
						</h5>
					</div>
				</div>
			</div>
		</div>
		<div className="flex-div">
			<div className="tuile">
				<div className="card">
					<img
						style={{ height: "200px" }}
						className="card-img-top"
						src="https://picsum.photos/200/100"
						alt="item 21"
					/>
					<div className="card-body">
						<h5 className="card-title">
							<Link to="/draw">Dessin 4</Link>
						</h5>
					</div>
				</div>
			</div>
			<div className="tuile">
				<div className="card">
					<img
						style={{ height: "200px" }}
						className="card-img-top"
						src="https://picsum.photos/200/200"
						alt="item 22"
					/>
					<div className="card-body">
						<h5 className="card-title">
							<Link to="/draw">Dessin 5</Link>
						</h5>
					</div>
				</div>
			</div>
			<div className="tuile">
				<div className="card">
					<img
						style={{ height: "200px" }}
						className="card-img-top"
						src="https://picsum.photos/200/300"
						alt="item 23"
					/>
					<div className="card-body">
						<h5 className="card-title">
							<Link to="/draw">Dessin 6</Link>
						</h5>
					</div>
				</div>
			</div>
		</div>
	</div>
);
export default Home;
