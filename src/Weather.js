import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import "./Weather.css";
import FormatDate from "./FormatDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function search() {
    let apiKey = "4d2a567c086d07d567943ed0f435616c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="pageSetup">
          <div className="today">
            <div className="date">
              <FormatDate date={weatherData.date} />
            </div>
            <div className="Search">
              <form onSubmit={handleSubmit}>
                <div className="search" id="search-form">
                  <input
                    type="text"
                    id="city-input"
                    class="input"
                    placeholder="Enter a City"
                    onChange={handleCityChange}
                  />
                  <input type="submit" value="Search" class="button" />
                  <button type="button" id="currentLocation" class="button">
                    <i className="fas fa-location-arrow location-icon"></i>
                  </button>
                </div>
              </form>
            </div>
            <h1 className="current-city">{weatherData.city}</h1>
          </div>
          <div className="row split-weather">
            <div className="col">
              <div className="d-flex">
                <img
                  className="todays-icon"
                  src={weatherData.iconUrl}
                  alt="weather-icon"
                />
                <span className="temp">
                  <bold>{weatherData.temperature}</bold> °C
                </span>
              </div>
            </div>
            <div className="col split-weather">
              <div className="card">
                <div className="card-body">
                  <div className="variables">
                    <ul>
                      <li>
                        <span id="description">{weatherData.description}</span>
                      </li>
                      <li>
                        Humidity:{" "}
                        <span id="humidity">{weatherData.humidity}</span>%
                      </li>
                      <li>
                        Wind: <span id="wind">{weatherData.wind}</span> mph
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
