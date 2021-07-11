import React, { useEffect, useState } from "react";

// Components
import Current from "./components/Current";
import Forecast from "./components/Forecast";
import Loader from "./components/Loader";
import Location from "./components/Location";

// Styles
import "./base.css";
import "./assets/fonts/fonts.css";

function App() {
  // Weather API URL
  let weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=32.7767&lon=-96.7970&exclude=hourly,minutely&units=imperial&appid=${process.env.REACT_APP_API_KEY}`;

  // State
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState();
  const [celsius, setCelsius] = useState(false);

  // Get data
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

  // Handle change for toggle
  function handleChange() {
    setCelsius(!celsius);
  }

  // The F° / C° toggle
  let toggle = (
    <div class={`switch-button ${celsius}`}>
      <input
        class="switch-button-checkbox"
        type="checkbox"
        value={celsius}
        onChange={handleChange}
      ></input>
      <label class="switch-button-label" for="">
        <span class="switch-button-label-span">F°</span>
      </label>
    </div>
  );

  return (
    <main>
      {loading ? (
        <Loader />
      ) : (
        <div className="app">
          <header>
            <div className="header-current">
              <Current data={weatherData} celsius={celsius} />
            </div>
            <div className="header-toggle">{toggle}</div>
            <div className="header-image" />
            <div className="header-location">
              <Location data={weatherData} />
            </div>
          </header>
          <article>
            <Forecast weatherData={weatherData} celsius={celsius} />
          </article>
        </div>
      )}
    </main>
  );
}

export default App;
