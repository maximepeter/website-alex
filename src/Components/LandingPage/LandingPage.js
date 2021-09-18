import "./LandingPage.css";
import React, { Component } from "react";

class LandingPage extends Component {
  render() {
    return (
      <div id="container">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <a href="/series?serie=lizards">
                <img
                  class="image-carousel"
                  src="https://images-na.ssl-images-amazon.com/images/I/91r-zg3t1QL.jpg"
                  alt="First slide"
                />
              </a>
            </div>
            <div class="carousel-item">
              <a href="/series?serie=monkeys">
                <img
                  class="image-carousel"
                  src="https://www.kilotela.com/wp-content/uploads/2020/12/fabrics-online-original-cotton-by-the-meter-printed-cool-monkeys-140-width.jpg"
                  alt="Second slide"
                />
              </a>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default LandingPage;
