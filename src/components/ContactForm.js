import React from "react";
import classes from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <div className={classes["contact-container"]}>
      <h2 className="h2-subheader">Write us a letter</h2>
      <h4 className="h4-subheader">We appreciate you ideas</h4>
      <form>
        <div className={classes["form-group"]}>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>
        <div className={classes["form-group"]}>
          <label htmlFor="email">Email Address</label>
          <input type="text" placeholder="Enter your email address" />
        </div>
        <div className={classes["form-group"]}>
          <label htmlFor="message">Your message</label>
          <textarea type="text" placeholder="Example Text" rows="5" />
        </div>
        <button className={classes["btn-action"]}>Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
