import { useState } from "react";
import "./SetTime.scss";
import { useEffect } from "react";

function SetTime({ onTimeChange }) {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  // 입력값이 변경될 때마다 콜백 함수를 호출합니다.
  useEffect(() => {
    onTimeChange({ startTime, endTime });
  }, [startTime, endTime]);

  return (
    <div className="time-box">
      <input
        type="text"
        placeholder="00:00"
        maxLength={5}
        pattern="(0[0-9]|1[0-1]):([0-5][0-9])"
        onChange={(e) => setStartTime(e.target.value)}
      />
      <span>-</span>
      <input
        type="text"
        placeholder="00:00"
        maxLength={5}
        pattern="(0[0-9]|1[0-1]):([0-5][0-9])"
        onChange={(e) => setEndTime(e.target.value)}
      />
    </div>
  );
}

export default SetTime;
