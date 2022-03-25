import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {
  return (
    <div className="WeatherForecast row">
      <div className="col weekDay">
        <span className="forecast-day">{props.data.dt}</span>
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
          <i className="fas fa-long-arrow-alt-down"></i> {props.data.temp.min}°{" "}
        </span>
        <span className="max-temp">
          {" "}
          {props.data.temp.max}°<i className="fas fa-long-arrow-alt-up"></i>
        </span>
      </div>
    </div>
  );
}
