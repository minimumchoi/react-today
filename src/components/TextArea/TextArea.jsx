import "./TextArea.scss";
function TextArea() {
  return (
    <textarea
      className="todo-text-area"
      type="text"
      placeholder="오늘 할 일 내용을 입력합니다. 할 일 내용은 가급적 간결하고 이해하기 쉽게 요약해서 작성합니다."></textarea>
  );
}
export default TextArea;
