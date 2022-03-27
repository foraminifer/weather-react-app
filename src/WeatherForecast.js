import axios from "axios";
import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="forecast-container">
        <div>
          <WeatherForecastDay data={forecast[0]} />
        </div>
        <div>
          <WeatherForecastDay data={forecast[1]} />
        </div>
        <div>
          <WeatherForecastDay data={forecast[2]} />
        </div>
        <div>
          <WeatherForecastDay data={forecast[3]} />
        </div>
        <div>
          <WeatherForecastDay data={forecast[4]} />
        </div>
      </div>
    );
  } else {
    let apiKey = "4d2a567c086d07d567943ed0f435616c";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
