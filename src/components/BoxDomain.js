import React from "react";

import classes from "./BoxDomain.module.css";
const BoxDomain = ({ img, title, description, bgOnHover }) => {
  const onMouseEnterHandler = (e) => {
    e.currentTarget.style.backgroundColor = bgOnHover;
  };
  const onMouseOutHandler = (e) => {
    e.currentTarget.style.backgroundColor = "whitesmoke";
  };
  return (
    <div
      className={classes["domain-container"]}
      onMouseOver={onMouseEnterHandler}
      onMouseLeave={onMouseOutHandler}
    >
      <img src={img} alt={`${title} icon`} />
      <h2 className="h2-subheader">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default BoxDomain;
