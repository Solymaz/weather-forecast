import React from "react";
import LiveWeather from "./LiveWeather";
import Search from "./Search";
import "./App.css";

function App() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
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
