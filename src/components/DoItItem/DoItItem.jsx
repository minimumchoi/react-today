import { useState } from "react";
import CheckBox from "../CheckBox/CheckBox";
import CheckBoxArchive from "../CheckBoxArchive/CheckBoxArchive";
import "./DoItItem.scss";
import { useEffect } from "react";
import { useRef } from "react";

function DoItItem({ title, subTitle, timeRange, time, onCheckChange }) {
  const [isChecked, setIsChecked] = useState(false);
  const titleRef = useRef(null);

  const handleCheckChange = (checked) => {
    setIsChecked(checked);

    if (onCheckChange) {
      onCheckChange(title, checked); // title 또는 다른 식별자를 통해 부모에게 체크 상태를 전달
    }
  };

  useEffect(() => {
    if (isChecked) {
      titleRef.current.classList.add("checked");
    } else {
      titleRef.current.classList.remove("checked");
    }
  }, [isChecked]);

  return (
    <article className="do-it-item">
      <div className="do-it-item__todo">
        <div>
          <h3 ref={titleRef}>{title}</h3>
          <p>{subTitle}</p>
        </div>
        <CheckBox checked={isChecked} onChange={handleCheckChange} />
      </div>
      <div className="do-it-item__time">
        <div>
          <span>{time}</span>
          <output>
            {timeRange.startTime}-{timeRange.endTime}
          </output>
        </div>
        <CheckBoxArchive />
      </div>
    </article>
  );
}

export default DoItItem;
