import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Weds",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }
  return (
    <div className="WeatherForecast row">
      <div className="col weekDay">
        <span className="forecast-day">{day()}</span>
      </div>
      <div className="col">
        <span className="forecast-icon">
          <WeatherIcon
            icon={props.data.weather[0].icon}
            description={props.data.weather[0].description}
            width="54px"
          />
        </span>
      </div>
      <div className="col">
        <span className="min-temp">
          <i className="fas fa-long-arrow-alt-down"></i> {minTemperature()}{" "}
        </span>
        <span className="max-temp">
          {" "}
          {maxTemperature()}
          <i className="fas fa-long-arrow-alt-up"></i>
        </span>
      </div>
    </div>
  );
}
