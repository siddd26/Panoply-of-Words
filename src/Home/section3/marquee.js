import React from "react";
import Marquee from "react-fast-marquee";

export default function Knowledge() {
  return (
    <div>
      <h4>Technologies used</h4>
      <Marquee pauseOnHover={true}>
        <div className="m-item">
          <img src="/images/skills/react.png" alt="React" />
          <p>React</p>
        </div>
        <div className="m-item">
          <img src="/images/skills/mongodb.png" alt="MongoDB" />
          <p>MongoDB</p>
        </div>
        <div className="m-item">
          <img src="/images/skills/html.png" alt="HTML" />
          <p>HTML</p>
        </div>
        <div className="m-item">
          <img src="/images/skills/css.png" alt="CSS" />
          <p>CSS</p>
        </div>
        <div className="m-item">
          <img src="/images/skills/react-bootstrap.png" alt="React Bootstrap" />
          <p>React Bootstrap</p>
        </div>
      </Marquee>
    </div>
  );
}
