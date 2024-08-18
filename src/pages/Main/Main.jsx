import Button from "@/components/Button/Button";
import DateToday from "@/components/DateToday/DateToday";
import DoItItem from "@/components/DoItItem/DoItItem";
import Logo from "@/components/Logo/Logo";
import Status from "@/components/Stautus/Stauts";
import TodoModal from "@/components/TodoModal/TodoModal";
import { useRef } from "react";
import "./Main.scss";
import { getStorageData, setStorageData } from "@/utils/webStorage";
import { useState } from "react";
import { useEffect } from "react";

function Main() {
  const todoModal = useRef(null);

  const handleModal = () => {
    todoModal.current.classList.add("active");
  };

  const [items, setItems] = useState();

  const fetchData = () => {
    const storedData = getStorageData("todo");
    setItems(storedData);
    console.log(storedData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSave = (todoData) => {
    const updatedItems = todoData;
    setStorageData("todo", updatedItems);
    setItems(updatedItems);
  };

  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckChange = (title, checked) => {
    setCheckedItems((prevCheckedItems) => {
      if (checked) {
        // 체크된 항목을 배열에 추가

        return [...prevCheckedItems, title];
      } else {
        // 체크 해제된 항목을 배열에서 제거
        return prevCheckedItems.filter((item) => item !== title);
      }
    });
    console.log(checkedItems);
  };

  return (
    <div className="main-page">
      <Logo className="logo" />
      <DateToday />
      <Button onClick={handleModal} className="button" type="primary">
        <img src="/Plus.svg" alt="" />
        <span>생각났어?</span>
      </Button>

      <div className="status-group">
        <Status count={items ? items.length : 0}>모두</Status>
        <Status count={3}>할일</Status>
        <Status count={3}>한일</Status>
        <Status count={3}>보관</Status>
      </div>
      <div className="doit-item-group">
        {items &&
          items.map((item, index) => (
            <DoItItem
              key={index}
              title={item.title}
              subTitle={item.subTitle}
              timeRange={item.timeRange}
              time={item.time}
              onCheckChange={handleCheckChange}
            />
          ))}

        {/* <DoItItem
          title={"끝내주기 숨쉬기"}
          detail={"후하후하ㅏㅏ"}
          timeRange={{ startTime: "09:00", endTime: "12:00" }}
          time={"오전"}
        />
        <DoItItem
          title={"작살나게 밥먹기"}
          detail={"후루루쫩짭"}
          timeRange={{ startTime: "09:00", endTime: "12:00" }}
          time={"오후"}
        /> */}
      </div>
      <TodoModal forwardRef={todoModal} onSave={handleSave} />
    </div>
  );
}

export default Main;
