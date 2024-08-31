import React, { useState } from "react";
import AddBtn from "../../common/AddBtn";
import TodoTemplate from "./Todo/TodoTemplate";
import TodoList from "./Todo/TodoList";
import Calendar from "../../common/Calendar";
import AddTodoModal from "./AddTodoModal";
import "../../../styles/Schedule.css";
import {
  openModal,
  addEvent,
  handleDateClick,
  filterTodosByDate,
} from "../../../modules/scheduleUtils";

const Schedule = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const filteredTodos = filterTodosByDate(events, selectedDate);

  return (
    <div className="schedule-container">
      {/* 상단 영역: 일정 텍스트와 추가 버튼 */}
      <div className="schedule-header">
        <h2>●일정</h2>
        <AddBtn onClick={openModal(setModalOpen, setSelectedDate)} />
      </div>

      <hr />

      {/* 하단 영역: 캘린더와 To-Do 리스트 */}
      <div className="schedule-content">
        {/* 캘린더 영역 */}
        <div className="schedule-calendar">
          <Calendar
            events={events}
            setEvents={setEvents}
            onDateClick={handleDateClick(setSelectedDate)}
          />
        </div>

        {/* To-Do 리스트 영역 */}
        <div className="schedule-todolist">
          <TodoTemplate>
            {filteredTodos.length > 0 ? (
              <TodoList todos={filteredTodos} setTodos={setEvents} />
            ) : (
              <p>아직 일정이 없습니다.</p>
            )}
          </TodoTemplate>
        </div>
      </div>

      {/* 일정 추가 모달 */}
      <AddTodoModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        addEvent={addEvent(events, setEvents)}
        defaultDate={selectedDate}
      />
    </div>
  );
};

export default Schedule;
