import React from "react";
import hero_image from "../Images/hero-image.png";
import { HiLocationMarker } from "react-icons/hi";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import "../Styles/Hero.css";

function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerwidth flexCenter hero-container">
        {/* Left Side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "spring" }}
            >
              Discover <br /> Most Suitable <br /> Property
            </motion.h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">
              Find a variety of properties that suit you very easilty.
            </span>
            <span className="secondaryText">
              Forget all difficulties in finding a residence for you.{" "}
            </span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter status">
            <div className="flexColCenter stats">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="flexColCenter stats">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexColCenter stats">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winning</span>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className=" flexCenter hero-right">
          <motion.div
            initial={{ x: "10rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
            className="image-container"
          >
            <img src={hero_image} alt="hero" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
