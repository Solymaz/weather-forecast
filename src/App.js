import React from "react";
import LiveWeather from "./LiveWeather";
import Search from "./Search";
import BottomDrawer from "./BottomDrawer";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="frame">
        <div className="header">
          <div className="search">
            <Search />
          </div>
          <div className="current-weather">
            <LiveWeather />
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
