export const formatDate = (date) => {
  if (date instanceof Date) {
    return date.toISOString().split("T")[0];
  }
  return date;
};

export const initializeEvent = (event) => {
  const title = event.title || "";
  const startDate = formatDate(event.start) || "";
  const endDate = formatDate(event.end) || "";
  const status = event.status || "not_started";

  let time = { start: "", end: "" };
  if (event.time) {
    const [start, end] = event.time.split("~");
    time = { start, end };
  }

  return { title, startDate, endDate, time, status };
};

//이벤트 생성 함수
export const handleAddEvent = (
  title,
  startDate,
  endDate,
  time,
  status,
  addEvent,
  onClose
) => {
  if (title.trim() !== "") {
    const newEvent = {
      id: Date.now(),
      title,
      start: startDate,
      end: endDate,
      time: `${time.start}~${time.end}`,
      status,
    };
    addEvent(newEvent);
    onClose();
  }
};

//이벤트 수정 함수
export const handleEditEvent = (
  event,
  updateEvent,
  title,
  startDate,
  endDate,
  time,
  status,
  onClose
) => {
  if (title.trim() !== "") {
    updateEvent({
      ...event,
      title,
      start: startDate,
      end: endDate,
      time: `${time.start}~${time.end}`,
      status,
    });
    onClose();
  }
};
