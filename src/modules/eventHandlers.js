//드래그 앤 드롭 함수
export const handleEventDrop =
  (events, setEvents) =>
  ({ event, start, end }) => {
    const updatedEvents = events.map((existingEvent) =>
      existingEvent.id === event.id
        ? { ...existingEvent, start, end }
        : existingEvent
    );
    setEvents(updatedEvents);
  };

//이벤트 크기 조정 함수
export const handleEventResize =
  (events, setEvents) =>
  ({ event, start, end }) => {
    const updatedEvents = events.map((existingEvent) =>
      existingEvent.id === event.id
        ? { ...existingEvent, start, end }
        : existingEvent
    );
    setEvents(updatedEvents);
  };

//선택된 날짜를 Schedule로 전달
export const handleSelectSlot = (onDateClick) => (date) => {
  onDateClick(date.start);
};
