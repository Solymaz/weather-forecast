import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Search.css";

export default function Search(props) {
  const [showError, setShowError] = useState(false);
  const [city, setCity] = useState(props.defaultCity);
  useEffect(() => {
    showWeather();
  }, []);

  function handleResponse(response) {
    props.setWeatherData({
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
    props.setWeatherData({
      temperature: Math.round(response.data.list[0].main.temp),
      description: response.data.list[0].weather[0].description,
      wind: Math.round(response.data.list[0].wind.speed),
      city: response.data.city.name,
      min: Math.round(response.data.list[0].main.temp_min),
      max: Math.round(response.data.list[0].main.temp_max),
      date: response.data.list[0].dt * 1000,
      feelsLike: Math.round(response.data.list[0].main.feels_like),
    });
  }

  function showWeather() {
    let currentWeatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f2ba4b7c95e0f3e8dedeafe2da9d569f&units=metric`;
    axios.get(currentWeatherApiUrl).then(handleResponse).catch(handleError);
  }
  function handleError() {
    setShowError(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    showWeather();
    event.target.children[0].blur();
    event.target.reset();
    setShowError(false);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  function getCoords(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(findLiveLocation);
    setShowError(false);
  }

  function findLiveLocation(GPS) {
    const lon = GPS.coords.longitude;
    const lat = GPS.coords.latitude;
    let locationApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=f2ba4b7c95e0f3e8dedeafe2da9d569f&units=metric`;
    axios
      .get(locationApiUrl)
      .then(handleLocation)
      .catch(() => {});
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          className="searchBox"
          placeholder="Type a city.."
          onChange={changeCity}
        />
        <span onClick={getCoords} className="pin">
          📍
        </span>
        {showError && <div className="error">The city couldn't be found!</div>}
      </form>
    </>
  );
}
