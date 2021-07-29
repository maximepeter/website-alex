import React, {Component} from "react";
import "./HomeCard.css";

class HomeCard extends Component {
	render() {
		var imgId = this.props.id
		var drawName = require("../../images/"+ imgId +"/metaData" + imgId + ".json")["drawName"]
	  	return (
			<div className="flex-div">
					<div className="card">
						<img
							className="card-img-top"
							src={this.props.img}
							alt="item 11"
						/>
						<a href={"draw?imgId="+imgId} className="pluslink">
							<div class="image__overlay image__overlay--primary">
        						<div class="image__title">
									{drawName}
								</div>
        						<p class="image__description">
            						Here we have a brick wall.
        						</p>
    						</div>				
						</a>
					</div>
				</div>
		);
	}
}
export default HomeCard;
