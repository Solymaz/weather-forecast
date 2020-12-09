import React, { useState } from "react";
import LiveWeather from "./LiveWeather";
import Search from "./Search";
import BottomDrawer from "./BottomDrawer";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState();
  return (
    <div className="container">
      <div className="frame">
        <div className="header">
          <div className="search">
            <Search defaultCity="Stockholm" setWeatherData={setWeatherData} />
          </div>
          <div className="current-weather">
            {weatherData && <LiveWeather weatherData={weatherData} />}
          </div>
        </div>
        <div className="drawer">
          <BottomDrawer />
        </div>
      </div>
    </div>
  );
}
export default App;
