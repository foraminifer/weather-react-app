import React from "react";
import Search from "./Search";
import "./App.css";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="pageSetup">
        <h1>
          {" "}
          <div id="date"></div>
        </h1>
        <Search />
        <div className="today">
          <h1 className="current-city">Lombard, IL</h1>
          <div className="date">Saturday, February 19th 2022</div>
          <div className="last-updated">12:14</div>
        </div>
        <div className="row split-weather">
          <div className="col">
            <img
              className="todays-icon"
              src="https://openweathermap.org/img/wn/01d@2x.png"
              alt="weather-icon"
            />
            <span className="temp">
              <bold>10</bold> °C
            </span>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="variables">
              <ul>
                <li>
                  Pressure: <span id="pressure">1013</span> hPa
                </li>
                <li>
                  Humidity: <span id="humidity">10</span>%
                </li>
                <li>
                  Wind: <span id="wind">15</span> mph
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="row" className="forecast" id="forecast"></div>
    </div>
  );
}
