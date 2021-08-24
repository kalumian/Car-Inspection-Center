import React from "react";

function Card_stats({ title, icon, bg, count }) {
  return (
    <div className="col-md-4">
      <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
        <div>
          <h3 className="fs-2">{count}</h3>
          <p className="fs-5">{title}</p>
        </div>
        <i
          className={
            icon + "  fs-1 primary-text border rounded-full secondary-bg p-3"
          }
        ></i>
      </div>
    </div>
  );
}

export default Card_stats;
