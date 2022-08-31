import React from "react";
import classes from "./Navbar.module.css";
import logo from "../assets/img/logo.png";
const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes["nav-container"]}>
        <a href="/">
          <img src={logo} alt="Logo" className={classes.logo} />
        </a>
        <ul className={classes["nav-links"]}>
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

        <div className={classes.hamburger}>
          <span className={classes.line}></span>
          <span className={classes.line}></span>
          <span className={classes.line}></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
