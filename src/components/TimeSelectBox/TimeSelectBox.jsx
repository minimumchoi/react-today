import { useRef, useEffect } from "react";
import "./TimeSelectBox.scss";
import { useState } from "react";

function TimeSelectBox({ selectedItem, onTimeChange }) {
  const optionList = useRef(null);
  const label = useRef(null);

  const handleButton = () => {
    optionList.current.classList.add("active");
  };

  useEffect(() => {
    const optionItems = optionList.current.children;
    const optionItemList = [...optionItems];
    optionItemList[0].classList.add("selected");

    const handleSelect = (item) => {
      // 선택된 항목을 첫 번째로 변경
      optionItemList[0].textContent = item.textContent;
      optionItemList[0].classList.add("selected");

      label.current.textContent = item.textContent;
      const selectedLabel = label.current.textContent;

      onTimeChange(selectedLabel);

      optionList.current.classList.remove("active");
    };

    optionItemList.forEach((option) => {
      option.addEventListener("click", () => handleSelect(option));
    });
  }, []);

  return (
    <div className="time-select ">
      <button onClick={handleButton} label="label" type="button">
        <span ref={label}>오전</span>
        <img src="/public/arrowDown.svg"></img>
      </button>
      <ul ref={optionList} className="option-list">
        <li className="optionItem">{selectedItem}</li>
        <li className="optionItem">오전</li>
        <li className="optionItem">오후</li>
      </ul>
    </div>
  );
}

export default TimeSelectBox;
