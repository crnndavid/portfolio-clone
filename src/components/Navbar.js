import React, { useState } from "react";
import classes from "./Navbar.module.css";
import logo from "../assets/img/logo.png";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);

  const showMenuHandler = () => setShowMenu((prevState) => !prevState);
  return (
    <div className={classes["nav-container"]}>
      <a href="/">
        <img src={logo} alt="Logo" className={classes.logo} />
      </a>
      <ul>
        <li>
          <a href="#home" title="Home link" className={classes["nav-link"]}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" title="About link" className={classes["nav-link"]}>
            About
          </a>
        </li>
        <li>
          <a
            href="#services"
            title="Services link"
            className={classes["nav-link"]}
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            title="Portfolio link"
            className={classes["nav-link"]}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#contact"
            title="Contact link"
            className={classes["nav-link"]}
          >
            Contact
          </a>
        </li>
      </ul>
      {showMenu && (
        <div className={classes.hamburger} onClick={showMenuHandler}>
          <span className={classes.line}></span>
          <span className={classes.line}></span>
          <span className={classes.line}></span>
        </div>
      )}
    </div>
  );
};

export default Navbar;
