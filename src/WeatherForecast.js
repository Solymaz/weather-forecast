import React from "react";
import { format } from "date-fns";
import "./WeatherForecast.css";

const iconMapping = {
  "01d": "day",
  "02d": "few-clouds",
  "03d": "scattered-clouds",
  "04d": "cloudy",
  "09d": "shower-rain",
  "10d": "rain",
  "11d": "thunder",
  "13d": "snow",
  "01n": "night",
  "02n": "cloudy",
  "03n": "cloudy",
  "04n": "cloudy",
  "09n": "shower-rain",
  "10n": "rainy",
  "11n": "thunder",
  "13n": "snow",
};

export default function WeatherForecast(props) {
  const forecast = {
    forecastTime: format(new Date(props.forecast.dt * 1000), "HH:mm"),
    forecastDay: format(new Date(props.forecast.dt * 1000), "iiii"),
    forecastIcon: props.forecast.weather[0].icon,
    forecastTemp: Math.round(props.forecast.main.temp),
    forecastDescription: props.forecast.weather[0].description,
  };
  return props.hourly ? (
    <div className="WeatherForecast">
      <div>{forecast.forecastTime}</div>
      <img
        src={`icons/${iconMapping[forecast.forecastIcon]}.svg`}
        alt={forecast.forecastDescription}
      />
      <div>{forecast.forecastTemp}°</div>
    </div>
  ) : (
    <div className="WeatherForecast">
      <div>{forecast.forecastDay}</div>
      <img
        src={`icons/${iconMapping[forecast.forecastIcon]}.svg`}
        alt={forecast.forecastDescription}
      />
      <div>{forecast.forecastTemp}°</div>
    </div>
  );
}
