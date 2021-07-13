import React from "react";

// Styles
import styles from "./styles/image.module.css";

function Image(props) {
  let weatherType = "";
  switch (props.data.current.weather[0].main) {
    // Atmosphere
    case "Mist":
    case "Smoke":
    case "Haze":
    case "Dust":
    case "Fog":
    case "Sand":
    case "Ash":
    case "Squall":
      weatherType = "atmosphere";
      break;
    case "Tornado":
      weatherType = "tornado";
      break;
    // Clear
    case "Clear":
      weatherType = "clear";
      break;
    // Clouds
    case "Clouds":
      weatherType = "clouds";
      break;
    // Drizzle
    case "Drizzle":
      weatherType = "drizzle";
      break;
    // Rain
    case "Rain":
      weatherType = "rain";
      break;
    // Snow
    case "Snow":
      weatherType = "snow";
      break;
    // Thunderstorm
    case "Thunderstorm":
      weatherType = "thunderstorm";
      break;
    // Default
    default:
      weatherType = "default";
  }

  return <div className={`${styles.image} ${styles[`${weatherType}`]}`} />;
}

export default Image;
