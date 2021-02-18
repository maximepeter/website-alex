import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import img1 from "../../images/img1.jpeg";
import img2 from "../../images/img2.jpeg";
import img3 from "../../images/img3.jpeg";
import img4 from "../../images/img4.jpeg";
import img5 from "../../images/img5.jpeg";
import img6 from "../../images/img6.jpeg";

export const Home = () => (
	<div className="home">
		<h2 style={{ textAlign: "center" }}>Au Hasard</h2>
		<div className="flex-div">
			<div className="tuile">
				<div className="card">
					<img
						style={{ height: "200px" }}
						className="card-img-top"
						src={img1}
						alt="item 11"
					/>
					<div className="card-body">
						<h5 className="card-title">
							<a href="draw" className="pluslink">
								Dessin 1
							</a>
						</h5>
					</div>
				</div>
			</div>
			<div className="tuile">
				<div className="card">
					<img
						style={{ height: "200px" }}
						className="card-img-top"
						src={img2}
						alt="item 12"
					/>
					<div className="card-body">
						<h5 className="card-title">
							<a href="draw" className="pluslink">
								Dessin 2
							</a>
						</h5>
					</div>
				</div>
			</div>
			<div className="tuile">
				<div className="card">
					<img
						style={{ height: "200px" }}
						className="card-img-top"
						src={img3}
						alt="item 13"
					/>
					<div className="card-body">
						<h5 className="card-title">
							<a href="draw" className="pluslink">
								Dessin 3
							</a>
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
						src={img4}
						alt="item 21"
					/>
					<div className="card-body">
						<h5 className="card-title">
							<a href="draw" className="pluslink">
								Dessin 3
							</a>
						</h5>
					</div>
				</div>
			</div>
			<div className="tuile">
				<div className="card">
					<img
						style={{ height: "200px" }}
						className="card-img-top"
						src={img5}
						alt="item 22"
					/>
					<div className="card-body">
						<h5 className="card-title">
							<a href="draw" className="pluslink">
								Dessin 4
							</a>
						</h5>
					</div>
				</div>
			</div>
			<div className="tuile">
				<div className="card">
					<img
						style={{ height: "200px" }}
						className="card-img-top"
						src={img6}
						alt="item 23"
					/>
					<div className="card-body">
						<h5 className="card-title">
							<a href="draw" className="pluslink">
								Dessin 5
							</a>
						</h5>
					</div>
				</div>
			</div>
		</div>
	</div>
);
export default Home;
