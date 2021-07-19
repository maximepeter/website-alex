import React, {Component} from "react";
import "./HomeCard.css";

class HomeCard extends Component {
	render() {
		var imgId = this.props.id
	  	return (
			<div className="flex-div">
				<div className="tuile">
					<div className="card">
						
						<img
							style={{ height: "200px" }}
							className="card-img-top"
							src={this.props.img}
							alt="item 11"
						/>
						<div className="card-body">
							<h5 className="card-title">
								<a href={"draw?imgId="+imgId} className="pluslink">
									Dessin {imgId}
								</a>
							</h5>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default HomeCard;
