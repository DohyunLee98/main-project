//날짜를 Date 객체로 변환
export const convertEventDates = (events) => {
  return events.map((event) => ({
    ...event,
    start: new Date(event.start),
    end: new Date(event.end),
  }));
};

// 커스텀 이벤트 스타일 적용
export const customEventPropGetter = (event) => {
  return {
    style: {
      cursor: "pointer",
    },
  };
};
