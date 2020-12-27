import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Search.css";

export default function Search({ defaultCity, setWeatherData, setForecast }) {
  const [showCityError, setShowCityError] = useState(false);
  const [showLocationError, setShowLocationError] = useState(false);
  const [city, setCity] = useState(defaultCity);
  useEffect(() => {
    showWeather();
    weatherForecast(city);
  }, []);

  function handleResponse(response) {
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      min: Math.round(response.data.main.temp_min),
      max: Math.round(response.data.main.temp_max),
      date: response.data.dt * 1000,
      feelsLike: Math.round(response.data.main.feels_like),
    });
  }

  function handleLocation(response) {
    setWeatherData({
      temperature: Math.round(response.data.list[0].main.temp),
      description: response.data.list[0].weather[0].description,
      wind: Math.round(response.data.list[0].wind.speed),
      city: response.data.city.name,
      min: Math.round(response.data.list[0].main.temp_min),
      max: Math.round(response.data.list[0].main.temp_max),
      date: response.data.list[0].dt * 1000,
      feelsLike: Math.round(response.data.list[0].main.feels_like),
    });
    weatherForecast(response.data.city.name);
  }

  function showWeather() {
    let currentWeatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f2ba4b7c95e0f3e8dedeafe2da9d569f&units=metric`;
    axios
      .get(currentWeatherApiUrl)
      .then(handleResponse)
      .catch(() => setShowCityError(true));
  }

  function handleSubmit(event) {
    event.preventDefault();
    showWeather();
    weatherForecast(city);
    event.target.children[0].blur();
    event.target.reset();
    setShowCityError(false);
    setShowLocationError(false);
  }

  function getCoordinates(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(findLiveLocation);
    setShowCityError(false);
    setShowLocationError(false);
  }

  function findLiveLocation(GPS) {
    const lon = GPS.coords.longitude;
    const lat = GPS.coords.latitude;
    let locationApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=f2ba4b7c95e0f3e8dedeafe2da9d569f&units=metric`;
    axios
      .get(locationApiUrl)
      .then(handleLocation)
      .catch(() => setShowLocationError(true));
  }

  function weatherForecast(city) {
    const weatherForecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=5e1277f84407bf053cd7996650ef4d22&units=metric`;
    axios
      .get(weatherForecastApiUrl)
      .then((response) => {
        setForecast(response.data);
      })
      .catch(() => {});
  }

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          className="searchBox"
          placeholder="Type a city.."
          onChange={(event) => setCity(event.target.value)}
        />
        <span onClick={getCoordinates} className="pin">
          📍
        </span>
        {showCityError && (
          <div className="error">
            The city not found! <br /> Check spelling!
          </div>
        )}
        {showLocationError && (
          <div className="error">
            Location not found! <br /> Make sure you allow the app to locate you
          </div>
        )}
      </form>
    </div>
  );
}
