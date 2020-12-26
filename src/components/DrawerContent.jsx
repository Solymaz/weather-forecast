import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { isSameDay } from "date-fns";
import WeatherForecast from "./WeatherForecast.jsx";
import "./DrawerContent.css";

const indexes = [4, 12, 20, 28, 36];

export default function DrawerContent(props) {
  const [forecast, setForecast] = useState();
  const [showToday, setShowToday] = useState(true);

  function handleForecastResponse(response) {
    setForecast(response.data);
  }
  useEffect(() => {
    const weatherForecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.weatherData.city}&appid=5e1277f84407bf053cd7996650ef4d22&units=metric`;
    axios
      .get(weatherForecastApiUrl)
      .then(handleForecastResponse)
      .catch(() => {});
  }, []);

  return (
    <Fragment>
      <div className="btnWrapper">
        <button
          className={`btn ${showToday && "btnActive"}`}
          onClick={() => setShowToday(true)}
        >
          Today
        </button>
        <button
          onClick={() => setShowToday(false)}
          className={`btn ${!showToday && " btnActive"}`}
        >
          Next Days
        </button>
      </div>
      {forecast &&
        //show the hourly forecast for the first 4 available forecasts
        (showToday
          ? forecast.list
              .slice(0, 4)
              .map((forecast, i) => (
                <WeatherForecast
                  key={i}
                  forecast={forecast}
                  hourly={showToday}
                  unit={props.unit}
                />
              ))
          : indexes
              //check if the first coming days is the same as today
              .map((i) => {
                const forecast2 = forecast.list[i];
                const shouldShow = !isSameDay(
                  new Date(forecast2.dt * 1000),
                  new Date()
                );

                if (shouldShow) {
                  return i;
                }
                return undefined;
              })
              .filter((i) => i !== undefined)
              //show the daily forecast for the next 4 days
              .slice(0, 4)
              .map((i) => (
                <WeatherForecast
                  key={i}
                  forecast={forecast.list[i]}
                  hourly={showToday}
                  unit={props.unit}
                />
              )))}
    </Fragment>
  );
}
