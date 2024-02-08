import React, { useEffect, useState } from "react";
import "./StopWatch.css";

function StopWatch() {
  const [time, setTime] = useState(0);
  const [running, setRunnig] = useState(false);
  let interval;
  useEffect(() => {
    if (running) {
      interval = setInterval(() => {
        setTime((preTime) => preTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [running, time]);

  const handleStart = () => {
    setRunnig(true);
  };
  const handleStop = () => {
    setRunnig(false);
  };
  const handleReset = () => {
    clearInterval(interval);
    setTime(0);
  };

  return (
    <>
      <div className="title">
        <div>Stop Watch</div>
        <p>{time / 1000}</p>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
}

export default StopWatch;
