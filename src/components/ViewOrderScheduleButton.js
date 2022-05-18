import React from "react";
import { Link } from "react-router-dom";

function ViewOrderScheduleButton() {
  return (
    <div className="spaceBetween">
      <h1>Transport.ly</h1>
      <Link to="/orders">
        <button>VIEW ORDER SCHEDULE</button>
      </Link>
    </div>
  );
}

export default ViewOrderScheduleButton;
