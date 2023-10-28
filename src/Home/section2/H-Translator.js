import React from "react";
import { Link } from "react-router-dom";

export default function HTran() {
  return (
    <div className="d-flex align-items-center my-3 odd justify-content-evenly mx-auto">
      <div className="imgflex">
        <img
          className="h-img img-fluid"
          src="/images/translate2.jpg"
          alt="Translator.img"
        />
      </div>
      <div className="desc">
        <Link to="/Translator">
          <h5>Translator</h5>
        </Link>
        <p>Answer to "What is it called in my language?" is here.</p>
        {/* <ol styletype="1">
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ol> */}
      </div>
    </div>
  );
}
