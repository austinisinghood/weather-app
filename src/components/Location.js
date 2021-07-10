import React from "react";

function Location(props) {
  // Current day of the week
  let d = new Date();
  let weekday = d.toLocaleString("en-US", { weekday: "long" });
  let month = d.toLocaleString("en-US", { month: "short" });
  let day = d.toLocaleString("en-US", { day: "numeric" });
  let year = d.toLocaleString("en-US", { year: "numeric" });

  return (
    <div className="location">
      <h1>
        <span>*ICON*</span>Dallas, TX
      </h1>
      <p className="date">
        {weekday}, {month} {day}, {year}
      </p>
    </div>
  );
}

export default Location;
