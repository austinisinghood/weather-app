import React from "react";

// Components
import Day from "../components/Day";

function Forecast(props) {
  return (
    <ul className="forecast">
      {props.weatherData.daily.map((day) => {
        return (
          <li key={day.dt}>
            <Day data={day} celsius={props.celsius} />
          </li>
        );
      })}
    </ul>
  );
}

export default Forecast;
