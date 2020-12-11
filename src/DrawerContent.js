import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import NextHoursWeather from "./NextHoursWeather";

import "./DrawerContent.css";

export default function DrawerContent(props) {
  const [hourlyForecast, setHourlyForecast] = useState();
  useEffect(() => {
    const weatherForecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.weatherData.city}&appid=5e1277f84407bf053cd7996650ef4d22&units=metric`;
    axios
      .get(weatherForecastApiUrl)
      .then(handleforecastResponse)
      .catch(() => {});
  }, []);

  function handleforecastResponse(response) {
    setHourlyForecast(response.data);
    console.log(response.data);
  }

  return (
    <Fragment>
      <div className="btnWrapper">
        <button className="todayBtn">Today</button>
        <button className="nextDaysBtn">Next Days</button>
      </div>
      {hourlyForecast &&
        hourlyForecast.list.slice(0, 4).map(function (hourlyForecast) {
          return <NextHoursWeather hourlyForecast={hourlyForecast} />;
        })}
      <div className="nextDaysWeather"></div>
    </Fragment>
  );
}
