import React from "react";
import LiveWeather from "./LiveWeather";
import Search from "./Search";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="frame">
        <div className="search">
          <Search />
        </div>
        <div className="current-weather">
          <LiveWeather />
        </div>
      </div>
    </div>
  );
}
export default App;
