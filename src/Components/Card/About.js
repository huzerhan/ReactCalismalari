import React from "react";
import email from "./email.ico";
import linkedin from "./linkedin.png";

function About() {
  return (
    <div className="about">
      <div className="btn-container">
        <button className="btn btn-email">
          <img src={email} />
          E-mail
        </button>
        <button className="btn btn-linkedin">
          <img src={linkedin} />
          LinkedIn
        </button>
      </div>
      <div className="info">
        <h3>About</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <h3>Interest</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
}
export default About;
