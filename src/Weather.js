import React, { useState } from "react";
import Search from "./Search";
import axios from "axios";
import "./App.css";
import "./Weather.css";
import FormatDate from "./FormatDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      description: response.data.weather[0].description,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="pageSetup">
          <div className="today">
            <div className="date">
              <FormatDate date={weatherData.date} />
            </div>
            <Search />
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
    let apiKey = "4d2a567c086d07d567943ed0f435616c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
