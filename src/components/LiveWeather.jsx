import React from "react";
import { format } from "date-fns";
import converter from "../converter";
import "./LiveWeather.css";

export default function LiveWeather({ weatherData, unit, setUnit }) {
  const formattedDate = format(new Date(weatherData.date), "iiii HH:mm");

  const feelsLike =
    unit === "celsius"
      ? weatherData.feelsLike
      : converter(weatherData.feelsLike);

  const temperature =
    unit === "celsius"
      ? weatherData.temperature
      : converter(weatherData.temperature);

  const min = unit === "celsius" ? weatherData.min : converter(weatherData.min);

  const max = unit === "celsius" ? weatherData.max : converter(weatherData.max);

  return (
    <div className="current-weather">
      <div className="liveWeather">
        <h1 className="city">{weatherData.city}</h1>
        <p className="timeDate">{formattedDate}</p>
        <h4 className="description">{weatherData.description}</h4>
        <p className="temperature">
          {" "}
          {temperature}
          <button
            className={`degree ${unit === "fahrenheit" ? "color" : ""}`}
            onClick={() => setUnit("celsius")}
          >
            °C{" "}
          </button>
          <span className="divider">|</span>
          <button
            className={`degree ${unit !== "fahrenheit" ? "color" : ""}`}
            onClick={() => setUnit("fahrenheit")}
          >
            {" "}
            F°
          </button>
        </p>
        <p className="extraInfo">feels like {feelsLike}°</p>
        <p className="extraInfo">
          Min: {min}° Max: {max}°
        </p>
        <p className="extraInfo">Wind Speed: {weatherData.wind} km/h</p>
      </div>
    </div>
  );
}
