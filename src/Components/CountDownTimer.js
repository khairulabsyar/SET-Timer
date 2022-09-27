import CountDown from "./CountDown";
import ExpiredNotice from "./ExpiredNotice";
import ShowCounter from "./ShowCounter";

function CountDownTimer(props) {
  const [days, hours, minutes, saat] = CountDown(props);

  if (days + hours + minutes + saat <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter days={days} hours={hours} minutes={minutes} saat={saat} />
    );
  }
}

export default CountDownTimer;
