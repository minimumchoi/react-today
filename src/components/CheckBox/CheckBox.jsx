import { useId } from "react";
import "./CheckBox.scss";

function CheckBox({ checked, onChange }) {
  const id = useId();
  return (
    <>
      <label className="sr-only" htmlFor={id}>
        한일 체크박스
      </label>
      <input
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="check-box"
        type="checkbox"
        id={id}></input>
    </>
  );
}

export default CheckBox;
