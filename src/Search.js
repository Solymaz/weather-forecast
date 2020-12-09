import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Search.css";

const Search = (props) => {
  const [city, setCity] = useState(props.defaultCity);
  useEffect(() => {
    //eslint-disable-line react-hooks/exhaustive-deps
    showWeather();
  }, []);

  function handleResponse(response) {
    props.setWeatherData({
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
      min: Math.round(response.data.main.temp_min),
      max: Math.round(response.data.main.temp_max),
    });
  }

  function showWeather() {
    let currentWeatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f2ba4b7c95e0f3e8dedeafe2da9d569f&units=metric`;
    axios
      .get(currentWeatherApiUrl)
      .then(handleResponse)
      .catch(() => {});
  }

  function handleSubmit(event) {
    event.preventDefault();
    showWeather();
    event.target.reset();
  }
  function changeCity(event) {
    setCity(event.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        className="searchBox"
        placeholder="Type a city.."
        onChange={changeCity}
      />
    </form>
  );
};

export default Search;
