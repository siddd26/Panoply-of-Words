import React from "react";
import "./about.css";
function About() {
  return (
    <div>
      <h1>About Us</h1>
      <h2 className="display-5 justify-content-center">The Team</h2>

      <div className="sec justify-content-around grid">
        <div className=".g-col-lg-4 align-items-center p-2">
          <a href="https://www.linkedin.com/in/murlidhar-bansal-72a79a1bb/">
            <img
              className="teamimg"
              src="/images/team-members/Murlidhar.jpg"
              alt="Murlidhar Bansal"
            />
            <br />
            Murlidhar Bansal
          </a>
          {/* <br /> */}
        </div>
        <div className=".g-col-4 align-items-center p-2">
          <a href="https://www.linkedin.com/in/26siddharth/">
            <img
              className="teamimg"
              src="/images/team-members/Siddharth.jpg"
              alt="Siddharth Prajapti"
            />
            <br />
            Siddharth Prajapati
          </a>
          <br />
        </div>
      </div>
    </div>
  );
}

export default About;
