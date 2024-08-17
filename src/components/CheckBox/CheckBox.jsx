import { useId } from "react";
import "./CheckBox.scss";

function CheckBox() {
  const id = useId();
  return (
    <>
      <label className="sr-only" htmlFor={id}>
        한일 체크박스
      </label>
      <input className="check-box" type="checkbox" id={id}></input>
    </>
  );
}

export default CheckBox;
