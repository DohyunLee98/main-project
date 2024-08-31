export const openModal = (setModalOpen, setSelectedDate) => () => {
  setSelectedDate(null);
  setModalOpen(true);
};

export const addEvent = (events, setEvents) => (newEvent) => {
  setEvents([...events, { ...newEvent }]);
};

//날짜 클릭 함수
export const handleDateClick = (setSelectedDate) => (date) => {
  setSelectedDate(date);
  console.log(date);
};

// 해당 날짜에 맞게 Tasks 항목 필터링
export const filterTasksByDate = (events, selectedDate) => {
  if (!selectedDate) return [];

  return events.filter((event) => {
    const startDate =
      typeof event.start === "string"
        ? event.start
        : event.start.toISOString().split("T")[0];
    const endDate =
      typeof event.end === "string"
        ? event.end
        : event.end.toISOString().split("T")[0];
    //연도,월,일 추출
    const year = selectedDate.getFullYear();
    const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
    const day = String(selectedDate.getDate()).padStart(2, "0");
    // YYYY-MM-DD 형식으로 변환
    const currentSelectedDate = `${year}-${month}-${day}`;
    return startDate <= currentSelectedDate && currentSelectedDate <= endDate;
  });
};

// 해당 날짜에 맞게 To-Dos 항목 필터링
export const filterTodosByDate = (events, selectedDate) => {
  if (!selectedDate) return [];

  return events.filter((event) => {
    const startDate =
      typeof event.start === "string"
        ? event.start
        : event.start.toISOString().split("T")[0];
    const endDate =
      typeof event.end === "string"
        ? event.end
        : event.end.toISOString().split("T")[0];

    const year = selectedDate.getFullYear();
    const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
    const day = String(selectedDate.getDate()).padStart(2, "0");

    const currentSelectedDate = `${year}-${month}-${day}`;
    return startDate <= currentSelectedDate && currentSelectedDate <= endDate;
  });
};
