import React, { useState } from "react";
import EditTodoModal from "../EditTodoModal";

function TodoListItem({ todo, toggleTodo, deleteTodo, updateEvent }) {
  const [isEditing, setEditing] = useState(false);

  //수정 버튼 누를시
  const handleEditClick = () => {
    setEditing(true);
  };

  //이벤트 수정
  const handleUpdateEvent = (updatedEvent) => {
    updateEvent({ ...updatedEvent, id: todo.id });
    setEditing(false);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
        borderBottom: "1px solid #ccc",
      }}
    >
      <input
        type="checkbox"
        checked={todo.completed ?? false}
        onChange={toggleTodo}
      />
      <span
        style={{
          flex: "1",
          marginLeft: "10px",
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.title}({new Date(todo.start).toLocaleDateString()}~
        {new Date(todo.end).toLocaleDateString()} )
        <button
          onClick={handleEditClick}
          style={{
            background: "none",
            border: "none",
            color: "blue",
            cursor: "pointer",
            marginLeft: "10px",
          }}
        >
          수정
        </button>
      </span>

      <button
        onClick={deleteTodo}
        style={{
          background: "none",
          border: "none",
          color: "red",
          cursor: "pointer",
        }}
      >
        &#x2716;
      </button>

      {/* 수정 모달 */}
      {isEditing && (
        <EditTodoModal
          isOpen={isEditing}
          onClose={() => setEditing(false)}
          event={todo}
          updateEvent={handleUpdateEvent}
        />
      )}
    </div>
  );
}

export default TodoListItem;
