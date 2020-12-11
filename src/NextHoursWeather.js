import React from "react";
import { format } from "date-fns";
import "./NextHoursWeather.css";

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

export default function NextHoursWeather(props) {
  const forecast = {
    forecastTime: format(new Date(props.hourlyForecast.dt * 1000), "HH:mm"),
    forecastIcon: props.hourlyForecast.weather[0].icon,
    forecastTemp: Math.round(props.hourlyForecast.main.temp),
    forecastDescription: props.hourlyForecast.weather[0].description,
  };
  return (
    <div className="nextHoursWeather">
      <div>{forecast.forecastTime}</div>
      <img
        src={`icons/${iconMapping[forecast.forecastIcon]}.svg`}
        alt={forecast.forecastDescription}
      />
      <div>{forecast.forecastTemp}°</div>
    </div>
  );
}
