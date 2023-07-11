import React, { Fragment, useState } from "react";
import logo from "../Images/logo.png";
import OutsideClickHandler from "react-outside-click-handler";
import { BiMenuAltRight } from "react-icons/bi";
import "../Styles/Header.css";
function Header() {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyle = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };
  return (
    <Fragment>
      <section className=" h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
          <img src={logo} alt="logo" width={100} />
          <OutsideClickHandler
            onOutsideClick={() => {
              setMenuOpened(false);
            }}
          >
            <div className="flexCenter h-menu" style={getMenuStyle(menuOpened)}>
              <a href="#">Residencies</a>
              <a href="#">Our Value</a>
              <a href="#">Contact us</a>
              <a href="#">Get Started</a>
              <button className="button">
                <a href="">Contact</a>
              </button>
            </div>
          </OutsideClickHandler>
          <div
            className="menu-icon"
            onClick={() => setMenuOpened((prev) => !prev)}
          >
            <BiMenuAltRight size={30} />
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Header;
