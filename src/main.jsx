import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Wave from "react-wavify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Wave
      fill="#8D42E8"
      paused={false}
      style={{ display: "flex" }}
      className="wave-1"
      options={{
        height: 20,
        amplitude: 20,
        speed: 0.15,
        points: 3,
      }}
    />

    <Wave
      fill="#a575e0"
      paused={false}
      style={{ display: "flex" }}
      className="wave-2"
      options={{
        height: 30,
        amplitude: 30,
        speed: 0.15,
        points: 4,
      }}
    />

    <Wave
      fill="#d5b5fd"
      paused={false}
      style={{ display: "flex" }}
      className="wave-3"
      options={{
        height: 30,
        amplitude: 40,
        speed: 0.15,
        points: 3,
      }}
    />
  </React.StrictMode>
);
