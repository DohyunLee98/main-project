import { useState } from "react";
import Calendar from "../../common/Calendar";
import GanttChart from "../../common/Gantt";
import AddTaskModal from "./AddTaskModal";
import Kanban from "./Kanban";
import AddBtn from "../../common/AddBtn";
import {
  openModal,
  addEvent,
  handleDateClick,
} from "../../../modules/scheduleUtils";
import { fetchTaskWithTodos } from "../../../modules/taskUtils";
import "../../../styles/ProjectSchedule.css";

const Schedule = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  //Task 클릭 함수
  const handleTaskClick = async (taskId) => {
    try {
      const taskWithTodos = await fetchTaskWithTodos(taskId);
      if (taskWithTodos) {
        setSelectedTask(taskWithTodos); // 선택된 Task와 그에 관련된 To-Do 목록을 상태로 설정
      }
    } catch (error) {
      console.error("Failed to fetch task with todos", error);
    }
  };

  // Task 추가 함수
  const addTask = (newTask) => {
    setEvents([...events, newTask]);
  };

  return (
    <div className="schedule-container">
      <div className="calendar-kanban-container">
        <div className="calendar-container">
          <Calendar
            events={events}
            setEvents={setEvents}
            onDateClick={handleDateClick(setSelectedDate)}
            onTaskClick={handleTaskClick}
          />
        </div>
        <div className="kanban-gantt-container">
          <Kanban task={selectedTask} />
          <GanttChart />
        </div>
      </div>
      <AddBtn onClick={openModal(setModalOpen, setSelectedDate)} />
      <AddTaskModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        addTask={addTask}
        addEvent={addEvent(events, setEvents)}
        defaultDate={selectedDate}
      />
    </div>
  );
};

export default Schedule;
