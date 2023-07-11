import React, { Fragment } from "react";
import logo from "../Images/logo2.png";
import "../Styles/Footer.css";

function Footer() {
  return (
    <Fragment>
      <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
          {/* left side */}

          <div className="flexColStart f-left">
            <img src={logo} alt="logo" width={120} />
            <span className="secondaryText">
              Our vision is t0 make all people <br />
              the best place to live for them.
            </span>
          </div>
          {/* right side */}

          <div className="flexColStart f-right">
            <span className="primaryText">Information</span>
            <span className="secondaryText">145,New york,Fl 4571,USA</span>
            <div className="flexCenter f-menu">
              <span>Property</span>
              <span>Services</span>
              <span>Product</span>
              <span>About Us</span>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Footer;
