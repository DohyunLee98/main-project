import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList({ todos, setTodos }) {
  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const updateEvent = (updatedEvent) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === updatedEvent.id ? updatedEvent : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      {todos.map((todo, index) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          toggleTodo={() => toggleTodo(todo.id)} //체크박스 클릭 시 완료 상태 변경
          deleteTodo={() => deleteTodo(todo.id)} //삭제 버튼 클릭 시 해당 항목만 삭제
          updateEvent={updateEvent}
        />
      ))}
    </div>
  );
}

export default TodoList;
