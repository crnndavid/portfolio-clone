import React, { useState } from "react";
import classes from "./BoxImageCreation.module.css";
const BoxImageCreation = ({ img, title, domain }) => {
  const [showInformation, setShowInformation] = useState(false);

  const showInfoHandler = () => {
    setShowInformation((prevState) => !prevState);
  };

  const hideInfoHandler = () => {
    setShowInformation((prevState) => !prevState);
  };
  return (
    <div
      className={classes["project-container"]}
      onMouseEnter={showInfoHandler}
      onMouseLeave={hideInfoHandler}
    >
      {showInformation && (
        <div className={classes["title-hover"]}>
          <div className={classes["project-inner"]}>
            <p>
              {title} <br /> {domain}
            </p>
          </div>
        </div>
      )}

      <img src={img} alt={title} className="img-fluid" />
    </div>
  );
};

export default BoxImageCreation;
