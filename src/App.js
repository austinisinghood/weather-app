import React, { useEffect, useState } from "react";

// Components
import Current from "./components/Current";
import Forecast from "./components/Forecast";
import Location from "./components/Location";

// Styles
import "./App.css";

function App() {
  let weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=32.7767&lon=-96.7970&exclude=hourly,minutely&units=imperial&appid=${process.env.REACT_APP_API_KEY}`;

  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState();

  // Create a toggle for this
  const [celsius, setCelsius] = useState(false);

  useEffect(() => {
    fetch(`${weatherURL}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setWeatherData(data);
        setLoading(false);
      });
  }, [weatherURL]);

  function handleChange() {
    setCelsius(!celsius);
  }

  return (
    <div className="App">
      {loading ? <p>It's loading</p> : <Location data={weatherData} />}
      {loading ? <p>It's loading</p> : <Current data={weatherData} />}
      <div className="toggle">
        <input
          type="checkbox"
          id="temperature"
          name="temperature"
          value={celsius}
          onChange={handleChange}
        />
        <label htmlFor="vehicle1"> C / F</label>
      </div>
      {loading ? (
        <p>It's loading</p>
      ) : (
        <Forecast weatherData={weatherData} celsius={celsius} />
      )}
    </div>
  );
}

export default App;
