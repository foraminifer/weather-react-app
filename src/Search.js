import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <div className="search" id="search-form">
          <input
            type="text"
            id="city-input"
            class="input"
            placeholder="Enter a City"
          />
          <input type="submit" value="Search" class="button" />
          <button type="button" id="currentLocation" class="button">
            <i className="fas fa-location-arrow location-icon"></i>
          </button>
        </div>
      </form>
    </div>
  );
}
