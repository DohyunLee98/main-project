import React from "react";

function TodoTemplate({ children }) {
  return (
    <div
      style={{
        width: "100%",
        marginTop: "20px",
        padding: "20px",
        border: "1px solid #ccc",
      }}
    >
      <h1 style={{ textAlign: "center" }}>To-Do List</h1>
      <div>{children}</div>
    </div>
  );
}

export default TodoTemplate;
