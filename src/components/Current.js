import React from "react";

// Components
import Icon from "./Icon";

// Styles
import styles from "./styles/current.module.css";

function Current(props) {
  // Daily temperature for each item
  let temp = Math.round(props.data.current.temp);
  if (props.celsius === true) {
    temp = ((temp - 32) * 5) / 9;
    temp = Math.round(temp);
  }

  return (
    <div className={styles.current}>
      <div className={`large ${styles.temp}`}>{temp}°</div>
      <div className={styles.icon}>
        <Icon type={props.data.current.weather[0].main} />
      </div>
      <div className={styles.conditions}>
        <div className="small">{props.data.current.weather[0].main}</div>
        <div className="small">
          {Math.round(props.data.current.wind_speed)} mph
        </div>
      </div>
    </div>
  );
}

export default Current;
