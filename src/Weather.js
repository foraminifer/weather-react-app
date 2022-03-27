import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import "./Weather.css";
import FormatDate from "./FormatDate";
import TempConversion from "./TempConversion";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
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
  function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "4d2a567c086d07d567943ed0f435616c";
    let apiurl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiurl).then(handleResponse);
  }

  function getCurrentPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showPosition);
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
                  <input
                    type="submit"
                    value="Search"
                    class="button"
                    onClick={handleSubmit}
                  />
                  <button
                    type="button"
                    id="currentLocation"
                    class="button"
                    onClick={getCurrentPosition}
                  >
                    <i className="fas fa-location-arrow location-icon"></i>
                  </button>
                </div>
              </form>
            </div>
            <h1 className="current-city">{weatherData.city}</h1>
          </div>
          <div className="row split-weather">
            <div className="col">
              <div className="today-container">
                <div className="d-flex">
                  <img
                    className="todays-icon"
                    src={weatherData.iconUrl}
                    alt="weather-icon"
                  />
                  <span className="temp">
                    <TempConversion temp={weatherData.temperature} />
                  </span>
                </div>
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
                        <i className="fas fa-tint"></i> Humidity:{" "}
                        <span id="humidity">{weatherData.humidity}</span>%
                      </li>
                      <li>
                        <i className="fas fa-wind"></i> Wind:{" "}
                        <span id="wind">{weatherData.wind}</span> mph
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
