import "./DateToday.scss";
function DateToday() {
  const getFormattedDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해야 합니다.
    const day = today.getDate();
    const days = [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ];
    const dayName = days[today.getDay()];

    return `${year}년 ${month}월 ${day}일 (${dayName})`;
  };
  return (
    <h2 className="subtitle">
      <span>우리, 오늘 뭐할까?</span>
      <span>{getFormattedDate()}</span>
    </h2>
  );
}

export default DateToday;
