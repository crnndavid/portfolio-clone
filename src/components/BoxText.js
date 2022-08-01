import React from "react";
import classes from "./BoxText.module.css";

const BoxText = ({ title_l1, title_l2, subtitle, description, btnTxt }) => {
  return (
    <section className={classes["box-text-container"]}>
      <div className="text-container">
        <h2 className="h2-subheader">
          {title_l1} <br /> {title_l2}
        </h2>
        <h4 className="h4-subheader">{subtitle}</h4>
        <p>{description}</p>
        <button className={classes["btn-action"]}>{btnTxt}</button>
      </div>
    </section>
  );
};

export default BoxText;
