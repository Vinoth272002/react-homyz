import React, { Fragment } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import value from "../Images/value.png";
import data from "../data/accordition";
import "../Styles/Value.css";

function Value() {
  return (
    <Fragment>
      <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
          {/* left side */}

          <div className="v-left">
            <div className="image-container">
              <img src={value} alt="value" />
            </div>
          </div>

          {/* right side */}

          <div className="flexColStart v-right">
            <span className="orangeText">Our Value</span>
            <span className="primaryText">Value We Give to You</span>
            <span className="secondaryText">
              We always ready to help by providing the best services for you.{" "}
              <br />
              We beleive a good place to live can make your life better
            </span>

            <Accordion
              className="accordion"
              allowMultipleExpanded={false}
              preExpanded={[0]}
            >
              {data.map((item, i) => {
                return (
                  <AccordionItem className="accordionItem" key={i} uuid={i}>
                    <AccordionItemHeading>
                      <AccordionItemButton className="flexCenter accordion-button">
                        <div className="flexCenter icon">{item.icon}</div>
                        <span className="primaryText">{item.heading}</span>
                        <div className="flexCenter icon">
                          <MdOutlineArrowDropDown size={20} />
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p className="secondaryText">{item.detail}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Value;
