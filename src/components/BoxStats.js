import React from "react";
import classes from "./BoxStats.module.css";
import Col from "react-bootstrap/Col";

const BoxStats = () => {
  const stats = [
    {
      numberOf: 342,
      subject: "Cups of coffe",
    },
    {
      numberOf: 756,
      subject: "Bicycle kilometers",
    },
    {
      numberOf: 419,
      subject: "Brainstorm sessions",
    },
    {
      numberOf: 284,
      subject: "Video hours",
    },
  ];
  return (
    <>
      {stats.map((stat, index) => (
        <Col xs={6} key={index} className={classes["stats-container"]}>
          <h2 className="h2-subheader">{stat.numberOf}</h2>
          <h4 className="h4-subheader">{stat.subject}</h4>
        </Col>
      ))}
    </>
  );
};

export default BoxStats;
