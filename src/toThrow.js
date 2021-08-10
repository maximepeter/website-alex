<Carousel
  id="main-carousel"
  style={{
    height: "400px",
    width: "400px",
    margin: "auto",
    marginTop: "5%",
    marginBottom: "5%",
  }}
>
  <Carousel.Item>
    <img
      style={{ height: "400px" }}
      className="d-block w-100"
      src={require("../../images/" + imgId + "/img" + imgId + ".jpeg").default}
      alt="1"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={
        require("../../images/" + imgId + "/img" + imgId + "hand.jpeg").default
      }
      alt="2"
    />
  </Carousel.Item>
</Carousel>;
