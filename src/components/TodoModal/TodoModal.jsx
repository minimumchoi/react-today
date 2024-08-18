import { useState } from "react";
import Button from "../Button/Button";
import SetTime from "../SetTime/SetTime";
import TextArea from "../TextArea/TextArea";
import TimeSelectBox from "../TimeSelectBox/TimeSelectBox";
import TodoInput from "../TodoInput/TodoInput";
import "./TodoModal.scss";
import { setStorageData } from "@/utils/webStorage";

function TodoModal({ forwardRef = { current: null }, onSave }) {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoSubTitle, setTodoSubTitle] = useState("");
  const [selectedItem, setSelectedItem] = useState("오전");
  const [timeRange, setTimeRange] = useState({ startTime: "", endTime: "" });

  const handleSave = () => {
    const modal = forwardRef.current;
    const todoData = {
      title: todoTitle,
      subTitle: todoSubTitle,
      time: selectedItem,
      timeRange: timeRange,
    };
    onSave(todoData);

    // setTodoTitle(null);
    // setTodoSubTitle(null);
    // setSelectedItem(null);
    // setTimeRange(null);

    modal.classList.remove("active");
  };

  const handleCancel = () => {
    const modal = forwardRef.current;
    modal.classList.remove("active");
  };

  return (
    <dialog ref={forwardRef} className="todo-modal">
      <div>
        <h3>오늘 뭐할래?</h3>
        <TodoInput
          value={todoTitle}
          onChange={(e) => {
            setTodoTitle(e.target.value);
          }}
        />
      </div>
      <div>
        <h3>간단히 적어볼까?</h3>
        <TextArea
          value={todoSubTitle}
          onChange={(e) => {
            setTodoSubTitle(e.target.value);
          }}
        />
      </div>
      <div>
        <h3>언제 할거야?</h3>
        <div>
          <TimeSelectBox
            onTimeChange={(time) => {
              setSelectedItem(time);
            }}
            selectedItem={selectedItem}
          />
          <SetTime onTimeChange={(range) => setTimeRange(range)} />
        </div>
      </div>
      <div>
        <Button onClick={handleSave} type="primary">
          저장
        </Button>
        <Button onClick={handleCancel} type="secondary">
          취소
        </Button>
      </div>
    </dialog>
  );
}

export default TodoModal;
