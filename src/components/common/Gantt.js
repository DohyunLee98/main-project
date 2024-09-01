import React, { Component } from "react";
import { FrappeGantt } from "frappe-gantt-react";
import { dateChange, progessChange } from "../../modules/project";
import EditTaskModal from "../project/schedule/EditTaskModal";

class GanttChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "Day", // 초기 viewMode 설정
      tasks: [
        {
          id: "Task 1",
          name: "Task 1",
          start: "2024-09-25",
          end: "2024-09-30",
          progress: 50,
        },
        {
          id: "Task 2",
          name: "Task 2",
          start: "2024-09-28",
          end: "2024-10-05",
          progress: 20.5,
        },
        {
          id: "Task 3",
          name: "Task 3",
          start: "2024-09-01",
          end: "2024-09-10",
          progress: 77.7,
        },
      ],
    };
  }

  openEditModal = (task) => {
    this.setState({
      isModalOpen: true,
      selectedTask: task,
    });
  };

  closeEditModal = () => {
    this.setState({
      isModalOpen: false,
      selectedTask: null,
    });
  };

  handleProgressChange = (task, progress) => {
    const updatedTasks = this.state.tasks.map((t) =>
      t.id === task.id ? { ...t, progress } : t
    );
    this.setState({ tasks: updatedTasks }, () => {
      // 상태가 업데이트된 후에 간트차트를 리렌더링합니다.
      this.setState(progessChange(task, this.state.tasks, progress));
    });
  };

  render() {
    const { tasks, isModalOpen, selectedTask } = this.state;
    return (
      <div
        style={{
          width: "800px",
          height: "400px",
          transform: "scale(1.0)",
          transformOrigin: "top left",
          overflowX: "auto",
        }}
      >
        <FrappeGantt
          tasks={this.state.tasks}
          viewMode={this.state.mode} // mode를 Day로 설정하여 일별로 출력
          onClick={(task) => this.openEditModal(task)}
          onDateChange={(task, start, end) => {
            this.setState(dateChange(task, this.state.tasks, start, end));
          }}
          onProgressChange={(task, progress) => {
            this.setState(progessChange(task, this.state.tasks, progress));
          }}
          onTasksChange={(tasks) => {
            this.setState({ tasks }); // 상태 업데이트
          }}
        />

        {selectedTask && (
          <EditTaskModal
            isOpen={isModalOpen}
            onClose={this.closeEditModal}
            task={selectedTask}
            onSave={(updatedTask) => {
              const updatedTasks = tasks.map((t) =>
                t.id === updatedTask.id ? updatedTask : t
              );
              this.setState({ tasks: updatedTasks, isModalOpen: false });
            }}
          />
        )}
      </div>
    );
  }
}

export default GanttChart;
