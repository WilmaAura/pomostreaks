import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [timeLeft, siteTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        siteTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const formatTime = (seconds: number): string => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };
  return (
    <div style={{ position: "relative" }}>
      <div>
        <button className="closeBtn">Close</button>
      </div>

      <div className="home-content">
        <div className="home-controls">
          <button className="image-button">Work</button>
          <button className="image-button">Break</button>
        </div>
        <p> You can do it!</p>
        <h1 className="home-timer">50:00</h1>
        <button className="home-button">Start</button>
      </div>
    </div>
  );
}

export default App;
