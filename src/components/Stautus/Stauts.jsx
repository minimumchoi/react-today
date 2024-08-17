import { useId } from "react";
import "./Status.scss";

function Status({ children, count }) {
  const id = useId();

  return (
    <div className="status">
      <input name="Status" type="radio" id={id}></input>
      <label className="status__type" htmlFor={id}>
        {children}
        <output className="status__count" type="number">
          {count}
        </output>
      </label>
    </div>
  );
}
export default Status;
