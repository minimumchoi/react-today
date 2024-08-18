import { createRoot } from "react-dom/client";
import Button from "./components/Button/Button";
import CheckBox from "./components/CheckBox/CheckBox";
import CheckBoxArchive from "./components/CheckBoxArchive/CheckBoxArchive";
import Status from "./components/Stautus/Stauts";
import TimeSelectBox from "./components/TimeSelectBox/TimeSelectBox";
import SetTime from "./components/SetTime/SetTime";
import TodoInput from "./components/TodoInput/TodoInput";
import TextArea from "./components/TextArea/TextArea";

const container = document.getElementById("root");
createRoot(container).render(
  <>
    <Button name={"+ 생각났어?"} type={"primary"} />
    <Button name={"레이블"} type={"secondary"} />
    <Button name={"레이블"} type={"disabled"} />
    <CheckBox />
    <CheckBox />
    <CheckBoxArchive />
    <CheckBoxArchive />
    <Status count={3}>모두</Status>
    <Status count={0}>할일</Status>
    <Status count={1}>한일</Status>
    <Status count={2}>보관</Status>
    <TimeSelectBox />
    <SetTime />
    <TodoInput />
    <TextArea />
  </>
);
