import React from "react";

// Components
import Day from "./Day";

// Styles
import styles from "./styles/forecast.module.css";

function Forecast(props) {
  return (
    <div className={styles.forecast}>
      <ul className={styles.forecast}>
        {props.weatherData.daily.map((day) => {
          return (
            <li key={day.dt}>
              <Day data={day} celsius={props.celsius} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Forecast;
