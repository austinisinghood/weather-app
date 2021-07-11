import React from "react";

// Components
import Icon from "../components/Icon";

// Styles
import styles from "./styles/day.module.css";

function Day(props) {
  // Day of the week for each item
  const unixTimestamp = props.data.dt;
  const milliseconds = unixTimestamp * 1000;
  const dateObject = new Date(milliseconds);
  const dayNumber = dateObject.getDay();
  let weekday = new Array(7);
  weekday[0] = "Sun";
  weekday[1] = "Mon";
  weekday[2] = "Tues";
  weekday[3] = "Wed";
  weekday[4] = "Thurs";
  weekday[5] = "Fri";
  weekday[6] = "Sat";

  // Daily temperature for each item
  let temp = Math.round(props.data.temp.day);
  if (props.celsius === true) {
    temp = ((temp - 32) * 5) / 9;
    temp = Math.round(temp);
  }

  // Weather type
  let type = props.data.weather[0].main;

  return (
    <div className={styles.day}>
      <div className={`medium ${styles.weekday}`}>
        {weekday[dateObject.getDay(dayNumber)]}
      </div>
      <div className={styles.weather}>
        <div className={styles.icon}>
          <Icon type={type} />
        </div>
        <div className="medium">{temp}°</div>
      </div>
    </div>
  );
}

export default Day;
