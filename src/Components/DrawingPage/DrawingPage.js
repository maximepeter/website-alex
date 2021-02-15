import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./DrawingPage.css";

function DrawingPage() {
	return (
		<div id="container">
			<div id="carousel">
				<Carousel
					style={{
						height: "400px",
						width: "300px",
						margin: "auto",
						marginTop: "5%",
						marginBottom: "5%",
					}}
				>
					<Carousel.Item>
						<img
							style={{ height: "400px" }}
							className="d-block w-100"
							src={"https://picsum.photos/200/300"}
							alt="1"
						/>
						<Carousel.Caption>
							<h3>First Demo </h3>
						</Carousel.Caption>
					</Carousel.Item>

					<Carousel.Item style={{ height: "400px" }}>
						<img
							style={{ height: "400px" }}
							className="d-block w-100"
							src={"https://picsum.photos/200/400"}
							alt="2"
						/>
						<Carousel.Caption>
							<h3>Second Demo</h3>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item style={{ height: "400px" }}>
						<img
							style={{ height: "400px" }}
							className="d-block w-100"
							src={"https://picsum.photos/200/500"}
							alt="3"
						/>
						<Carousel.Caption>
							<h3>Third Demo</h3>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
			<div id="description">
				<h4>Description :</h4>
				<p>Blabla</p>

				<h4>Taille :</h4>
				<p>24 x 32 cm</p>
			</div>
		</div>
	);
}

export default DrawingPage;
