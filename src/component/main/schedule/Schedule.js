import { useEffect, useState } from "react";
import AddBtn from "./AddBtn";
import Calendar from "./Calendar";
import AddScheduleModal from "./AddScheduleModal";
import axios from "axios";
import TodoTemplate from "./Todo/TodoTemplate";
import TodoList from "./Todo/TodoList";

const Schedule = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setSelectedDate(null);
    setModalOpen(true);
  };

  const addEvent = (newEvent) => {
    setEvents([...events, { ...newEvent }]);
  };

  //날짜 클릭 함수
  const handleDateClick = (date) => {
    setSelectedDate(date);
    console.log(date);
  };

  // 해당 날짜에 맞게 To-Do 항목 필터링
  const filteredTodos = selectedDate
    ? events.filter((event) => {
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
        const month = String(selectedDate.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 1을 더해줌
        const day = String(selectedDate.getDate()).padStart(2, "0"); // 일
        // YYYY-MM-DD 형식으로 변환
        const currentSelectedDate = `${year}-${month}-${day}`;
        return (
          startDate <= currentSelectedDate && currentSelectedDate <= endDate
        );
      })
    : [];

  /*
  const fetchEvents = () => {
    axios.get('/api/events')
      .then(response => setEvents(response.data))
      .catch(error => console.error('Error fetching events:', error));
  };
  */

  /*
  const addEvent = (newEvent) => {
    axios.post("/api/events", newEvent)
      .then((response) => setEvents([...events, response.data]))
      .catch((error) => console.error("Error adding event:", error));
  };
*/

  /*
  const updateEvent = (eventId, updatedEvent) => {
    axios.put(`/api/events/${eventId}`, updatedEvent)
      .then(response => {
        console.log('Event updated:', response.data);
      })
      .catch(error => {
        console.error('There was an error updating the event:', error);
      });
  };
*/

  /*
  const deleteEvent = (eventId) => {
    axios.delete(`/api/events/${eventId}`)
      .then(() => setEvents(events.filter(event => event.id !== eventId)))
      .catch((error) => console.error("Error deleting event:", error));
  };
*/

  return (
    <div>
      <h2>●일정</h2>
      <AddBtn onClick={openModal} />
      <hr />
      <Calendar
        events={events}
        setEvents={setEvents}
        onDateClick={handleDateClick}
      />
      <TodoTemplate />
      {filteredTodos.length > 0 ? (
        <TodoList todos={filteredTodos} setTodos={setEvents} />
      ) : (
        <p>아직 일정이 없습니다.</p>
      )}
      <AddScheduleModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        addEvent={addEvent}
        defaultDate={selectedDate}
      />
    </div>
  );
};

export default Schedule;
