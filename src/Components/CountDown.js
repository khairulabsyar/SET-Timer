import { useEffect, useState } from "react";

function CountDown(props) {
  const [days, hours, minutes, saat] = [
    parseInt(props.days),
    parseInt(props.hours),
    parseInt(props.minutes),
    parseInt(props.saat),
  ];

  let countDownTime =
    days * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60 + saat;

  const [countDown, setCountDown] = useState(0);

  // if do it like this, the countDown will reset infinately due to useState(countDownTime),
  // const [countDown, setCountDown] = useState(countDownTime);

  useEffect(() => {
    setCountDown(countDownTime);
  }, [props.checkInput]);

  useEffect(() => {
    if (props.checkInput) {
      const interval = setInterval(() => {
        setCountDown((x) => x - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  });

  const getReturnValues = (countDown) => {
    const days = Math.floor(countDown / (60 * 60 * 24));
    const hours = Math.floor((countDown % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((countDown % (60 * 60)) / 60);
    const saat = Math.floor(countDown % 60);

    return [days, hours, minutes, saat];
  };

  return getReturnValues(countDown);
}

export default CountDown;
