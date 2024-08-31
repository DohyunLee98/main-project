import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { onKanbanDragEnd } from "../../../modules/project"; // 모듈에서 onDragEnd 함수 가져오기
import { addTodoToTask } from "../../../modules/taskUtils";
import "../../../styles/Kanban.css";
import Btn from "../../common/Btn";

function Kanban({ selectedTask, setSelectedTask }) {
  // 칸반 상태 초기화
  const [state, setState] = useState({
    todos: selectedTask?.todos || {},
    statuses: {
      "status-1": {
        id: "status-1",
        status: "시작 전",
        todoIds: [],
      },
      "status-2": {
        id: "status-2",
        status: "진행 중",
        todoIds: [],
      },
      "status-3": {
        id: "status-3",
        status: "완료",
        todoIds: [],
      },
    },
    statusOrder: ["status-1", "status-2", "status-3"],
  });

  const handleAddTodo = async () => {
    const newTodo = await addTodoToTask(selectedTask.id); // 서버에 새로운 Todo 생성 요청
    const updatedTask = {
      ...selectedTask,
      todos: [...selectedTask.todos, newTodo],
    };

    setSelectedTask(updatedTask); // Task에 새로운 Todo 추가
  };

  return (
    <div>
      <DragDropContext
        onDragEnd={(result) => onKanbanDragEnd(result, state, setState)}
      >
        {state.statusOrder.map((statusId) => {
          // statusId를 이용해 status 배열을 화면에 표현
          const status = state.statuses[statusId];
          const todos = status.todoIds.map((todoId) => state.todos[todoId]); // todosIds를 이용해 todo를 칸반에 표현

          return (
            // 드롭 가능한 영역을 지정, key : 필요한 항목의 한해서 리렌더링 하기 위함
            <Droppable droppableId={status.id} key={status.id}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="container"
                >
                  <h3 className="header" style={{ padding: "8px" }}>
                    {status.status}
                  </h3>
                  {todos.map((todo, index) => (
                    <Draggable
                      key={todo.id}
                      draggableId={todo.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          className="item"
                          onClick={() => {
                            console.log("컬럼 클릭");
                          }}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {todo.title}
                          <button
                            onClick={(event) => {
                              event.stopPropagation();
                              console.log("삭제 : " + todo.id);
                            }}
                          >
                            X
                          </button>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          );
        })}
      </DragDropContext>

      <Btn onClick={handleAddTodo}>추가</Btn>
    </div>
  );
}

export default Kanban;
