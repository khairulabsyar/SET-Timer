function DateTimeDisplay(props) {
  return (
    <>
      <div className="countdown">
        <p>{props.values}</p>
        <span>{props.type}</span>
      </div>
    </>
  );
}

export default DateTimeDisplay;
