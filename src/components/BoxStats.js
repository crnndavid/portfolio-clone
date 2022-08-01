import React from "react";
import classes from "./BoxStats.module.css";

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
    <section className={classes["stats-container"]}>
      {stats.map((stat, index) => (
        <div key={index}>
          <h2 className="h2-subheader">{stat.numberOf}</h2>
          <h4 className="h4-subheader">{stat.subject}</h4>
        </div>
      ))}
    </section>
  );
};

export default BoxStats;
