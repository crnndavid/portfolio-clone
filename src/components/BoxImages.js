import React from "react";
import classes from "./Box.module.css";
const BoxImages = ({ img }) => {
  const checkIfImageIsNull = () => img.length === undefined;
  return (
    <section
      style={checkIfImageIsNull ? { backgroundImage: `url(${img})` } : ""}
      className={classes["box-container"]}
    ></section>
  );
};

export default BoxImages;
