import "./TodoInput.scss";
function TodoInput({ value, onChange }) {
  return (
    <input
      value={value}
      onChange={onChange}
      className="todo-input"
      type="text"
      placeholder="오늘 할 일 제목"></input>
  );
}
export default TodoInput;
