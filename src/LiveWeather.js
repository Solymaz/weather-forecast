import React from "react";
import "./LiveWeather.css";

const LiveWeather = () => {
  return (
    <div className="liveWeather">
      <h1>Tehran</h1>
      <h3>rainy</h3>
      <p className="temperature">12</p>
      <p>Min: Max:</p>
      <p>Wind Speed:</p>
      <p>Humidity:</p>
    </div>
  );
};
export default LiveWeather;
