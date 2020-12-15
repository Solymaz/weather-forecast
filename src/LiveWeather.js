import React from "react";
import { format } from "date-fns";
import "./LiveWeather.css";

export default function LiveWeather(props) {
  const formattedDate = format(new Date(props.weatherData.date), "iiii HH:mm");

  const toFahrenheit = (props) => {
    let result = Math.round((props * 9) / 5 + 32);
    return result;
  };

  const feelsLike =
    props.unit === "celsius"
      ? props.weatherData.feelsLike
      : toFahrenheit(props.weatherData.feelsLike);

  const temperature =
    props.unit === "celsius"
      ? props.weatherData.temperature
      : toFahrenheit(props.weatherData.temperature);

  const min =
    props.unit === "celsius"
      ? props.weatherData.min
      : toFahrenheit(props.weatherData.min);

  const max =
    props.unit === "celsius"
      ? props.weatherData.max
      : toFahrenheit(props.weatherData.max);

  return (
    <div className="liveWeather">
      <h1 className="city">{props.weatherData.city}</h1>
      <p className="timeDate">{formattedDate}</p>
      <h4 className="description">{props.weatherData.description}</h4>
      <p className="temperature">
        {" "}
        {temperature}
        <button
          className={`degree ${props.unit === "fahrenheit" ? "color" : ""}`}
          onClick={() => props.setUnit("celsius")}
        >
          °C{" "}
        </button>
        <span className="divider">|</span>
        <button
          className={`degree ${props.unit !== "fahrenheit" ? "color" : ""}`}
          onClick={() => props.setUnit("fahrenheit")}
        >
          {" "}
          F°
        </button>
      </p>
      <p className="extraInfo">feels like {feelsLike}°</p>
      <p className="extraInfo">
        Min: {min}° Max: {max}°
      </p>
      <p className="extraInfo">Wind Speed: {props.weatherData.wind} km/h</p>
      <p className="extraInfo">Humidity: {props.weatherData.humidity}%</p>
    </div>
  );
}
