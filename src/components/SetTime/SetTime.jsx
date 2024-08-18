import "./SetTime.scss";

function SetTime() {
  return (
    <div className="time-box">
      <input
        type="text"
        placeholder="00:00"
        maxLength={5}
        pattern="(0[0-9]|1[0-1]):([0-5][0-9])"
      />
      <span>-</span>
      <input
        type="text"
        placeholder="00:00"
        maxLength={5}
        pattern="(0[0-9]|1[0-1]):([0-5][0-9])"
      />
    </div>
  );
}

export default SetTime;
