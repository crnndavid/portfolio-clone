import React from "react";
import classes from "./Footer.module.css";
const Footer = ({ img }) => {
  return (
    <footer>
      <div className={classes["footer-container"]}>
        <img src={img} alt="" />
        <div className={classes["footer-section"]}>
          <h6>MENU</h6>
          <ul>
            <li>ABOUT</li>
            <li>SERVICES</li>
            <li>PORTFOLIO</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className={classes["footer-section"]}>
          <h6>ADDRESS</h6>
          <ul>
            <li>Suite #913</li>
            <li>Corporation Building</li>
            <li>Tibb Street</li>
            <li>Manchester</li>
            <li>M1 1TA</li>
          </ul>
        </div>
        <div className={classes["footer-section"]}>
          <h6>CONTACT</h6>
          <ul>
            <li>E: info@youragency.com</li>
            <li>T: +44 800 123 456</li>
            <li>F: +44 800 123 400</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
