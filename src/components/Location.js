import React from "react";

// Components
import Icon from "./Icon";

// Styles
import styles from "./styles/location.module.css";

function Location(props) {
  // Current day of the week
  let d = new Date();
  let weekday = d.toLocaleString("en-US", { weekday: "long" });
  let month = d.toLocaleString("en-US", { month: "short" });
  let day = d.toLocaleString("en-US", { day: "numeric" });
  let year = d.toLocaleString("en-US", { year: "numeric" });

  return (
    <div className={styles.location}>
      <div className={`small ${styles.city}`}>
        <Icon type="Location" /> <strong>Dallas, TX</strong>
      </div>
      <div className="small">
        {weekday}, {month} {day}, {year}
      </div>
    </div>
  );
}

export default Location;
