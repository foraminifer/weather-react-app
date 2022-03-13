import React from "react";
import Search from "./Search";
import "./App.css";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="pageSetup">
        <div className="today">
          <div className="date">
            Saturday, February 19th 2022
            <span className="time"> 12:14</span>
          </div>
          <Search />
          <h1 className="current-city">Lombard, IL</h1>
        </div>
        <div className="row split-weather">
          <div className="col">
            <div className="d-flex">
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
          <div className="col split-weather">
            <div className="card">
              <div className="card-body">
                <div className="variables">
                  <ul>
                    <li>
                      <span id="description">Sunny</span>
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
        </div>
      </div>
      <br />
      <div class="row" className="forecast" id="forecast"></div>
    </div>
  );
}
