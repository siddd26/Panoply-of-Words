import React from "react";
import { Link } from "react-router-dom";

export default function HDic() {
  return (
    <div className="d-flex align-items-center my-3 odd justify-content-evenly mx-auto ">
      <div className="imgflex">
        <img
          className="h-img img-fluid"
          src="/images/dictionary2.jpg"
          alt="Dictionary.img"
        />
      </div>
      <div className="desc">
        <Link to="/Dictionary">
          <h5>Dictionary</h5>
        </Link>
        <p>Enhance your vobabulary with our dictionary.</p>
        {/* <ol styletype="1">
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ol> */}
      </div>
    </div>
  );
}
