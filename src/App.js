import React, { useEffect, useState } from "react";

// Components
import Current from "./components/Current";
import Forecast from "./components/Forecast";
import Icon from "./components/Icon";
import Image from "./components/Image";
import Loader from "./components/Loader";
import Location from "./components/Location";

// Styles
import "./base.css";
import "./assets/fonts/fonts.css";

function App() {
  // Set lat and long
  const [lat, setLat] = useState("32.7767");
  const [long, setLong] = useState("96.7970");

  // Weather API URL
  let weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=-${long}&exclude=hourly,minutely&units=imperial&appid=${process.env.REACT_APP_API_KEY}`;

  // Loading, data, celsius, and modal state
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState();
  const [celsius, setCelsius] = useState(false);
  const [modal, setModal] = useState(false);

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

  // Handle change for celsius toggle
  function handleCelsiusChange() {
    setCelsius(!celsius);
  }

  // The F° / C° toggle
  let toggle = (
    <div className={`switch-button ${celsius}`}>
      <input
        className="switch-button-checkbox"
        type="checkbox"
        value={celsius}
        onChange={handleCelsiusChange}
      ></input>
      <label className="switch-button-label" htmlFor="">
        <span className="switch-button-label-span">F°</span>
      </label>
    </div>
  );

  // Toggle modal
  function toggleModal() {
    setModal(!modal);
  }

  // Close modal
  function closeModal() {
    setModal(false);
  }

  // Handle lat/long change
  function handleLatLongChange(e) {
    setLat(e.target.value);
    setLong(e.target.value);
    setModal(false);
  }

  // Modal
  let modalContainer = (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-header">
          <div className="medium modal-title">Settings</div>
          <div className="close-modal" onClick={closeModal}>
            <Icon type="Close" />
          </div>
        </div>
        <div className="modal-content">
          <input type="text" value={lat} />
          <input type="text" value={long} />
          <button onClick={handleLatLongChange}>Click</button>
        </div>
      </div>
    </div>
  );

  return (
    <main>
      {modal ? modalContainer : ""}
      {loading ? (
        <Loader />
      ) : (
        <div className="app">
          <header>
            <div className="header-current">
              <Current data={weatherData} celsius={celsius} />
            </div>
            <div className="header-toggle">{toggle}</div>
            <div className="header-image">
              <Image data={weatherData} />
            </div>
            <div className="header-location">
              <Location data={weatherData} />
              <div className="settings-link" onClick={toggleModal}>
                Settings
              </div>
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
