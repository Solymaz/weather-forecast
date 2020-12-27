import React, { useState } from "react";
import LiveWeather from "./LiveWeather.jsx";
import Search from "./Search.jsx";
import BottomDrawer from "./BottomDrawer.jsx";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState();
  const [unit, setUnit] = useState("celsius");

  return (
    <div className="container">
      <div className="frame">
        <div className="header">
          <Search defaultCity="Stockholm" setWeatherData={setWeatherData} />{" "}
          {weatherData && (
            <LiveWeather
              weatherData={weatherData}
              setUnit={setUnit}
              unit={unit}
            />
          )}
          <a
            href="https://github.com/Solymaz/weather-forecast"
            target="_blank"
            className="fixed-bottom github"
          >
            <i class="fab fa-github fa-2x"></i>
          </a>
        </div>
        <BottomDrawer weatherData={weatherData} unit={unit} />
      </div>
    </div>
  );
}
export default App;
