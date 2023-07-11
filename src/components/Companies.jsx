import React from "react";
import prologis from "../Images/prologis.png";
import tower from "../Images/tower.png";
import equinix from "../Images/equinix.png";
import realty from "../Images/realty.png";
import "../Styles/Companies.css";

function Companies() {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <img src={prologis} alt="pro" />
        <img src={tower} alt="tower" />
        <img src={equinix} alt="equininx" />
        <img src={realty} alt="realty" />
      </div>
    </section>
  );
}

export default Companies;
