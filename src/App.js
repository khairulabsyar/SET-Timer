import CountDownTimer from "./Components/CountDownTimer";
import "./App.css";
import { useState } from "react";

function App() {
  const [checkInput, setCheckInput] = useState(false);

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    saat: 0,
  });

  const handleChange = (event) => {
    event.preventDefault();

    const days = parseInt(event.target[0].value);
    const hours = parseInt(event.target[1].value);
    const minutes = parseInt(event.target[2].value);
    const saat = parseInt(event.target[3].value);

    setTime({
      days: days | 0,
      hours: hours | 0,
      minutes: minutes | 0,
      saat: saat | 0,
    });

    setCheckInput(true);
  };

  return (
    <>
      <div className="main-container">
        <h1>Countdown Timer</h1>
        <br />
        <form
          onSubmit={(event) => handleChange(event)}
          className="form-container"
        >
          <input type="number" name="days" placeholder="Days" />
          <input type="number" name="hours" placeholder="Hours" />
          <input type="number" name="minutes" placeholder="Minutes" />
          <input type="number" name="saat" placeholder="Seconds" />
          <button type="submit">Add Time</button>
        </form>
        <br />
        <CountDownTimer
          days={time.days}
          hours={time.hours}
          minutes={time.minutes}
          saat={time.saat}
          checkInput={checkInput}
        />
      </div>
    </>
  );
}

export default App;
