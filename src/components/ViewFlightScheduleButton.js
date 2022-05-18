import React from "react";
import { Link } from "react-router-dom";

function ViewFlightScheduleButton() {
  return (
    <div className="spaceBetween">
      <h1>Transport.ly</h1>
      <Link to="/">
        <button>VIEW FLIGHT SCHEDULE</button>
      </Link>
    </div>
  );
}

export default ViewFlightScheduleButton;
