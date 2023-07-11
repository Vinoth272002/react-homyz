import React from "react";
import data from "../data/Slider.json";
import "../Styles/Residencies.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Residencies() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choice</span>
          <span className="primaryText"> Popular Residencies</span>
        </div>
        <Carousel responsive={responsive}>
          {data.map((card, i) => {
            return (
              <div className="flexColStart r-card" key={i}>
                <img src={card.image} alt="home" />
                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}

export default Residencies;
