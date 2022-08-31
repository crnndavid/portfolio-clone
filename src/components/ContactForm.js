import React, { useState } from "react";
import classes from "./ContactForm.module.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const showMessageHandler = (e) => {
    e.preventDefault();

    if (name === "") {
      return setErrorName(true);
    }
    if (!email.includes("@")) {
      return setErrorEmail(true);
    }

    setShowForm(!showForm);

    setShowMessage(!showMessage);
    console.log(showMessage, showForm);
  };
  return (
    <div className={classes["contact-container"]}>
      <h2 className="h2-subheader">Write us a letter</h2>
      <h4 className="h4-subheader">We appreciate you ideas</h4>
      {showForm && (
        <form>
          <div className={classes["form-group"]}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            {errorName && <p>Please enter a valid name</p>}
          </div>
          <div className={classes["form-group"]}>
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            {errorEmail && <p>Please enter a valid email</p>}
          </div>
          <div className={classes["form-group"]}>
            <label htmlFor="message">Your message</label>
            <textarea type="text" placeholder="Example Text" rows="5" />
          </div>
          <button
            onClick={showMessageHandler}
            className={classes["btn-action"]}
          >
            Submit
          </button>
        </form>
      )}
      {showMessage && (
        <div className={classes["send-message-info"]}>
          <p>Thank you! Your submission has been received!</p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
