import DateTimeDisplay from "./DateTimeDisplay";

function ShowCounter(props) {
  return (
    <>
      <div className="show-counter">
        <DateTimeDisplay values={props.days} type={"Days"}>
          <p>:</p>
        </DateTimeDisplay>
        <DateTimeDisplay values={props.hours} type={"Hours"}>
          <p>:</p>
        </DateTimeDisplay>
        <DateTimeDisplay values={props.minutes} type={"Minutes"}>
          <p>:</p>
        </DateTimeDisplay>
        <DateTimeDisplay values={props.saat} type={"Seconds"}>
          <p>:</p>
        </DateTimeDisplay>
        <p></p>
      </div>
    </>
  );
}

export default ShowCounter;
