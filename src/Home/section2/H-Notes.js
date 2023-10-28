import React from "react";
import { Link } from "react-router-dom";

export default function HNotes() {
  return (
    <div className="d-flex align-items-center my-3 even justify-content-evenly mx-auto">
      <div className="desc">
        <Link to="/Notes">
          <h5>Notes</h5>
        </Link>
        <p>Never miss any idea to bring a change.</p>
        {/* <ol styletype="1">
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ol> */}
      </div>
      <div className="imgflex">
        <img
          className="h-img img-fluid"
          src="/images/notes2.png"
          alt="Notes.img"
        />
      </div>
    </div>
  );
}
