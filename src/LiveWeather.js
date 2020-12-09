import React, { useState } from "react";
import "./LiveWeather.css";

const LiveWeather = (props) => {
  return (
    <div className="liveWeather">
      <h1 className="city">{props.weatherData.city}</h1>
      <h4>{props.weatherData.description}</h4>
      <p className="temperature">
        {props.weatherData.temperature}
        <span className="Cdegree">°C</span>
      </p>
      <p className="extraInfo">
        Min: {props.weatherData.min}°C Max: {props.weatherData.max}°C
      </p>
      <p className="extraInfo">Wind Speed: {props.weatherData.wind} km/h</p>
      <p className="extraInfo">Humidity: {props.weatherData.humidity}%</p>
    </div>
  );
};
export default LiveWeather;
