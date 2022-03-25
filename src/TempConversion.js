import React, { useState } from "react";
import "./Weather.css";

export default function TempConversion(props) {
  let [degree, setDegree] = useState(true);
  function setCel(event) {
    event.preventDefault();

    setDegree(true);
  }
  function setFah(event) {
    event.preventDefault();

    setDegree(false);
  }

  if (degree) {
    return (
      <span className="main-temp">
        {props.temp}{" "}
        <small>
          °C |
          <a href="/" onClick={setFah} rel="noopener noreferrer">
            °F
          </a>
        </small>
      </span>
    );
  } else {
    return (
      <span>
        {Math.round((props.temp * 9) / 5 + 32)}{" "}
        <small>
          <a href="/" onClick={setCel} rel="noopener noreferrer">
            °C
          </a>{" "}
          | °F
        </small>
      </span>
    );
  }
}
