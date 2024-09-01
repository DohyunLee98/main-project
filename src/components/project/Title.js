import React, { useState } from "react";
import "../../styles/ProjectPage.css";

const EditableField = ({
  value,
  field,
  isEditing,
  onDoubleClick,
  onChange,
  onBlur,
  onKeyDown,
}) => {
  return isEditing === field ? (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      autoFocus
      style={{ textAlign: "center", width: "100%" }}
    />
  ) : (
    <h2
      style={{ textAlign: "center" }}
      onDoubleClick={() => onDoubleClick(field)}
    >
      {value}
    </h2>
  );
};

const Title = (project) => {
  const [title, setTitle] = useState(project.title);
  const [description, setDescription] = useState(project.description);
  const [isEditing, setIsEditing] = useState(null); // 현재 편집 중인 필드

  const handleDoubleClick = (field) => {
    setIsEditing(field);
  };

  const handleChange = (e) => {
    if (isEditing === "title") {
      setTitle(e.target.value);
    } else if (isEditing === "description") {
      setDescription(e.target.value);
    }
    // 수정 요청 위치
  };

  const handleBlur = () => {
    setIsEditing(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleBlur();
    }
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <EditableField
        value={title}
        field="title"
        isEditing={isEditing}
        onDoubleClick={handleDoubleClick}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      />
      <EditableField
        value={description}
        field="description"
        isEditing={isEditing}
        onDoubleClick={handleDoubleClick}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      />
      {/* <h2 style={{ textAlign: "center" }}>{notice}</h2> */}
    </div>
  );
};

export default Title;
