import React, { Fragment } from "react";
import "./DrawerContent.css";

const DrawerContent = () => {
  return (
    <Fragment>
      <div className="btnWrapper">
        <button className="todayBtn">Today</button>
        <button className="nextDaysBtn">Next Days</button>
      </div>
      <div className="nextHoursWeather">
        <ul className="time">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
        <div className="icon">
          <img src="#" alt="weather icon"></img>
          <img src="#" alt="weather icon"></img>
          <img src="#" alt="weather icon"></img>
          <img src="#" alt="weather icon"></img>
        </div>
        <ul className="hourlyTemp">
          <li>2</li>
          <li>2</li>
          <li>2</li>
          <li>2</li>
        </ul>
      </div>
      <div className="nextDaysWeather"></div>
    </Fragment>
  );
};
export default DrawerContent;
