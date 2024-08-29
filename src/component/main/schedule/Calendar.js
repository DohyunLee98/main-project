import React, { useState } from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(BigCalendar);

const Calendar = ({ events, setEvents, onDateClick }) => {
  const [setSelectedEvent] = useState(null);

  //선택된 날짜를 Schedule로 전달
  const handleSelectSlot = (date) => {
    onDateClick(date.start);
  };

  //드래그 앤 드롭 함수
  const handleEventDrop = ({ event, start, end }) => {
    if (moment(event.start).isSame(event.end, "day")) {
      end = start;
    }
    const updatedEvents = events.map((existingEvent) =>
      existingEvent.id === event.id
        ? { ...existingEvent, start, end }
        : existingEvent
    );
    setEvents(updatedEvents);
  };

  // 이벤트 크기 조정 함수
  const handleEventResize = ({ event, start, end }) => {
    const updatedEvents = events.map((existingEvent) =>
      existingEvent.id === event.id
        ? { ...existingEvent, start, end }
        : existingEvent
    );
    setEvents(updatedEvents);
  };

  //날짜를 Date 객체로 변환
  const convertEventDates = (events) => {
    return events.map((event) => ({
      ...event,
      start: new Date(event.start),
      end: new Date(event.end),
    }));
  };

  //커스텀 이벤트 스타일 적용
  const customEventPropGetter = (event) => {
    return {
      style: {
        cursor: "pointer",
      },
    };
  };

  // 이벤트 클릭 함수
  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div style={{ height: "500px" }}>
      <DnDCalendar
        localizer={localizer}
        views={["month"]}
        events={convertEventDates(events)}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable // 날짜 선택 가능하게 설정
        onSelectSlot={handleSelectSlot} //날짜 선택 핸들러
        onSelectEvent={handleSelectEvent} // 이벤트 클릭 시 해당 날짜 처리
        onEventDrop={handleEventDrop}
        onEventResize={handleEventResize}
        resizable
        eventPropGetter={customEventPropGetter} // 모든 이벤트에 클릭 가능 스타일 적용
      />
    </div>
  );
};

export default Calendar;
