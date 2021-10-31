import "./LandingPage.css";
import React, { Component } from "react";

class LandingPage extends Component {
	render() {
		return (
			<div className="wrapper">
				<div
					id="carouselIndicators"
					className="carousel slide"
					data-ride="carousel"
				>
					<ol className="carousel-indicators">
						<li
							data-target="#carouselIndicators"
							data-slide-to="0"
							className="active"
						></li>
						<li data-target="#carouselIndicators" data-slide-to="1"></li>
					</ol>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<a href="/series?serie=lizards">
								<img
									className="image-carousel"
									src={process.env.PUBLIC_URL + "/images/lizardsPatchwork.jpg"}
									alt="Lizard patchwork"
								/>
								<div class="caption">Lizards</div>
							</a>
						</div>
						<div className="carousel-item">
							<a href="/series?serie=monkeys">
								<img
									className="image-carousel"
									src={process.env.PUBLIC_URL + "/images/monkeysPatchwork.jpeg"}
									alt="Monkeys patchwork"
								/>
								<div className="caption">
									<div className="caption-content">Monkeys</div>
								</div>
							</a>
						</div>
					</div>
					<a
						className="carousel-control-prev"
						href="#carouselIndicators"
						role="button"
						data-slide="prev"
					>
						<span
							className="carousel-control-prev-icon"
							aria-hidden="true"
						></span>
						<span className="sr-only">Previous</span>
					</a>
					<a
						className="carousel-control-next"
						href="#carouselIndicators"
						role="button"
						data-slide="next"
					>
						<span
							className="carousel-control-next-icon"
							aria-hidden="true"
						></span>
						<span className="sr-only">Next</span>
					</a>
				</div>
			</div>
		);
	}
}

export default LandingPage;
