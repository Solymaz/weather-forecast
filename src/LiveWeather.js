import React from "react";
import { format } from "date-fns";
import "./LiveWeather.css";

const LiveWeather = (props) => {
  const formattedDate = format(new Date(props.weatherData.date), "iiii HH:mm");

  return (
    <div className="liveWeather">
      <h1 className="city">{props.weatherData.city}</h1>
      <p className="timeDate">{formattedDate}</p>
      <h4 className="description">{props.weatherData.description}</h4>
      <p className="temperature">
        {props.weatherData.temperature}
        <span className="Cdegree">°C</span>
      </p>
      <p className="extraInfo">feels like {props.weatherData.feelsLike}°</p>
      <p className="extraInfo">
        Min: {props.weatherData.min}° Max: {props.weatherData.max}°
      </p>
      <p className="extraInfo">Wind Speed: {props.weatherData.wind} km/h</p>
      <p className="extraInfo">Humidity: {props.weatherData.humidity}%</p>
    </div>
  );
};
export default LiveWeather;
