import { useId } from "react";
import "./CheckBoxArchive.scss";

function CheckBoxArchive() {
  const id = useId();
  return (
    <>
      <label className="sr-only" htmlFor={id}>
        저장 체크박스
      </label>
      <input className="archive-check-box" type="checkbox" id={id}></input>
    </>
  );
}

export default CheckBoxArchive;
