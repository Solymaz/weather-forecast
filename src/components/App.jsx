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
          <div className="search">
            <Search defaultCity="Stockholm" setWeatherData={setWeatherData} />
          </div>
          <div className="current-weather">
            {weatherData && (
              <LiveWeather
                weatherData={weatherData}
                setUnit={setUnit}
                unit={unit}
              />
            )}
          </div>
        </div>
        <div className="drawer">
          <BottomDrawer weatherData={weatherData} unit={unit} />
        </div>
      </div>
    </div>
  );
}
export default App;
