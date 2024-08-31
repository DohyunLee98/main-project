export const addTodo = (state, setState) => {
  // 칸반 todo 추가
  console.log("칸반 todo 추가", state);
};

export const onKanbanDragEnd = (result, state, setState) => {
  // 칸반 드래그 앤 드랍
  const { destination, source, draggableId } = result;

  if (!destination) {
    // 드랍위치가 잘못되었을 경우
    return;
  }

  const startStatus = state.statuses[source.droppableId];
  const finishStatus = state.statuses[destination.droppableId];

  if (startStatus === finishStatus) {
    // 동일한 Status 드랍 됐을 경우 순서 변경
    const newTodoIds = Array.from(startStatus.todoIds);
    newTodoIds.splice(source.index, 1);
    newTodoIds.splice(destination.index, 0, draggableId);

    const newStatus = {
      ...startStatus,
      todoIds: newTodoIds,
    };

    setState({
      ...state,
      statuses: {
        ...state.statuses,
        [newStatus.id]: newStatus,
      },
    });
    return;
  }

  // 위치 이동 메서드
  const startTodoIds = Array.from(startStatus.todoIds);
  startTodoIds.splice(source.index, 1);
  const newStart = {
    ...startStatus,
    todoIds: startTodoIds,
  };

  const finishTodoIds = Array.from(finishStatus.todoIds);
  finishTodoIds.splice(destination.index, 0, draggableId);
  const newFinish = {
    ...finishStatus,
    todoIds: finishTodoIds,
  };

  setState({
    ...state,
    statuses: {
      ...state.statuses,
      [newStart.id]: newStart,
      [newFinish.id]: newFinish,
    },
  });
};

export const tasksChange = (tasks) => {
  this.setState({ tasks }); // 상태 업데이트
  console.log(tasks);
};

export const progessChange = (task, tasks, progress) => {
  // 작업의 진행정도 변경
  const taskIndex = tasks.findIndex((t) => t.id === task.id);
  tasks[taskIndex].progress = progress;
  return { tasks };
};

export const dateChange = (task, tasks, start, end) => {
  // 작업의 시작날짜, 종료날짜 변경
  const taskIndex = tasks.findIndex((t) => t.id === task.id);
  tasks[taskIndex].start = start;
  tasks[taskIndex].end = end;
  return { tasks: tasks }; // 상태 업데이트
};

export const deleteTask = (task, tasks) => {
  const confirmDelete = window.confirm(`${task.name}을 삭제하시겠습니까?`);
  if (confirmDelete) {
    const newTasks = tasks.filter((t) => t.id !== task.id);
    return { tasks: newTasks };
  }
  return { tasks };
};

export const addTask = () => {
  console.log("간트차트 Task 추가");
};
