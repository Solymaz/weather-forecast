import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import viewCorrector from "./viewHeightHelper";

viewCorrector();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
