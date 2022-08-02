import React from "react";
import classes from "./BoxReview.module.css";
const BoxReview = ({ title1, title2, subtitle, citation, author }) => {
  return (
    <section className={classes["box-review-container"]}>
      <div className="text-container">
        <h2 className="h2-subheader">
          {title1} <br /> {title2}
        </h2>
        <h4 className="h4-subheader">{subtitle}</h4>
        <p className="mt-5 quote-text">
          <em>
            {citation} <br /> {author}
          </em>
        </p>
      </div>
    </section>
  );
};

export default BoxReview;
